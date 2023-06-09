import { Variants } from 'framer-motion'

export const fadeUp: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.2,
			duration: 0.3,
			easings: 'easeInOut',
		},
	}),
}
