import React, { useEffect, useRef } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
/**
 * Função para embaralhar os números
 * @param {Array} array array a ser embaralhado 
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // j recebe um número aleatório de acordo com i
        const j = Math.floor(Math.random() * (i + 1));
        // Aqui é feito o embaralhamento
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Função que gera o ensalamento
 * @param {Object} context context do canvas 
 * @param {Number} tables quantidade de carteiras
 * @param {Number} height altura do canvas
 * @param {Number} width largura do canvas
 */
async function generate(context, tables, height, width) {
    // index conta quantas foram percorridas
    let index = 0;
    // Repetição para o eixo Y
    for (let y = 100; y < height; y += 60) {
        // Repetição para o eixo X
        for (let x = 55; x < 450; x += 70) {
            if (index >= 42) {
                // Se todos os números únicos foram usados, encerra o loop
                doNumber(context, tables, height, width);
                return;
            }

            index++;

            context.strokeRect(x, y, 35, 35);

        }
    }
}
async function doNumber(context, tables, height, width) {
    // Cria uma lista de números únicos
    const uniqueNumbers = Array.from({ length: tables }, (_, i) => i + 1);
    // Embaralha a lista de números
    shuffleArray(uniqueNumbers);
    // index conta quantas foram percorridas
    let index = 0;
    // Repetição para o eixo Y
    for (let y = 100; y < height; y += 60) {
        // Repetição para o eixo X
        for (let x = 55; x < 450; x += 70) {
            if (index >= tables) {
                // Se todos os números únicos foram usados, encerra o loop
                return;
            }

            const number = uniqueNumbers[index];
            index++;
            context.fillText(number, number < 10 ? x + 10 : x + 5, y + 20);

        }
    }
}
const Display = (props) => {
    const canvasRef = useRef(null);
    const handleClick = () => {
        const canvas = canvasRef.current;
        html2canvas(canvas).then((canvasImage) => {
            const pdf = new jsPDF('p', 'mm', 'a4');
            pdf.addImage(canvasImage.toDataURL("image.png"), 'PNG',
                0,
                6,
                canvasImage.width / 2.343,
                canvasImage.height / 2.32)
            pdf.save('ensalamento.pdf');
        })


        toast.success("Baixado com successo");

    }
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.fillStyle = "white"
        context.fillRect(0, 0, props.width, props.height);
        context.fillStyle = "black"
        const width = props.width.toString();
        const height = props.height.toString();
        // Quantidade de mesas
        let tables = props.tables;
        // Fonte
        context.font = "20px Arial Bold";
        // Tamanho
        context.lineWidth = 1.8;


        // Contorno
        context.strokeRect(1, 1, props.width - 10, props.height - 10)
        // Texto do quadro
        context.strokeRect(20, 2, props.width - 50, 15);
        context.fillText("Quadro", props.width / 2 - 50, 40);
        context.strokeRect(props.side == "left" ? -3 : props.width - 17, 40, 20, 40);
        context.fillText("Porta", props.side == "left" ? 20 : props.width - 80, 60);
        context.fillText(`Professor: ${props.teacherName}`, 10, props.height - 80);
        context.fillText("Alunos representantes:", 10, props.height - 60);
        context.fillText(`${props.studentA}, ${props.studentB}`, 10, props.height - 40);
        context.fillText(`Turma: ${props.grade} Data: ${props.date}`, 10, props.height - 20);


        //Criar as mesas
        generate(context, tables, props.height, props.width);
        toast.success("Ensalamento criado");

    }, [])
    return (
        <>
            <Toaster />
            <article className='canvas'>
                <canvas className='display' ref={canvasRef} width={props.width - 8} height={props.height} />
            </article>
            <article className='description'>
                <p style={{ marginTop: "0.2rem" }}>Você pode imprimir esse ensalamento</p>
                <button onClick={handleClick}>Salvar pdf</button>
            </article>
        </>
    );
}
export default Display;