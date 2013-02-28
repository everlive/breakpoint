/*global Modernizr:true */

// Box sizing
// =============================================================================

if (Modernizr.boxsizing !== null && Modernizr.boxsizing === false) {

    $.fn.boxSizeIE7 = function() {
        this.each(function() {
            var $this = $(this),
                elem_width = $this.width();
            $this.width(elem_width - ($this.outerWidth() - elem_width));
        });
    };

    // add more selectors here for box sizing fixes
    $('.grid__cell').boxSizeIE7();
}


// Console helper for older browsers
// =============================================================================

(function() {
    var noop = function noop() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = window.console || {};

    while (length--) {
        // Only stub undefined methods.
        console[methods[length]] = console[methods[length]] || noop;
    }
}());