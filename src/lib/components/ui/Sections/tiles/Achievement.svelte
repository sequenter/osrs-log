<script lang="ts">
	import { DIFFICULTY, WIKI_IMAGES_ERROR, WIKI_IMAGES_URL } from '$constants/globals';
	import { Achievements } from '$stores/achievements.store';
	import type { Difficulty } from '$lib/types';
	import { clsx } from 'clsx';
	import { press } from 'svelte-gestures';

	export let id: string;
	export let img: string;
	export let diary: string;
	export let difficulty: Difficulty;
	export let task: string;

	$: complete = $Achievements.includes(id);
	$: src = WIKI_IMAGES_URL + `${img.replaceAll(' ', '_')}.png`;

	function handleError() {
		src = WIKI_IMAGES_ERROR;
	}

	function handlePress() {
		if ($Achievements.includes(id)) {
			$Achievements = $Achievements.filter((item) => item !== id);
		} else {
			$Achievements = [...$Achievements, id];
		}
	}
</script>

<div
	class={clsx(
		'flex flex-col rounded-lg p-3 cursor-pointer transition-opacity drop-shadow-lg hover:outline bg-birch-500',
		complete && 'opacity-60'
	)}
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
	<span
		class={clsx('text-status text-md', complete && 'text-green-400', !complete && 'text-gray-400')}
		>{complete ? 'Complete' : 'Incomplete'}</span
	>
</div>
