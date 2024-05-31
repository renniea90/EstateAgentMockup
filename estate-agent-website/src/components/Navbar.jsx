import '../CSS/Navbar.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Navbar() {

    const repo = <FontAwesomeIcon icon={faGithub} />
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
            <p class="repo-link">
                <Link to='https://github.com/SuzyQ-2117/EstateAgentMockup' target="_blank" class="link">{repo}</Link>
                </p>
        </div>
    )
}