'use client'

import Button from '@/app/UI/Button'
import { motion } from 'framer-motion'
import { fadeUp } from '@/MotionVariants'

const TextSection = () => {
	return (
		<div className='flex flex-col xl:gap-10 gap-6 xl:w-3/5 xl:text-right text-center'>
			<motion.h1
				custom={0}
				variants={fadeUp}
				initial='hidden'
				whileInView='visible'
				className='xl:text-5xl text-2xl font-semibold'
				viewport={{ once: true }}
			>
				שירותי IT מתקדמים ומותאמים אישית - מקצוענות ואמינות בראש ובראשונה
			</motion.h1>
			<motion.p
				custom={1}
				variants={fadeUp}
				initial='hidden'
				whileInView='visible'
				className='text-slate-300 text-sm xl:text-base'
				viewport={{ once: true }}
			>
				היעד המוביל לשירותי IT מתקדמים ומותאמים אישית. אנחנו מבינים שבעולם הטכנולוגיה המשתנה במהירות, חשיבותו של
				מערכת מחשוב אמינה ומתקדמת אין ערך מדומה. לכן, אנו מציעים פתרונות טכנולוגיים מתקדמים שמתאימים בדיוק
				לצרכים הייחודיים של כל לקוח.
				<br />
				בצוות שלנו, יש לנו אנשי מקצוע מיומנים ומנוסים שמתמחים בתחום ה-IT.
			</motion.p>
			<motion.div
				className='flex flex-row gap-4 justify-center xl:justify-start'
				custom={2}
				variants={fadeUp}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
			>
				<Button>צור קשר</Button>
				<Button className='bg-slate-900 bg-none border border-slate-700/40'>קרא עוד</Button>
			</motion.div>
		</div>
	)
}

export default TextSection
