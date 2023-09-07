
import axios from "axios";
import { useForm } from "react-hook-form";


import Swal from 'sweetalert2'



const AddSanke = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    
    } = useForm();

    const onSubmit = (data) => {
        axios
          .post("https://serpentine-world-server.vercel.app/snakes", data)
          .then(() => {
            Swal.fire({
                title: 'successfully Added',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
            reset();
          });
      };
    

    return (
        <div className="hero min-h-screen mt-0">
        <div className="hero-content shadow-2xl lg:p-20  flex-col lg:flex-row">



            <div className="text-center md:w-1/2 lg:text-left">

                <img className="w-96" src="https://i.ibb.co/8dXPgGv/s1-1.png" alt="" />
              
            </div>


            <div className="card flex-shrink-0 w-full max-w-sm shadow-lg bg-base-100">


                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <h1 className='text-3xl font-bold d_ttl'>Add Sanke</h1>

                    <div className="form-control">
                        <div className='input_brdr'>

                            <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className=" input  w-full max-w-xs" />
                        </div>
                        {errors.name && <span className="text-red-600">Name is required</span>}
                    </div>

                    <div className="form-control">
                        <div className='input_brdr'>

                            <input type="text" {...register("S_name", { required: true })} name="S_name" placeholder="Scinentific Name" className=" input  w-full max-w-xs" />
                        </div>
                        {errors.S_name && <span className="text-red-600">Scientific Name is required</span>}
                    </div>

                    <div className="form-control">
                        <div className='input_brdr'>

                            <input type="text" {...register("food", { required: true })} name="food" placeholder="Food Habit" className=" input  w-full max-w-xs" />
                        </div>
                        {errors.food && <span className="text-red-600">Food is required</span>}
                    </div>

                    <div className="form-control">
                        <div className='input_brdr'>

                            <input type="text" {...register("lf_Cylce", { required: true })} name="lf_Cylce" placeholder="Food Habit" className=" input  w-full max-w-xs" />
                        </div>
                        {errors.lf_Cylce && <span className="text-red-600">Life Cycle is required</span>}
                    </div>





                    <div className="form-control">
                        <label className="label">

                        </label>

                        <div className='input_brdr'>
                            <i className="fa-solid fa-image me-2"></i>

                            <input type="text" {...register("img", { required: true })} name="img" placeholder="Photo URL" className=" input  w-full max-w-xs" />
                        </div>


                        {errors.img && <span className="text-red-600">Photo URL is required</span>}
                    </div>


                    <div className="form-control mt-6">
                        <input className="btn l_btn" type="submit" value="Add Sanke" />

                    </div>
                   
                </form>

            </div>
        </div>
    </div>
    );
};

export default AddSanke;