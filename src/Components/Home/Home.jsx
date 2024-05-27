import React from 'react';

const Home = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://www.shutterstock.com/image-photo/hologram-shoes-sports-fitness-run-260nw-2240460409.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Stride in Style</h1>
            <p className="mb-5">Quality Shoes for Every Step of Your Journey.</p>
          </div>
        </div>
      </div>
    );
};

export default Home;