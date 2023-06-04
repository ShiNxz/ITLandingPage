import Button from '@/app/UI/Button'
import Particle from './Particle'

const ThirdBlock = () => {
	return (
		<div className='flex flex-col items-center border-b relative border-slate-900 py-24'>
			<Particle />
			<div className='flex flex-col items-center container'>
				<h2 className='text-4xl font-medium text-slate-50 mb-4'>התחילו עכשיו</h2>
				<p className='text-sm text-slate-400 mb-16 text-center'>
					אנחנו מציגים לכם את הצעדים הראשונים להתחיל בשירותי ה-IT שלנו.
					<br />
					כאן תוכלו למצוא מספר כרטיסים המציעים פתרונות ושירותים מיוחדים שיסייעו לכם להתחיל בהם בצורה פשוטה
					ויעילה.
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
		<div className='bg-indigo-800/10 border rounded-xl border-slate-600/50 hover:border-slate-500/60 hover:-translate-y-0.5 duration-300 cursor-pointer backdrop-blur-lg w-full p-4 px-6 flex flex-col justify-between'>
			<div>
				<h4 className='text-slate-50 mb-1 text-lg'>{title}</h4>
				<p className='text-sm text-slate-400 mb-3'>{text}</p>
			</div>
			<Button className='bg-none bg-slate-800/40 border border-slate-700/50 w-fit'>{button}</Button>
		</div>
	)
}

const Blocks = [
	{
		title: 'יעילות מותאמת אישית',
		text: 'אנו נתאים לכם מתקנים, מגברים ומשדרים - נספק לכם את הכלים הנדרשים כדי להגדיל את היכולת הפועלת של הצוות שלכם ולשפר את ביצועי העסק.',
		button: 'צפו בדוגמאות',
	},
	{
		title: 'אבטחה מתקדמת',
		text: 'דאגה לאבטחת המידע שלכם היא חשיבה ראשונה בשירותי ה-IT שלנו. נספק לכם את הכלים והפתרונות המתקדמים ביותר כדי לשמור על מידע העסק שלכם מאיומים סייבריים ולמנוע גישה לא מורשית.',
		button: 'מידע נוסף',
	},
	{
		title: 'תמיכה וסיוע מקצועי',
		text: 'אנו נספק לכם תמיכה טכנית מקצועית ומקיפה לאורך כל התהליך. צוות התמיכה שלנו יענה על שאלותיכם, יספק פתרונות מהירים לבעיות ויבצע שדרוגים ותיקונים כאשר נדרש.',
		button: 'צור קשר',
	},
]

export default ThirdBlock
