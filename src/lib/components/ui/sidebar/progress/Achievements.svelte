<script lang="ts">
	import { Achievements } from '$stores/achievements.store';
	import { getAvailableAchievements } from '$lib/utils/available.utils';
	import { getCompletedAchievements } from '$lib/utils/completed.utils';
	import { ProgressBar } from '$lib/components';
	import { Settings } from '$stores/settings.store';
	import { Skills } from '$stores/skills.store';

	$: available = getAvailableAchievements($Skills, $Settings);
</script>

<ProgressBar
	section="Achievements"
	total={available.length}
	complete={getCompletedAchievements(available, $Achievements)}
/>
