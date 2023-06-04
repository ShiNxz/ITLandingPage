'use client'

import { fadeUp } from '@/MotionVariants'
import Button from '@/app/UI/Button'
import { motion } from 'framer-motion'

const TextArea = () => {
	return (
		<div className='flex flex-col gap-2 xl:w-1/3 text-center items-center xl:text-start xl:items-start'>
			<motion.h2
				className='text-3xl font-medium text-slate-50'
				variants={fadeUp}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				custom={0}
			>
				שימושים
			</motion.h2>
			<motion.p
				className='text-sm text-slate-400 mb-3'
				variants={fadeUp}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				custom={1}
			>
				אנו מספקים פתרונות ייחודיים ומותאמים אישית לצרכים הספציפיים של העסקים. מהתכנון והיישום של מערכות מתקדמות
				לאבטחת מידע, ועד לתמיכה טכנית מקצועית - כל אחד מהשימושים מספק יתרונות משמעותיים לעסקים המבקשים להשתמש
				בפתרונות ה-IT שלנו.
			</motion.p>
			<motion.div
				variants={fadeUp}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				custom={2}
			>
				<Button className='bg-none bg-slate-900 border border-slate-700/50 w-fit'>התחילו עכשיו</Button>
			</motion.div>
		</div>
	)
}

export default TextArea
