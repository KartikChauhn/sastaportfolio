import home1 from '../img/home1.png'
import styled from 'styled-components';

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
const About = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 2rem;
    margin: 2rem 5rem;
    color: white; 
`

const Description = styled.div`
    padding-right: 5rem;
    h2{
        font-weight: lighter;
    }
`

const Hide = styled.div`
    overflow: hidden;
`

const Image = styled.div`
    overflow: hidden;
    img{
        width: 90%;
        height: 90%;
    }
`

export default AboutSection;