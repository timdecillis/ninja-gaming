<script lang="ts">
	import Profile from '$lib/Profile.svelte';

	export let data: { member?: { name: string } };
</script>

{#if data.member}
	<Profile name={data.member.name} />
{/if}
