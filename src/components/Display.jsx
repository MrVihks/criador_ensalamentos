import React, { useEffect, useRef } from 'react'
import { Toaster, toast } from 'react-hot-toast';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
async function generate(context, tables, height, width) {
    // Crie uma lista de números únicos
    const uniqueNumbers = Array.from({ length: tables }, (_, i) => i + 1);

    // Embaralhe a lista de números
    shuffleArray(uniqueNumbers);

    let index = 0;
    let xValue = 0;
    let yValue = 0;
    for (let y = 100; y < height; y += 50) {
        yValue = yValue + 1;
        for (let x = 5; x < width; x += 70) {
            
            if (index >= tables) {
                // Se todos os números únicos foram usados, saia do loop
                let newTables = tables
                let result = newTables / yValue;
                let newX = x;
                while(result % 1 !== 0){
                    context.strokeRect(newX, y, 35, 35);
                    newX += 70
                    newTables ++
                    result = newTables / yValue;
                }
                return;
            }

            const number = uniqueNumbers[index];
            index++;

            context.strokeRect(x, y, 35, 35);
            context.fillText(number, number < 10 ? x + 10 : x + 5, y + 20);
        }
    }
    console.log(yValue * xValue)
    
}
const Display = (props) => {
    const canvasRef = useRef(null);
    const handleClick = () =>{
        const canvas = canvasRef.current;
        const dataURL = canvas.toDataURL('image/png');
  
        const a = document.createElement('a');
        a.href = dataURL;
        a.download = 'canvas.png';
        a.style.display = 'none';
  
        document.body.appendChild(a);
        a.click();
  
        document.body.removeChild(a);
        toast.success("Baixado com successo")
        
    }
    useEffect(() => {
        const canvas = canvasRef.current;   
        const context = canvas.getContext('2d');
        const width = props.width.toString();
        const height = props.height.toString();
        // Quantidade de mesas
        let tables = props.tables;
        // Fonte
        context.font = "20px Arial Bold";
        // Tamanho
        context.lineWidth = 1.8;
        // Texto do quadro
        context.strokeRect(20, 2, props.width - 50, 15)
        context.fillText("Quadro", props.width / 2 - 50, 40)
        context.strokeRect(props.side == "left" ? -3 : props.width - 17, 40, 20, 40)
        context.fillText("Porta", props.side == "left" ? 20 : props.width - 80, 60)
        context.fillText(`Professor: ${props.teacherName}`, 10, props.height - 80)
        context.fillText("Alunos representantes:", 10, props.height - 60)
        context.fillText(`${props.studentA}, ${props.studentB}`, 10, props.height - 40)
        context.fillText(`Turma: ${props.grade} Data: ${props.date}`, 10, props.height - 20)


        //Criar as mesas
        generate(context, tables, props.height, props.width)
        toast.success("Ensalamento criado");

    }, [])
    return (
        <>
            <Toaster />
            <canvas ref={canvasRef} width={props.width - 8} height={props.height} style={{ border: "4px solid black" }} />
            <article className='description'>
                <p>Você pode imprimir esse ensalamento</p>
                <button onClick={handleClick}>Salvar</button>
            </article>
        </>
    )
}

export default Display