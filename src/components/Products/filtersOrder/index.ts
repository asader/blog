import { fiberMetalCutters } from './fiberMetalCutters';
import { laserMachines } from './laserMachines';
import { laserMarkers } from './laserMarkers';
import { millingMachines } from './millingMachines';

export const filtersByCategory = {
	'Fiber metal cutters': fiberMetalCutters,
	'Laser machines': laserMachines,
	'Laser markers': laserMarkers,
	'Milling machines': millingMachines,
};
