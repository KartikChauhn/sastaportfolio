import { createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: #1b1b1b;
    }
    button{
        font-weight: bold;
        font-size: 0.8rem;
        cursor: pointer;
        padding: 0.8rem 1.4rem;
        border: 2px solid #23d997;
        background: transparent;
        color: white;
        transition: all 0.5s ease;
        border-radius: 4px;
        &:hover{
            background-color: #23d997;

        }
    }

    h2{
        font-weight: lighter;
        font-size: 3.2rem;
    }
    h3{
        color:white
    }
    h4{
        font-weight: bold;
        font-size: 2rem;
    }
    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4 rem;
        line-height: 150%;
    }
    span{
        font-weight: bold;
        color: #23d997;
    }
    a{
        font-size: 1.1rem;
    }
`

export default GlobalStyles;