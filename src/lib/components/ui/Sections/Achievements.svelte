<script lang="ts">
	import { Achievement } from '$lib/components/ui/sections/tiles';
	import type { AchievementDetail } from '$lib/types';
	import { Achievements } from '$stores/achievements.store';
	import { DIFFICULTY } from '$constants/globals';
	import { getAvailableAchievements } from '$lib/utils/available.utils';
	import { getCompletedAchievements } from '$lib/utils/completed.utils';
	import { Section } from '$lib/components';
	import { Settings } from '$stores/settings.store';
	import { Skills } from '$stores/skills.store';

	let availableAchievements: AchievementDetail[];

	$: $Skills,
		$Achievements,
		$Settings,
		(() => {
			availableAchievements = getAvailableAchievements($Skills, $Settings).sort(compare);
		})();

	function compare(a: AchievementDetail, b: AchievementDetail) {
		return (
			+$Achievements.includes(a.id) - +$Achievements.includes(b.id) ||
			a.diary.localeCompare(b.diary) ||
			DIFFICULTY[a.difficulty].compare - DIFFICULTY[b.difficulty].compare
		);
	}

	function canShow(id: string) {
		return $Settings.show__completed || !$Achievements.includes(id);
	}
</script>

<Section title="Achievements">
	<img
		slot="icon"
		class="me-3 w-8 h-8"
		src="$lib/assets/icons/Achievements.png"
		alt="Achievements icon"
	/>

	<svelte:fragment slot="controls">
		<h3 class="font-medium text-2xl me-3">
			<span>{getCompletedAchievements(availableAchievements, $Achievements)}</span>/<span
				>{availableAchievements.length}</span
			>
		</h3>
	</svelte:fragment>

	{#each availableAchievements as achievement}
		{#if canShow(achievement.id)}
			<Achievement
				id={achievement.id}
				img={achievement.img}
				diary={achievement.diary}
				difficulty={achievement.difficulty}
				task={achievement.task}
			/>
		{/if}
	{/each}
</Section>
