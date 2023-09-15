import React, { useEffect, useRef } from 'react'

const Display = (props) => {
    const canvasRef = useRef(null);
    const numbers = new Array();
    const randomValue = (max) => Math.floor(Math.random() * max) + 1;
    const createTables = (context, tables, width, height) => {
        for (let x = 0; x <= width ; x ++) {
            //Repetição para o eixo Y
            for (let y = 0; y <= height; y ++) {
                console.log(x, y);
                let number = randomValue(tables);
                while (numbers.includes(number)) {
                    number = randomValue(tables);

                }
                numbers.push(number)
                context.strokeRect(x + 99, y + 99, 40, 40);
                context.strokeText(number, x + 99, y + 99)


            }
        }
    }
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const width = props.width.toString();
        const height = props.height.toString();
        // Quantidade de mesas
        const tables = parseInt(width.substr(0, 1)) * height.substr(0,1) ;
        // Fonte
        context.font = "20px Arial Bold";
        // Tamanho
        context.lineWidth = 1.8;
        // Texto do quadro
        context.strokeText("Quadro", props.width /2 -50, 20)
        //Criar as mesas
        createTables(context, tables, width, height)
    
    }, [])
    return (
        <canvas ref={canvasRef} width={props.width - 8} height={props.height} style={{ border: "4px solid black" }} />
    )
}

export default Display