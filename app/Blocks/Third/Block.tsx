'use client'

import { fadeUp } from '@/MotionVariants'
import { motion } from 'framer-motion'
import Button from '@/app/UI/Button'

const Block = ({ title, text, button, index }: { title: string; text: string; button: string; index: number }) => {
	return (
		<motion.div
			variants={fadeUp}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
			custom={2 + index * 0.7}
			className='bg-indigo-800/10 border rounded-xl border-slate-600/50 hover:border-slate-500/60 hover:-translate-y-0.5 duration-300 cursor-pointer backdrop-blur-lg w-full p-4 px-6 flex flex-col justify-between'
		>
			<div>
				<h4 className='text-slate-50 mb-1 text-lg'>{title}</h4>
				<p className='text-sm text-slate-400 mb-3'>{text}</p>
			</div>
			<Button className='bg-none bg-slate-800/40 border border-slate-700/50 w-fit'>{button}</Button>
		</motion.div>
	)
}

export default Block
