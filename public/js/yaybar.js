/*!
 * Name: RootUI - Dashboards and Administration areas for React + Redux and HTML
 * Version: 1.1.4
 * Author: dexad, nK
 * Website: https://nkdev.info/
 * Purchase: https://themeforest.net/user/_nk/portfolio
 * Support: https://nk.ticksy.com/
 * License: You must have a valid license purchased only from ThemeForest (the above link) in order to legally use the theme for your project.
 * Copyright 2021.
 */!function(n){var e={};function t(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return n[o].call(s.exports,s,s.exports,t),s.l=!0,s.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var s in n)t.d(o,s,function(e){return n[e]}.bind(null,s));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=2)}([,,function(n,e,t){"use strict";t.r(e);t(3)},function(n,e,t){t(4)(t(5))},function(n,e){n.exports=function(n){function e(n){"undefined"!=typeof console&&(console.error||console.log)("[Script Loader]",n)}try{"undefined"!=typeof execScript&&"undefined"!=typeof attachEvent&&"undefined"==typeof addEventListener?execScript(n):"undefined"!=typeof eval?eval.call(null,n):e("EvalError: No eval function available")}catch(n){e(n)}}},function(n,e){n.exports="/* eslint-disable */\n/*!-----------------------------------------------------------------\n    Name: Yaybar - Advanced Sidebar for Bootstrap\n    Version: 2.0.1\n    Author: nK,\n    Website: https://nkdev.info/\n    Purchase: https://codecanyon.net/item/yay-advanced-sidebar-for-bootstrap/10702487?ref=_nK\n    Support: https://nk.ticksy.com/\n    License: You must have a valid license purchased only from CodeCanyon (the above link) in order to legally use the plugin for your project.\n    Copyright 2019.\n-------------------------------------------------------------------*/\n/******/ ( function( modules ) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tconst installedModules = {};\n    /******/\n    /******/ \t// The require function\n    /******/ \tfunction __webpack_require__( moduleId ) {\n        /******/\n        /******/ \t\t// Check if module is in cache\n        /******/ \t\tif ( installedModules[ moduleId ] ) {\n            /******/ \t\t\treturn installedModules[ moduleId ].exports;\n            /******/ \t\t}\n        /******/ \t\t// Create a new module (and put it into the cache)\n        /******/ \t\tconst module = installedModules[ moduleId ] = {\n            /******/ \t\t\ti: moduleId,\n            /******/ \t\t\tl: false,\n            /******/ \t\t\texports: {},\n            /******/ \t\t};\n        /******/\n        /******/ \t\t// Execute the module function\n        /******/ \t\tmodules[ moduleId ].call( module.exports, module, module.exports, __webpack_require__ );\n        /******/\n        /******/ \t\t// Flag the module as loaded\n        /******/ \t\tmodule.l = true;\n        /******/\n        /******/ \t\t// Return the exports of the module\n        /******/ \t\treturn module.exports;\n        /******/ \t}\n    /******/\n    /******/\n    /******/ \t// expose the modules object (__webpack_modules__)\n    /******/ \t__webpack_require__.m = modules;\n    /******/\n    /******/ \t// expose the module cache\n    /******/ \t__webpack_require__.c = installedModules;\n    /******/\n    /******/ \t// define getter function for harmony exports\n    /******/ \t__webpack_require__.d = function( exports, name, getter ) {\n        /******/ \t\tif ( ! __webpack_require__.o( exports, name ) ) {\n            /******/ \t\t\tObject.defineProperty( exports, name, {\n                /******/ \t\t\t\tconfigurable: false,\n                /******/ \t\t\t\tenumerable: true,\n                /******/ \t\t\t\tget: getter,\n                /******/ \t\t\t} );\n            /******/ \t\t}\n        /******/ \t};\n    /******/\n    /******/ \t// getDefaultExport function for compatibility with non-harmony modules\n    /******/ \t__webpack_require__.n = function( module ) {\n        /******/ \t\tconst getter = module && module.__esModule ?\n        /******/ \t\t\tfunction getDefault() {\n                return module.default;\n            } :\n        /******/ \t\t\tfunction getModuleExports() {\n                return module;\n            };\n        /******/ \t\t__webpack_require__.d( getter, 'a', getter );\n        /******/ \t\treturn getter;\n        /******/ \t};\n    /******/\n    /******/ \t// Object.prototype.hasOwnProperty.call\n    /******/ \t__webpack_require__.o = function( object, property ) {\n        return Object.prototype.hasOwnProperty.call( object, property );\n    };\n    /******/\n    /******/ \t// __webpack_public_path__\n    /******/ \t__webpack_require__.p = '';\n    /******/\n    /******/ \t// Load entry module and return exports\n    /******/ \treturn __webpack_require__( __webpack_require__.s = 5 );\n/******/ }\n/************************************************************************/\n/******/ ( [\n/* 0 */,\n    /* 1 */,\n    /* 2 */,\n    /* 3 */,\n    /* 4 */,\n    /* 5 */\n    /***/ ( function( module, exports, __webpack_require__ ) {\n        module.exports = __webpack_require__( 6 );\n        /***/ } ),\n    /* 6 */\n    /***/ ( function( module, exports, __webpack_require__ ) {\n        'use strict';\n\n        const _createClass = ( function() {\n            function defineProperties( target, props ) {\n                for ( let i = 0; i < props.length; i++ ) {\n                    const descriptor = props[ i ]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ( 'value' in descriptor ) {\n                        descriptor.writable = true;\n                    } Object.defineProperty( target, descriptor.key, descriptor );\n                }\n            } return function( Constructor, protoProps, staticProps ) {\n                if ( protoProps ) {\n                    defineProperties( Constructor.prototype, protoProps );\n                } if ( staticProps ) {\n                    defineProperties( Constructor, staticProps );\n                } return Constructor;\n            };\n        }() );\n\n        const _throttleDebounce = __webpack_require__( 7 );\n\n        const _setOptions2 = __webpack_require__( 8 );\n\n        function _classCallCheck( instance, Constructor ) {\n            if ( ! ( instance instanceof Constructor ) ) {\n                throw new TypeError( 'Cannot call a class as a function' );\n            }\n        }\n\n        const $ = window.jQuery;\n        const $body = $( 'body' );\n        const $html = $( 'html' );\n        const $window = $( window );\n\n        /*------------------------------------------------------------------\n\n  Yaybar Class\n\n-------------------------------------------------------------------*/\n\n        const YAYBAR = ( function() {\n            function YAYBAR() {\n                _classCallCheck( this, YAYBAR );\n\n                const self = this;\n\n                self.windowResize = ( 0, _throttleDebounce.throttle )( 200, self.windowResize );\n            }\n\n            _createClass( YAYBAR, [ {\n                key: 'init',\n                value: function init( $yay ) {\n                    // prt:sc:dm\n\n                    const self = this;\n\n                    self.$yay = $yay;\n                    self.$content = $( self.options.contentSelector );\n                    self.$yayWrap = $yay.find( self.options.menuWrapSelector );\n\n                    if ( ! self.$yayWrap.length ) {\n                        self.$yayWrap = $yay;\n                    }\n\n                    // set true when first time clicked on toggle button\n                    self.changed = false;\n\n                    // init OS\n                    self.initOverlayScrollbars();\n\n                    if ( self.showType() === 'push' && self.isShow() ) {\n                        $html.addClass( self.options.htmlOverflowClass );\n                    }\n\n                    // init events.\n                    self.initEvents();\n\n                    self.windowResize();\n\n                    self.triggerEvent( 'init' );\n\n                    return self;\n                },\n            }, {\n                key: 'initEvents',\n                value: function initEvents() {\n                    const self = this;\n\n                    self.triggerEvent( 'initEvents' );\n\n                    // sidebar toggle\n                    $body.on( 'click.yaybar', self.options.toggleSelector, function( e ) {\n                        e.preventDefault();\n                        e.stopPropagation();\n                        self.toggleYay();\n                    } );\n\n                    // on window resize - set small sidebar\n                    $window.on( 'resize.yaybar', function() {\n                        self.windowResize();\n                    } );\n\n                    // hide sidebar when push content overlay\n                    self.$content.on( 'click.yaybar', function() {\n                        if ( self.isHideOnContentClick() ) {\n                            self.hideYay();\n                        }\n                    } );\n\n                    // toggle sub menus\n                    self.$yay.on( 'click.yaybar', self.options.submenuToggleSelector, function( e ) {\n                        e.preventDefault();\n                        self.toggleSub( $( this ) );\n                    } );\n\n                    // use gestures to show / hide menu\n                    if ( self.options.gestures ) {\n                        let touchStart = 0;\n                        let startPoint = 0; // x position\n                        let endPoint = 0; // x position\n\n                        // on touch start\n                        $window.on( 'touchstart.yaybar', function( e ) {\n                            startPoint = ( e.originalEvent.touches ? e.originalEvent.touches[ 0 ] : e ).pageX;\n                            endPoint = ( e.originalEvent.touches ? e.originalEvent.touches[ 0 ] : e ).pageX;\n                            touchStart = 1;\n                        } );\n\n                        // on swipe start\n                        $window.on( 'touchmove.yaybar', function( e ) {\n                            if ( touchStart ) {\n                                endPoint = ( e.originalEvent.touches ? e.originalEvent.touches[ 0 ] : e ).pageX;\n                            }\n                        } );\n\n                        // on swipe end\n                        $window.on( 'touchend.yaybar', function() {\n                            if ( touchStart ) {\n                                const rtl = $html.hasClass( self.options.rtlClass );\n                                let resultSwipe = startPoint - endPoint;\n\n                                touchStart = 0;\n\n                                // swipe min width 100px\n                                if ( Math.abs( resultSwipe ) < 100 ) {\n                                    return;\n                                }\n\n                                // change values if rtl\n                                if ( rtl ) {\n                                    resultSwipe *= -1;\n                                    startPoint = $window.width() - startPoint;\n                                }\n\n                                // from left to right\n                                if ( resultSwipe < 0 && startPoint < 40 ) {\n                                    // show only when touch started from left corner\n                                    if ( startPoint < 40 ) {\n                                        self.showYay();\n                                    }\n\n                                    // from right to left\n                                } else {\n                                    self.hideYay();\n                                }\n                            }\n                        } );\n                    }\n\n                    self.triggerEvent( 'initedEvents' );\n                },\n            }, {\n                key: 'triggerEvent',\n                value: function triggerEvent( name, data ) {\n                    const self = this;\n\n                    self.$yay.trigger( name + '.yaybar', data );\n                },\n            }, {\n                key: 'destroy',\n                value: function destroy() {\n                    const self = this;\n\n                    // off events\n                    $body.off( '.yaybar' );\n                    $window.off( '.yaybar' );\n                    self.$content.off( '.yaybar' );\n                    self.$yay.off( '.yaybar' );\n\n                    self.triggerEvent( 'destroy' );\n                },\n            }, {\n                key: 'isShow',\n                value: function isShow() {\n                    const self = this;\n                    return ! $body.hasClass( self.options.hideClass );\n                },\n\n                // check show type\n                // eslint-disable-next-line\n\n            }, {\n                key: 'showType',\n                value: function showType() {\n                    const self = this;\n\n                    if ( self.$yay.hasClass( self.options.effectOverlayClass ) ) {\n                        return 'overlay';\n                    }\n                    if ( self.$yay.hasClass( self.options.effectPushClass ) ) {\n                        return 'push';\n                    }\n                    if ( self.$yay.hasClass( self.options.effectShrinkClass ) ) {\n                        return 'shrink';\n                    }\n                },\n\n                // check if hide on content click\n\n            }, {\n                key: 'isHideOnContentClick',\n                value: function isHideOnContentClick() {\n                    const self = this;\n\n                    return self.$yay.hasClass( self.options.overlapContentClass );\n                },\n\n                // check if sidebar static position\n\n            }, {\n                key: 'isStatic',\n                value: function isStatic() {\n                    const self = this;\n\n                    return self.$yay.hasClass( self.options.staticPositionClass );\n                },\n            }, {\n                key: 'toggleYay',\n                value: function toggleYay( type ) {\n                    const self = this;\n                    const show = ! self.isShow();\n\n                    if ( type ) {\n                        if ( type === 'show' && ! show || type === 'hide' && show ) {\n                            return;\n                        }\n                    }\n\n                    self.options.changed = true;\n\n                    if ( show ) {\n                        self.showYay();\n                    } else {\n                        self.hideYay();\n                    }\n                },\n            }, {\n                key: 'showYay',\n                value: function showYay() {\n                    const self = this;\n\n                    $body.removeClass( self.options.hideClass );\n\n                    if ( self.showType() === 'push' /* && !self.isStatic() */ ) {\n                        $html.addClass( self.options.htmlOverflowClass );\n                    }\n\n                    // restore OS on normal sidebar after end animation (300ms)\n                    self.initOverlayScrollbars();\n\n                    self.triggerEvent( 'show' );\n\n                    setTimeout( function() {\n                        // resize for charts reinit\n                        $window.resize();\n\n                        self.triggerEvent( 'showed' );\n                    }, self.options.sidebar_toggle_transition );\n                },\n            }, {\n                key: 'hideYay',\n                value: function hideYay() {\n                    const self = this;\n\n                    $body.addClass( self.options.hideClass );\n\n                    // destroy OS on hidden sidebar\n                    self.destroyOverlayScrollbars();\n\n                    self.triggerEvent( 'hide' );\n\n                    // resize for charts reinit\n                    setTimeout( function() {\n                        if ( self.showType() === 'push' /* && !self.isStatic() */ ) {\n                            $html.removeClass( self.options.htmlOverflowClass );\n                        }\n                        $window.resize();\n\n                        self.triggerEvent( 'hidden' );\n                    }, self.options.sidebar_toggle_transition );\n                },\n\n                // toggle submenu [open or close]\n\n            }, {\n                key: 'toggleSub',\n                value: function toggleSub( toggle ) {\n                    const self = this;\n\n                    const toggleParent = toggle.parent();\n                    const subMenu = toggleParent.children( self.options.submenuSelector );\n                    const opened = toggleParent.hasClass( self.options.submenuOpenClass );\n\n                    if ( ! subMenu.length ) {\n                        return;\n                    }\n\n                    // close\n                    if ( opened ) {\n                        self.closeSub( subMenu );\n\n                        // open\n                    } else {\n                        self.openSub( subMenu, toggleParent );\n                    }\n                },\n\n                // close submenus\n\n            }, {\n                key: 'closeSub',\n                value: function closeSub( subMenu ) {\n                    const self = this;\n\n                    subMenu.css( 'display', 'block' ).stop().slideUp( self.options.dropdown_toggle_transition, 'swing', function() {\n                        // close childs\n                        if ( self.options.closeChilds ) {\n                            subMenu.find( self.options.submenuToggleSelector ).parent().removeClass( self.options.submenuOpenClass );\n                            subMenu.find( self.options.submenuToggleSelector ).next().attr( 'style', '' );\n                        }\n\n                        self.triggerEvent( 'closedSub', [ subMenu ] );\n                    } );\n\n                    subMenu.parent().removeClass( self.options.submenuOpenClass );\n\n                    self.triggerEvent( 'closeSub', [ subMenu ] );\n                },\n\n                // open submenus\n\n            }, {\n                key: 'openSub',\n                value: function openSub( subMenu, toggleParent ) {\n                    const self = this;\n\n                    subMenu.css( 'display', 'none' ).stop().slideDown( self.options.dropdown_toggle_transition, 'swing', function() {\n                        self.triggerEvent( 'openedSub', [ subMenu ] );\n                    } );\n                    toggleParent.addClass( self.options.submenuOpenClass );\n\n                    self.triggerEvent( 'openSub', [ subMenu ] );\n\n                    // close siblings\n                    if ( self.options.closeSiblings ) {\n                        self.closeSub( toggleParent.siblings( '.' + self.options.submenuOpenClass ).children( self.options.submenuSelector ) );\n                    }\n                },\n\n                // on resize window and on start\n\n            }, {\n                key: 'windowResize',\n                value: function windowResize() {\n                    const self = this;\n\n                    // if user currently changed size of sidebar, stop change it\n                    if ( ! self.options.changed ) {\n                        if ( $window.width() < self.options.resizeWnd ) {\n                            self.toggleYay( 'hide' );\n                        }\n                    }\n                },\n            }, {\n                key: 'setOptions',\n                value: function setOptions( newOpts ) {\n                    return _setOptions2.setOptions.call( this, newOpts );\n                },\n            }, {\n                key: 'initOverlayScrollbars',\n                value: function initOverlayScrollbars() {\n                    const self = this;\n\n                    if ( $.fn.overlayScrollbars ) {\n                        self.$yayWrap.overlayScrollbars( {\n                            scrollbars: {\n                                autoHide: 'leave',\n                                autoHideDelay: 400,\n                            },\n                        } );\n\n                        self.triggerEvent( 'initOverlayScrollbars' );\n                    }\n                },\n            }, {\n                key: 'destroyOverlayScrollbars',\n                value: function destroyOverlayScrollbars() {\n                    const self = this;\n\n                    if ( $.fn.overlayScrollbars ) {\n                        const instance = self.$yayWrap.overlayScrollbars();\n\n                        if ( instance ) {\n                            instance.destroy();\n                        }\n\n                        self.triggerEvent( 'destroyOverlayScrollbars' );\n                    }\n                },\n            } ] );\n\n            return YAYBAR;\n        }() );\n\n        window.YAYBAR = YAYBAR;\n        /***/ } ),\n    /* 7 */\n    /***/ ( function( module, exports, __webpack_require__ ) {\n        'use strict';\n\n        Object.defineProperty( exports, '__esModule', {\n            value: true,\n        } );\n        /* eslint-disable no-undefined,no-param-reassign,no-shadow */\n\n        /**\n         * Throttle execution of a function. Especially useful for rate limiting\n         * execution of handlers on events like resize and scroll.\n         *\n         * @param  {number}    delay          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.\n         * @param  {boolean}   [noTrailing]   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the\n         *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time\n         *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,\n         *                                    the internal counter is reset)\n         * @param  {Function}  callback       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,\n         *                                    to `callback` when the throttled-function is executed.\n         * @param  {boolean}   [debounceMode] If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),\n         *                                    schedule `callback` to execute after `delay` ms.\n         *\n         * @return {Function}  A new, throttled, function.\n         */\n        function throttle( delay, noTrailing, callback, debounceMode ) {\n            /*\n   * After wrapper has stopped being called, this timeout ensures that\n   * `callback` is executed at the proper times in `throttle` and `end`\n   * debounce modes.\n   */\n            let timeoutID;\n            let cancelled = false; // Keep track of the last time `callback` was executed.\n\n            let lastExec = 0; // Function to clear existing timeout\n\n            function clearExistingTimeout() {\n                if ( timeoutID ) {\n                    clearTimeout( timeoutID );\n                }\n            } // Function to cancel next exec\n\n            function cancel() {\n                clearExistingTimeout();\n                cancelled = true;\n            } // `noTrailing` defaults to falsy.\n\n            if ( typeof noTrailing !== 'boolean' ) {\n                debounceMode = callback;\n                callback = noTrailing;\n                noTrailing = undefined;\n            }\n            /*\n   * The `wrapper` function encapsulates all of the throttling / debouncing\n   * functionality and when executed will limit the rate at which `callback`\n   * is executed.\n   */\n\n            function wrapper() {\n                const self = this;\n                const elapsed = Date.now() - lastExec;\n                const args = arguments;\n\n                if ( cancelled ) {\n                    return;\n                } // Execute `callback` and update the `lastExec` timestamp.\n\n                function exec() {\n                    lastExec = Date.now();\n                    callback.apply( self, args );\n                }\n                /*\n     * If `debounceMode` is true (at begin) this is used to clear the flag\n     * to allow future `callback` executions.\n     */\n\n                function clear() {\n                    timeoutID = undefined;\n                }\n\n                if ( debounceMode && ! timeoutID ) {\n                    /*\n       * Since `wrapper` is being called for the first time and\n       * `debounceMode` is true (at begin), execute `callback`.\n       */\n                    exec();\n                }\n\n                clearExistingTimeout();\n\n                if ( debounceMode === undefined && elapsed > delay ) {\n                    /*\n       * In throttle mode, if `delay` time has been exceeded, execute\n       * `callback`.\n       */\n                    exec();\n                } else if ( noTrailing !== true ) {\n                    /*\n       * In trailing throttle mode, since `delay` time has not been\n       * exceeded, schedule `callback` to execute `delay` ms after most\n       * recent execution.\n       *\n       * If `debounceMode` is true (at begin), schedule `clear` to execute\n       * after `delay` ms.\n       *\n       * If `debounceMode` is false (at end), schedule `callback` to\n       * execute after `delay` ms.\n       */\n                    timeoutID = setTimeout( debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay );\n                }\n            }\n\n            wrapper.cancel = cancel; // Return the wrapper function.\n\n            return wrapper;\n        }\n\n        /* eslint-disable no-undefined */\n        /**\n         * Debounce execution of a function. Debouncing, unlike throttling,\n         * guarantees that a function is only executed a single time, either at the\n         * very beginning of a series of calls, or at the very end.\n         *\n         * @param  {number}   delay         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.\n         * @param  {boolean}  [atBegin]     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds\n         *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.\n         *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).\n         * @param  {Function} callback      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,\n         *                                  to `callback` when the debounced-function is executed.\n         *\n         * @return {Function} A new, debounced function.\n         */\n\n        function debounce( delay, atBegin, callback ) {\n            return callback === undefined ? throttle( delay, atBegin, false ) : throttle( delay, callback, atBegin !== false );\n        }\n\n        exports.throttle = throttle;\n        exports.debounce = debounce;\n        /***/ } ),\n    /* 8 */\n    /***/ ( function( module, exports, __webpack_require__ ) {\n        'use strict';\n\n        Object.defineProperty( exports, '__esModule', {\n            value: true,\n        } );\n        const $ = window.jQuery;\n\n        /*------------------------------------------------------------------\n\n  Set Custom Options\n\n-------------------------------------------------------------------*/\n        function setOptions( newOpts ) {\n            const self = this;\n\n            self.options = $.extend( {}, self.options, newOpts );\n        }\n\n        exports.setOptions = setOptions;\n        /***/ } ),\n/******/ ] ) );\n"}]);