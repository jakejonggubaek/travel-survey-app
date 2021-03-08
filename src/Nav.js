import logo from './logo.png';

function Nav() {
    return (
        <header className="App-header">
            <img src={logo} alt={logo}/>
            <nav>
                <ul>
                    <li>BOOKING</li>
                    <li>ABOUT US</li>
                    <li>CONTACT</li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;