<script>
	export let name, id;
</script>

<div class="friend-card">
	<a href={`member/${id}`}>
		<img class="friend-image" src="src/lib/assets/Sibley(1).jpg" alt="me" />
		<div>{name}</div>
	</a>
</div>
