import "./Header.css"
import logo from "../../../public/img/logo.png"

const Header = () => {
    return(
        <header className="header">
            <img src={logo} alt="logo alurafix" />
            <nav className="header-botones">
                <button className="header-boton home">HOME</button>
                <button className="header-boton nuevo">NUEVO VIDEO</button>
            </nav>

        </header>
    )
}

export default Header;