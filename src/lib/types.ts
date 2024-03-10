import type { DIFFICULTY, SECTIONS } from '$constants/globals';
import type { SKILLS } from '$constants/json';

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

export interface AchievementDetails {
	id: string;
	diary: string;
	img: string;
	difficulty: Difficulty;
	task: string;
	requirements: Requirements;
}
