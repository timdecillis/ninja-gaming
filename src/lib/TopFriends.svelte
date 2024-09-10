<script lang="ts">
	import FriendCard from './FriendCard.svelte';

	export let friends;
	console.log('friends:', friends)
</script>

<div
	class="grid grid-cols-4 grid-rows-2 justify-center items-center border-2 border-black rounded-md col-start-2 col-span-2 text-center p-4 m-4"
>
	{#each friends.friends as { name }}
		<FriendCard {name} />
	{/each}
</div>
