import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    input {
        border:none; 
    }
    
    button{
        cursor: pointer;
        border: none;
        background: transparent;
    }
    
    img{
        max-width: 100%;
    }
    
    ul, ol, li {
        list-style: none;
    }
    
    a{
        text-decoration: none;
        color: inherit
    }
`;

export default GlobalStyle;