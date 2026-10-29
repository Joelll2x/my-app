export function slugify(text) {
	return text
		.toLowerCase()
		.replaceAll('ä', 'ae')
		.replaceAll('ö', 'oe')
		.replaceAll('ü', 'ue')
		.replaceAll('ß', 'ss')
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '') // strip any remaining accents
		.replace(/[^a-z0-9]+/g, '-') // everything else becomes a dash
		.replace(/^-+|-+$/g, ''); // trim dashes at both ends
}