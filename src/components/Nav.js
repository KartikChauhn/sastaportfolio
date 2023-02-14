import styled from "styled-components";

const Nav = () =>{
    return(
        <StyleNav>
        
            <h1><a  href="#">Wiings</a></h1> 
            <ul>
                <li>
                    <a href="#">About us</a>
                </li>
                <li>
                    <a href="#">Our work</a>
                </li>
                <li>
                    <a href="#">Contact us</a>
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