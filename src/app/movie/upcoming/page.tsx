import SideBar from '@/components/sidebar';
import MovieCard from '@/components/movie_card';

async function getMovies (page:number) {
  const API_KEY = process.env.TMDB_API_KEY;

	const movies = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}&api_key=${API_KEY}`, {
		cache: 'no-store'
	});
	const result = await movies.json();
	// console.log(result);
	return result;
}

export default async function Home () {
  const movies = await getMovies(1);

  return (
    <>
      <div className="w-full px-10 pt-7 pb-8">
        <h3 className="mb-5 font-semibold">Upcoming Movies</h3>

        <div className="grid grid-cols-4 gap-7">
          <div className="">
            <SideBar />
          </div>
          <div className="col-span-3">
            <div id="container" className="grid grid-cols-5 gap-7">
              <MovieCard movies={movies}/>
            </div>

            <button className="rounded-lg bg-cyan-500 text-white hover:text-slate-900 text-2xl block w-full mt-8 font-bold py-2" type="button">Load More</button>
          </div>
        </div>
      </div>
    </>
  );
}