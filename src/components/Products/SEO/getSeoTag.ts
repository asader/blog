import { RootCategory } from '../../utils/utils';

export interface SeoTags {
	h1: string;
	title: string;
	description: string;
}

export const seoTagsByRootCategory: Record<RootCategory, SeoTags | Record<string, (key: string) => SeoTags>> = {
	[RootCategory.LaserMachines]: {
		'h1': 'Laser machines and engraving lasers',
		'title': 'Laser machines, engravers and cutters - wattsan.com',
		'description': 'Laser engravers and cutters. There are machines with laser power from 40W to 150W in stock. Laser engravers and cutters have work areas from 300x200 mm to 3000x2000 mm.',
		'Lasers': (key: string) => ({
			h1: `Laser machines and engraving lasers - wattsan.com`,
			title: `Laser machines ${key}, engravers and cutters - wattsan.com`,
			description: `Laser engravers and cutters ${key}. There are machines with laser power from 40W to 150W in stock. Laser engravers and cutters have work areas from 300x200 mm to 3000x2000 mm.`,
		}),
		'Application place': (key: string) => ({
			h1: `Laser machines ${key}`,
			title: `Laser machines ${key}, engravers and cutters - wattsan.com`,
			description: `Laser engravers and cutters ${key}. There are machines with laser power from 40W to 150W in stock. Laser engravers and cutters have work areas from 300x200 mm to 3000x2000 mm.`,
		}),
		'Application': (key: string) => ({
			h1: `Laser machines for ${key}`,
			title: `Laser machines for ${key} - wattsan.com`,
			description: `Laser engravers and cutters for ${key}. There are machines with laser power from 40W to 150W in stock. Laser engravers and cutters have work areas from 300x200 mm to 3000x2000 mm.`,
		}),
		'Controller': (key: string) => ({
			h1: `Laser machines with ${key} controller`,
			title: `Laser machines with ${key} controller - wattsan.com`,
			description: `Laser machines with ${key} controller. There are machines with laser power from 40W to 150W in stock. Laser engravers and cutters have work areas from 300x200 mm to 3000x2000 mm.`,
		}),
		'Format type': (key: string) => ({
			h1: `${key} laser machines and engravers`,
			title: `${key} laser machines and engravers - wattsan.com`,
			description: `${key} laser machines and engravers. There are machines with laser power from 40W to 150W in stock. Laser engravers and cutters have work areas from 300x200 mm to 3000x2000 mm.`,
		}),
		'Guides': (key: string) => ({
			h1: `Laser machines and engravers with ${key} guides`,
			title: `Laser machines and engravers with ${key} guides - wattsan.com`,
			description: `Laser machines and engravers with ${key} guides. There are machines with laser power from 40W to 150W in stock. Laser engravers and cutters have work areas from 300x200 mm to 3000x2000 mm.`,
		}),
		'Laser power': (key: string) => ({
			h1: `Laser machines and engravers with ${key} laser power`,
			title: `Laser machines and engravers with ${key} laser power - wattsan.com`,
			description: `Laser machines and engravers with ${key} laser power. There are other machines with laser power from 40W to 150W in stock. Laser engravers and cutters have work areas from 300x200 mm to 3000x2000 mm.`,
		}),
		'Materials': (key: string) => ({
			h1: `Laser machines and engravers for ${key}`,
			title: `Laser machines and engravers for ${key} - wattsan.com`,
			description: `Laser machines and engravers for ${key}. There are machines with laser power from 40W to 150W in stock. Laser engravers and cutters have work areas from 300x200 mm to 3000x2000 mm.`,
		}),
		'Type of table': (key: string) => ({
			h1: `Laser machines and engravers with ${key} type of table`,
			title: `Laser machines and engravers with ${key} type of table - wattsan.com`,
			description: `Laser machines and engravers with ${key} type of table. There are machines with laser power from 40W to 150W in stock. Laser engravers and cutters have work areas from 300x200 mm to 3000x2000 mm.`,
		}),
		'Tube life': (key: string) => ({
			h1: `Laser machines and engravers with ${key} tube life`,
			title: `Laser machines and engravers with ${key} tube life - wattsan.com`,
			description: `Laser machines and engravers with ${key} tube life. There are machines with laser power from 40W to 150W in stock. Laser engravers and cutters have work areas from 300x200 mm to 3000x2000 mm.`,
		}),
		'Work area': (key: string) => ({
			h1: `Laser machines and engravers with ${key} work area`,
			title: `Laser machines and engravers with ${key} work area - wattsan.com`,
			description: `Laser machines and engravers with ${key} work area. There are machines with laser power from 40W to 150W in stock. Laser engravers and cutters have work areas from 300x200 mm to 3000x2000 mm.`,
		}),
		'Cooling': (key: string) => ({
			h1: `Laser machines and engravers with ${key} cooling`,
			title: `Laser machines and engravers with ${key} cooling - wattsan.com`,
			description: `Laser machines and engravers with ${key} cooling. There are machines with laser power from 40W to 150W in stock. Laser engravers and cutters have work areas from 300x200 mm to 3000x2000 mm.`,
		}),
		'Laser type': (key: string) => ({
			h1: `${key} Laser machines and engravers with`,
			title: `${key} Laser machines and engravers with - wattsan.com`,
			description: `${key} Laser machines and engravers with. There are machines with laser power from 40W to 150W in stock. Laser engravers and cutters have work areas from 300x200 mm to 3000x2000 mm.`,
		}),
		'Motors': (key: string) => ({
			h1: `Laser machines and engravers with ${key}`,
			title: `Laser machines and engravers with ${key} - wattsan.com`,
			description: `Laser machines and engravers with ${key}. There are machines with laser power from 40W to 150W in stock. Laser engravers and cutters have work areas from 300x200 mm to 3000x2000 mm.`,
		}),
	},
	[RootCategory.FiberMetalCutters]: {
		'h1': `Fiber metal cutters Wattsan`,
		'title': `Fiber metal cutters Wattsan - wattsan.com`,
		'description': `There are fiber metal cutters 2500x1300 mm and 3000x1500 mm. There are emitters 300-5000W from 3 brands: MAX photonics, Raycus and IPG.`,
		'Motors': (key: string) => ({
			h1: `Fiber metal cutters with ${key}`,
			title: `Fiber metal cutters with ${key} - wattsan.com`,
			description: `Fiber metal cutters with ${key}. There are fiber metal cutters 2500x1300 mm and 3000x1500 mm. There are emitters 300-5000W from 3 brands: MAX photonics, Raycus and IPG.`,
		}),
		'Work area': (key: string) => ({
			h1: `Fiber metal cutters with ${key} work area`,
			title: `Fiber metal cutters with ${key} work area - wattsan.com`,
			description: `Fiber metal cutters with ${key} work area. There are emitters 300-5000W from 3 brands: MAX photonics, Raycus and IPG.`,
		}),
		'Laser life': (key: string) => ({
			h1: `Fiber metal cutters with ${key} laser live`,
			title: `Fiber metal cutters with ${key} laser live - wattsan.com`,
			description: `Fiber metal cutters with ${key} laser live. There are fiber metal cutters 2500x1300 mm and 3000x1500 mm. There are emitters 300-5000W from 3 brands: MAX photonics, Raycus and IPG.`,
		}),
		'Laser power': (key: string) => ({
			h1: `Fiber metal cutters with ${key} laser power`,
			title: `Fiber metal cutters with ${key} laser power - wattsan.com`,
			description: `Fiber metal cutters with ${key} laser power. There are fiber metal cutters 2500x1300 mm and 3000x1500 mm. There are emitters 300-5000W from 3 brands: MAX photonics, Raycus and IPG.`,
		}),
		'Reduction gear': (key: string) => ({
			h1: `Fiber metal cutters with ${key} reduction gear`,
			title: `Fiber metal cutters with ${key} reduction gear - wattsan.com`,
			description: `Fiber metal cutters with ${key} reduction gear. There are fiber metal cutters 2500x1300 mm and 3000x1500 mm. There are emitters 300-5000W from 3 brands: MAX photonics, Raycus and IPG.`,
		}),
		'Materials': (key: string) => ({
			h1: `Fiber metal cutters for ${key}`,
			title: `Fiber metal cutters for ${key} - wattsan.com`,
			description: `Fiber metal cutters for ${key}. There are fiber metal cutters 2500x1300 mm and 3000x1500 mm. There are emitters 300-5000W from 3 brands: MAX photonics, Raycus and IPG.`,
		}),
		'Laser head': (key: string) => ({
			h1: `Fiber metal cutters with ${key} laser head`,
			title: `Fiber metal cutters with ${key} laser head - wattsan.com`,
			description: `Fiber metal cutters with ${key} laser head. There are fiber metal cutters 2500x1300 mm and 3000x1500 mm. There are emitters 300-5000W from 3 brands: MAX photonics, Raycus and IPG.`,
		}),
		'Configuration': (key: string) => ({
			h1: `Fiber metal cutters with ${key}`,
			title: `Fiber metal cutters with ${key} - wattsan.com`,
			description: `Fiber metal cutters with ${key}. There are fiber metal cutters 2500x1300 mm and 3000x1500 mm. There are emitters 300-5000W from 3 brands: MAX photonics, Raycus and IPG.`,
		}),
		'Application': (key: string) => ({
			h1: `Fiber metal cutters for ${key}`,
			title: `Fiber metal cutters for ${key} - wattsan.com`,
			description: `Fiber metal cutters for ${key}. There are fiber metal cutters 2500x1300 mm and 3000x1500 mm. There are emitters 300-5000W from 3 brands: MAX photonics, Raycus and IPG.`,
		}),
	},
	[RootCategory.LaserMarkers]: {
		'h1': `Laser markers Wattsan`,
		'title': `Laser markers Wattsan - wattsan.com`,
		'description': `There are three types of laser markers: fiber laser, CO2 laser and RF. Fiber markers engraving metals, platics and leather. CO2 and RF engraving non-metal materials.`,
		'Laser power': (key: string) => ({
			h1: `Laser markers ${key}`,
			title: `Laser markers ${key} - wattsan.com`,
			description: `Laser markers ${key}. There are three types of laser markers: fiber laser, CO2 laser and RF. Fiber markers engraving metals, platics and leather. CO2 and RF engraving non-metal materials.`,
		}),
		'Laser type': (key: string) => ({
			h1: `${key} laser markers`,
			title: `${key} laser markers - wattsan.com`,
			description: `${key} laser markers Wattsan. There are three types of laser markers: fiber laser, CO2 laser and RF. Fiber markers engraving metals, platics and leather. CO2 and RF engraving non-metal materials.`,
		}),
		'Work area': (key: string) => ({
			h1: `Laser markers ${key}`,
			title: `Laser markers ${key} - wattsan.com`,
			description: `Laser markers ${key}. There are three types of laser markers: fiber laser, CO2 laser and RF. Fiber markers engraving metals, platics and leather. CO2 and RF engraving non-metal materials.`,
		}),
		'Format type': (key: string) => ({
			h1: `Laser markers with ${key} format type`,
			title: `Laser markers with ${key} format type - wattsan.com`,
			description: `Laser markers with ${key} format type. There are three types of laser markers: fiber laser, CO2 laser and RF. Fiber markers engraving metals, platics and leather. CO2 and RF engraving non-metal materials.`,
		}),
		'Materials': (key: string) => ({
			h1: `Laser markers for ${key}`,
			title: `Laser markers for ${key} - wattsan.com`,
			description: `Laser markers for ${key}. There are three types of laser markers: fiber laser, CO2 laser and RF. Fiber markers engraving metals, platics and leather. CO2 and RF engraving non-metal materials.`,
		}),
		'Laser emitter': (key: string) => ({
			h1: `Laser markers with ${key} laser emitter`,
			title: `Laser markers with ${key} laser emitter - wattsan.com`,
			description: `Laser markers with ${key} laser emitter. There are three types of laser markers: fiber laser, CO2 laser and RF. Fiber markers engraving metals, platics and leather. CO2 and RF engraving non-metal materials.`,
		}),
		'Application': (key: string) => ({
			h1: `Laser markers for ${key}`,
			title: `Laser markers for ${key} - wattsan.com`,
			description: `Laser markers for ${key}. There are three types of laser markers: fiber laser, CO2 laser and RF. Fiber markers engraving metals, platics and leather. CO2 and RF engraving non-metal materials.`,
		}),
		'Application place': (key: string) => ({
			h1: `Laser markers for ${key}`,
			title: `Laser markers for ${key} - wattsan.com`,
			description: `Laser markers for ${key}. There are three types of laser markers: fiber laser, CO2 laser and RF. Fiber markers engraving metals, platics and leather. CO2 and RF engraving non-metal materials.`,
		}),
	},
	[RootCategory.MillingMachines]: {
		'h1': `CNC Routers Wattsan`,
		'title': `CNC Routers Wattsan - wattsan.com`,
		'description': `Catalog consist of table top CNC routers, standart pro models, featured models like 4-spindled router or 4-axis routers.`,
		'Format type': (key: string) => ({
			h1: `CNC Routers with ${key} format type`,
			title: `CNC Routers with ${key} format type - wattsan.com`,
			description: `CNC Routers with ${key} format type. Catalog consist of table top CNC routers, standart pro models, featured models like 4-spindled router or 4-axis routers.`,
		}),
		'Spindle power': (key: string) => ({
			h1: `CNC Routers with ${key} spindle power`,
			title: `CNC Routers with ${key} spindle power - wattsan.com`,
			description: `CNC Routers with ${key} spindle power. Catalog consist of table top CNC routers, standart pro models, featured models like 4-spindled router or 4-axis routers.`,
		}),
		'Work area': (key: string) => ({
			h1: `CNC Routers with ${key} work area`,
			title: `CNC Routers with ${key} work area - wattsan.com`,
			description: `CNC Routers with ${key} work area. Catalog consist of table top CNC routers, standart pro models, featured models like 4-spindled router or 4-axis routers.`,
		}),
		'Features': (key: string) => ({
			h1: `CNC Routers with ${key}`,
			title: `CNC Routers with ${key} - wattsan.com`,
			description: `CNC Routers with ${key}. Catalog consist of table top CNC routers, standart pro models, featured models like 4-spindled router or 4-axis routers.`,
		}),
		'Spindle speed': (key: string) => ({
			h1: `CNC Routers with ${key} spindle speed`,
			title: `CNC Routers with ${key} spindle speed - wattsan.com`,
			description: `CNC Routers with ${key} spindle speed. Catalog consist of table top CNC routers, standart pro models, featured models like 4-spindled router or 4-axis routers.`,
		}),
		'Motors': (key: string) => ({
			h1: `CNC Routers with ${key}`,
			title: `CNC Routers with ${key} - wattsan.com`,
			description: `CNC Routers with ${key}. Catalog consist of table top CNC routers, standart pro models, featured models like 4-spindled router or 4-axis routers.`,
		}),
		'Materials': (key: string) => ({
			h1: `CNC Routers for ${key}`,
			title: `CNC Routers for ${key} - wattsan.com`,
			description: `CNC Routers for ${key}. Catalog consist of table top CNC routers, standart pro models, featured models like 4-spindled router or 4-axis routers.`,
		}),
		'Guides': (key: string) => ({
			h1: `CNC Routers with ${key} guides`,
			title: `CNC Routers with ${key} guides - wattsan.com`,
			description: `CNC Routers with ${key} guides. Catalog consist of table top CNC routers, standart pro models, featured models like 4-spindled router or 4-axis routers.`,
		}),
		'Controller': (key: string) => ({
			h1: `CNC Routers with ${key} controller`,
			title: `CNC Routers with ${key} controller - wattsan.com`,
			description: `CNC Routers with ${key} controller. Catalog consist of table top CNC routers, standart pro models, featured models like 4-spindled router or 4-axis routers.`,
		}),
		'Base': (key: string) => ({
			h1: `CNC Routers with ${key} base`,
			title: `CNC Routers with ${key} base - wattsan.com`,
			description: `CNC Routers with ${key} base. Catalog consist of table top CNC routers, standart pro models, featured models like 4-spindled router or 4-axis routers.`,
		}),
		'Application place': (key: string) => ({
			h1: `CNC Routers ${key}`,
			title: `CNC Routers ${key} - wattsan.com`,
			description: `CNC Routers  ${key}. Catalog consist of table top CNC routers, standart pro models, featured models like 4-spindled router or 4-axis routers.`,
		}),
		'Application': (key: string) => ({
			h1: `CNC Routers for ${key}`,
			title: `CNC Routers for ${key} - wattsan.com`,
			description: `CNC Routers for ${key}. Catalog consist of table top CNC routers, standart pro models, featured models like 4-spindled router or 4-axis routers.`,
		}),
	}
};
