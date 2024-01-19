import { changeContent } from "./pageManager.js";
import { $, $All } from "./simpleDOMF.js";

$All('footer .pageBtn').forEach(el => {
	el.addEventListener('click', e => {
		let page = el.getAttribute("data-page");
		!$("iframe").src.includes(page) && changeContent(page);
	})
})