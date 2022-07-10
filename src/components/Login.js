
const Login = () => {
    return (
        <> 
           <form>
                <label>Email:</label>
                <input type="text" name="user" id="user" />
                <label>Password:</label>
                <input type="password" name="password" id="password" />
                <input type="submit" value="Login" />
           </form>
        </>
    )
}

export default Login 
