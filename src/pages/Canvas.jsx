import React, { useEffect , useRef} from 'react';
import Display from '../components/Display';
import Cookies from 'js-cookie';

import "../styles/Canvas.css" ;

const Canvas = () => {
    const teacherName = Cookies.get("teacherName");
    const studentA = Cookies.get("studentA");
    const studentB = Cookies.get("studentB");
    const grade = Cookies.get("grade");
    const amount = Cookies.get("amount");
    const date = Cookies.get("date");
    const side = Cookies.get("side");
    return (
        <section className='canvas-content'>
            <h1 style={{marginTop:"8rem"}}>Ensalamento</h1>
            <p>Você pode imprimir esse ensalamento</p>
            <Display className="display" width="400" height="670" tables={amount} teacherName={teacherName} studentA={studentA} studentB={studentB} grade={grade} date={date} side={side}/>
            <a href='/create'> voltar</a>
        </section>
    );
}

export default Canvas;