<script lang="ts">
	import { Achievement, Section } from '$lib/components';
	import { Skills } from '$stores/skills.store';
	import { getAvailableAchievements } from '$lib/utils/available.utils';
	import { Achievements } from '$stores/achievements.store';
	import type { AchievementDetail } from '$lib/types';
	import { DIFFICULTY } from '$constants/globals';

	let availableAchievements = getAvailableAchievements($Skills).sort(compare);

	$: $Skills,
		(() => {
			availableAchievements = getAvailableAchievements($Skills).sort(compare);
		})();

	$: $Achievements,
		(() => {
			availableAchievements = getAvailableAchievements($Skills).sort(compare);
		})();

	function compare(a: AchievementDetail, b: AchievementDetail) {
		return (
			+$Achievements.includes(a.task) - +$Achievements.includes(b.task) ||
			a.diary.localeCompare(b.diary) ||
			DIFFICULTY[a.difficulty].compare - DIFFICULTY[b.difficulty].compare
		);
	}
</script>

<Section title="Achievements" total={availableAchievements.length} complete={$Achievements.length}>
	<img
		slot="icon"
		class="me-3 w-8 h-8"
		src="$lib/assets/icons/Achievements.png"
		alt="Achievements icon"
	/>

	{#each availableAchievements as achievement}
		<Achievement
			img={achievement.img}
			diary={achievement.diary}
			difficulty={achievement.difficulty}
			task={achievement.task}
		/>
	{/each}
</Section>
