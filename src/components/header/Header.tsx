import LogosComponent from '../../common/logos/logos'
import { NavLink, Link } from 'react-router-dom'

import './header.scss'

const HeaderComponent = () => {
    return (
        <div className='header-container'>
            <div className='header-logo'>
                <Link to='/'>
                    <LogosComponent name='camera-logo' />
                </Link>
            </div>
            <div className='header-link-options'>
                <NavLink className={({ isActive }) => isActive ? 'header-Ling-Active' : 'header-link'} to="/">Home</NavLink>
                <a className='header-link' href="/">Categories</a>
                <a className='header-link' href="/">My Favorites</a>
            </div>
        </div>
    )
}

export default HeaderComponent