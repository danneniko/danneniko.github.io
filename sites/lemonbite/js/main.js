// Fire fire fire
$(function () {

// Mobile navbar
    var breakpoint = 768;
    var $menu = $('#menu');
    $menu.find('li, a').on('click', function () {
        if ($(window).width() < breakpoint) $menu.addClass('hidden');
    });
    if ($(window).width() >= breakpoint) $menu.removeClass('hidden');

    $(window).on('resize', function () {
        if ($(this).width() >= breakpoint && $menu.is('.hidden')) {
            $menu.removeClass('hidden');
        }
    });

    $('#togglewrapper').on('click', function (e) {
        e.preventDefault();
        $menu.toggleClass('hidden');
    });

    // Big browser
    if ($(window).width() >= breakpoint) {
        $.ajaxSetup({
            cache: true
        });
        
        $.getScript('js/vendor/jquery.sticky.js');
    }

    // Sticky
    $(window).scroll(function () {
        if ($(window).width() < breakpoint || $(window).scrollTop() <= 20) {
            $('.navbar').removeClass('sticky');
        } else {
            $('.navbar').addClass('sticky');
        }
    });

    // Smooth Scrolling    
    $('.scroller').click(function (ev) {
        var section_name = $(this).data("section");
        if (section_name) {
            var section = $(section_name);
            var top = section.offset().top - 82;
            $("html, body").animate({
                scrollTop: top
            }, 850);
            ev.preventDefault();
            ev.stopPropagation();
        }
    });

    // Highlight active menu buttons
    (function () {
        var section_pos = [];
        var menu_items = $("#menu .scroller");
        var section_pos_cache = {
            upd: null
        };

        var rebuild_section_pos = function () {
            section_pos.splice(0, section_pos.length);
            menu_items.each(function (k, v) {
                var section_name = $(v).data("section");
                if (section_name) {
                    var section = $(section_name);
                    var pos = section.position();
                    var entry = {
                        menuitem: $(v),
                        section: section,
                        top: pos.top
                    };
                    section_pos.push(entry);
                }
            });
            section_pos_cache.upd = new Date();
        };
        rebuild_section_pos();

        // Sort in reverse order
        section_pos = section_pos.sort(function (a, b) {
            return a.top - b.top;
        });

        var win = $(window);
        var doc = $(document);
        var scroll_handler = function () {
            var scrollPos = doc.scrollTop() + 160;

            var now = new Date();
            if (now - section_pos_cache.upd > 2000) {
                rebuild_section_pos();
            }
            menu_items.removeClass('positionhighlight');
            for (var srch = 0; srch < section_pos.length; ++srch) {
                if (scrollPos < section_pos[srch].top) break;
            }
            if (srch > 0) {
                section_pos[srch - 1].menuitem.addClass('positionhighlight');
            }
        };
        win.on('scroll', scroll_handler);
        scroll_handler();
    })();




    
// Contact form tweaks
$(function() {
    var kontakt = $("#kontakt");
    var kontakt_form = kontakt.find('form');
    var ignore_submit = false;
    var formular = $("#formular");

    var kontakt_fields = kontakt_form.find("input, textarea, select");
    var kontakt_inputs = kontakt_fields.not('input[type="button"], input[type="submit"]');

    formular.find('a').on('click', function() {
        // hide success, show form
        formular.hide();
        kontakt_form.fadeIn("slow");
        kontakt_inputs.val('');
    });
    
    // Clear input fields on refresh
    kontakt_inputs.val('');
    
    var change_handlers_hooked = false;
    
    kontakt_form.on('submit', function(ev) {
        ev.preventDefault();
        
        if (ignore_submit) {
            return;
        }
        
        var data = { jsclient: 1 };
        var update_glow = function(field,glow) {
            if (glow) {
                field.addClass('errorglow');
            } else {
                field.removeClass('errorglow');
            }
        };
        var trim_field = function(txt) {
            return txt.match(/^\s*(.*?)\s*$/)[1];
        };
        
        var any_invalid = false;
        kontakt_fields.each(function(k,v) {
            var field = $(v);
            var field_name = field.attr("name");
            var field_val = trim_field(field.val());
            if (field_name) {
                data[field_name] = field_val;
            }
            var is_invalid = (field_val === '');
            update_glow(field, is_invalid);
            any_invalid = any_invalid || is_invalid;
            
            if (!change_handlers_hooked) {
                field.on('keyup change', function() {
                    field_val = trim_field(field.val());
                    var field_empty = (field_val === '');
                    update_glow(field, field_empty);
                });
            }
        });
        change_handlers_hooked = true;
        
        if (any_invalid) {
            return;
        }
        
        var submit_addr = kontakt_form.attr("action") || '';
        var submit_type = kontakt_form.attr("method") || 'GET';
        ignore_submit = true;
        $.ajax({
            url: submit_addr,
            type: submit_type,
            data: data,
            dataType: 'json',
            complete: function(response,status,xhr) {
                ignore_submit = false;
                if (status == 'success') {
                    response.done(function(responsedata) {
                        if (responsedata.ok) {
                            // hide form, show success
                            kontakt_form.hide();
                            formular.fadeIn(1500);
                        } else {
                            var problems = responsedata.problems;
                            if (problems.bademail) {
                                update_glow(kontakt_form.find('input[name="email"]'), true);
                            } else {
                                var error_message = [];
                                for (var problem in problems) {
                                    error_message.push(problems[problem]);
                                }
                                alert(error_message.join("\n"));
                            }
                        }
                    });
                } else {
                    alert("Fel har inträffat, vänligen försök igen");
                }
           }
        });
    });
});
    
});