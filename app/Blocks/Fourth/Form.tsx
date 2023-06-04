'use client'

import { fadeUp } from '@/MotionVariants'
import Button from '@/app/UI/Button'
import { motion } from 'framer-motion'

const Form = () => {
	return (
		<motion.div
			variants={fadeUp}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
			custom={2.5}
			className='bg-indigo-800/10 border rounded-xl border-slate-600/50 relative backdrop-blur-lg w-full p-4 overflow-hidden'
		>
			<div className='absolute h-1/5 w-1/5 blur-[50px] bg-gradient-to-r rounded-full from-indigo-700 to-purple-700 -z-10 -left-8 mx-auto' />
			<div className='absolute h-1/5 w-1/5 blur-[50px] bg-gradient-to-r rounded-full from-indigo-700 to-purple-700 -z-10 -right-8 bottom-8 mx-auto' />

			<Input
				id='name'
				label='שם מלא'
			/>
			<Input
				id='email'
				label='כתובת אימייל'
			/>
			<Input
				id='text'
				label='הודעה'
			/>

			<Button className='bg-none bg-slate-800/40 border border-slate-700/50 w-full'>שליחת פנייה</Button>
		</motion.div>
	)
}

const Input = ({ label, id, placeholder }: { label: string; id: string; placeholder?: string }) => (
	<>
		<label
			htmlFor={id}
			className='text-slate-100'
		>
			{label}
		</label>
		{id === 'text' ? (
			<textarea
				id={id}
				className='py-2 px-2 bg-indigo-950/20 border border-slate-600/50 rounded-lg mb-4 text-sm w-full outline-none text-slate-200'
			></textarea>
		) : (
			<input
				className='py-2 px-2 bg-indigo-950/20 border border-slate-600/50 rounded-lg mb-4 text-sm w-full outline-none text-slate-200'
				placeholder={placeholder}
				type='text'
				name={id}
				id={id}
			/>
		)}
	</>
)

export default Form
