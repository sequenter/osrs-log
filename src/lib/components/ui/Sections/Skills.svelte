<script lang="ts">
	import { Section } from '$lib/components';
	import { Skill as CSkill } from '$lib/components/ui/sections/tiles';
	import type { Skill as TSkill } from '$lib/types';
	import { SKILLS } from '$constants/json';
	import { Settings, SVG } from '$lib/assets';
	import { SignalSetting } from '$stores/signal.store';

	const skillArr = Object.keys(SKILLS) as Array<TSkill>;

	function handleClick() {
		$SignalSetting = true;
	}
</script>

<Section
	title="Skills"
	htmlClass="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-5 lg:gap-4 xl:gap-3"
>
	<img slot="icon" class="me-3 w-8 h-8" src="$lib/assets/icons/Stats.png" alt="Skills icon" />

	<button slot="controls" on:click={handleClick}>
		<SVG htmlClass="w-8 h-8"><Settings /></SVG>
	</button>

	{#each skillArr as skill}
		<CSkill {skill} minLevel={SKILLS[skill].min} maxLevel={SKILLS[skill].max} />
	{/each}
</Section>
