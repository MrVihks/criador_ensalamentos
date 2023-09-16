import React, { useEffect , useRef} from 'react'
import Display from '../components/Display'
import Cookies from 'js-cookie'
import "../styles/Canvas.css" 
import { useNavigate } from 'react-router-dom'
const Canvas = () => {
    const canvasRef = useRef(null);
    const teacherName = Cookies.get("teacherName")
    const studentA = Cookies.get("studentA")
    const studentB = Cookies.get("studentB")
    const grade = Cookies.get("grade")
    const amount = Cookies.get("amount")
    const date = Cookies.get("date")
    const side = Cookies.get("side")
    const navigate = useNavigate();
   
    useEffect(()=>{
       
        /*if(grade == undefined){
            navigate('/create')
            
        }**/
    },[])
    return (
        <section className='canvas-content'>
            <h1>Ensalamento</h1>
            <Display width="400" height="670" tables={amount} teacherName={teacherName} studentA={studentA} studentB={studentB} grade={grade} date={date} side={side}/>
            <a href='/create'> voltar</a>
        </section>
    )
}

export default Canvas