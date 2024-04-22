import React, {useState} from 'react'
import './Login.css'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [allEntry, setAllEntry] = useState([]);
  
  const submitHandler = (e) => {
    e.preventDefault();
    if (email && password) {
        const newEntry ={id : new Date().getTime().toString, email : email, password : password}
        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry)
        setEmail("");
        setPassword("");
    } else {
        alert ("user and pass incorrect")
    }
   
  }
  
    return (
    <>
        <div class="main" onSubmit={submitHandler}>
        <h1>ABC company</h1>
        <h3>Enter your login credentials</h3>
        <form action="">
            <label for="first">
                  Username:
              </label>
            <input type="text"
                   id="first"
                   name="first"
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}
                   />
 
            <label for="password">
                  Password:
              </label>
            <input type="password"
                   id="password"
                   name="password"
                   value={password} 
                   onChange={(e)=>setPassword(e.target.value)}

                   
                   />
 
            <div class="wrap">
                <button type="submit"
                        >
                    Submit
                </button>
            </div>
        </form>
        <p>Not registered? 
              <a href="#"
               >
                Create an account
            </a>
        </p>
    </div>
    <div>
        {
            allEntry.map((currentElem) =>{
                const {id, email, password} =currentElem
                return (
                    <div key={id}>
                        <p>Login data</p>
                        <p>{email}</p>
                        <p>{password}</p>

                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default Login