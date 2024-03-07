import type { Skill } from '$lib/types';
import { writable } from 'svelte/store';

interface SkillDetail {
	name: Skill;
	level: number;
}

const defaultStore: Array<SkillDetail> = localStorage.skills
	? (JSON.parse(localStorage.skills) as Array<SkillDetail>)
	: [];

export const skillsStore = writable<Array<SkillDetail>>(defaultStore);

skillsStore.subscribe((val) => {
	localStorage.skills = JSON.stringify(val);
});
