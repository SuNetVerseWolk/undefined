import { $ } from './simpleDOMF.js'

/**
 * 
 * @param {String} src 
 */
export const changeContent = (src) => {
	const iframe = $('iframe');
	iframe.src = src;
}