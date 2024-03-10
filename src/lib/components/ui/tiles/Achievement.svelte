<script lang="ts">
	import { DIFFICULTY, WIKI_IMAGES_ERROR, WIKI_IMAGES_URL } from '$constants/globals';
	import type { Difficulty } from '$lib/types';
	import { Achievements } from '$stores/achievements.store';
	import clsx from 'clsx';
	import { press } from 'svelte-gestures';
	import { slide } from 'svelte/transition';

	export let img: string;
	export let diary: string;
	export let difficulty: Difficulty;
	export let task: string;

	$: src = WIKI_IMAGES_URL + `${img.replaceAll(' ', '_')}.png`;

	function handleError() {
		src = WIKI_IMAGES_ERROR;
	}

	function handlePress() {
		if ($Achievements.includes(task)) {
			$Achievements = $Achievements.filter((item) => item !== task);
		} else {
			$Achievements = [...$Achievements, task];
		}
	}
</script>

<div
	class={clsx(
		'flex flex-col rounded-lg p-3 cursor-pointer transition-opacity drop-shadow-lg hover:outline bg-birch-500',
		$Achievements.includes(task) && 'opacity-60'
	)}
	transition:slide={{ duration: 150 }}
	use:press={{ triggerBeforeFinished: true }}
	on:press={handlePress}
>
	<div class="flex justify-between items-center">
		<div class="flex items-center">
			<div class="flex justify-center w-8">
				<img on:error={handleError} {src} alt="{img} icon" />
			</div>
			<h3 class="text-2xl ms-3">{diary}</h3>
		</div>

		<span class="text-md {DIFFICULTY[difficulty].colour}">{difficulty}</span>
	</div>
	<hr class="h-px my-2 bg-birch-800 border-0" />
	<span class="text-md text-yellow-400 grow">{task}</span>
	<hr class="h-px my-2 bg-birch-800 border-0" />
	<span class="text-status text-md"></span>
</div>
