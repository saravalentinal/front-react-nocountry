/* import { useState, useRef, useEffect, useContext } from 'react'
import AuthContext from '../context/AuthProvider'
import axios from '../API/axios';

const LOGIN_URL = '/auth'

const Login2 = () => {

    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();
  
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {

            const response = await axios.post(LOGIN_URL,
                JSON.stringify({user, pwd}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data))
            /* console.log(JSON.stringify(response)) */
            /* const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken})
            setUser('');
            setPwd('');
            setSuccess(true);

        }catch (err) {
            if(!err?.response){
                setErrMsg('No server response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing username or password');
            } else if (err.response?.status === 401){
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login failed');
            }
            errRef.current.focus();
        }
    }

  return (
    <>
        {success ? (
            <section>
                <h1>You are logged in!</h1>
                <img src="/img/doctorgirl.jpg"></img>
            </section>
        ) : (
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username:</label>
                <input 
                    type="text"
                    id="username"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                ></input>

                <label htmlFor='password'>Password:</label>
                <input 
                    type="password"
                    id="password"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                ></input>
                <button>Sign In</button>
            </form>
        </section>
        )}
    </>
  )
}

export default Login2 */