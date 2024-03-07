<script lang="ts">
	import { ProgressBar, ProgressNumeral } from '$lib/components';
	import { SECTIONS } from '$constants/global';
	import { SKILLS } from '$constants/skills';
	import { skillsStore } from '$stores/skills.store';
</script>

<section class="container mx-auto flex flex-col h-full p-5">
	<div class="flex flex-row items-center">
		<img class="me-3 w-8 h-8" src="$lib/assets/icons/progress.png" alt="Progress icon" />
		<h2 class="font-medium text-3xl">Progress</h2>
	</div>
	<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-none mt-5 gap-5">
		<ProgressNumeral title="Skills" total={SKILLS.length} complete={$skillsStore.length} />
		<ProgressNumeral title="Quest Points" total={300} complete={0} />

		{#each SECTIONS as section}
			<ProgressBar {section} />
		{/each}
	</div>
</section>
