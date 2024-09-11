<script>
	import NavButton from "./NavButton.svelte";

</script>
<div class="grid grid-cols-6 items-center border-black border">
	<h1 class="text-center text-5xl font-bold m-8 col-start-3 col-span-2">Welcome to TimSpace</h1>
	<div class="flex justify-around col-start-6 col-span-1 w-52">
		<a href="/"><NavButton content="My Profile"/></a>
		<a href="/settings"><NavButton content='Settings'/></a>
	</div>
</div>
