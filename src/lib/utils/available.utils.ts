import { ACHIEVEMENTS } from '$constants/json';
import type { AchievementDetail, Requirements, Skill } from '$lib/types';
import type { SkillDetails } from '$stores/skills.store';

const _ACHIEVEMENTS = ACHIEVEMENTS as Array<AchievementDetail>;

export function getAvailableAchievements(skills: SkillDetails): Array<AchievementDetail> {
	let arr = [];

	for (const obj of _ACHIEVEMENTS) {
		isUnlocked(obj.requirements, skills) && arr.push(obj);
	}

	return arr;
}

function isUnlocked(requirements: Requirements, skills: SkillDetails) {
	for (const requirement of requirements.skills) {
		let count = 0;

		for (const i of Object.keys(requirement)) {
			const skill = i as Skill;
			if (!skills[skill].locked && skills[skill].level >= requirement[skill]) {
				count++;
			}
		}

		if (count === 0) {
			return false;
		}
	}

	return true;
}
