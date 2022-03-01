<script>
    import { Button, TextBlock } from "fluent-svelte";
    import "fluent-svelte/theme.css";

    let count = 0;
</script>

<TextBlock variant="display">{count}.</TextBlock>
<div>
    <Button variant="accent" on:click={() => count++}>Increase Counter</Button>
    <Button on:click={() => count--}>Decrease Counter</Button>
    <Button variant="hyperlink" on:click={() => count = 0}>Reset Counter</Button>
</div>

<style>
	:global(body) {
		background-color: var(--fds-solid-background-base);
		color: var(--fds-text-primary);
	}
</style>