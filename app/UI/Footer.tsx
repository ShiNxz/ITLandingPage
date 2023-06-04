import Link from 'next/link'

const Footer = () => {
	return (
		<div className='py-12 container flex flex-col xl:flex-row justify-between'>
			<div className='flex flex-col mb-6 xl:mb-0 xl:w-2/5 justify-between text-slate-400'>
				<div>
					<h4 className='text-white text-xl font-medium mb-2'>{'Intellify'.toUpperCase()}</h4>
					<p className='text-sm'>שירותי IT מתקדמים ומותאמים אישית - מקצוענות ואמינות בראש ובראשונה</p>
				</div>
				<div className='flex flex-row gap-2 text-sm'>
					<Link href='/'>תנאי שימוש</Link>•<Link href='/'>תנאי פרטיות</Link>
				</div>
			</div>
			<div className='flex flex-col xl:flex-row gap-12'>
				{Blocks.map((block) => (
					<div
						className='flex flex-col gap-1'
						key={block.title}
					>
						<span className='text-slate-50 font-medium'>{block.title}</span>
						{block.links.map((link) => (
							<Link
								href={link.href}
								className='text-slate-400 text-sm'
								key={link.title}
							>
								{link.title}
							</Link>
						))}
					</div>
				))}
			</div>
		</div>
	)
}

const Blocks = [
	{
		title: 'מידע נוסף',
		links: [
			{
				title: 'שירותים',
				href: '/',
			},
			{
				title: 'אודותינו',
				href: '/',
			},
			{
				title: 'פרויקטים',
				href: '/',
			},
			{
				title: 'שאלות נפוצות',
				href: '/',
			},
		],
	},
	{
		title: 'צור קשר',
		links: [
			{
				title: 'טופס צור קשר',
				href: '/',
			},
			{
				title: 'אימייל',
				href: '/',
			},
			{
				title: 'טלפון',
				href: '/',
			},
		],
	},
	{
		title: 'קישורים מומלצים',
		links: [
			{
				title: 'מחירון',
				href: '/',
			},
			{
				title: 'חדשות ומאמרים',
				href: '/',
			},
			{
				title: 'שותפים ולקוחות',
				href: '/',
			},
		],
	},
]

export default Footer
