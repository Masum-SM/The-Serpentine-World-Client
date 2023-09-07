import React, { useEffect, useState } from 'react';
import Medicine from './Medicine';

const Medicines = () => {
    const [medicine, setMedicine] = useState([]);
    // const [loading,setLoading] = useState(true);
    useEffect(() => {
        fetch('https://serpentine-world-server.vercel.app/medicine')
            .then(res => res.json())
            .then(data => {
                setMedicine(data);
                // setLoading(false);
            })

    }, [])


    return (
        <div className="medicine_container py-12 ">
            <div className="snake_container max-w-[1500px] mx-auto  ">
            <h1 className="section_header">Medicines</h1>
                <h1 className="section_header2">SNAKES SAVE LIFE</h1>
                <h3 className="max-w-[800px] mx-auto header_info my-8 px-2">The caduceus is the traditional symbol of Hermes and features two snakes winding around an often winged staff. It is often used as a symbol of medicine, especially in the United States, despite its ancient and consistent associations with trade, liars, thieves, eloquence, negotiation, alchemy, and wisdom.</h3>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2 lg:px-32 cards">
                    {
                        medicine.map((medicine) => (
                            <Medicine
                                key={medicine._id}
                                medicine={medicine}

                            ></Medicine>
                        ))
                    }
                </div>
            </div>
            </div>
        </div>
    );
};

export default Medicines;