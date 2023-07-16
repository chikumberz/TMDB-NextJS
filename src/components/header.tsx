import Image from 'next/image';
import Link from 'next/link';
import { TiPlus } from 'react-icons/ti';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import HeaderMenuSubA from './header_menu_sub_a';

export default function Header () {
	return <>
		<header className="flex justify-center bg-slate-800 text-white h-16">
			<div className="flex justify-between w-full px-10">
				<div className="flex justify-start flex-nowrap items-center">
					<Link className="mr-4 block" href="/">
						<Image src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="The Movie Database (TMDB)" width="154" height="20" />
					</Link>

					<ul className="menu">
						<li className="group">
							<Link href="/" className="flex font-semibold p-2">Movies</Link>

							<ul className="menu-sub group-hover:block">
									<HeaderMenuSubA name="Upcoming" link="/movie/upcoming"/>
									<HeaderMenuSubA name="Popular" link="/movie/popular"/>
									<HeaderMenuSubA name="Top Rated" link="/movie/top-rated"/>
							</ul>
						</li>
						<li className="group">
							<Link href="/tv" className="flex font-semibold p-2">TV Shows</Link>

							<ul className="menu-sub group-hover:block">
									<HeaderMenuSubA name="Upcoming" link="/tv/upcoming"/>
									<HeaderMenuSubA name="Airing Today" link="/tv/airing-today"/>
									<HeaderMenuSubA name="On TV" link="/tv/on-the-air"/>
									<HeaderMenuSubA name="Top Rated" link="/tv/top-rated"/>
							</ul>
						</li>
						<li className="group">
							<Link className="flex font-semibold p-2" href="#">People</Link>

							<ul className="menu-sub group-hover:block">
									<HeaderMenuSubA name="Popular People" link="#"/>
							</ul>
						</li>
						<li className="group">
							<Link className="flex font-semibold p-2" href="#">More</Link>

							<ul className="menu-sub group-hover:block">
									<HeaderMenuSubA name="Discussions" link="#"/>
									<HeaderMenuSubA name="Leaderboard" link="#"/>
									<HeaderMenuSubA name="Support" link="#"/>
									<HeaderMenuSubA name="API" link="#"/>
							</ul>
						</li>
					</ul>
				</div>

				<div className="flex justify-end flex-nowrap">
					<ul className="flex justify-end items-center flex-nowrap">
						<li>
							<Link className="" href="#">
								<TiPlus color="#ffffff" fontSize="1.5em"/>
							</Link>
						</li>
						<li className="ml-8">
							<div className="border border-white rounded-sm uppercase w-7 h-7 px-1 py-1 text-sm cursor-pointer hover:bg-white hover:text-slate-800">en</div>
						</li>
						<li className="ml-8"><Link className="font-semibold" href="#">Login</Link></li>
						<li className="ml-8"><Link className="font-semibold" href="#">Join TMDB</Link></li>

						<li className="ml-8">
							<Link className="search" href="#">
								<FaMagnifyingGlass color="#01b4e4" fontSize="1.5em"/>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	</>
}