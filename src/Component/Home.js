import React from 'react';
import Nav from './Nav';
import bannerImg from '../asset/banner/Capture.PNG'
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";



const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <div>
                <div className="hero mt-16 bg-white text-black">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className='md:w-1/2'>
                            <img src={bannerImg} alt="hero" />
                        </div>
                        <div className='md:w-1/2 text-left'>
                            <h1 className="text-7xl font-bold">Create Your</h1>
                            <h1 className="text-5xl font-bold">Desier Color</h1>
                            <h1 className="text-5xl font-bold text-secondary">Platter<span className='text-info'>!</span></h1>
                            <p className="py-6">Create the perfect desire color or get inspired by <br /> thowsand of color schemes...</p>
                            <Link to={'/colorPicker'} className="btn btn-sm bg-secondary text-white">Pick a color <FaArrowRight className='ml-2' /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;