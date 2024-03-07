<script lang="ts">
	import type { Section } from '$lib/types';
	import { SECTION_COLOURS } from '$constants/global';

	export let section: Section;
</script>

<div class="p-3 rounded-lg text-center bg-birch-800 drop-shadow-lg">
	<h3 class="text-2xl mb-2">{section}</h3>
	<div class="w-full h-4 mb-3 bg-birch-950 rounded-full">
		<div
			class="h-4 rounded-full {SECTION_COLOURS[section].background} transition-width"
			style=""
		></div>
	</div>
	<div class="w-full flex gap-1">
		<span class="w-1/3 text-xl {SECTION_COLOURS[section].text} rounded-l-lg bg-birch-950"> 0 </span>
		<span class="w-1/3 text-xl bg-birch-950"> 0 </span>
		<span class="w-1/3 text-xl text-red-700 rounded-r-lg bg-birch-950"> 0 </span>
	</div>
</div>
