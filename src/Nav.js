import logo from './logo.png';

function Nav(props) {

    const {setAdmin} = props;

    return (
        <header className="App-header"> 
            <div onClick={() => window.location.reload(false)}>
                <img src={logo} alt={logo} />
                <p >Jake's Travel</p>
            </div>
            <nav>
                <ul>
                    <li onClick={() => window.location.reload(false)}>SURVEY</li>
                    <li onClick={setAdmin}>ADMIN</li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;