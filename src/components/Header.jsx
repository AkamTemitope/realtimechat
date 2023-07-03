import { useAuth } from '../utils/AuthContext'
import { Link } from 'react-router-dom'
import { LogOut, LogIn } from 'react-feather'

const Header = () => {
    const {user, handleLogout} = useAuth()
    return (
        <div id="header--wrapper">
            {user ? (
                <>
                    <h4>Welcome <span>{user.name} </span></h4>
                    <img src="https://i.postimg.cc/qvZnPc9v/rtc.png" alt="RTC" />
                    <LogOut className="header--link" onClick={handleLogout}/>
                </>
            ): (
                <>
                    <Link to="/">
                        <LogIn className="header--link"/>
                    </Link>
                </>
            )}
        </div>
    )
}

export default Header
