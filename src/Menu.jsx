import { Link } from "react-router-dom";
function Menu() {
    return (
        <div className="flex">
            <div>
            <Link to='/'>Navbar</Link>
            </div>
            
            <ul>

                <li>
                    <Link to='/page1'>Page One</Link>
                </li>
                <li>
                    <Link to='/page2'>Page Two</Link>
                </li>
            </ul>

        </div>
    )
}

export default Menu