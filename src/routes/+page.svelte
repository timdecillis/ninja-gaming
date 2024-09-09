<script>
	import Hero from '../components/Hero.svelte';
	import Swe from '../components/SWE.svelte';
</script>

<main class="flex flex-col">
	<div>
		<h2>This is the next layer, from the page using slot</h2>
		<slot />
		<Hero />
		<Swe />
	</div>
</main>
