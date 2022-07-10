const Navbar = ({loggedInUser, activeUser}) => {
    const logout = (e) => {
        e.preventDefault()
        activeUser("")
    }
    return (
        <nav>
            
     
            { loggedInUser ?
                <>
                    {loggedInUser}
                    <a href="/">Links</a>
                    <a href="/">Appearance</a>
                    <a href="/">Upgrade</a>
                    <a href="/" onClick={logout}>Logout</a>
                </>
                :
                <>
                    guest
                    <a href="/">Login</a>
                    <a href="/">SignUp</a>  
                </>
                }
        </nav>
    )
}

export default Navbar