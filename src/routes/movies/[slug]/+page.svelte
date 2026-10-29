<script>

	import {enhance} from '$app/forms';
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.movie.title} | ScreenStack</title>
</svelte:head>

<a href="/movies" class="btn btn-outline-secondary btn-sm mb-4">← Back to movies</a>

<div class="row g-4">
	<div class="col-8 col-sm-6 col-md-4 mx-auto mx-md-0">
		<img
			src={data.movie.poster}
			class="img-fluid rounded shadow"
			alt="Poster of {data.movie.title}"
		/>
	</div>

	<div class="col-12 col-md-8">
		<h1 class="mb-4">{data.movie.title}</h1>

		<dl class="row">
			<dt class="col-sm-3">Year</dt>
			<dd class="col-sm-9">{data.movie.year}</dd>

			<dt class="col-sm-3">Length</dt>
			<dd class="col-sm-9">{data.movie.length}</dd>

			<dt class="col-sm-3">Actors</dt>
			<dd class="col-sm-9">
				{#if data.movie.actors?.length}
					<ul class="list-unstyled mb-0">
						{#each data.movie.actors as actor}
							<li>{actor}</li>
						{/each}
					</ul>
				{:else}
					<span>No actors listed</span>
				{/if}
			</dd>

			<dt class="col-sm-3">Watchlist</dt>
			<dd class="col-sm-9">
				{#if data.movie.watchlist}
					<span class="badge text-bg-success">On your watchlist</span>
				{:else}
					<span class="badge text-bg-secondary">Not on your watchlist</span>
				{/if}
			</dd>
		</dl>
		<form
			method="POST"
			action="?/delete"
			use:enhance={({ cancel }) => {
				if (!confirm(`Delete "${data.movie.title}"?`)) cancel();
			}}
		>
			<input type="hidden" name="id" value={data.movie._id} />
			<button type="submit" class="btn btn-danger">Delete Movie</button>
		</form>
	</div>
</div>