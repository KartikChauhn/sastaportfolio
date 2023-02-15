import styled from "styled-components";
import { Link } from "react-router-dom";

import athelete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';



const OurWork = () =>{
    return (
        <Work>
            <Movie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link to='/work/the-athlete' >
                <img src={athelete} alt="athlete" />
                </Link>
            </Movie>
            <Movie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link to='/work/the-racer' >
                <img src={theracer} alt="therace" />
                </Link>
            </Movie>
            <Movie>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link to='/work/good-times' >
                <img src={goodtimes} alt="Goodtimes" />
                </Link>
            </Movie>
        </Work>
    ) 
}

const Work = styled.div` 
    min-height: 100vh;
    overflow: hidden;
    padding: 2rem 8rem;
    
    h2{
        padding: 0.6rem 0rem;
    }
`
const Movie = styled.div`
    padding-bottom: 10rem;
    .line{
        height: 0.2rem;
        background: #cccccc;
        margin-bottom: 2rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`

export default OurWork;