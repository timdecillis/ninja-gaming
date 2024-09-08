<script>
	import Header from './Header.svelte';
	import SectionWrapper from './SectionWrapper.svelte';
</script>

<SectionWrapper id="foo">
	<Header />
	<div class="flex flex-col gap-10 flex-1 items-center justify-center pb-10">
		<h2
			class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-[1200px] mx-auto w-full text-center font-semibold"
		>
			<span class="text-indigo-400"> Gym </span>Training
			<span class="text-slate-600 line-through">Is Hard</span><br />
			Just Got <span class="text-indigo-400">Easier</span>
		</h2>
		<p class="text-xl sm:text-2xl md:text-3xl text-center max-w-[1000px] mx-auto w-full">
			Less thinking, <span class="italic">more doing</span>.
		</p>
		<div class="flex items-center justify-center gap-2 text-base">
			<p>3</p>
			{#each [1, 2, 3, 4, 5] as index}
				<div class="grid place-items-center relative">
					<button>ICON</button>
					<div
						class={'absolute top-0 left-0 grid place-items-center' +
							(index === 4 ? 'w-[60%] overflow-hidden' : ' ')}
					></div>
				</div>
			{/each}
		</div>
	</div></SectionWrapper
>
