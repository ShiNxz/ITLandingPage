'use client'

import type { IconType } from 'react-icons'
import { HiSquaresPlus } from 'react-icons/hi2'
import { AiOutlineFieldTime } from 'react-icons/ai'
import { MdAutoGraph } from 'react-icons/md'
import { motion } from 'framer-motion'
import { fadeUp } from '@/MotionVariants'

const ADVS = [
	{
		title: 'ניסיון',
		description:
			'עם יותר מעשור של ניסיון בענף, אנחנו יכולים להבטיח שאנחנו מבינים את האתגרים והדרישות המשתנות של העסקים המודרניים. ניסיוננו הרחב מאפשר לנו לספק פתרונות מותאמים, מהירים ויעילים שמסייעים ללקוחותינו להשיג תוצאות מרשימות בתחום ה-IT.',
		icon: AiOutlineFieldTime,
	},
	{
		title: 'איכות',
		description:
			'אנחנו מקפידים על סטנדרטים גבוהים של איכות בכל השלבים של הפרויקטים שלנו. השירותים שאנחנו מספקים מבוצעים באמצעות הטכנולוגיות המתקדמות ביותר ובעזרת מומחים מנוסים ומיומנים.',
		icon: MdAutoGraph,
	},
	{
		title: 'אחריות',
		description:
			'אנחנו מתייחסים לאחריות כחלק בלתי נפרד מהשירותים שאנו מספקים. אנחנו עומדים מאחורי הפתרונות והמערכות שאנחנו ממליצים ומיישמים. אנו מתעדכנים תמיד בטכנולוגיות המתקדמות ביותר ואנו נשארים זמינים לתמיכה טכנית, שאלות ותשובות, ופתרון בעיות.',
		icon: HiSquaresPlus,
	},
]

const Advantages = () => {
	return ADVS.map((adv, index) => (
		<motion.div
			key={adv.title}
			className='flex flex-col items-center text-center xl:items-start xl:text-start mb-12'
			custom={3 + index * 0.8}
			variants={fadeUp}
			initial='hidden'
			animate='visible'
			viewport={{ once: true }}
		>
			<Icon icon={adv.icon} />
			<h4 className='text-xl font-medium mb-2'>{adv.title}</h4>
			<span className='text-slate-300 text-sm'>{adv.description}</span>
		</motion.div>
	))
}

const Icon = ({ icon }: { icon: IconType }) => {
	const IconCP = icon as IconType
	return (
		<div className='rounded-md bg-slate-900/40 border border-slate-700 p-2 w-fit mb-3'>
			<IconCP
				fill='#c031e4'
				color='#590e6b'
				size={20}
			/>
		</div>
	)
}

export default Advantages
