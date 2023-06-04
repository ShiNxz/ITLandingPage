import Button from '@/app/UI/Button'
import Particle from './Particle'

const FourthBlock = () => {
	return (
		<div className='border-b relative border-slate-900 py-24'>
			<Particle />
			{/* <Particle /> */}
			<div className='container flex flex-col xl:flex-row gap-20'>
				<div className='flex flex-col'>
					<h2 className='text-4xl font-medium text-slate-50 mb-6'>צרו קשר</h2>
					<p className='text- text-slate-400 mb-6'>צרו קשר למענה על כל שאלה או בקשה ונשמח לעמוד לרשותכם</p>
					<p className='text- text-slate-400 mb-8'>
						לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן
						סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז
						דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך
						וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם
						הכייר וק.
					</p>
					<Button className='bg-slate-800/40 border bg-none border-slate-700/50 w-fit'>לורם איפסום</Button>
				</div>
				<Form />
			</div>
		</div>
	)
}

const Form = () => {
	return (
		<div className='bg-indigo-800/10 border rounded-xl border-slate-600/50 relative backdrop-blur-lg w-full p-4 overflow-hidden'>
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
		</div>
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

export default FourthBlock
