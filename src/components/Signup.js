import { useState } from "react"

const SignUp = () => {

    return (
        <> 
           <form onSubmit={handleSubmit}>
                <div> 
                    <label>Username (for endpoint):</label>
                    <input type="text" name="user" id="user" />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" name="user" id="user" />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" id="password" />
                </div>
                <input type="submit" value="SignUp" />
           </form>
        </>
    )
}

export default SignUp