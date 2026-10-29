import db from '#lib/db.js';
import { slugify } from '#lib/slugify.js';
import { error } from '@sveltejs/kit';
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
	const movies = await db.getMovies();
	const movie = movies.find((m) => slugify(m.title) === params.slug);

	if (!movie) {
		error(404, 'Movie not found');
	}

	return {
		movie
	};
}


export const actions = {
	delete: async ({ request }) => {
		const form = await request.formData();
		const id = form.get('id')?.toString();

		const deletedId = id ? await db.deleteMovie(id) : null;
		if (!deletedId) {
			return fail(404, { error: 'Movie could not be deleted.' });
		}

		redirect(303, '/movies');
	}
};