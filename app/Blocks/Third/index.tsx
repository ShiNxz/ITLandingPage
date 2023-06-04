import Button from '@/app/UI/Button'
import Particle from './Particle'

const ThirdBlock = () => {
	return (
		<div className='flex flex-col items-center border-b relative border-slate-900 py-24'>
			<Particle />
			<div className='flex flex-col items-center container'>
				<h2 className='text-4xl font-medium text-slate-50 mb-4'>התחילו עכשיו</h2>
				<p className='text-sm text-slate-400 mb-16 text-center'>
					לורם איפסום לורם איפסום לורם איפסום לורם איפסום לורם איפסום לורם
					<br />
					איפסום לורם איפסום לורם איפסום
				</p>
				<div className='flex flex-col xl:flex-row gap-4'>
					{Blocks.map((block, index) => (
						<Block
							key={index}
							{...block}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

const Block = ({ title, text, button }: { title: string; text: string; button: string }) => {
	return (
		<div className='bg-indigo-800/10 border rounded-xl border-slate-600/50 hover:border-slate-500/60 hover:-translate-y-0.5 duration-300 cursor-pointer backdrop-blur-lg w-full p-4 px-6'>
			<h4 className='text-slate-50 mb-1 text-lg'>{title}</h4>
			<p className='text-sm text-slate-400 mb-3'>{text}</p>
			<Button className='bg-none bg-slate-800/40 border border-slate-700/50 w-fit'>{button}</Button>
		</div>
	)
}

const Blocks = [
	{
		title: 'לורם איפסום',
		text: 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח.',
		button: 'לורם איפסום',
	},
	{
		title: 'לורם איפסום',
		text: 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח.',
		button: 'לורם איפסום',
	},
	{
		title: 'לורם איפסום',
		text: 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח.',
		button: 'לורם איפסום',
	},
]

export default ThirdBlock
