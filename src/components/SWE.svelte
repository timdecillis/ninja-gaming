<script lang="ts">
	import SectionWrapper from './SectionWrapper.svelte';
	type projectType = {
		name: String;
		description: string;
	};
	let projects: projectType[] = [
		{ name: 'project 1', description: 'foo' },
		{ name: 'project 2', description: 'foo' },
		{ name: 'project 3', description: 'foo' }
	];
</script>

<SectionWrapper id="swe">
	<div
		class="flex flex-col gap-10 sm:gap-14 md:gap-24 flex-1 items-center justify-center pb-10 md:pb-14"
	>
		<p class="opacity-60 text-base sm:text-lg md:text-xl text-center">
			These are all my amazing projects
		</p>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-14 md: gap-14 lg:gap-20 relative text-base">
			{#each projects as project}
				<h4
					class="text-2xl sm:text-3xl md:text-4xl max-w-[1000px] w-full font-medium relative after:absolute after:top-full after:left-0 after:w-1/5 after:h-1.5 after:mt-1 after:bg-slate-900"
				>
					{project.name}
				</h4>
			{/each}
		</div>
	</div>
</SectionWrapper>
