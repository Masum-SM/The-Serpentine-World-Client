import { Link } from "react-router-dom";
import "./Footer.css"


const Footer = () => {
    return (
        <footer>
        <div className='bg-dark footer_full mx-auto text-center'>
            <div className='footer_top_container'>
                <div className="footer_top p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-[1400px] mx-auto">
                    <div >
                        <h1>Subscribe to our Newsletter</h1>
                        <p>Sign up to receive email updates about courses</p>
                    </div>
                    <div className='lg:ml-32'>
                        <input className="e_input" type="email" placeholder='Enter your email' />
                        <button className="btn glass" type="submit">SubsCribe</button>
                    </div>
                </div>
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  max-w-[1500px] mx-auto">
                <div className='mr-4'>
                    <Link><img className="fot_Img" src="https://i.ibb.co/0yHs5zv/sanke-logo.png" alt="" /></Link>
                    <Link to="/" className="btn btn-ghost normal-case nav_icon_re sm: text-sm lg:text-2xl  text-left mb-3">The <span className='zero'> Serpertine </span> World</Link>
                    <h2 className="banner-titile">SNAKES SAVE LIFE</h2>

                </div>


                <div className="my-4 lg:text-start lg:mx-auto">
                    <h2 className='mb-3 footer_head2 ms-4'>Contact Us</h2>
                    <p className='mb-3 ms-4'><i className="fa-solid fa-phone ft_angle_icon"></i> +88-09666911463</p>
                    <p className='mb-3 ms-4'><i className="fa-solid fa-fax ft_angle_icon"></i> Fax: 880-2-9667222</p>
                    <p className='mb-3 ms-4'><i className="fa-solid fa-envelope ft_angle_icon"></i> serpentine.world@yahoo.com</p>
                  
                </div>

                {/* <div>
                    <h2 className='mt-10'> </h2>
                    <p className='mb-3'><i className="fa-solid fa-angle-right ft_angle_icon"></i> DU Forms</p>
                    <p className='mb-3'><i className="fa-solid fa-angle-right ft_angle_icon"></i> DU Institutional Repository</p>
                    <p className='mb-3'><i className="fa-solid fa-angle-right ft_angle_icon"></i> DU Barta</p>
                    <p className='mb-3'><i className="fa-solid fa-angle-right ft_angle_icon"></i> DU Library</p>

                </div> */}
                <div className="ms-4">
                    <h2 className='mb-3 footer_head2'>Links</h2>
                    <p className='mb-3'> <Link to="/snake">  <i className="fa-solid fa-angle-right ft_angle_icon me-2"></i>Snakes</Link> </p>
                    <p className='mb-3'> <Link to="/Books">  <i className="fa-solid fa-angle-right ft_angle_icon me-2"></i>Books</Link> </p>
                    <p className='mb-3 ms-4'> <Link to="/Medicine">  <i className="fa-solid fa-angle-right ft_angle_icon me-2"></i>Medicine</Link> </p>
                  
                </div>


            </div>
            <div className="footer_bottom text-center mx-auto">
                <p>© 2023 Serpentine World. All Rights Reserved. Design, Development and Maintenance by Masum & Nawrin</p>
            </div>
        </div>
        </footer>
    );
};

export default Footer;