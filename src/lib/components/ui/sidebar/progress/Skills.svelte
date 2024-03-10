<script lang="ts">
	import { ProgressNumeral } from '$lib/components';
	import { SKILLS } from '$constants/json';
	import { Skills } from '$stores/skills.store';

	const totalSkills = Object.keys(SKILLS).length;

	$: completeSkills = Object.values($Skills).filter((item) => !item.locked).length;
</script>

<ProgressNumeral title="Skills" total={totalSkills} complete={completeSkills} />
