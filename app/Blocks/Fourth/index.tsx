import Form from './Form'
import Particle from './Particle'
import Texts from './Texts'

const FourthBlock = () => {
	return (
		<div className='border-b relative border-slate-900 py-24'>
			<Particle />
			<div className='container flex flex-col xl:flex-row gap-20'>
				<Texts />
				<Form />
			</div>
		</div>
	)
}

export default FourthBlock
