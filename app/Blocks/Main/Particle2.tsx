'use client'

import { motion } from 'framer-motion'

const Particle2 = () => (
	<motion.div
		initial={{
			opacity: 0,
			left: '-50%',
		}}
		animate={{
			opacity: 0.2,
			left: '-10%',
			transition: {
				duration: 0.3,
			},
		}}
		className='absolute h-2/5 w-2/5 blur-[170px] bg-gradient-to-r rounded-full from-indigo-600 to-purple-700 -z-10 top-[40%] mx-auto'
	/>
)

export default Particle2
