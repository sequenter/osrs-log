import type { SectionColours } from '$lib/types';

export const SECTIONS = ['Achievements', 'Quests', 'Pets', 'Collections'] as const;

export const SECTION_COLOURS: SectionColours = {
	Achievements: {
		text: 'text-green-400',
		background: 'bg-green-400'
	},
	Collections: {
		text: 'text-yellow-400',
		background: 'bg-yellow-400'
	},
	Pets: {
		text: 'text-red-400',
		background: 'bg-red-400'
	},
	Quests: {
		text: 'text-blue-400',
		background: 'bg-blue-400'
	}
};
