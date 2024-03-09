import type { SECTIONS } from '$constants/sections';
import type { SKILLS } from '$constants/skills';

export type Skill = keyof typeof SKILLS;
export type Section = keyof typeof SECTIONS;
