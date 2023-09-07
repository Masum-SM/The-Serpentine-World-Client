
import axios from "axios";
import { useForm } from "react-hook-form";


import Swal from 'sweetalert2'
const AddBooks = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    
    } = useForm();

    const onSubmit = (data) => {
        axios
          .post("https://serpentine-world-server.vercel.app/books", data)
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
        <div className="hero min-h-screen ">
        <div className="hero-content shadow-2xl lg:p-20  flex-col lg:flex-row-reverse">



            <div className="text-center md:w-1/2 lg:text-left">

            <img className="w-96" src="https://i.ibb.co/L0501QT/book.png" alt="" />
            </div>


            <div className="card flex-shrink-0 w-full max-w-sm shadow-lg bg-base-100">


                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <h1 className='text-3xl font-bold d_ttl'>Add Book</h1>

                    <div className="form-control">
                        <div className='input_brdr'>

                            <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className=" input  w-full max-w-xs" />
                        </div>
                        {errors.name && <span className="text-red-600">Name is required</span>}
                    </div>

                    <div className="form-control">
                        <div className='input_brdr'>

                            <input type="text" {...register("writer", { required: true })} name="writer" placeholder="Name of writer" className=" input  w-full max-w-xs" />
                        </div>
                        {errors.writer && <span className="text-red-600">writer is required</span>}
                    </div>

                    <div className="form-control">
                        <div className='input_brdr'>

                            <input type="text" {...register("bookLink", { required: true })} name="bookLink" placeholder="Book link" className=" input  w-full max-w-xs" />
                        </div>
                        {errors.bookLink && <span className="text-red-600">Book link is required</span>}
                    </div>



                    <div className="form-control">
                        <label className="label">

                        </label>

                        <div className='input_brdr'>
                          

                            <input type="text" {...register("img", { required: true })} name="img" placeholder="Photo URL" className=" input  w-full max-w-xs" />
                        </div>


                        {errors.img && <span className="text-red-600">Photo URL is required</span>}
                    </div>


                    <div className="form-control mt-6">
                        <input className="btn l_btn" type="submit" value="Add Book" />

                    </div>
                   
                </form>

            </div>
        </div>
    </div>
    );
};

export default AddBooks;