<script lang="ts">
	export let data: { member?: { name: string } };
</script>

{#if data.member}
	<div>{data.member.name}</div>
{/if}
