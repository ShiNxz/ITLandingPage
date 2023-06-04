'use client'

import { fadeUp } from '@/MotionVariants'
import { motion } from 'framer-motion'

const Texts = () => (
	<>
		<motion.h2
			variants={fadeUp}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
			custom={0}
			className='text-4xl font-medium text-slate-50 mb-4'
		>
			התחילו עכשיו
		</motion.h2>
		<motion.p
			variants={fadeUp}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
			custom={1}
			className='text-sm text-slate-400 mb-16 text-center'
		>
			אנחנו מציגים לכם את הצעדים הראשונים להתחיל בשירותי ה-IT שלנו.
			<br />
			כאן תוכלו למצוא מספר כרטיסים המציעים פתרונות ושירותים מיוחדים שיסייעו לכם להתחיל בהם בצורה פשוטה ויעילה.
		</motion.p>
	</>
)

export default Texts
