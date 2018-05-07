import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <header className="design__header">
            <Link to="/">Home Design</Link>
        </header>
    )
}

export default Header;