import Header from './header/Header'

const Layout = ({ children }) => {
	return (
		<div>
			<Header />

			{children && <div>{children}</div>}
		</div>
	)
}

export default Layout
