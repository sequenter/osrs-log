<script lang="ts">
	import type { Skill } from '$lib/types';
	import { clsx } from 'clsx';
	import { Mapper } from '$lib/utils/icons.utils';
	import { Left, Right, SVG } from '$lib/assets';
	import { press } from 'svelte-gestures';
	import { skillsStore } from '$stores/skills.store';

	export let skill: Skill;
	export let minLevel = skill === 'Hitpoints' ? 10 : 1;

	let skillIndex = $skillsStore.findIndex((item) => item.name === skill);

	let locked = skillIndex === -1;
	let level = skillIndex > -1 ? $skillsStore[skillIndex].level : minLevel;

	function handlePress() {
		locked = !locked;

		$skillsStore = locked
			? $skillsStore.filter((item) => item.name !== skill)
			: [...$skillsStore, { name: skill, level: level }];
	}

	function handleClick(val: number) {
		level = Math.min(99, Math.max(minLevel, level + val));
		$skillsStore[skillIndex].level = level;
	}
</script>

<div
	class={clsx(
		'flex flex-col select-none items-center rounded-lg p-2 cursor-pointer transition-opacity drop-shadow-lg hover:outline bg-birch-500',
		locked && 'opacity-60'
	)}
	use:press={{ triggerBeforeFinished: true }}
	on:press={handlePress}
>
	<span class="text-md">{skill}</span>
	<img class="w-16 h-16 my-2" src={Mapper[skill]} alt="{skill} icon" />
	<div class="flex items-center">
		<button
			on:click={() => {
				!locked && handleClick(-1);
			}}
		>
			<SVG><Left /></SVG>
		</button>

		<span class="px-2 text-lg font-bold w-6 flex items-center justify-center">{level}</span>

		<button
			on:click={() => {
				!locked && handleClick(1);
			}}
		>
			<SVG><Right /></SVG>
		</button>
	</div>
</div>
