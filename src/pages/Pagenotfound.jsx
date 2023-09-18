import React from 'react';
import { Link } from 'react-router-dom';
import Robot from "../svgs/robot.svg";

const PageNotFound = () => {
  return (
    <section className='main'>
      <article className='content'>
        <h1>Erro 404  </h1>
        <p>Oh não parece que essa página <span style={{color:"var(--red-color)", fontWeight:"bold"}}>não existe </span> <img src={Robot} height="25px" width="25px"/></p>
        <Link to="/"><button>Voltar</button></Link>
      </article>
    </section>
  );
}

export default PageNotFound;