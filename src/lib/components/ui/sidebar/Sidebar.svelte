<script lang="ts">
	import { ProgressBar, ProgressNumeral } from '$lib/components';
	import { SECTIONS } from '$constants/sections';
	import { SKILLS } from '$constants/skills';
	import { Skills } from '$stores/skills.store';
	import type { Section } from '$lib/types';
	import { Achievements } from '$stores/achievements.store';
	import { getAvailableAchievements } from '$lib/utils/available.utils';

	const sectionsArr = Object.keys(SECTIONS) as Array<Section>;
	const totalSkills = Object.keys(SKILLS).length;
</script>

<section class="container mx-auto flex flex-col h-full p-5">
	<div class="flex flex-row items-center">
		<img class="me-3 w-8 h-8" src="$lib/assets/icons/progress.png" alt="Progress icon" />
		<h2 class="font-medium text-3xl">Progress</h2>
	</div>
	<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-none mt-5 gap-5">
		<ProgressNumeral
			title="Skills"
			total={totalSkills}
			complete={Object.values($Skills).filter((item) => !item.locked).length}
		/>
		<ProgressNumeral title="Quest Points" total={300} complete={0} />

		<ProgressBar
			section="Achievements"
			total={getAvailableAchievements($Skills).length}
			complete={$Achievements.length}
		/>
	</div>
</section>
