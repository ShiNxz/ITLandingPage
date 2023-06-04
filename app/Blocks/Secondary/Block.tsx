'use client'

import { fadeUp } from '@/MotionVariants'
import { motion } from 'framer-motion'

const Block = ({ title, text, image, index }: { title: string; text: string; image: string; index: number }) => {
	return (
		<motion.div
			variants={fadeUp}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
			custom={2 + index * 0.8}
			className='rounded-2xl cursor-pointer border border-t-0 border-slate-700/50 overflow-hidden'
		>
			<img
				src={image}
				className='h-40 w-full object-cover'
			/>
			<div className='bg-indigo-800/10 backdrop-blur-lg w-full p-4 h-full'>
				<h4 className='text-slate-50 mb-2'>{title}</h4>
				<p className='text-xs text-slate-400'>{text}</p>
			</div>
		</motion.div>
	)
}

export default Block
