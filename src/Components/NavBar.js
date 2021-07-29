import Cartwidget from "./cartwidget"

const NavBar = () =>
    <div>
        <ul>
            <li>Productos</li>
            <li>Ofertas</li>
            <li>
                <Cartwidget/>
            </li>
        </ul>
    </div>
export default NavBar