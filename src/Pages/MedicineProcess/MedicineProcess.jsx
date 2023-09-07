import React from 'react';
import { Link } from 'react-router-dom';

const MedicineProcess = ({mProcess}) => {
    const {id,img,name,process} = mProcess;
    return (
        <div className='p-16'>


            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className='w-full'><img className='w-full' src={img} alt="Album" /></figure>
                <div className="card-body text-justify">
                    <h2 className="card-title"><span className='text-bold'>Name: </span>{name}</h2>
                    <p className='text-blue-700 font-bold' ><span className='font-bold'>Making Process: </span> {process.pr}</p>
                    <p>{process.pr_1}</p>
                    <p>{process.pr_2}</p>
                    <p>{process.pr_3}</p>
                    <p>{process.pr_4}</p>
                    <p>{process.pr_5}</p>
                    <p>{process.pr_6}</p>

                </div>
            </div>


        </div>
    );
};

export default MedicineProcess;