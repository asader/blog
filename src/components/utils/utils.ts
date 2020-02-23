import {WcProductAttribute} from '../Shop/ProductListCards';

export enum RootCategory {
	LaserMachines = 'Laser machines',
	FiberMetalCutters = 'Fiber metal cutters',
	LaserMarkers = 'Laser markers',
	MillingMachines = 'Milling machines',
}

export const attributesByCategoryName = {
	[RootCategory.LaserMachines]: ['Laser power', 'Work area', 'Controller', 'Tube life', 'Guides'],
	[RootCategory.FiberMetalCutters]: ['Laser power', 'Work area', 'Laser life', 'Laser', 'Motors'],
	[RootCategory.LaserMarkers]: ['Laser type', 'Laser power', 'Work area', 'Laser life', 'Laser emitter'],
	[RootCategory.MillingMachines]: ['Work area', 'Spindle power', 'Collet', 'Format type', 'Features'],
};

export function getShortListOfAttributes(attributes: WcProductAttribute[], category: RootCategory): WcProductAttribute[] {
	return attributes.filter((attribute) => attributesByCategoryName[category].includes(attribute.name));
}
