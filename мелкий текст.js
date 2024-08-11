function readDOM (el) {
	for (var i = 0; i < el.children.length; i++) {
		readDOM(el.children[i]);
	}
	var computedStyle = getComputedStyle(el);
	var size = parseInt(computedStyle.fontSize);
	if (size < 12) {

		console.log(el,parseInt(computedStyle.fontSize));
	}
}
// Если выполняете не из консоли  необходимо обеспечить
// чтобы вызов функции был после загрузки всей страницы
readDOM (document.body);