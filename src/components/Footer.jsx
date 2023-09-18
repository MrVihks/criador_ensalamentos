import React from 'react';
import "../styles/Footer.css";
import GitHubSvg from "../svgs/github.svg";

const Footer = () => {
  return (
    <footer className='footer '>
        <article >
            <h1>Criador de ensalamentos</h1>
            <h3>Desenvolvido por:</h3>
            <p>Vinicius Henrique 2-DS</p>    
           <a href='https://github.com/MrVihks' target='__blank'> <img src={GitHubSvg} height="34" width="34" id='icon'/></a>
        </article>
    </footer>
  );
}

export default Footer;