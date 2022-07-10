
const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault ()
        console.log("clicked")
    }

    return (
        <> 
           <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="text" name="user" id="user" />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" id="password" />
                </div>
                <input type="submit" value="Login" />
           </form>
        </>
    )
}

export default Login 
