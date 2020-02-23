export const decodeHtmlCharCodes = (html: string): string => {
	try {
		return html
			.replace(/(&#(\d+);)/g, (_match, _capture, charCode) => {
			return String.fromCharCode(charCode);
		});
	} catch (error) {
		console.error(error);
	}
	return html;
};

export const capitalizeFirstLetter = (input: string | undefined | null): string => {
	if (!input || input.length === 0) {
		return '';
	}
	return input.charAt(0).toUpperCase() + input.slice(1);
};

export function formatCurrency(price: number): string {
	return new Intl.NumberFormat('en-US',  { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }).format(price);
}

export function stringToSlug(str: string): string {
	return str.replace(/ /g, '-').toLowerCase();
}

export function slugToString(slug: string): string {
	return slug.replace(/-/g, ' ').toLowerCase();
}
