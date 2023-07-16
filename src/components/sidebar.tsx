import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa6';

export default function Header () {
	return <>
		<div className="border border-gray-300 shadow-all-lg rounded-md mb-3">
			<div className="flex justify-between w-full px-4 py-3">
			<h5 className="flex justify-start flex-nowrap items-center">Sort</h5>
			<Link className="flex justify-end flex-nowrap items-center" href="#">
				<FaAngleRight color="black" fontSize="0.9em"/>
			</Link>
			</div>
		</div>

		<div className="border border-gray-300 shadow-all-lg rounded-md mb-3">
			<div className="flex justify-between w-full px-4 py-3">
			<h5 className="flex justify-start flex-nowrap items-center">Where To Watch</h5>
			<Link className="flex justify-end flex-nowrap items-center" href="#">
				<FaAngleRight color="black" fontSize="0.9em"/>
			</Link>
			</div>
		</div>

		<div className="border border-gray-300 shadow-all-lg rounded-md mb-3">
			<div className="flex justify-between w-full px-4 py-3">
			<h5 className="flex justify-start flex-nowrap items-center">Filters</h5>
			<Link className="flex justify-end flex-nowrap items-center" href="#">
				<FaAngleRight color="black" fontSize="0.9em"/>
			</Link>
			</div>
		</div>
	</>
}