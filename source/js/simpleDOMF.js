/**
 * @param {String} selector
 * @returns {Element}
 */
export const $ = (selector) => document.querySelector(selector);
/**
 * @param {String} selector
 * @returns {[Element]}
 */
export const $All = (selector) => document.querySelectorAll(selector);