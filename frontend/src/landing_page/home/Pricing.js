import React from 'react'

function Pricing() {
    return (  
        <div className='container mb-5 mt-5 mr-5' >
            <div className='row v-align around'>
                <div className='col-md-5 p-5'>
                    <h2 className='mb-3 fs-2'>Unbeatable pricing</h2>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="#" style={{ textDecoration: "none" }}>
                    See Pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
                </div>

                <div className='col-7 d-flex justify-content-between '>
                    <div className='pricing'>
                        <img src='media/images/pricing-eq1.svg'  style = {{width : "40%"}} alt='Equity trading'  ></img>
                        <p>Free account opening</p>
                    </div>
                    <div className='pricing'>
                        <img src='media/images/pricing-eq1.svg' style = {{width : "40%"}} alt='Commodity trading'></img>
                        <p>Free equity delivery and direct mutual funds</p>
                    </div>
                    <div className='pricing'>
                        <img src='media/images/pricing-eq2.svg'  style = {{width : "40%"}} alt='Mutual funds'></img>
                        <p>Intraday & F&O</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;