import { ACHIEVEMENTS } from '$constants/json';
import type { AchievementDetails, Requirements, Skill } from '$lib/types';
import type { SettingDetails } from '$stores/settings.store';
import type { SkillDetails } from '$stores/skills.store';

const _ACHIEVEMENTS = ACHIEVEMENTS as Array<AchievementDetails>;

export function getAvailableAchievements(
	skills: SkillDetails,
	settings: SettingDetails
): Array<AchievementDetails> {
	const arr = [];

	for (const obj of _ACHIEVEMENTS) {
		isUnlocked(obj.requirements, skills, settings) && arr.push(obj);
	}

	return arr;
}

function isUnlocked(requirements: Requirements, skills: SkillDetails, settings: SettingDetails) {
	for (const requirement of requirements.skills) {
		let count = 0;

		for (const i of Object.keys(requirement)) {
			const skill = i as Skill;

			!skills[skill].locked && skills[skill].level >= requirement[skill] && count++;
		}

		if (count === 0) {
			return false;
		}
	}

	if (requirements.combat && !settings.show__combat) {
		return false;
	}

	return true;
}
