<script>
	import favicon from '#lib/assets/favicon.svg';
	import './styles.css';

	import { page } from '$app/state';
	import { afterNavigate } from '$app/navigation';

	let { children } = $props();
	let open = $state(false);

	afterNavigate(() => (open = false));
</script>


<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
	<div class="container">
		<a class="navbar-brand" href="/">ScreenStack</a>

		<button
			class="navbar-toggler"
			type="button"
			aria-controls="mainNav"
			aria-expanded={open}
			aria-label="Toggle navigation"
			onclick={() => (open = !open)}
		>
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" class:show={open} id="mainNav">
			<ul class="navbar-nav me-auto">
				<li class="nav-item">
					<a class="nav-link" class:active={page.url.pathname.startsWith('/movies')} href="/movies">Movies</a>
				</li>
			</ul>
		</div>
	</div>
</nav>
<main class="container">
	{@render children()}
</main>

<style>
	main {
		padding-top: 5rem; /* clears the fixed-top navbar */
		padding-bottom: 5rem;
	}
</style>
