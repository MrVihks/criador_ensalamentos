import React from 'react'
import {Link} from "react-router-dom"

const Form = () => {
    return (
        <form className='form'>
            <p className='input-item'>
                <label>Nome do Professor:</label>
                <input type='text' placeholder='Professor' />
            </p>
            <p className='input-item'>
                <label>Nome do estudante 1:</label>
                <input type='text' placeholder='Estudante' />
            </p>
            <p className='input-item'>
                <label>Nome do estudante 2:</label>
                <input type='text' placeholder='Estudante' />
            </p>
            <p className='input-item'>
                <label>Número de estudantes:</label>
                <input type="number" placeholder='Número' />
            </p>
            <p className='input-item'>
                <fieldset className='radios'>
                    <label id='side'>Lado da porta</label>
                    <p>
                        <input type="radio" name="teste1" value="teste1" id='teste1' />
                        <label>Esquerdo</label>
                    </p>
                    <p>
                        <input type="radio" name="teste1" value="teste1" />
                        <label>Direito</label>
                    </p>

                </fieldset>
            </p>

            <p>
                <Link to="/finish"><button>Criar</button></Link>
            </p>



        </form>
    )
}

export default Form