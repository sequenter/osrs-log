import { writable } from 'svelte/store';

const defaultStore = localStorage.achievements
	? (JSON.parse(localStorage.achievements) as Array<string>)
	: [];

export const Achievements = writable<Array<string>>(defaultStore);

Achievements.subscribe((val) => {
	localStorage.achievements = JSON.stringify(val);
});
