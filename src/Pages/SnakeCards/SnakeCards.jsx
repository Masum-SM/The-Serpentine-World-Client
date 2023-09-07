import { useEffect, useState } from "react";
import SnakeCard from "./SnakeCard";

const SnakeCards = () => {

    const [snake, setSnake] = useState([]);
    // const [loading,setLoading] = useState(true);
    useEffect(() => {
        fetch('https://serpentine-world-server.vercel.app/snakes')
            .then(res => res.json())
            .then(data => {
                setSnake(data);
                // setLoading(false);
            })

    }, [])





    return (
        <div className="mt-12">
            <div className="snake_container max-w-[1500px] mx-auto mb-16 ">
                <h1 className="section_header">Snakes</h1>
                <h1 className="section_header2">VENOMOUS SNAKES</h1>
                <h3 className="max-w-[800px] mx-auto header_info my-8 px-2">Venomous snakes are species of the suborder Serpentes that are capable of producing venom, which they use for killing prey, for defense, and to assist with digestion of their prey. The poison is typically delivered by injection using hollow or grooved fangs, although some poisonous snakes lack well-developed fangs.</h3>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 lg:px-32 cards">
                    {
                        snake.map((snake) => (
                            <SnakeCard
                                key={snake._id}
                                snake={snake}

                            ></SnakeCard>
                        ))
                    }
                </div>
            </div>
            </div>
        </div>

    );
};

export default SnakeCards;