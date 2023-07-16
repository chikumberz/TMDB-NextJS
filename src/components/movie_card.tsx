import Image from 'next/image';
import Link from 'next/link';
import DateFormat from '@/components/date_format';
import { FiPercent } from "react-icons/fi";
import { HiEllipsisHorizontalCircle } from 'react-icons/hi2';

export default function MovieCard ({movies}:any) {
    return (
        <>
        {movies.results.map((movie:any) => {
            const vote = Math.floor((movie.vote_average / 10 ) * 100);
            let bg_circular_rate;

            if (vote <= 65) {
                bg_circular_rate = `conic-gradient( #d2d531 ${vote * 3.6}deg, #423d0f 0deg)`;
            } else {
                bg_circular_rate = `conic-gradient( #21d07a ${vote * 3.6}deg, #204529 0deg)`;
            }

            return (
            <>
                <div key={movie.id} className="border border-gray-300 shadow-all-lg rounded-lg overflow-hidden relative">
                <button className="absolute top-2 right-2 z-10 text-2xl text-white hover:text-cyan-300 opacity-80">
                    <HiEllipsisHorizontalCircle/>
                </button>
                <div className="w-ful relative">
                    <Link href={`/movie/${movie.id}`}>
                    <Image
                        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                        alt="{movie.title}"
                        className="w-full object-cover"
                        width="300"
                        height="300"
                    />
                    </Link>

                    <div className="absolute left-3 -bottom-4">
                    <div className="circular-rate circular-rate-sm cursor-pointer transition-all text-white" style={{background: bg_circular_rate}}>
                        <span className="circular-rate-value font-bold text-base">
                        <span className="circular-rate-value-number">{vote}</span>
                        <FiPercent className="inline-block align-super" fontSize={'6px'} />
                        </span>
                    </div>
                    </div>
                </div>

                <div className="movie-content px-2 pt-7 pb-3">
                    <h6 className="flex justify-start flex-nowrap items-center hover:text-cyan-400">
                    <Link href={`/movie/${movie.id}`}>
                        {movie.title}
                    </Link>
                    </h6>
                    <span className="text-gray-500"><DateFormat date={movie.release_date} /></span>
                </div>
                </div>
            </>
        )})}
        </>
    );
}