import React from 'react'
import Navbar from './Navbar'
import Image from '../image/image1.jpg'


const Home = () => {
    return (
        <div>
            <Navbar />

            
                <div className="image-container" style={{ position: 'relative' }}>
                    <img src={Image} className="card-image border-0" alt="Background" style={{ height: "550px", width: "100%" }} />
                    <h5 className="image-text" style={{
                        position: 'absolute',
                        top: '30%',
                        left: '20%',
                        transform: 'translateX(-50%)',
                        color: 'black',
                        fontSize: '3rem',
                        marginBottom: "5px",
                    }}>
                        NEW SEASON ARRIVALS
                    </h5>
                    <h6 className="image-text" style={{
                        position: 'absolute',
                        top: '40%',
                        left: '20%',
                        transform: 'translateX(-50%)',
                        color: 'black',
                        fontSize: '2rem',
                    }}>
                        CHECK OUT ALL THE TRENDS
                    </h6>
                

            </div>
            {/* <Products /> */}
          

        </div>



    )
}

export default Home