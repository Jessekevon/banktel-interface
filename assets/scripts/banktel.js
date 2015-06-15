
function clearMenus() {
    $(".menu.expanded .level-up").closest(".level").css("left", "-201px");
}

function showMenu() {
    // Expand menu on larger screens
    if ($(window).width() <= 1280) {
        clearMenus();
        $('.menu').removeClass('expanded');
        $('#logo').addClass('new-icon');

    } else {
        if ($('.menu').hasClass('expanded')) {
            return;
        } else {
            $('.menu').addClass('expanded');
            $('#logo').removeClass('new-icon');
        }
    }
}

(function () {

    'use strict';

    // Inst fancy-select on selects with class '.dropdown'
    $('.dropdown').fancySelect();

    // Inst Datepicker
    $.datepicker.setDefaults({
        dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        inline: true,
        showAnim: "fadeIn",
        showOtherMonths: true
    });
    $('.input-group.date input').datepicker();

    // Inst Sortable Tiers
    $('.draggable-container').sortable({
        axis: 'y',
        cursor: "move",
        items: '.tier',
        handle: ".btn-tier-drag",
        refresh: true,
        zIndex: 1010
    });

    // Remove tier
    $(".draggable-container").on('click', '.btn-tier-remove', function () {
        $(this).closest('.tier').remove();
    });



    $('.menu').on('click', '.menu-collapse', function () {
        $('.menu').toggleClass('expanded');
    });


    $('.menu-collapse').on('click', function () {
        $(this).toggleClass('rotator');
    });


    $('.menu-collapse').on('click', function () {
        $('#logo').toggleClass('new-icon');
    });

    // Menu, downward traversal
    $(document.body).on('click', '.menu.expanded .level-down', function () {
        $(this).next(".level").css("left", "0");
        return false;
    });

    // Menu, upward traversal
    $(document.body).on('click', '.menu.expanded .level-up', function () {
        $(this).closest(".level").css("left", "-201px");
        return false;
    });

    //Swap out control switch text

    $('.track').on('click', function () {
        $('.status').toggleClass('on');
    });

    // $('.accordion-title').on('click', function () {
    //     $(this).toggleClass('is-expanded');
    //     $('.accordion-content').toggleClass('is-expanded');
    //     $('.accordion-content').toggleClass('is-collapsed');
    // });


}());

//uses classList, setAttribute, and querySelectorAll
//if you want this to work in IE8/9 youll need to polyfill these
(function(){
    var d = document,
    accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
    setAria,
    setAccordionAria,
    switchAccordion,
  touchSupported = ('ontouchstart' in window),
  pointerSupported = ('pointerdown' in window);
  
  skipClickDelay = function(e){
    e.preventDefault();
    e.target.click();
  }

        setAriaAttr = function(el, ariaType, newProperty){
        el.setAttribute(ariaType, newProperty);
    };
    setAccordionAria = function(el1, el2, expanded){
        switch(expanded) {
      case "true":
        setAriaAttr(el1, 'aria-expanded', 'true');
        setAriaAttr(el2, 'aria-hidden', 'false');
        break;
      case "false":
        setAriaAttr(el1, 'aria-expanded', 'false');
        setAriaAttr(el2, 'aria-hidden', 'true');
        break;
      default:
                break;
        }
    };
//function
switchAccordion = function(e) {
    e.preventDefault();
    var thisAnswer = e.target.parentNode.nextElementSibling;
    var thisQuestion = e.target;
    if(thisAnswer.classList.contains('is-collapsed')) {
        setAccordionAria(thisQuestion, thisAnswer, 'true');
    } else {
        setAccordionAria(thisQuestion, thisAnswer, 'false');
    }
    thisQuestion.classList.toggle('is-collapsed');
    thisQuestion.classList.toggle('is-expanded');
        thisAnswer.classList.toggle('is-collapsed');
        thisAnswer.classList.toggle('is-expanded');
    
    thisAnswer.classList.toggle('animateIn');
    };
    for (var i=0,len=accordionToggles.length; i<len; i++) {
        if(touchSupported) {
      accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
    }
    if(pointerSupported){
      accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
    }
    accordionToggles[i].addEventListener('click', switchAccordion, false);
  }
})();

//= require bootstrap/affix
//= require bootstrap/alert
//= require bootstrap/button
//= require bootstrap/carousel
//= require bootstrap/collapse
//= require bootstrap/dropdown
//= require bootstrap/tab
//= require bootstrap/transition
//= require bootstrap/scrollspy
//= require bootstrap/modal
//= require bootstrap/tooltip
//= require bootstrap/popover

// Avoid `console` errors in browsers that lack a console.
(function () {
    'use strict';
    var method;
    var noop = function () { };
    var methods = [
      'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
      'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
      'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
      'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.


