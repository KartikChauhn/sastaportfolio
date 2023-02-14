import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () =>{
    return(
        <StyleNav>
        
            <h1><Link  to='/'>Wiings</Link></h1> 
            <ul>
                <li>
                    <Link to='/'>About us</Link>
                </li>
                <li>
                    <Link to='/work'>Our work</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact us</Link>
                </li>
            </ul>
        </StyleNav>
    )
}

const StyleNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background-color: #131313;
    h1{
        a{
            color: #23d997;
            font-size: 1.5rem;
        }
    }
    a{
        color: #ababab;
        text-decoration: none;
    }

    ul{
        display: flex;
       list-style : none;
       li{
        padding-left: 5rem;
        position: relative;
       }
    }

    
`

export default Nav;