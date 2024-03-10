<script lang="ts">
	import type { Section } from '$lib/types';

	export let title: Section;
	export let complete: number;
	export let total: number;
	export let htmlClass = 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5';
</script>

<section class="container mx-auto px-5">
	<div class="flex py-5 justify-between items-center sticky top-0 z-10 bg-birch-800">
		<div class="flex items-center">
			<slot name="icon" />
			<h2 class="font-medium text-3xl">{title}</h2>
		</div>
		<div class="flex items-center">
			<h3 class="font-medium text-2xl me-3"><span>{complete}</span>/<span>{total}</span></h3>
		</div>
	</div>
	<div class="{htmlClass} px-1 pt-1 pb-5">
		<slot />
	</div>
</section>
