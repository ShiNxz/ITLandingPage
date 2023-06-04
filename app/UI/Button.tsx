const Button = ({ children, className }: { children: React.ReactNode; className?: string }) => {
	return (
		<button
			className={
				'outline-none bg-gradient-to-r from-purple-500 to-indigo-500 px-6 py-2 text-slate-50 text-sm rounded-full ' +
				className
			}
		>
			{children}
		</button>
	)
}

export default Button
