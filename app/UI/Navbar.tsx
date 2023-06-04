import Link from 'next/link'
import Button from './Button'

const Routes = [
	{ text: 'אודותינו', link: '#' },
	{ text: 'יתרוונת', link: '#' },
	{ text: 'התחילו עכשיו', link: '#' },
	{ text: 'צור קשר', link: '#' },
]

const Navbar = () => {
	return (
		<div className='backdrop-blur-lg py-2 h-16 border-b border-slate-900 fixed right-0 left-0 z-50 flex'>
			<div className='container flex flex-row items-center justify-between mx-auto'>
				<span className='font-medium text-lg'>{'Intellify'.toUpperCase()}</span>
				<div className='lg:flex hidden flex-row gap-4 text-sm'>
					{Routes.map((r) => (
						<NavItem
							key={r.link}
							{...r}
						/>
					))}
				</div>
				<Button>צור קשר</Button>
			</div>
		</div>
	)
}

const NavItem = ({ text, link }: { text: string; link: string }) => (
	<Link
		className='text-slate-300 hover:text-slate-100 duration-200'
		href={link}
	>
		{text}
	</Link>
)

export default Navbar
