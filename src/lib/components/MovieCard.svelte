<script>
	import { slugify } from '#lib/slugify.js';

	let { movie } = $props();
</script>

<div class="card h-100 shadow-sm">
	<img
		src={movie.poster}
		class="card-img-top"
		alt="Poster of {movie.title}"
		loading="lazy"
	/>
	<div class="card-body">
		<h5 class="card-title">
			<a href="/movies/{slugify(movie.title)}" class="text-reset text-decoration-none">
				{movie.title}
			</a>
		</h5>
		<p class="card-text text-muted mb-1">{movie.year}</p>
		<p class="card-text text-muted mb-0">{movie.length}</p>
	</div>
</div>
	
<style>
	h5{
		text-decoration: underline;
	}
	.card-body{
		background-color: rgb(70, 70, 70);
		color: white;
	}
	.card-text{
    	color: white !important;
	}
	img{
		background-color: rgb(198, 196, 166);
	}
</style>