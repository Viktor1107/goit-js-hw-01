function getElementWidth(content, padding, border) {
	const contentPx = parseFloat(content);
	const paddingPx = parseFloat(padding);
	const borderPx = parseFloat(border);
  return contentPx + paddingPx * 2 + borderPx * 2;
}
