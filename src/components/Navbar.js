import './Navbar.css'
import logo from '../images/team.svg'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

export default function Navbar() {
    const {logout, isPending} = useLogout()
    const { user } = useAuthContext()

    return (
        <nav className="navbar">
            <ul>
                {!user && (
                <>
                    <li className="logo">
                        <img src={logo} alt="logo" />
                        <span>Tackle It</span>
                    </li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                </>
                )}

                {user && (
                    <li>
                        {!isPending && <button className="btn" onClick={logout}>Logout</button>}
                        {isPending && <button className="btn" disabled>Logging out...</button>}
                    </li>
                )}
            </ul>
        </nav>
    )
}