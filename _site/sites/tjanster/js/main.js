$(function() {
    "use strict";

    var valj = $('#valj');
    var uppdrag = $('#uppdrag');
    var forfragan = $('#forfragan');
	var radio1 = $('#radio1');
	var radio2 = $('#radio2');
	var vidare = $('#vidare');
	var andra = $('.andra');
	var publicera = $('.publicera');
	var nytjanst = $('#nytjanst');
	var avbrytForm = $('#avbrytForm');
	var overlay = $('#overlay');
	var reselect = $('#reselect');
	var hrefs = $('a');
	var label = $('label');
	var point = $('.point');
	var pointblue = $('.pointblue');
	var firstWrapper = $('.firstWrapper');
	var firstAvatarPopover = $('.firstAvatarPopover');
	var landingVidare = $('#landingVidare');
	var landingPage = $('.landingpage');
	var firstAvatar = $('.firstAvatar');
	var uppdragMissions = $('.uppdragMissions');
	var forfraganMissions = $('.forfraganMissions');
	var toggleAlla = $('#toggleAlla');
	var toggleUppdrag = $('#toggleUppdrag');
	var toggleForfragan = $('#toggleForfragan');
	var sliderRange =  $('#slider-range');
	var sliderRange2 =  $('#slider-range2');
	var amount =  $('#amount');
	var amount2 =  $('#amount2');
	var buyModal =  $('#buyModal');
	var time =  $('#time');
	var koptpage =  $('#koptpage');
	var bekraftaKop =  $('#bekraftaKop');
	var mainContent =  $('#mainContent');
	var hem =  $('#hem');
	var reselectAvbryt =  $('#reselectAvbryt');
	var reselectAndra =  $('#reselectAndra');
	var sneakbutton =  $('#sneakbutton');
	var sneakit =  $('#sneakit');
	var ratestars =  $('#ratestars');
	var upplevelsen =  $('#upplevelsen');
	var publicerabetyg =  $('#publicerabetyg');
	var sharebetyg =  $('#sharebetyg');
	var ordercompleted =  $('#ordercompleted');
	var fliptogame =  $('#fliptogame');
	var profileInfoPage =  $('#profileInfoPage');
	var cardinfo =  $('.cardinfo');
	var kopinte =  $('.kopinte');
	var boxcardprofile =  $('.boxcardprofile');
	var sellerPage =  $('.sellerPage');
	var sellerback =  $('.sellerback');
	var bywho =  $('.bywho');
	var menuitem =  $('.mainmenu a');
	var spela =  $('#spela');
	var spelet =  $('#spelet');
	var bradan =  $('#bradan');
	var kriga =  $('#kriga');
    var spinner = $( ".spinner" ).spinner({ step: 10 });
	var valgorenhetheader =  $('.valgorenhetheader');
	var delavalgorenhetheader =  $('.delavalgorenhetheader');
	var valgorenhetbtnheader =  $('.valgorenhetbtnheader');
	var skickamerguldheader =  $('.skickamerguldheader');
	var valgorenhet =  $('.valgorenhet');
	var delavalgorenhet =  $('.delavalgorenhet');
	var valgorenhetbtn =  $('.valgorenhetbtn');
	var skickamerguld =  $('.skickamerguld');
	var logo =  $('#logo');
	var logobrown =  $('#logobrown');
	var skatter =  $('#skatter');
	var treasures =  $('#treasures');
	var question =  $('.fa-question-circle');
	var animatedtext =  $('.animatedtext');
	var retextit =  $('#retextit');
	var landingAvbryt =  $('#landingAvbryt');
	var socialbtn =  $('.socialbtn');


    landingAvbryt.on('click', function() {
		firstAvatarPopover.toggleClass('hidden');
    });

    animatedtext.on('click', function() {
		animatedtext.toggleClass('hidden');
		retextit.toggleClass('hidden');
    });
    skatter.on('click', function() {
		treasures.toggleClass('hidden');
		mainContent.toggleClass('hidden');
    });

    valgorenhetbtnheader.on('click', function() {
		valgorenhetheader.toggleClass('hidden');
		delavalgorenhetheader.toggleClass('hidden');
    });
    skickamerguldheader.on('click', function() {
		valgorenhetheader.toggleClass('hidden');
		delavalgorenhetheader.toggleClass('hidden');
    });

    valgorenhetbtn.on('click', function() {
		valgorenhet.toggleClass('hidden');
		delavalgorenhet.toggleClass('hidden');
    });
    skickamerguld.on('click', function() {
		valgorenhet.toggleClass('hidden');
		delavalgorenhet.toggleClass('hidden');
    });


	$('.dropdown-menu').click(function(e) {
		e.stopPropagation();
	});

	$(function() {
	  $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('current');
	});

   sliderRange.slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        amount.val( ui.values[ 0 ] + " G - " + ui.values[ 1 ] + " G" );
      }
    });
    amount.val( sliderRange.slider( "values", 0 ) + " G - " +
      sliderRange.slider( "values", 1 ) + " G" ) ;


   sliderRange2.slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        amount2.val( ui.values[ 0 ] + " G - " + ui.values[ 1 ] + " G" );
      }
    });
    amount2.val( sliderRange2.slider( "values", 0 ) + " G - " +
      sliderRange2.slider( "values", 1 ) + " G" ) ;

	function setPage(page) {
        koptpage.toggleClass('hidden', page != 1);
        valj.toggleClass('hidden', page != 2);
        uppdrag.toggleClass('hidden', page != 3);
        forfragan.toggleClass('hidden', page != 4);
		profileInfoPage.toggleClass('hidden', page != 5);
    }
	function setFilter(page) {
        uppdragMissions.toggleClass('hidden', page != 1);
        forfraganMissions.toggleClass('hidden', page != 2);
    }
    toggleAlla.on('click', function() {
		uppdragMissions.removeClass('hidden');
		forfraganMissions.removeClass('hidden');
    });
    toggleUppdrag.on('click', function() {
        setFilter(1);
    });
    toggleForfragan.on('click', function() {
        setFilter(2);
    });


    firstWrapper.on('click', function() {
		firstAvatarPopover.toggleClass('hidden');
    });
	socialbtn.on('click', function() {
		landingPage.addClass('hidden');
		mainContent.removeClass('hidden');
    });

    bekraftaKop.on('click', function() {
        setPage(1);
		buyModal.modal('hide');
		mainContent.toggleClass('hidden');
    });
    kopinte.on('click', function() {
		mainContent.toggleClass('hidden');
		profileInfoPage.toggleClass('hidden');
    });
    bywho.on('click', function() {
		profileInfoPage.toggleClass('hidden');
		sellerPage.toggleClass('hidden');
    });
    sellerback.on('click', function() {
		mainContent.toggleClass('hidden');
		sellerPage.toggleClass('hidden');
    });
    overlay.on('click', function() {
        setPage(1);
		overlay.toggleClass('hidden');
		koptpage.toggleClass('hidden');
    });
    nytjanst.on('click', function() {
        setPage(2);
		overlay.toggleClass('hidden');
    });
    andra.on('click', function() {
		reselect.toggleClass('hidden');
    });
	reselectAndra.on('click', function() {
		reselect.toggleClass('hidden');
    });
	reselectAvbryt.on('click', function() {
		reselect.toggleClass('hidden');
    });
    publicera.on('click', function() {
        setPage(1);
		overlay.toggleClass('hidden');
    });
    avbrytForm.on('click', function() {
        setPage(1);
		overlay.addClass('hidden');
		koptpage.addClass('hidden');
		mainContent.removeClass('hidden');
    });
	vidare.click(function(){
        setPage(3);
		mainContent.addClass('hidden');
		overlay.addClass('hidden');
		koptpage.addClass('hidden');
	});
	spela.click(function(){
		mainContent.toggleClass('hidden');
		spelet.toggleClass('hidden');
		logo.toggleClass('hidden');
		logobrown.toggleClass('hidden');
	});
	bradan.click(function(){
		bradan.toggleClass('hidden');
		kriga.toggleClass('hidden');
	});
	kriga.click(function(){
		kriga.toggleClass('hidden');
		bradan.toggleClass('hidden');
	});
    sneakbutton.on('click', function() {
		sneakit.toggleClass('hidden');
    });

    ratestars.on('click', function() {
		upplevelsen.toggleClass('hidden');
    });
    publicerabetyg.on('click', function() {
		sneakit.toggleClass('hidden');
		ordercompleted.toggleClass('hidden');
    });


	fliptogame.tooltip();
	hrefs.tooltip();
	time.tooltip();
	question.tooltip();
	label.tooltip();
	firstAvatar.tooltip();
	point.popover({ trigger: "hover" });
	pointblue.popover({ trigger: "hover" });
	buyModal.modal('hide');
	sharebetyg.modal('hide');

});
