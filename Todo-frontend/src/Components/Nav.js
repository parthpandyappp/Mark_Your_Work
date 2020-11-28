import React from 'react'

function Nav() {
    return (
        // <nav className="nav" style={{backgroundColor:"black", height :"70px", width:"100%", fontFamily:"Nerko One"}}>Fancy Nav</nav>

        <nav className="navbar navbar-light bg-light">
            <form>
                <h2 className="text-center" style={{ fontFamily: "Fredoka One", alignSelf: "center" }}>Yet To-dos</h2>
            </form>
            <span className="navbar-text"><a href="https://github.com/parthpandyappp/"><i class="fa fa-github" style={{ fontSize: 50 }}></i></a></span>
        </nav>
    )
}

export default Nav