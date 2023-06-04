'use client'

import { motion } from 'framer-motion'

const Particle = () => (
	<motion.div
		initial={{
			opacity: 0,
			top: '-50%',
		}}
		animate={{
			opacity: 0.2,
			top: '-10%',
			transition: {
				duration: 0.3,
			},
		}}
		className='absolute h-3/5 w-3/5 blur-[170px] bg-gradient-to-r rounded-full from-indigo-700 to-purple-700 -z-10 left-0 right-0 mx-auto'
	/>
)

export default Particle
