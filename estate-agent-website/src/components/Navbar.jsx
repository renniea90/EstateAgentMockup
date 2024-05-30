import '../CSS/Navbar.css'

export default function Navbar() {
    return (
        <div class="navbar flex space-between">
            <h1 class="nav-title">PALS Estate Agents</h1>
            <ul class="flex list space-around">
                <li class="list-item">HOME</li>
                <li class="list-item">BUYERS</li>
                <li class="list-item">SELLERS</li>
            </ul>
            <p class="repo-link">Repo</p>
        </div>
    )
}