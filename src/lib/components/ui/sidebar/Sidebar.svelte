<script lang="ts">
	import { Achievements, Skills } from '$lib/components/ui/sidebar/progress';
</script>

<section class="container mx-auto flex flex-col h-full p-5">
	<div class="flex flex-row items-center">
		<img class="me-3 w-8 h-8" src="$lib/assets/icons/progress.png" alt="Progress icon" />
		<h2 class="font-medium text-3xl">Progress</h2>
	</div>
	<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-none mt-5 gap-5">
		<Skills />
		<Achievements />
	</div>
</section>
