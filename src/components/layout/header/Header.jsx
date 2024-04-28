import { SlUser } from 'react-icons/sl'

import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'

const Header = ({ backLink }) => {
	// const {pathname} = useLocation()

	return (
		<header className={styles.header}>
			<button>
				<SlUser style={{ fontSize: 25 }} />
			</button>

			<Hamburger />
		</header>
	)
}

export default Header
