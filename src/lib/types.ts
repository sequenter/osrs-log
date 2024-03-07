import type { SECTIONS } from '$constants/global';
import type { SKILLS } from '$constants/skills';

export type Skill = (typeof SKILLS)[number];

export type Section = (typeof SECTIONS)[number];

export type SectionColours = {
	[key in Section]: {
		text: string;
		background: string;
	};
};
