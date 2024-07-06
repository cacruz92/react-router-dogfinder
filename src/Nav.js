import { NavLink } from "react-router-dom";
import "./Nav.css"

const Nav = ({dogs}) => {
    const links = dogs.map(dog => (
        <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`} >
            {dog.name}
        </NavLink>
    ));

    return(
        <nav>
            <NavLink className={NavLink} activeClassName="active" to="/" end>
            Home
            </NavLink>
            {links}
        </nav>
    );
}

export default Nav;