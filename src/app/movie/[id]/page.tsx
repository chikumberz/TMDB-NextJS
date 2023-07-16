import Link from 'next/link';
import Image from 'next/image';
import { FaListUl, FaHeart, FaBookmark, FaStar, FaPlay, FaCaretDown } from 'react-icons/fa6';
import { FiPercent } from 'react-icons/fi';
import { BsDot } from 'react-icons/bs';

async function getMovie ({id}:{id:number}) {
	const movie = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=4f298a53e552283bee957836a529baec`, {
		cache: 'no-store'
	});
	const result = await movie.json();
	// console.log(result);
	return result;
}

async function getMovieCredits ({id}:{id:number}) {
	const credits = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&api_key=4f298a53e552283bee957836a529baec`, {
		cache: 'no-store'
	});
	const result = await credits.json();
	// console.log(result);
	return result;
}

function getGenres ({genres}:any) {
	const genres_list: string[] = [];

	genres.map((genre:any) => (
		genres_list.push(genre.name)
	))

	return genres_list;
}

export default async function Page ({params}:{params: {id: number}}) {
	const movie = await getMovie({id: params.id});
	const movie_credits = await getMovieCredits({id: params.id});
	const genres = getGenres({genres: movie.genres})
	const runtime_h = Math.floor(movie.runtime / 60);
	const runtime_m = Math.floor(movie.runtime % 60);
	const vote = Math.floor((movie.vote_average / 10 ) * 100);
	let bg_circular_rate;

	if (vote <= 65) {
		bg_circular_rate = `conic-gradient( #d2d531 ${vote * 3.6}deg, #423d0f 0deg)`;
	} else {
		bg_circular_rate = `conic-gradient( #21d07a ${vote * 3.6}deg, #204529 0deg)`;
	}

  return (
		<>
			<div className="flex">
				<ul className="flex justify-center items-center">
					<li className="pt-2 pb-1 mr-10 border-b-4 border-cyan-400"><Link href="#" className="flex justify-between items-center">Overview <FaCaretDown className="ml-2 text-sm"/></Link></li>
					<li className="pt-2 pb-1 mr-10"><Link href="#" className="flex justify-between items-center">Media <FaCaretDown className="ml-2 text-sm"/></Link></li>
					<li className="pt-2 pb-1 mr-10"><Link href="#" className="flex justify-between items-center">Fandom <FaCaretDown className="ml-2 text-sm"/></Link></li>
					<li className="pt-2 pb-1"><Link href="#" className="flex justify-between items-center">Share <FaCaretDown className="ml-2 text-sm"/></Link></li>
				</ul>
			</div>

			<div className="flex w-full" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path})`}}>
				<div className="px-10 py-8" style={{backgroundImage: 'linear-gradient(to right, rgba(31.5, 10.5, 94.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 10.5, 94.5, 0.84) 50%, rgba(31.5, 10.5, 94.5, 0.84) 100%)'}}>
					<section className="flex justify-between">
						<div className="flex flex-wrap flex-col">
							<div className="rounded-lg min-w-[300px] overflow-hidden">
								<div className="flex flex-nowrap w-full">
									<Image
										src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
										alt={movie.title}
										className="w-full object-cover"
										width="300"
										height="300"
									/>
								</div>
								<div className="provider flex flex-wrap justify-center items-center bg-slate-900 text-white py-2">
									<Image
										src="https://image.tmdb.org/t/p/original/peURlLlr8jggOwK53fJ5wdQl05y.jpg"
										alt="Available to Rent or Buy on Apple TV"
										className="mr-2"
										width="36"
										height="36"
									/>
									<div className="p-2">
										<h6 className="font-normal opacity-80 leading-4">Available to Rent or Buy</h6>
										<h6 className="leading-4">Watch Now</h6>
									</div>
								</div>
							</div>
						</div>
						<div className="flex text-white">
							<div className="flex flex-wrap pl-10">
								<div className="block">
									<h1><Link href="#" className="hover:opacity-70">{movie.title}</Link> <span className="font-normal opacity-80">({movie.release_date.substring(0, 4)})</span></h1>
									<h6 className="font-normal">
										<span className="border border-white px-1 opacity-70 text-[0.9rem] mr-1">PG-13</span> ({movie.production_companies[0].origin_country}) <BsDot className="inline-block text-2xl"/> {genres.join(', ')} <BsDot className="inline-block text-2xl"/> {runtime_h}h {runtime_m}m
									</h6>
									<div className="flex justify-start items-center py-5">
										<div className="flex justify-start items-center mr-5">
											<div className="circular-rate cursor-pointer hover:scale-125 transition-all" style={{background: bg_circular_rate}}>
												<span className="circular-rate-value font-bold text-2xl">
													<span className="circular-rate-value-number">{vote}</span>
													<FiPercent className="inline-block align-super" fontSize={'9px'} />
												</span>
											</div>
											<div className="flex font-bold leading-4 ml-3">User<br />Score</div>
										</div>

										<Link href="#" className="flex justify-center items-center relative rounded-full bg-slate-800 text-white w-12 h-12 mr-5 group">
											<FaListUl className="flex text-xs" />
											<span className="absolute tooltip_box whitespace-nowrap z-10 top-[60px] bg-slate-900 text-white py-1 px-2 rounded-lg hidden group-hover:block">Add to list</span>
										</Link>

										<Link href="#" className="flex justify-center items-center relative rounded-full bg-slate-800 text-white w-12 h-12 mr-5 group">
											<FaHeart className="flex text-xs" />
											<span className="absolute tooltip_box whitespace-nowrap z-10 top-[60px] bg-slate-900 text-white py-1 px-2 rounded-lg hidden group-hover:block">Mark as favorite</span>
										</Link>

										<Link href="#" className="flex justify-center items-center relative rounded-full bg-slate-800 text-white w-12 h-12 mr-5 group">
											<FaBookmark className="flex text-xs" />
											<span className="absolute tooltip_box whitespace-nowrap z-10 top-[60px] bg-slate-900 text-white py-1 px-2 rounded-lg hidden group-hover:block">Add to your watchlist</span>
										</Link>

										<Link href="#" className="flex justify-center items-center relative rounded-full bg-slate-800 text-white w-12 h-12 mr-5 group">
											<FaStar className="flex text-xs" />
											<span className="absolute tooltip_box whitespace-nowrap z-10 top-[60px] bg-slate-900 text-white py-1 px-2 rounded-lg hidden group-hover:block">Rate it!</span>
										</Link>

										<Link href="#" className="flex justify-center items-center text-white font-bold hover:opacity-70">
											<FaPlay className="flex mr-3" /> Play Trailer
										</Link>
									</div>

									<h6 className="font-normal italic opacity-70 mb-3">{movie.tagline}</h6>
									<h4 className="font-semibold mb-2">Overview</h4>
									<p>{movie.overview}</p>

									<ul className="grid grid-cols-3 gap-4 mt-5">
										{movie_credits.crew.map((credit:any) => (
											credit.job.toLowerCase() == 'director' ?
												<>
													<li>
														<h5>{credit.name}</h5>
														<h6 className="font-normal">Director, Writer</h6>
													</li>
												</>
											: null
										))}
										{movie_credits.crew.map((credit:any) => (
											credit.job.toLowerCase() == 'characters' ?
												<>
													<li>
														<h5>{credit.name}</h5>
														<h6 className="font-normal">{credit.job}</h6>
													</li>
												</>
											: null
										))}
									</ul>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}