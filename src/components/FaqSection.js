
import styled from "styled-components";
import {About} from '../styles.js';

const FaqSection = () =>{
     return (
        <Faq>
            <h2>Any Questions <span>FAQ</span></h2>
            <div className="question">
                <h4>How Do i Start</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, facilis.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Daily Schedule</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, facilis.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>How much to worry</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, facilis.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Trust issues.</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, facilis.</p>
                </div>
                <div className="faq-line"></div>
            </div>
        </Faq>
     )
}


const Faq = styled(About)`
    display:block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 1rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 1rem 0rem;
        p{
           padding: 0.5rem 0rem;
        }
    }
`

export default FaqSection;