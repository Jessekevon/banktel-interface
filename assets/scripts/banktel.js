
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

    $(window).load(function(){
        $('.loading').delay(800).fadeOut(function(){$(this).remove()});
    });

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

    // 'Collapse Menu' button in menu toggles menu in and out

    $('.menu-collapse').on('click', function () {
        $('.menu').toggleClass('expanded');
    });

    // 'Icons' in collapsed menu toggles the menu in and out

    $('i.icon-trigger').on('click', function () {
        $('.menu').toggleClass('expanded');
    });

    // 'Collapse Menu' button in menu toggles the arrow icon direction

    $('.menu-collapse').on('click', function () {
        $(this).toggleClass('rotator');
    });

    // 'Icons' in collapsed menu toggles the arrow icon direction

    $('i.icon-trigger').on('click', function () {
        $('.menu-collapse').toggleClass('rotator');
    });

    // 'Collapse Menu' button in menu toggles the icon animation

    $('.menu-collapse').on('click', function () {
        $('#logo').toggleClass('new-icon');
    });

    // 'Icons' in collapsed menu toggles the icon animation

    $('i.icon-trigger').on('click', function () {
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
    // Initialize Custom Scrollbar
    $(".app-content").mCustomScrollbar({theme:"minimal", scrollInertia: 100});
    $(".options").mCustomScrollbar({theme:"minimal", scrollInertia: 100});
    $(".modal").mCustomScrollbar({theme:"minimal", scrollInertia: 100});
    // $(".chosen-results").mCustomScrollbar({theme:"minimal", scrollInertia: 100});
    // $(".modal").mCustomScrollbar({theme:"minimal", scrollInertia: 100});

    // Bulk select http://www.sanwebe.com/2014/01/how-to-select-all-deselect-checkboxes-jquery
    
    $(document).ready(function() {
    // Top Bulk Select (Result) on Check Review Page
        $('#selectall').click(function(event) {  //on click 
            if(this.checked) { // check select status
                $('.checkbox1, .checkbox2').each(function() { //loop through each checkbox
                    this.checked = true;  //select all checkboxes with class "checkbox1"               
                });
            }else{
                $('.checkbox1, .checkbox2').each(function() { //loop through each checkbox
                    this.checked = false; //deselect all checkboxes with class "checkbox1"                       
                });         
            }
        });
    // Bottom Bulk Select on Check Review Page
        $('#selectall2').click(function(event) {  //on click 
            if(this.checked) { // check select status
                $('.checkbox1, .checkbox3').each(function() { //loop through each checkbox
                    this.checked = true;  //select all checkboxes with class "checkbox1"               
                });
            }else{
                $('.checkbox1, .checkbox3').each(function() { //loop through each checkbox
                    this.checked = false; //deselect all checkboxes with class "checkbox1"                       
                });         
            }
        });
    // CheckBox Bulk Select on Accounts Payable Drawer
    $('#selectall_drawer').click(function(event) {  //on click 
        if(this.checked) { // check select status
            $('.checkbox_main_1').each(function() { //loop through each checkbox
                this.checked = true;  //select all checkboxes with class "checkbox1"               
            });
        }else{
            $('.checkbox_main_1').each(function() { //loop through each checkbox
                this.checked = false; //deselect all checkboxes with class "checkbox1"                       
            });         
        }
    });

    // CheckBox Bulk Select on Accounts Receivable Drawer
    $('#selectall_drawer_2').click(function(event) {  //on click 
        if(this.checked) { // check select status
            $('.checkbox_main_2').each(function() { //loop through each checkbox
                this.checked = true;  //select all checkboxes with class "checkbox1"               
            });
        }else{
            $('.checkbox_main_2').each(function() { //loop through each checkbox
                this.checked = false; //deselect all checkboxes with class "checkbox1"                       
            });         
        }
    });

    // CheckBox Bulk Select on General Ledger Drawer
    $('#selectall_drawer_3').click(function(event) {  //on click 
        if(this.checked) { // check select status
            $('.checkbox_main_3').each(function() { //loop through each checkbox
                this.checked = true;  //select all checkboxes with class "checkbox1"               
            });
        }else{
            $('.checkbox_main_3').each(function() { //loop through each checkbox
                this.checked = false; //deselect all checkboxes with class "checkbox1"                       
            });         
        }
    });

    // CheckBox Bulk Select on Inventory Drawer
    $('#selectall_drawer_4').click(function(event) {  //on click 
        if(this.checked) { // check select status
            $('.checkbox_main_4').each(function() { //loop through each checkbox
                this.checked = true;  //select all checkboxes with class "checkbox1"               
            });
        }else{
            $('.checkbox_main_4').each(function() { //loop through each checkbox
                this.checked = false; //deselect all checkboxes with class "checkbox1"                       
            });         
        }
    });

    // CheckBox Bulk Select on Main Category Drawer
    $('#selectall_drawer_5').click(function(event) {  //on click 
        if(this.checked) { // check select status
            $('.checkbox_main_5').each(function() { //loop through each checkbox
                this.checked = true;  //select all checkboxes with class "checkbox1"               
            });
        }else{
            $('.checkbox_main_5').each(function() { //loop through each checkbox
                this.checked = false; //deselect all checkboxes with class "checkbox1"                       
            });         
        }
    });

    // CheckBox Bulk Select on Report Drawer
    $('#selectall_drawer_6').click(function(event) {  //on click 
        if(this.checked) { // check select status
            $('.checkbox_main_6').each(function() { //loop through each checkbox
                this.checked = true;  //select all checkboxes with class "checkbox1"               
            });
        }else{
            $('.checkbox_main_6').each(function() { //loop through each checkbox
                this.checked = false; //deselect all checkboxes with class "checkbox1"                       
            });         
        }
    });

    // CheckBox Bulk Select on Sales Order Drawer
    $('#selectall_drawer_7').click(function(event) {  //on click 
        if(this.checked) { // check select status
            $('.checkbox_main_7').each(function() { //loop through each checkbox
                this.checked = true;  //select all checkboxes with class "checkbox1"               
            });
        }else{
            $('.checkbox_main_7').each(function() { //loop through each checkbox
                this.checked = false; //deselect all checkboxes with class "checkbox1"                       
            });         
        }
    });

    // CheckBox Bulk Select on System Drawer
    $('#selectall_drawer_8').click(function(event) {  //on click 
        if(this.checked) { // check select status
            $('.checkbox_main_8').each(function() { //loop through each checkbox
                this.checked = true;  //select all checkboxes with class "checkbox1"               
            });
        }else{
            $('.checkbox_main_8').each(function() { //loop through each checkbox
                this.checked = false; //deselect all checkboxes with class "checkbox1"                       
            });         
        }
    });

    // CheckBox Bulk Select on Setup Drawer
    $('#selectall_drawer_9').click(function(event) {  //on click 
        if(this.checked) { // check select status
            $('.checkbox_main_9').each(function() { //loop through each checkbox
                this.checked = true;  //select all checkboxes with class "checkbox1"               
            });
        }else{
            $('.checkbox_main_9').each(function() { //loop through each checkbox
                this.checked = false; //deselect all checkboxes with class "checkbox1"                       
            });         
        }
    });

    // CheckBox Bulk Select on User Management Drawer
    $('#selectall_drawer_10').click(function(event) {  //on click 
        if(this.checked) { // check select status
            $('.checkbox_main_10').each(function() { //loop through each checkbox
                this.checked = true;  //select all checkboxes with class "checkbox1"               
            });
        }else{
            $('.checkbox_main_10').each(function() { //loop through each checkbox
                this.checked = false; //deselect all checkboxes with class "checkbox1"                       
            });         
        }
    });

});

    // Change width of pdf modal on click

    $('.btn.btn-primary.step.big-modal').on('click', function () {
        $('.modal-content').addClass('add-it');

    });

    $('.btn.btn-primary.remove-big-modal').on('click', function () {
        $('.modal-content').removeClass('add-it');

    });

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


