export const WIKI_IMAGES_URL = 'https://oldschool.runescape.wiki/images/';
export const WIKI_IMAGES_ERROR = 'https://oldschool.runescape.wiki/images/Bank_filler.png';

export const DIFFICULTY = {
	Easy: {
		compare: 1,
		colour: 'text-lime-500'
	},
	Medium: {
		compare: 2,
		colour: 'text-sky-500'
	},
	Hard: {
		compare: 3,
		colour: 'text-fuchsia-400'
	},
	Elite: {
		compare: 4,
		colour: 'text-yellow-400'
	}
} as const;

export const SECTIONS = {
	Achievements: {
		text: 'text-green-400',
		background: 'bg-green-400'
	},
	Quests: {
		text: 'text-blue-400',
		background: 'bg-blue-400'
	},
	Pets: {
		text: 'text-red-400',
		background: 'bg-red-400'
	},
	Collections: {
		text: 'text-yellow-400',
		background: 'bg-yellow-400'
	}
} as const;
