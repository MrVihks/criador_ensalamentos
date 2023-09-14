import React from 'react'
const Home = () => {
  return (
      <section className='main'>
        <article className='content'>
          <h1>Bem-Vindo</h1>
          <p>Este é o criador de <span style={{color:"var(--dark-color)", fontWeight:"bold", textTransform:'uppercase'}}>ensalamentos</span></p>
          <button>Criar</button>
        </article>
      </section>

  )
}

export default Home