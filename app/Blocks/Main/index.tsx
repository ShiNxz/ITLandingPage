import illustration from '@/public/illustration3.png'
import Particle from './Particle'
import Particle2 from './Particle2'
import Advantages from './Advantages'
import Button from '@/app/UI/Button'

const MainBlock = () => {
	return (
		<div className='flex flex-col gap-20 min-h-[90vh] border-b border-slate-900 py-20'>
			<div className='flex xl:flex-row flex-col items-center gap-20 container'>
				<Particle />
				<div className='flex flex-col xl:gap-10 gap-6 xl:w-3/5 xl:text-right text-center'>
					<h1 className='xl:text-5xl text-2xl font-semibold'>לורם איפסום לורם איפסום לורם איפסום</h1>
					<p className='text-slate-300 text-sm xl:text-base'>
						לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח.
						עמחליף גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, מוסן מנת. להאמית קרהשק סכעיט דז מא,
						עמחליף גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, מוסן מנת. להאמית קרהשק סכעיט דז מא,
					</p>
					<div className='flex flex-row gap-4 justify-center xl:justify-start'>
						<Button>לורם איפסום</Button>
						<Button className='bg-slate-900 bg-none border border-slate-700/40'>לורם איפסום</Button>
					</div>
				</div>
				<Particle2 />
				<img
					src={illustration.src}
					alt='logo'
					className='h-[30rem] xl:block hidden'
				/>
			</div>
			<div className='grid xl:grid-cols-3 items-center xl:gap-32 container'>
				<Advantages />
			</div>
		</div>
	)
}

export default MainBlock
