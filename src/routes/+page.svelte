<script>
	import Counter from '$lib/Counter.svelte';
	import Profile from '$lib/Profile.svelte';
	import TopFriends from '$lib/TopFriends.svelte';

	export let data;
	const name = 'Tim DeCillis';
</script>

<main class="flex flex-col">
	<div class="grid grid-cols-3 gap-2">
		<Profile {name} />
		<TopFriends friends={data} />
	</div>
	<Counter/>
</main>
