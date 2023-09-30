import React from 'react';
import "../styles/About.css";
import DeskSVG from "../svgs/desk.svg";

const About = () => {
  return (
    <section id='about'>
      <article className='about'>
        <p >
          Cansado de criar ensalamentos manualmente? Nosso Gerador de Ensalmos de Estudantes do Colégio está aqui para tornar esse processo muito mais fácil e eficiente. Com apenas alguns cliques, você pode criar ensalamentos para seus estudantes.
        </p>
        <figure className='img-box'>
          <img src={DeskSVG} height={128} width={128} />

        </figure>
      </article>
    </section>
  );
}

export default About;