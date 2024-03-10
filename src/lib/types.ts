import type { DIFFICULTY } from '$constants/globals';
import type { SECTIONS } from '$constants/sections';
import type { SKILLS } from '$constants/skills';

export type Skill = keyof typeof SKILLS;
export type Section = keyof typeof SECTIONS;
export type Difficulty = keyof typeof DIFFICULTY;

type SkillRequirement = {
	[key in Skill]: number;
};

export interface Requirements {
	combat: boolean;
	quests: Array<string>;
	skills: Array<SkillRequirement>;
}

export interface AchievementDetail {
	diary: string;
	img: string;
	difficulty: Difficulty;
	task: string;
	requirements: Requirements;
}
