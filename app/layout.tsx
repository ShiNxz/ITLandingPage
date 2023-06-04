import Footer from './UI/Footer'
import Navbar from './UI/Navbar'
import './globals.scss'
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] })

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html
			lang='he'
			dir='rtl'
		>
			<body className={rubik.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	)
}

export const metadata = {
	title: 'Intellify | שירותי IT מתקדמים ומותאמים אישית - מקצוענות ואמינות בראש ובראשונה',
	description:
		'היעד המוביל לשירותי IT מתקדמים ומותאמים אישית. אנחנו מבינים שבעולם הטכנולוגיה המשתנה במהירות, חשיבותו של מערכת מחשוב אמינה ומתקדמת אין ערך מדומה. לכן, אנו מציעים פתרונות טכנולוגיים מתקדמים שמתאימים בדיוק לצרכים הייחודיים של כל לקוח. בצוות שלנו, יש לנו אנשי מקצוע מיומנים ומנוסים שמתמחים בתחום ה-IT.',
}

export default RootLayout
