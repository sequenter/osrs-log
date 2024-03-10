<script lang="ts">
	import { Settings } from '$stores/settings.store';
	import { SignalSetting } from '$stores/signal.store';
	import { onMount } from 'svelte';

	let dialog: HTMLDialogElement | null;

	$: $SignalSetting,
		(() => {
			if ($SignalSetting) {
				dialog?.showModal();
				$SignalSetting = false;
			}
		})();

	onMount(() => {
		dialog = document.getElementById('settings-dialog') as HTMLDialogElement;
	});

	function handleCloseClick() {
		dialog?.close();
	}

	function handleCombatChange(e: Event & { currentTarget: EventTarget & HTMLInputElement }) {
		$Settings.show__combat = e.currentTarget.checked;
	}

	function handleShowCompletedChange(e: Event & { currentTarget: EventTarget & HTMLInputElement }) {
		$Settings.show__completed = e.currentTarget.checked;
	}
</script>

<dialog id="settings-dialog" class="max-h-full max-w-full bg-black/80 text-carrot-400">
	<div class="h-screen w-screen flex flex-col justify-center items-stretch sm:items-center">
		<div class="flex flex-col sm:min-w-96 max-h-9/10 rounded-xl m-5 bg-birch-800 select-none">
			<div class="flex justify-between items-center px-5">
				<div class="flex flex-row items-center py-3">
					<h2 class="font-medium text-2xl">Settings</h2>
				</div>
				<button on:click={handleCloseClick}>
					<svg
						id="collections-modal-close"
						class="w-8 h-8 opacity-30 hover:opacity-60 cursor-pointer transition-opacity"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
						></path>
					</svg>
				</button>
			</div>
			<ul class="flex flex-col px-5 list-none gap-2 overflow-scroll mb-3">
				<li class="pt-2">
					<div class="flex justify-between w-full">
						<span class="text-xl">Show Combat Tasks</span>
						<label class="inline-flex items-center cursor-pointer">
							<input
								type="checkbox"
								value=""
								class="sr-only peer"
								on:change={handleCombatChange}
								checked={$Settings.show__combat}
							/>
							<div
								class="relative w-11 h-6 bg-birch-950 rounded-full peer peer-focus:ring-2 peer-focus:ring-carrot-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-carrot-600"
							></div>
						</label>
					</div>
				</li>
				<hr class="h-px my-1 bg-birch-950 border-0" />
				<li class="pb-2">
					<div class="flex justify-between w-full">
						<span class="text-xl">Show Completed Tasks</span>
						<label class="inline-flex items-center cursor-pointer">
							<input
								type="checkbox"
								value=""
								class="sr-only peer"
								on:change={handleShowCompletedChange}
								checked={$Settings.show__completed}
							/>
							<div
								class="relative w-11 h-6 bg-birch-950 rounded-full peer peer-focus:ring-2 peer-focus:ring-carrot-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-carrot-600"
							></div>
						</label>
					</div>
				</li>
			</ul>
		</div>
	</div>
</dialog>
