import type { IconType } from 'react-icons'
import { HiOutlineCheckCircle, HiOutlineShieldCheck, HiSquaresPlus } from 'react-icons/hi2'

const ADVS = [
	{
		title: 'ניסיון',
		description:
			'We have been working in the field for more than 10 years and have accumulated a lot of experience in the field of construction and renovation.',
		icon: HiOutlineShieldCheck,
	},
	{
		title: 'איכות',
		description:
			'We work with the best materials and the best professionals in the field, so we can guarantee the quality of the work.',
		icon: HiOutlineCheckCircle,
	},
	{
		title: 'אחריות',
		description:
			'We provide a warranty for all our work, so you can be sure that you will receive the best service.',
		icon: HiSquaresPlus,
	},
]

const Advantages = () => {
	return ADVS.map((adv) => (
		<div
			key={adv.title}
			className='flex flex-col items-center text-center xl:items-start xl:text-start mb-12'
		>
			<Icon icon={adv.icon} />
			<h4 className='text-xl font-medium mb-2'>{adv.title}</h4>
			<span className='text-slate-300 text-sm'>{adv.description}</span>
		</div>
	))
}

const Icon = ({ icon }: { icon: IconType }) => {
	const IconCP = icon as IconType
	return (
		<div className='rounded-md bg-slate-900/40 border border-slate-700 p-2 w-fit mb-3'>
			<IconCP
				fill='#c031e4'
				color='#590e6b'
				size={20}
			/>
		</div>
	)
}

export default Advantages
