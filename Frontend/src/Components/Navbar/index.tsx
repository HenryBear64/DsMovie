import {ReactComponent as GitHubIcon} from "../../assets/img/github.svg";
import './styles.css';
function NavBar() {

    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSmovie</h1>
                    <a href="https://github.com/HenryBear64"> target="_blank" rel="noneferrer"
                        <div className="dsmovie-contact-container">
                            <GitHubIcon />
                            <p className="dsmovie-contact-link">/DevSuperior</p>
                        </div>
                     </a>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;