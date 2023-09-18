import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Cookies from "js-cookie";


const Form = () => {
    const date = new Date();
    const formatedDate = `${date.getDate()}/${date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()}/${date.getFullYear()}`;
    const [teacherName, setTeacherName] = useState("");
    const [studentA, setStudentA] = useState("");
    const [studentB, setStudentB] = useState("");
    const [grade, setGrade] = useState("");
    const [amount, setAmount] = useState(0);
    const [side, setSide] = useState("left");
    const saveValues = () => {
        Cookies.set("teacherName", teacherName, { expires: 1 });
        Cookies.set("studentA", studentA, { expires: 1 });
        Cookies.set("studentB", studentB, { expires: 1 });
        Cookies.set("amount", amount, { expires: 1 });
        Cookies.set("date", formatedDate, { expires: 1 });
        Cookies.set("grade", grade, { expires: 1 });
        Cookies.set("side", side, { expires: 1 });
    }
    return (
        <form className='form'>
            <p className='input-item'>
                <label>Nome do Professor:</label><br />
                <input type='text' placeholder='Professor' value={teacherName} onChange={(e) => setTeacherName(e.target.value)} />
            </p>
            <p className='input-item'>
                <label>Nome do estudante 1:</label><br />
                <input type='text' placeholder='Estudante' value={studentA} onChange={(e) => setStudentA(e.target.value)} />
            </p>
            <p className='input-item'>
                <label>Nome do estudante 2:</label><br />
                <input type='text' placeholder='Estudante' value={studentB} onChange={(e) => setStudentB(e.target.value)} />
            </p>
            <p className='input-item'>
                <label>Turma:</label><br />
                <input type='text' placeholder='Turma' value={grade} onChange={(e) => setGrade(e.target.value)} />
            </p>
            <p className='input-item'>
                <label>Número de estudantes:</label><br />
                <input type="number" placeholder='Quantidade' value={amount} onChange={(e) => setAmount(e.target.value)} /><br />
                <span style={{ color: "var(--red-color)", fontSize: "0.9rem" }}>*Máximo 46 estudantes</span>
            </p>
            <p className='input-item'>
                <fieldset className='radios'>
                    <label id='side'>Lado da porta</label>
                    <p>
                        <input type="radio" name="sides" value="left" onChange={(e) => setSide(e.target.value)} />
                        <label>Esquerdo</label>
                    </p>
                    <p>
                        <input type="radio" name="sides" value="right" onChange={(e) => setSide(e.target.value)} />
                        <label>Direito</label>
                    </p>
                </fieldset>
            </p>
            <p>
                <Link to="/finish"><button onClick={saveValues()}>Criar</button></Link>
            </p>
        </form>
    );
}

export default Form;