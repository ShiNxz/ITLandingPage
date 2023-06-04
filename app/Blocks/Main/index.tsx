import Particle from './Particle'
import Particle2 from './Particle2'
import Advantages from './Advantages'
import TextSection from './TextSection'
import Illustration from './Illustration'

const MainBlock = () => {
	return (
		<div className='flex flex-col gap-20 min-h-[90vh] border-b border-slate-900 py-20'>
			<div className='flex xl:flex-row flex-col items-center gap-20 container'>
				<Particle />
				<TextSection />
				<Particle2 />
				<Illustration />
			</div>
			<div className='grid xl:grid-cols-3 items-center xl:gap-32 container'>
				<Advantages />
			</div>
		</div>
	)
}

export default MainBlock
