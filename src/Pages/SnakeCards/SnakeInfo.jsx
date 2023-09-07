import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SnakeInfo = () => {
    const [snake, setSnake] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://serpentine-world-server.vercel.app/snakes/${id}`)
            .then((res) => res.json())
            .then((data) => setSnake(data));
    }, []);

    return (
        <div className='p-16'>


            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className='w-full'><img className='w-full' src={snake.img} alt="Album" /></figure>
                <div className="card-body text-justify">
                    <h2 className="card-title"><span className='text-bold'>Name: </span>{snake?.name}</h2>
                    <p className='text-blue-700 font-bold' ><span className='font-bold'>Scientific Name: </span> {snake?.S_name}</p>
                    <p><span className='font-bold text-2xl'>Life Cycle: </span></p>
                    <p><span className='font-bold text-green-700'>Reproduction: </span>{snake?.lf_Cylce?.Reproduction}</p>
                    <p><span className='font-bold text-green-700'>Gestation: </span>{snake?.lf_Cylce?.Gestation}</p>
                    <p><span className='font-bold text-green-700'>Birth: </span>{snake?.lf_Cylce?.Birth}</p>
                    <p><span className='font-bold text-green-700'>Growth: </span>{snake?.lf_Cylce?.Growth}</p>
                    <p><span className='font-bold text-green-700'>Maturation: </span>{snake?.lf_Cylce?.Maturation}</p>
                    <p><span className='font-bold text-green-700'>Food: </span>{snake.food}</p>

                </div>
            </div>


        </div>
    );
};

export default SnakeInfo;