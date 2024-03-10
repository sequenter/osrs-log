import { writable } from 'svelte/store';

export interface SettingDetails {
	show__completed: boolean;
	show__combat: boolean;
}

const defaultStore = localStorage.settings
	? (JSON.parse(localStorage.settings) as SettingDetails)
	: {
			show__completed: true,
			show__combat: false
		};

export const Settings = writable<SettingDetails>(defaultStore);

Settings.subscribe((val) => {
	localStorage.settings = JSON.stringify(val);
});
