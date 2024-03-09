<script lang="ts">
	import { Left, Right, SVG } from '$lib/assets';
	import { clsx } from 'clsx';
	import { Mapper } from '$lib/utils/icons.utils';
	import { press } from 'svelte-gestures';
	import type { Skill } from '$lib/types';
	import { Skills } from '$stores/skills.store';

	export let skill: Skill;
	export let minLevel: number;
	export let maxLevel: number;

	function handlePress() {
		$Skills[skill].locked = !$Skills[skill].locked;
	}

	function handleClick(val: number) {
		if (!$Skills[skill].locked) {
			const level = Math.min(maxLevel, Math.max(minLevel, $Skills[skill].level + val));
			$Skills[skill].level = level;
		}
	}
</script>

<div
	class={clsx(
		'flex flex-col select-none items-center rounded-lg p-2 cursor-pointer transition-opacity drop-shadow-lg hover:outline bg-birch-500',
		$Skills[skill].locked && 'opacity-60'
	)}
	use:press={{ triggerBeforeFinished: true }}
	on:press={handlePress}
>
	<span class="text-md">{skill}</span>
	<img class="w-16 h-16 my-2" src={Mapper[skill]} alt="{skill} icon" />
	<div class="flex items-center">
		<button
			on:click={() => {
				handleClick(-1);
			}}
		>
			<SVG><Left /></SVG>
		</button>

		<span class="px-2 text-lg font-bold w-6 flex items-center justify-center"
			>{$Skills[skill].level}</span
		>

		<button
			on:click={() => {
				handleClick(1);
			}}
		>
			<SVG><Right /></SVG>
		</button>
	</div>
</div>
