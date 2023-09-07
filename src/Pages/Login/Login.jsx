import { useContext } from 'react';
import { AuthContext } from '../../assets/provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import "./Login.css"


const Login = () => {

    const { signIn,googleSignIN } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(resutl => {
                const user = resutl.user;
                Swal.fire({
                    title: 'User logged in successfully',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
                console.log(user);
            })
    }

    const handleGoogleSignIN  = () =>{
        googleSignIN()
        .then(resutl => {
            const user = resutl.user;
            const saveUser = {name:user.displayName, email:user.email, url: user.photoURL}

            fetch('https://serpentine-world-server.vercel.app/users',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(saveUser)
            })
            .then(res => res.json())
            .then(() =>{
                    navigate(from, { replace: true });
            })
        
        })
        .then(()=>{
            Swal.fire({
                title: 'User logged in successfully',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
        })
    }

    return (
        <div>

            <div className="hero min-h-screen bg-base-200 px-2">

                <div className="hero-content card shadow-2xl lg:p-20 flex-col md:flex-row">

                    <div className="text-center md:w-1/2 lg:text-left">

                        <img src="https://i.ibb.co/MZ9kjPy/login.png" alt="" />
                        <p className='text-center mt-8 lg:mt-16 '> <Link to="/signup" className='account' >Create an account</Link> </p>
                    </div>

                    <div className="card shadow-lg md:w-1/2 flex-shrink-0 w-full max-w-sm  bg-base-100">
                      
                        <form onSubmit={handleLogin} className="card-body">
                        <h1 className='text-3xl font-bold'>Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    
                                </label>
                                <div className='input_brdr'>
                                <i className="fa-solid fa-envelope me-2"></i>
                                <input type="email" name='email' placeholder="Email" className=" input  w-full max-w-xs" />
                                </div>
                                
                                
                            </div>
                            <div className="form-control">
                                <label className="label">
                                 
                                </label>

                                <div className='input_brdr'>
                                <i className="fa-solid fa-unlock me-2"></i>
                                
                                <input type="password" name="password" placeholder="password" className="input  w-full max-w-xs" />
                                </div>

                                
                                
                                <label className="label">
                                   
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <input className="btn l_btn" type="submit" value="Login" />
                            </div>

                            <h1 className='text-center text-or divider'>OR</h1>
                            <button onClick={handleGoogleSignIN} className='ggl_btn'><i className="fa-brands fa-google me-4"></i> Sign in with Google</button>

                        </form>
                        
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Login;