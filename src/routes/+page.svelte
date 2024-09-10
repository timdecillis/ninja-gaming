<script>
	import Profile from '$lib/Profile.svelte';
	import TopFriends from '$lib/TopFriends.svelte';
	export let data;
	console.log('data:', data);
</script>

<main class="flex flex-col">
	<div class="grid grid-cols-3 gap-2">
		<Profile />
		<TopFriends friends={data} />
	</div>
</main>
