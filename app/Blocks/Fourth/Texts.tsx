'use client'

import Button from '@/app/UI/Button'
import { fadeUp } from '@/MotionVariants'
import { motion } from 'framer-motion'

const Texts = () => {
	return (
		<div className='flex flex-col'>
			<motion.h2
				variants={fadeUp}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				custom={0}
				className='text-4xl font-medium text-slate-50 mb-6'
			>
				צרו איתנו קשר
			</motion.h2>
			<motion.p
				variants={fadeUp}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				custom={0.5}
				className='text- text-slate-400 mb-6'
			>
				אנחנו נשמח לשמוע מכם ולעזור בכל שאלה, בקשה או פרויקט שיש לכם. צוות התמיכה שלנו עומד לרשותכם לספק פתרונות
				מותאמים אישית ולענות על כל הצרכים שלכם. אנא מלאו את הטופס למטה ונחזור אליכם בהקדם האפשרי. או אם ברצונכם,
				תוכלו להתקשר אלינו ישירות על מנת לדבר עם אחד מנציגי המכירות שלנו. אנחנו כאן כדי לעזור לכם להתחיל ולהשיג
				את הפתרונות הטכנולוגיים שתמיד רציתם.
			</motion.p>
			<motion.p
				variants={fadeUp}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				custom={1.5}
				className='text- text-slate-400 mb-8'
			>
				אנחנו חברה המתמחה בספק שירותי IT מתקדמים ומקצועיים. אנו מציעים פתרונות מותאמים אישית לצרכים הטכנולוגיים
				של עסקים בכל גודלם. עם שנות ניסיון רבות בתחום, אנחנו גאים לספק שירות איכותי, מקצועי ואמין ללקוחותינו.
				אנחנו מתחייבים לשירות מעולה, יעילות וזמינות מתמידה. אנחנו מבינים את הצורך בפתרונות טכנולוגיים מהירים
				ומתקדמים, ולכן אנו עובדים עם צוות מיומן שימציא את הפתרון המושלם עבורכם. אל תהססו ליצור איתנו קשר כדי
				לקבל שירות מוביל בתחום ה-IT.
			</motion.p>
			<motion.div
				variants={fadeUp}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				custom={2}
			>
				<Button className='bg-slate-800/40 border bg-none border-slate-700/50 w-fit'>תנאי שימוש</Button>
			</motion.div>
		</div>
	)
}

export default Texts
