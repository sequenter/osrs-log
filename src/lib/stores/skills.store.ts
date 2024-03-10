import type { Skill as TSkill } from '$lib/types';
import { writable } from 'svelte/store';

interface SkillDetail {
	level: number;
	locked: boolean;
}

export type SkillDetails = {
	[skill in TSkill]: SkillDetail;
};

const defaultStore: SkillDetails = localStorage.skills
	? (JSON.parse(localStorage.skills) as SkillDetails)
	: {
			Attack: { level: 1, locked: true },
			Strength: { level: 1, locked: true },
			Defence: { level: 1, locked: true },
			Ranged: { level: 1, locked: true },
			Prayer: { level: 1, locked: true },
			Magic: { level: 1, locked: true },
			Runecraft: { level: 1, locked: true },
			Construction: { level: 1, locked: true },
			Hitpoints: { level: 10, locked: true },
			Agility: { level: 1, locked: true },
			Herblore: { level: 1, locked: true },
			Thieving: { level: 1, locked: true },
			Crafting: { level: 1, locked: true },
			Fletching: { level: 1, locked: true },
			Slayer: { level: 1, locked: true },
			Hunter: { level: 1, locked: true },
			Mining: { level: 1, locked: true },
			Smithing: { level: 1, locked: true },
			Fishing: { level: 1, locked: true },
			Cooking: { level: 1, locked: true },
			Firemaking: { level: 1, locked: true },
			Woodcutting: { level: 1, locked: true },
			Farming: { level: 1, locked: true }
		};

export const Skills = writable<SkillDetails>(defaultStore);

Skills.subscribe((val) => {
	localStorage.skills = JSON.stringify(val);
});
