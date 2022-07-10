import { useState } from "react"

const Login = ({activeUser}) => {

    const initialFormData = {
        user: "",
        password: ""
    }

    const [formData, setUser] = useState(initialFormData)

    const handleSubmit = (e) => {
        e.preventDefault ()
        console.log("clicked")
        console.log(formData)
        activeUser(formData.user)
        setUser(initialFormData)
    }

    const handleUserData = (e) => {
  
        setUser({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    return (
        <> 
           <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="text" name="user" id="user" value = {formData.user} onChange={handleUserData}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" id="password" value = {formData.password} onChange={handleUserData} />
                </div>
                <input type="submit" value="Login" />
           </form>
        </>
    )
}

export default Login 
