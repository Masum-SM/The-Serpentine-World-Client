import { useContext } from "react";
import { useForm } from "react-hook-form";

import { AuthContext } from "../../assets/provider/AuthProvider";

import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const { createUser, updateUserProfile ,googleSignIN } = useContext(AuthContext)

    const onSubmit = data => {
        console.log(data);

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log(loggedUser)
                        const saveUser = {name:data.name, email:data.email, url: data.photoURL}

                        fetch('https://serpentine-world-server.vercel.app/users',{
                            method:'POST',
                            headers:{
                                'content-type':'application/json'
                            },
                            body:JSON.stringify(saveUser)
                        })
                        .then(res => res.json())
                        .then(data =>{
                            if(data.insertedId){
                                reset();
                                navigate(from, { replace: true });
                            }
                        })
                       

                        
                     
                    })
                    .then(()=>{
                        Swal.fire({
                            title: 'User Sign Up in successfully',
                            showClass: {
                                popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                                popup: 'animate__animated animate__fadeOutUp'
                            }
                        });
                    })
                    .catch((error => console.log(error)))



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
        <>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content shadow-2xl lg:p-20  flex-col lg:flex-row-reverse">



                    <div className="text-center md:w-1/2 lg:text-left">

                        <img src="https://i.ibb.co/WW1tnpD/regis.png" alt="" />
                        <p className='text-center mt-8 lg:mt-16 '> <Link to="/login" className='account' >Already Registered? Go to login</Link> </p>
                    </div>






                    <div className="card flex-shrink-0 w-full max-w-sm shadow-lg bg-base-100">


                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h1 className='text-3xl font-bold'>Sign Up</h1>

                            <div className="form-control">
                                <label className="label">

                                </label>

                                <div className='input_brdr'>
                                    <i className="fa-solid fa-user me-2"></i>

                                    <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className=" input  w-full max-w-xs" />
                                </div>

                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>



                            <div className="form-control">
                                <label className="label">

                                </label>

                                <div className='input_brdr'>

                                    <i className="fa-solid fa-envelope me-2"></i>

                                    <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className=" input  w-full max-w-xs" />
                                </div>

                                {errors.email && <span className="text-red-600">Email required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">

                                </label>

                                <div className='input_brdr'>
                                    <i className="fa-solid fa-unlock me-2"></i>



                                    <input type="password" {...register("password", {

                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z])/

                                    })} name="password" placeholder="password" className="input  w-full max-w-xs" />
                                </div>



                                {errors.password?.type === 'required' && <span className="text-red-600">Password must be 6 character long</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 character long</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-600">Password must have one uppercase, one lowercase, one number and one special character</span>}


                                <label className="label">


                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">

                                </label>

                                <div className='input_brdr'>
                                    <i className="fa-solid fa-image me-2"></i>

                                    <input type="text" {...register("photoURL", { required: true })} name="photoURL" placeholder="Photo URL" className=" input  w-full max-w-xs" />
                                </div>


                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>


                            <div className="form-control mt-6">
                                <input className="btn l_btn" type="submit" value="Sign Up" />

                            </div>

                            <h1 className='text-center text-or divider'>OR</h1>
                            <button onClick={handleGoogleSignIN} className='ggl_btn'><i className="fa-brands fa-google me-4"></i> Sign in with Google</button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;