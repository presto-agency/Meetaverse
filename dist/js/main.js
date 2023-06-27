"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){var o;if(e)return"string"==typeof e?_arrayLikeToArray(e,t):"Map"===(o="Object"===(o=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:o)||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(e,t):void 0}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o];return r}document.querySelector("#toggleMenu")&&document.querySelector("#mainMenu")&&(toggleMenu=document.querySelector("#toggleMenu"),mainMenu=document.querySelector("#mainMenu"),toggleMenu.addEventListener("click",function(){toggleMenu.classList.contains("active")?(toggleMenu.classList.remove("active"),mainMenu.classList.remove("active"),document.querySelector("body").classList.remove("menu-open")):(toggleMenu.classList.add("active"),mainMenu.classList.add("active"),document.querySelector("body").classList.add("menu-open"))})),document.querySelector('[data-action="toggle"]')&&_toConsumableArray(toggleButtons=document.querySelectorAll('[data-action="toggle"]')).forEach(function(o){o.addEventListener("click",function(){var e=o.getAttribute("data-name"),t=o.getAttribute("data-target");document.querySelector('[data-name="'.concat(e,'"][data-toggle="').concat(t,'"]'))&&(t=document.querySelectorAll('[data-name="'.concat(e,'"][data-toggle="').concat(t,'"]')),_toConsumableArray(document.querySelectorAll('[data-toggle][data-name="'.concat(e,'"]'))).forEach(function(e){e.classList.remove("active")}),_toConsumableArray(t).forEach(function(e){e.classList.add("active")})),_toConsumableArray(toggleButtons).forEach(function(e){e.classList.remove("active")}),o.classList.add("active")})}),document.querySelector(".blockquote-slider")&&tns({container:".blockquote-slider",items:1,slideBy:"page",nav:!1}),document.querySelector(".guides-slider")&&tns({container:".guides-slider",items:3,nav:!0,gutter:80,slideBy:1,controlsPosition:"bottom",navPosition:"bottom",responsive:{0:{items:1,gutter:0},900:{items:2,gutter:40},1200:{items:3,gutter:80}}}),document.querySelector(".logo-slider")&&tns({container:".logo-slider",items:7,loop:!0,controls:!1,nav:!1,gutter:0,mouseDrag:!0,slideBy:1,responsive:{0:{items:3,gutter:0},900:{items:5},1200:{items:7}}}),document.querySelector(".two-items-slider")&&tns({container:".two-items-slider",nav:!1,slideBy:1,responsive:{0:{items:1,gutter:0},920:{items:2,gutter:80}}}),document.querySelector(".cover-slider")&&tns({container:".cover-slider",nav:!1,slideBy:1,controlsContainer:".cover-slider-controls"});var toggleMenu,mainMenu,toggleButtons,spans=Array.from(document.querySelectorAll(".faq-item-title")),addClassToSubmenu=function(e){e.target.parentNode.classList.toggle("active"),e.target.nextElementSibling.classList.toggle("active")};function addClass(){document.querySelector(".popup-video").classList.add("open")}function removeClass(){var e=document.querySelector(".popup-video"),t=document.querySelector(".video");e.classList.remove("open"),t.pause()}spans.forEach(function(e){e.addEventListener("click",addClassToSubmenu)});