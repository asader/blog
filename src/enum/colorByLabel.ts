export enum Label {
	SALE = 'sale',
	HOT = 'hot',
	NEW = 'new',
	NULL = 'NULL',
}

export const ColorByLabel: Record<Label, string> = {
	[Label.SALE]: '#f5a623',
	[Label.HOT]: '#e63d33',
	[Label.NEW]: '#6bba3d',
	[Label.NULL]: '#000',
};
