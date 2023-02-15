import { useState,useEffect } from "react";

import styled from "styled-components";
import { useLocation} from "react-router-dom";
import {MovieState} from '../Moviestate';


//animation imports 
import { pageAnimation } from "../animation";
import { motion } from "framer-motion";

const Moviedetail = () =>{
    
    const location = useLocation();
    const url = location.pathname;
    const [movies,setMovies] = useState(MovieState);
    const[movie, setMovie] = useState();

    
    useEffect(()=>{
        const currentMovie = movies.filter((statemovie)=> statemovie.url === url);
        setMovie(currentMovie[0]);
    }, [movies,url]);

    return(
        <>
        {movie && (
            <Details exit='exit' variants={pageAnimation} initial='hidden' animate='show'>
                <Headline>
                    <h2>{movie.title}</h2>
                    <img src={movie.mainImg} alt="movie" />
                </Headline>

                <Awards>
                    {movie.awards.map((award)=>(
                        <Award 
                            title={award.title}
                            description ={award.description}
                            key= {award.title}
                        
                        />
                    ))}
                </Awards>
                <ImageDisplay>
                    <img src={movie.secondaryImg} alt="movie" />
                </ImageDisplay>
            </Details>
        )}
        </>
    );
};


const Details = styled(motion.div)`
    color: white;
`

const Headline = styled.div`
    min-height: 90vh;
    padding-top: 15vh;
    position: relative;
    h2{
        position: absolute;
        top: 5%;
        left: 50%;
        transform: translate(-50%,-10%);
    }
    img{
        width: 100%;
        height: 75vh;
        object-fit: cover;
    }
`

const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
`

const AwardStyle = styled.div`
     padding: 4rem;
     h3{
        font-size: 1.6rem;
     }
     .line{
        width: 50%;
        background: #23d997;
        height: 0.2rem ;
        margin: 0.6rem 0rem;
     }
`
const ImageDisplay = styled.div`
     min-height: 50vh;
     img{
        width: 100%;
        height: 100vh;
        object-fit: cover;
     }
`

///Award component 
const Award = ({title,description}) =>{
    return (
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyle>
    )
}

export default Moviedetail;
