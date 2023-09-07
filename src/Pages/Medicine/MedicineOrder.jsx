import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import { AuthContext } from '../../assets/provider/AuthProvider';

const MedicineOrder = () => {
    const [medicine, setMedicine] = useState([]);
    // const [loading,setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        fetch(`https://serpentine-world-server.vercel.app/medicine/${id}`)
            .then(res => res.json())
            .then(data => {
                setMedicine(data);
                console.log(data)
                // setLoading(false);
            })

    }, [])



    const { user } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();



    const onSubmit = (data) => {
        const orderdetails = {
            ...data,
            ...medicine,
        };
        delete orderdetails._id;

        axios
            .post("https://serpentine-world-server.vercel.app/orders", orderdetails)
            .then((res) => {
                alert("Added successfully");
                reset();
            })
            .then((result) => {
                if (result?.insertedId) {
                    Swal.fire({
                        title: 'Order processed successfully',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    });


                    reset();
                }
            });
    };


    return (
        <div className='bg-neutral-200 lg:py-8'>
            <h1 className="section_header">Place Order</h1>
            <h1 className="section_header2">SNAKES SAVE LIFE</h1>
            <div className='m_order'>
                <div className="card lg:card-side bg-base-100 shadow-xl w-11/12 lg:w-2/4  my-8 ">
                    <figure className='mx-auto my-auto lg:ms-8'>
                        <div className="div">
                            <div className="card card-compact lg:w-96 bg-base-100 shadow-xl">
                                <figure><img className='w-3/4' src={medicine.img} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{medicine.name}</h2>
                                    <p>Price: {medicine.price}</p>
                                    <p className='text-justify'>Effect: {medicine.effect}</p>
                                    <div className="card-actions justify-end">

                                    </div>
                                </div>
                            </div>

                        </div>
                    </figure>
                    <div className="card-body ">
                        <div className="div">
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-lg bg-base-200">


                                <form onSubmit={handleSubmit(onSubmit)} className="card-body">


                                    <div className="form-control">
                                        <label className="label">

                                        </label>

                                        <div className='input_brdr'>
                                            <i className="fa-solid fa-user me-2"></i>

                                            <input
                                                defaultValue={user.displayName}
                                                {...register("userName", { required: true })}
                                                className=" input  w-full max-w-xs"
                                            />
                                        </div>

                                    </div>



                                    <div className="form-control">
                                        <label className="label">

                                        </label>

                                        <div className='input_brdr'>

                                            <i className="fa-solid fa-envelope me-2"></i>

                                            <input
                                                defaultValue={user.email}
                                                {...register("email", { required: true })}
                                                className=" input  w-full max-w-xs"
                                            />
                                        </div>


                                    </div>

                                    <div className="form-control">
                                        <label className="label">

                                        </label>

                                        <div className='input_brdr'>
                                            <i className="fa-brands fa-artstation me-2"></i>


                                            <input
                                                defaultValue="Pending"
                                                {...register("status", { required: true })}
                                                className=" input  w-full max-w-xs"
                                            />

                                        </div>



                                    </div>
                                    <div className="form-control">
                                        <label className="label">

                                        </label>

                                        <div className='input_brdr'>
                                            <i className="fa-solid fa-location-dot "></i>

                                            <input placeholder="Address" {...register("address", { required: true })} name='address' className=" input  w-full max-w-xs" />

                                        </div>


                                        {errors.address && <span className="text-red-600">Address is required</span>}
                                    </div>


                                    {/* <div className="form-control">
                                    <label className="label">

                                    </label>

                                    <div className='input_brdr'>
                                        <i className="fa-solid fa-image me-2"></i>

                                        <input placeholder="City" {...register("city",{ required: true })} name='city' className=" input  w-full max-w-xs"/>

                                    </div>

                                    {errors.city && <span className="text-red-600">City is required</span>}
                                </div> */}


                                    <div className="form-control">
                                        <label className="label">

                                        </label>

                                        <div className='input_brdr'>
                                            <i className="fa-solid fa-mobile-screen-button "></i>

                                            <input placeholder="Phone Number" {...register("phone", { required: true })} name='phone' className=" input  w-full max-w-xs" />

                                        </div>

                                        {errors.phone && <span className="text-red-600">Phone Number is required</span>}
                                    </div>








                                    <div className="form-control mt-6">
                                        <input className="btn l_btn" type="submit" value="Submit" />

                                    </div>

                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </div>











        </div>
    );
};

export default MedicineOrder;