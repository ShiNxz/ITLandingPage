import Button from '@/app/UI/Button'
import Particle from './Particle'

const SecondBlock = () => {
	return (
		<div className='py-24 border-b relative border-slate-900'>
			<Particle />
			<div className='flex flex-col xl:flex-row items-center gap-16 justify-between container'>
				<div className='flex flex-col gap-2 xl:w-1/3 text-center items-center xl:text-start xl:items-start'>
					<h2 className='text-3xl font-medium text-slate-50'>שימושים</h2>
					<p className='text-sm text-slate-400 mb-3'>
						אנו מספקים פתרונות ייחודיים ומותאמים אישית לצרכים הספציפיים של העסקים.
						מהתכנון והיישום של מערכות מתקדמות לאבטחת מידע, ועד לתמיכה טכנית מקצועית - כל אחד מהשימושים מספק
						יתרונות משמעותיים לעסקים המבקשים להשתמש בפתרונות ה-IT שלנו.
					</p>
					<Button className='bg-none bg-slate-900 border border-slate-700/50 w-fit'>התחילו עכשיו</Button>
				</div>
				<div className='grid grid-cols-1 xl:grid-cols-3 gap-4 xl:w-2/3'>
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

const Block = ({ title, text, image }: { title: string; text: string; image: string }) => {
	return (
		<div className='rounded-2xl cursor-pointer border border-t-0 border-slate-700/50 overflow-hidden'>
			<img
				src={image}
				className='h-40 w-full object-cover'
			/>
			<div className='bg-indigo-800/10 backdrop-blur-lg w-full p-4 h-full'>
				<h4 className='text-slate-50 mb-2'>{title}</h4>
				<p className='text-xs text-slate-400'>{text}</p>
			</div>
		</div>
	)
}

const Blocks = [
	{
		title: 'ניתוח ותכנון מערכות',
		text: 'בעזרת צוות המומחים שלנו, אנו מתאימים פתרונות טכנולוגיים מתקדמים שמאפשרים לעסק שלכם להפוך ליעיל ומתוחזק על מנת להשיג את התוצאות המבוקשות.',
		image: 'https://octo.vmware.com/wp-content/uploads/sites/18/2022/05/blockchain-v-1.6-release-blog--scaled-e1653345269770-576x324.jpeg',
	},
	{
		title: 'אבטחת מידע',
		text: 'עם מערכות אבטחה מתקדמות, הגנה מפני תוקפים ואיומים סייבריים, ותהליכים אוטומטיים לזיהוי ומניעת התקפות, אתם יכולים להיות בטוחים שמידע העסק שלכם נשמר בצורה מוגנת ומאובטחת.',
		image: 'https://i0.wp.com/mbrjournal.com/wp-content/uploads/2022/01/Blockchain_Cover.jpg?fit=1326%2C862&ssl=1',
	},
	{
		title: ' תמיכה ושירות מקצועי',
		text: 'אנחנו מתחייבים לספק לכם את התמיכה הטכנית המובילה בתחום, כדי שתוכלו להמשיך לפעול בצורה חלקה ונכונה.',
		image: 'https://www.deccanherald.com/sites/dh/files/articleimages/2022/08/15/blockchainistock-1358688859-1136321-1660559358.jpg',
	},
]

export default SecondBlock
