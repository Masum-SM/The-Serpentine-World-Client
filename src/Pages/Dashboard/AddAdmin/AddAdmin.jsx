import { useState } from "react";
import Swal from 'sweetalert2'
import "./AddAdmin.css"


const AddAdmin = () => {
    const [email, setEmail] = useState("");




    const handleOnBlur = (e) => {
        const inputText = e.target.value;
        setEmail(inputText);
    };
    const handleAdmin = (e) => {
        e.preventDefault();
        const user = { email };
        fetch("https://serpentine-world-server.vercel.app/users", {
            method: "put",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Admin successfully Added',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    });
                }
            });
    };
    return (
        <div className="card card-52 shadow-xl p-32 mt-8">

            <form className="form-control" onSubmit={handleAdmin}>
            <h1 className='text-3xl font-bold d_ttl'>Provide Acces As Admin</h1>
                <div className="form-control">
                    <label className="label">

                    </label>

                    <div className='admin_input'>

                        <i className="fa-solid fa-envelope me-2"></i>


                        <input
                            type="email"
                            className="input  w-full max-w-xs bg-transparent"
                            onBlur={handleOnBlur}
                            placeholder="Email"
                        />
                    </div>


                </div>



                <br />
                {/* <button className="admin-btn mt-3 mb-5" type="submit">
              Submit
            </button> */}

                <div className="form-control mt-6">
                    <input className="btn l_btn" type="submit" value="Make Admin" />

                </div>
            </form>
        </div>
    );
};

export default AddAdmin;