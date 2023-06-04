import MainBlock from './Blocks/Main'
import SecondBlock from './Blocks/Secondary'
import ThirdBlock from './Blocks/Third'
import FourthBlock from './Blocks/Fourth'

const Home = () => {
	return (
		<main className='flex flex-col mt-16 w-screen'>
			<MainBlock />
			<SecondBlock />
			<ThirdBlock />
			<FourthBlock />
		</main>
	)
}

export default Home
