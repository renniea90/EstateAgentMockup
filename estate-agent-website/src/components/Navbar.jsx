import '../CSS/Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div class="navbar flex space-between">
            <h1 class="nav-title">PALS Estate Agents</h1>
            <ul class="flex list space-around">
                <li class="list-item">
                    <Link to='/' class="link">HOME</Link>
                </li>
                <li class="list-item">
                    <Link to='/buyers' class="link">BUYERS</Link>
                </li>
                <li class="list-item">
                    <Link to='/sellers' class="link">SELLERS</Link>
                </li>
            </ul>
            <p class="repo-link">Repo</p>
        </div>
    )
}