import './header.css'

function Header({links}) {
    

    return (
        <header>
            <nav>
                <ul>
                    {
                        links.map((link)=>{
                            return <li>{link}</li>
                        })
                    }
                </ul>
            </nav>
        </header> 
    )
}

export default Header
