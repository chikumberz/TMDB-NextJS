import Link from 'next/link';

export default function HeaderMenuSubA ({name, link}:any) {
	return <>
		<li><Link href={link} className="menu-sub-a">{name}</Link></li>
	</>
}