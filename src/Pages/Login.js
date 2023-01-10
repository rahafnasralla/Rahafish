import { useState } from "react";
export default function Login() {

    const [username,setUserName] = useState("")
    const [password,setPassword] = useState("")

    const login = (e) => {
        e.preventDefault();
        if(username==="rahaf"&&password==="777")
        window.location.replace("/");
        else 
        alert("username or password is wrong!")
    }
    return (
        <div>
            <main>
                <section className="glass">
                <form onSubmit={login} action="">
                    <input value={username} onChange={(e) => {setUserName(e.target.value)}}  type="text" placeholder="user name" />
                    <input value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder="password" />
                    <button>Login</button>
                </form>
                </section>
            </main>
        </div>
    )
}