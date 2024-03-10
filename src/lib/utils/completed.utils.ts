import type { AchievementDetails } from '$lib/types';

export function getCompletedAchievements(available: AchievementDetails[], completed: string[]) {
	return available
		.map((item) => {
			return item.id;
		})
		.filter((item) => completed.includes(item)).length;
}
