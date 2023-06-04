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
					<h1 className='xl:text-5xl text-2xl font-semibold'>
						שירותי IT מתקדמים ומותאמים אישית - מקצוענות ואמינות בראש ובראשונה
					</h1>
					<p className='text-slate-300 text-sm xl:text-base'>
						היעד המוביל לשירותי IT מתקדמים ומותאמים אישית. אנחנו מבינים שבעולם הטכנולוגיה המשתנה במהירות,
						חשיבותו של מערכת מחשוב אמינה ומתקדמת אין ערך מדומה. לכן, אנו מציעים פתרונות טכנולוגיים מתקדמים
						שמתאימים בדיוק לצרכים הייחודיים של כל לקוח.
						<br />
						בצוות שלנו, יש לנו אנשי מקצוע מיומנים ומנוסים שמתמחים בתחום ה-IT.
					</p>
					<div className='flex flex-row gap-4 justify-center xl:justify-start'>
						<Button>צור קשר</Button>
						<Button className='bg-slate-900 bg-none border border-slate-700/40'>קרא עוד</Button>
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
