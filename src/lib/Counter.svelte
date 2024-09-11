<script>
	import { count, increment, decrement, reset } from "./store";
</script>


<h3>The count is {$count}</h3>
<button on:click={increment}>Add</button>
<button on:click={decrement}>Subtract</button>
<button on:click={reset}>Reset</button>
