import React from 'react';
import goal1 from '../assets/E-WEB-Goal-01.png';
import goal2 from '../assets/E-WEB-Goal-02.png';
import goal3 from '../assets/E-WEB-Goal-03.png';
import goal4 from '../assets/E-WEB-Goal-04.png';
import goal5 from '../assets/E-WEB-Goal-05.png';
import goal6 from '../assets/E-WEB-Goal-06.png';
import goal7 from '../assets/E-WEB-Goal-07.png';
import goal8 from '../assets/E-WEB-Goal-08.png';
import goal9 from '../assets/E-WEB-Goal-09.png';
import goal10 from '../assets/E-WEB-Goal-10.png';
import goal11 from '../assets/E-WEB-Goal-11.png';
import goal12 from '../assets/E-WEB-Goal-12.png';
import goal13 from '../assets/E-WEB-Goal-13.png';
import goal14 from '../assets/E-WEB-Goal-14.png';
import goal15 from '../assets/E-WEB-Goal-15.png';
import goal16 from '../assets/E-WEB-Goal-16.png';
import goal17 from '../assets/E-WEB-Goal-17.png';
import SDGTitle from '../components/common/SDGTitle';

import Button from '../components/common/Button';
import { Link } from 'react-router-dom';
const SustainableGoalsPoints = () => {
    const goals = [
        { id: 1, icon: goal1 },
        { id: 2, icon: goal2 },
        { id: 3, icon: goal3 },
        { id: 4, icon: goal4 },
        { id: 5, icon: goal5 },
        { id: 6, icon: goal6 },
        { id: 7, icon: goal7 },
        { id: 8, icon: goal8 },
        { id: 9, icon: goal9 },
        { id: 10, icon: goal10 },
        { id: 11, icon: goal11 },
        { id: 12, icon: goal12 },
        { id: 13, icon: goal13 },
        { id: 14, icon: goal14 },
        { id: 15, icon: goal15 },
        { id: 16, icon: goal16 },
        { id: 17, icon: goal17 },
    ];

    return (

        <div className='mt-10 flex flex-col md:flex-row justify-between text-center md:text-left p-3'>
            <div className='w-full lg:w-[60%] mb-5'>

                <SDGTitle text="17 SUSTAINABLE DEVELOPMENT GOALS" />
                <p className="mb-6 font-semibold mt-10">
                    In September 2015, the United Nations General Assembly adopted the 17 Sustainable Development Goals (SDGs) to create a sustainable new world by 2030.
                    The main spirit behind all these 17 SDGs is to ensure that no life is left behind. The 17 SDGs cover all aspects of people, planet, and profit and offer a holistic approach to achieving sustainable development for all.
                </p>

                <Button title="EXPLORE ALL 17 SDG GOALS" link={'sdg/1'} />

            </div>
            <div>
                <div className='flex gap-3 flex-wrap items-center justify-center'>
                    {goals.map((goal) => (
                        <div>
                            <Link
                                key={goal.id}
                                to={`/sdg/${goal.id}`} // Add your link here
                                className="flex items-center justify-center transition-transform transform hover:scale-110"
                            >
                                <img src={goal.icon} alt={`Goal ${goal.id}`} className="h-20 w-20 md:h-32 md:w-32" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default SustainableGoalsPoints;

