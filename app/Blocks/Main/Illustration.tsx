'use client'

import { fadeUp } from '@/MotionVariants'
import illustration from '@/public/illustration3.png'
import { motion } from 'framer-motion'

const Illustration = () => (
	<motion.img
		src={illustration.src}
		alt='logo'
		className='h-[30rem] xl:block hidden'
		custom={1}
		variants={fadeUp}
		initial='hidden'
		whileInView='visible'
		viewport={{ once: true }}
	/>
)

export default Illustration
