import Button from '@/app/UI/Button'
import Particle from './Particle'

const FourthBlock = () => {
	return (
		<div className='border-b relative border-slate-900 py-24'>
			<Particle />
			{/* <Particle /> */}
			<div className='container flex flex-col xl:flex-row gap-20'>
				<div className='flex flex-col'>
					<h2 className='text-4xl font-medium text-slate-50 mb-6'>צרו איתנו קשר</h2>
					<p className='text- text-slate-400 mb-6'>
						אנחנו נשמח לשמוע מכם ולעזור בכל שאלה, בקשה או פרויקט שיש לכם. צוות התמיכה שלנו עומד לרשותכם לספק
						פתרונות מותאמים אישית ולענות על כל הצרכים שלכם. אנא מלאו את הטופס למטה ונחזור אליכם בהקדם
						האפשרי. או אם ברצונכם, תוכלו להתקשר אלינו ישירות על מנת לדבר עם אחד מנציגי המכירות שלנו. אנחנו
						כאן כדי לעזור לכם להתחיל ולהשיג את הפתרונות הטכנולוגיים שתמיד רציתם.
					</p>
					<p className='text- text-slate-400 mb-8'>
						אנחנו חברה המתמחה בספק שירותי IT מתקדמים ומקצועיים. אנו מציעים פתרונות מותאמים אישית לצרכים
						הטכנולוגיים של עסקים בכל גודלם. עם שנות ניסיון רבות בתחום, אנחנו גאים לספק שירות איכותי, מקצועי
						ואמין ללקוחותינו. אנחנו מתחייבים לשירות מעולה, יעילות וזמינות מתמידה. אנחנו מבינים את הצורך
						בפתרונות טכנולוגיים מהירים ומתקדמים, ולכן אנו עובדים עם צוות מיומן שימציא את הפתרון המושלם
						עבורכם. אל תהססו ליצור איתנו קשר כדי לקבל שירות מוביל בתחום ה-IT.
					</p>
					<Button className='bg-slate-800/40 border bg-none border-slate-700/50 w-fit'>תנאי שימוש</Button>
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
