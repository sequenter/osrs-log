<script lang="ts">
	import type { Skill as TSkill } from '$lib/types';
	import { SKILLS } from '$constants/skills';
	import { Skill as CSkill } from '$lib/components';

	const skillArr = Object.keys(SKILLS) as Array<TSkill>;
</script>

<section class="px-5">
	<div class="flex justify-between items-center py-5 sticky top-0 z-10 bg-birch-800">
		<div class="flex items-center">
			<img class="me-3 w-8 h-8" src="$lib/assets/icons/Stats.png" alt="Skills icon" />
			<h2 class="font-medium text-3xl">Skills</h2>
		</div>
	</div>
	<div
		class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-5 lg:gap-4 xl:gap-3 pt-1 px-1 pb-5"
	>
		{#each skillArr as skill}
			<CSkill {skill} minLevel={SKILLS[skill].min} maxLevel={SKILLS[skill].max} />
		{/each}
	</div>
</section>
