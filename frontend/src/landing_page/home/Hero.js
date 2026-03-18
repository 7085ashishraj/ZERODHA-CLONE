import React from 'react'

function Hero() {
    return ( 
        <div className = 'container'>
            <div className = 'row text-center'>
                <img src='media/images/HomeHero.svg'  style = {{width : "90%"}} alt='HomeHeroImage' className='mb-5'></img>
                <h3 className='mt-5'>Invest in everything </h3>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin: "0 auto"}}>SignUp for free</button>
            </div>
            
        </div>
     );
}

export default Hero;