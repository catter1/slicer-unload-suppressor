// ==UserScript==
// @name         Slicer Unload Suppressor
// @namespace    https://github.com/catter1/slicer-unload-suppressor
// @version      1.0.1
// @description  Suppress Slicer's unload handler, which asks you to confirm you want to leave the site
// @author       catter1
// @match        https://slicer.run/*
// @match        https://www.slicer.run/*
// @run-at       document-start
// @sandbox      MAIN
// @grant        none
// ==/UserScript==

(() => {
    'use strict';

    Object.defineProperty(window, 'onbeforeunload', {
        configurable: true,
        get: () => null,
        set: () => {}
    });
})();