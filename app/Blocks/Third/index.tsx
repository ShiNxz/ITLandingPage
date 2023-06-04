import Block from './Block'
import Particle from './Particle'
import Texts from './Texts'

const ThirdBlock = () => {
	return (
		<div className='flex flex-col items-center border-b relative border-slate-900 py-24'>
			<Particle />
			<div className='flex flex-col items-center container'>
				<Texts />
				<div className='flex flex-col xl:flex-row gap-4'>
					{Blocks.map((block, index) => (
						<Block
							key={index}
							index={index}
							{...block}
						/>
					))}
				</div>
			</div>
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
