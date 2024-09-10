<script>
	import Profile from "$lib/Profile.svelte";
	import TopFriends from "$lib/TopFriends.svelte";


</script>

<main class="flex flex-col">
  <div class="grid grid-cols-3 border-solid border-green-700 border-2" >
		<Profile class="col-span-1"/>
		<TopFriends class="col-span-2"/>
	</div>
</main>
