import React from 'react';
import { Link } from 'react-router-dom';
import DeskSVG from "../svgs/desk.svg"

const Home = () => {
  return (
      <section className='main'>
        <article className='content'>
          <h1>Bem-Vindo</h1> 
          <p>Este é o criador de <span style={{color:"var(--dark-color)", fontWeight:"bold", textTransform:'uppercase'}}>ensalamentos </span></p>
          <Link to="/create"><button>Criar</button></Link>
        </article>
      </section>

  );
}

export default Home;