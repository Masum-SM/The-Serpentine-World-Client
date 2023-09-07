import { useRef } from 'react';
import emailjs from "emailjs-com";
import Swal from 'sweetalert2'

const EmailHome = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Good job!",
            text: "Your Message sent successfullly!!",
            icon: "success",
            button: "Aww yiss!",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });

        emailjs
            .sendForm(
                "service_2oohr2o",
                "template_qoqxble",
                form.current,
                "user_r7CjpvJ4TlNwjhHFca4tE"

            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };
    return (
        <div className='pb-32 text-white dark:text-black'>
            <div className='w-4/5 mx-auto'>
                <div className='mt-16 text-center con_formSection'>
                    {/* <h1 className='text-center mb-4'>We would love to hear from you</h1>
                    <h3>If you have any question about Admission, Features , faculties , Subject , or any other , feel free to contact us.</h3> */}
                    <h2 className="section_header">email</h2>
                    <h2 className="section_header2">We would love to hear from you</h2>
                    <h4 className="max-w-[800px] mx-auto header_info my-8 px-2">If you have any question about Admission, Features , faculties , Subject , or any other , feel free to contact us.</h4>

                </div>
            </div>
            <div className='w-4/5 mx-auto mt-16'>
                <form
                    onSubmit={sendEmail}
                    ref={form}
                >
                    <div className='w-4/5 md:w-3/5 lg:w-3/5 mx-auto card bg-base-100 shadow-2xl shadow-stone-400  p-12'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                            <div className="form-control w-full mb-4 con_frm">
                                <label className="label">Name</label>
                                <input
                                    type="text"
                                    className="input input-bordered w-full"

                                    required />
                            </div>

                            <div className="form-control w-full  mb-4 con_frm">
                                <label className="label">Email</label>
                                <input type="email" className="input input-bordered w-full " required />
                            </div>
                        </div>

                        <div className="form-control w-full mb-4 con_frm">
                            <label className="label">Message</label>
                            <textarea className="textarea textarea-bordered h-24" required></textarea>
                        </div>

                        <input className='contact_btn mt-8' type="submit" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default EmailHome;