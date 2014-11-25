// Add height: to rows
$(function() {
    "use strict";

    var f433 = [ 3, 3, 4, 1, 7 ],
        f442 = [ 2, 4, 4, 1, 7 ],
        formations = [ f433, f442 ],
        curForm = 0,
        formationPositions = [],
        playerPositions = [],
        playerLookup = [],
        players = $('.player'),
        playerW = players.eq(0).outerWidth(),
        playerH = players.eq(0).outerHeight(),
        rows = ['.attack', '.midfield', '.defense', '.keeper', '.substitutes'],
        playerPadding = 4,
        subsDistance = 105,
        subsPadding = 28,
        subsShowing = false,
        currentFormation = 0,
        dragging,
        changesDiv = $('.changes'),
        changeInterval,
        formationDivs = $('.formations div'),
        matchInterval;


    function initializePlayerLookup() {
        for (var i = 0; i < players.length; ++i) {
            playerLookup[i] = i;
        }
    }

    function animatePlayersIntoPosition() {
        for (var i = 0; i < players.length; ++i) {
            var fieldPos = playerLookup[i];
            var pos = playerPositions[fieldPos];
            var player = players.eq(i);
            if (!player.is(dragging)) {
            	player.stop().animate({left: pos.x, top: pos.y});
            }
            player.toggleClass('gk', fieldPos == 10);
            player.toggleClass('subs', fieldPos > 10);
        }
    }

    function initializeFormation() {
        var fIndex = currentFormation,
            f = formations[fIndex],
        	i, rowIndex = 0, row,
        	rowHeight, rowWidth,
            playersThisRow, paddingThisRow, totalThisRow,
            rowPos,
            x, y;

        playerPositions = [];

        for (rowIndex = 0; rowIndex < f.length; ++rowIndex) {
            row = $(rows[rowIndex]);
        	rowHeight = row.height();
            rowWidth = row.width();
            playersThisRow = f[rowIndex];
            paddingThisRow = playerPadding * (playersThisRow - 1);
            totalThisRow = playersThisRow * playerW + paddingThisRow;
            rowPos = row.position();
            x = Math.floor(rowWidth / 2) - Math.floor(totalThisRow / 2) + rowPos.left;
            y = rowPos.top;

            if (rowIndex >= 4) {
                y += subsPadding;

                if (subsShowing)
                	y -= subsDistance;
            }

            for (var k = 0; k < playersThisRow; ++k, x += playerW + playerPadding) {
                playerPositions.push({x: x, y: y});
            }
        }
    }

    function updateSubsPosition()
    {
		initializeFormation();
        animatePlayersIntoPosition();
        var subdiv = $('.substitutes');
        subdiv.stop().animate({
            "margin-top": (subsShowing ? -subsDistance + "px" : "")
        });
    }

    function showSubCancel(a, b) {
        var al = playerLookup[a],
            bl = playerLookup[b],
            rp, sp;

        // al=a location, bl=b location
        // sp=substitute, rp=removed
        if (al >= 11) {
            rp = a;
            sp = b;
        } else {
            sp = a;
            rp = b;
        }

        $('.playerin').text($('.playername', players.eq(sp)).text());
        $('.playerout').text($('.playername', players.eq(rp)).text());

        changesDiv.fadeIn();

        var countdown = 5,
            counter = $('.counter span', changesDiv);
        counter.text(countdown);
        if (changeInterval !== undefined)
            clearInterval(changeInterval);
        changeInterval = setInterval(function() {
            counter.text(--countdown);
            if (countdown == 0) {
                clearInterval(changeInterval);
                changeInterval = undefined;
                changesDiv.fadeOut();
            }
        }, 1000);

        $('.button', changesDiv).off('click').on('click', function() {
            var tmp = playerLookup[a];
            playerLookup[a] = playerLookup[b];
            playerLookup[b] = tmp;
            animatePlayersIntoPosition();
            changesDiv.fadeOut();
        });
    }

    function setFormation(f) {
        currentFormation = f;
        formationDivs.removeClass('active').addClass('hidden')
        		.eq(f).addClass('active').removeClass('hidden');
		initializeFormation();
        animatePlayersIntoPosition();
    }

    function hideAbort() {
        $('.sliderbtn').animate({left: '0px'});
        $('.logoutpopup').fadeOut();
    };

    initializePlayerLookup();
    initializeFormation(0);
    animatePlayersIntoPosition();

	$('.grass .player, .subs, .gk')
	.draggable({
	    revert:'invalid',
	    revertDuration:0,
        refreshPositions: true
	}).droppable({
	    hoverClass: 'hovering hoveringbot'
	}).on('drop', function(event, ui) {
        dragging = undefined;
	    var src = $(ui.draggable);
	    var hoveringOver = $(this);
	    if (hoveringOver.length > 0) {
            var srcIndex = players.index(src),
                dstIndex = players.index(hoveringOver);
            var tmp = playerLookup[srcIndex];
            playerLookup[srcIndex] = playerLookup[dstIndex];
            playerLookup[dstIndex] = tmp;

            console.log('drop srcIndex', playerLookup[srcIndex]);
            console.log('drop dstIndex', playerLookup[dstIndex]);
            if (playerLookup[srcIndex] >= 11) {
                subsShowing = false;
    	        updateSubsPosition();
	            animatePlayersIntoPosition();
            }

            animatePlayersIntoPosition();

            if ((playerLookup[srcIndex] >= 11) !== (playerLookup[dstIndex] >= 11)) {
                showSubCancel(srcIndex, dstIndex);
            }
	    }
	});
    $('.field').on('dragstart', '.player', function(event, ui) {
        dragging = $(ui.helper);
        dragging.addClass('dragging');
        var srcIndex = players.index(dragging);
        console.log('dragstart srcIndex', playerLookup[srcIndex]);
        if (playerLookup[srcIndex] >= 11) {
        	subsShowing = false;
        	updateSubsPosition();
        	animatePlayersIntoPosition();
        }
    }).on('dragstop', '.player', function(event, ui) {
        $(ui.helper).removeClass('dragging');
        dragging = undefined;
        animatePlayersIntoPosition();
    });
    $('.sliderarrow').droppable({
        accept: function(elem) {
            return !$(elem).hasClass('subs');
        },
        over: function(event, ui) {
            subsShowing = true;
            updateSubsPosition();
            animatePlayersIntoPosition();
        }
    });
	$('.prev').on('click', function() {
        setFormation(1);
	});
	$('.next').on('click', function() {
        setFormation(0);
	});
    $('.sliderarrow').on('click', function() {
        subsShowing = !subsShowing;
        updateSubsPosition();
	});
    $('.intro button').on('click', function() {
        $('.waitmatch, .waitmatchbg').hide().removeClass('hidden').fadeIn();
		matchInterval = setTimeout(function() {
		    matchInterval = undefined;
		    $('.waitmatch').trigger('click');
		}, 7000);
        $('.intro').fadeOut();
    });

    $('.waitmatch').on('click', function() {
        $('.grass').hide().removeClass('hidden').fadeIn();
        $('.waitmatch, .waitmatchbg').fadeOut();
		if (matchInterval !== undefined) {
		    clearTimeout(matchInterval);
		    matchInterval = undefined;
		}
    });
	$('.logout').on('click', function() {
		 if ($('.logoutpopup').is(':visible')) {
		     return;
		 }
	     $('.sliderbtn').animate({left: ($('div.logout').width() - $('.sliderbtn').width()) + 'px'});
	     $('.logoutpopup').hide().removeClass('hidden').fadeIn();
	});
	$('.abort').on('click', function() {
	    hideAbort();
	});
	$('.quit').on('click', function() {
        $('.intro').hide().removeClass('hidden').fadeIn();
	    hideAbort();
	});
});
