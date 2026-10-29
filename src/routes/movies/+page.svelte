<script>
	import MovieCard from '#lib/components/MovieCard.svelte';

	let { data } = $props();
</script>

<h1 class="mb-4">Movies</h1>
<a href="/movies/create" type="button" class="mb-3 btn btn-secondary">Add a Movie</a>

<div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
	{#each data.movies as movie (movie._id)}
		<div class="col">
			<MovieCard {movie} />
		</div>
	{:else}
		<p class="text-muted">No movies found.</p>
	{/each}
</div>