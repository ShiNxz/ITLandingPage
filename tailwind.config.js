/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [
		({ addComponents }) => {
			addComponents({
				'.container': {
					'width': '100%',
					'marginLeft': 'auto',
					'marginRight': 'auto',
					paddingLeft: '2rem',
					paddingRight: '2rem',
					'@screen sm': {
						maxWidth: '540px',
					},
					'@screen md': {
						maxWidth: '720px',
					},
					'@screen lg': {
						maxWidth: '960px',
					},
					'@screen xl': {
						maxWidth: '1250px',
					},
				},
			})
		},
	],
}
