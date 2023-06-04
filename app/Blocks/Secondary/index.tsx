import Block from './Block'
import Particle from './Particle'
import TextArea from './TextArea'

const SecondBlock = () => {
	return (
		<div className='py-24 border-b relative border-slate-900'>
			<Particle />
			<div className='flex flex-col xl:flex-row items-center gap-16 justify-between container'>
				<TextArea />
				<div className='grid grid-cols-1 xl:grid-cols-3 gap-4 xl:w-2/3'>
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
