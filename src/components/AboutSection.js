import home1 from '../img/home1.png'
// import styled from 'styled-components';
import {About,Description,Hide,Image} from '../styles.js';

const AboutSection = ()=>{
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>Hello there, Welcome.</h2>
                    </Hide>
                    <Hide>
                        <h2>We <span>push</span> your  Buisness</h2>
                    </Hide>
                    <Hide>
                        <h2>Marketing</h2>
                    </Hide>
                </div>
                    <p>
                        We can do what you have imagined to do for yourself. We let know the world your buisness and your ideas. Let us put wings so that it can fly.
                    </p>
                    <button>Contact us</button>              
                        
                
            </Description>    
            <Image>
                <img src={home1} alt="Basics" />
            </Image>
        </About>
    )
}

//styles


export default AboutSection;