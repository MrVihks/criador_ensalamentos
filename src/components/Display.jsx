import React, { useEffect, useRef } from 'react'
/**async function generate(context, tables, height, width) {
    const randomValue = (max) => Math.floor(Math.random() * max) + 1;
    const numbers = [];
    const uniqueNumbers = [];
    
    for (let y = 10; y < height; y += 100) {
        for (let x = 30; x < width; x += 100) {
            let number = randomValue(tables);
            do {
                number = randomValue(tables);
              } while (numbers.has(number));
        
            numbers.add(number)
            context.strokeRect(x, y, 40, 50);
            context.fillText(number, x + 9, y + 30)
        }
    }
} */
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
  
    for (let y = 30; y < height; y += 100) {
      for (let x = 30; x < width; x += 100) {
        if (index >= tables) {
          // Se todos os números únicos foram usados, saia do loop
          return;
        }
  
        const number = uniqueNumbers[index];
        index++;
  
        context.strokeRect(x, y, 40, 50);
        context.fillText(number, x + 9, y + 25);
      }
    }
  }
const Display = (props) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const width = props.width.toString();
        const height = props.height.toString();
        // Quantidade de mesas
        let tables = parseInt(width.substr(0, 1)) * height.substr(0, 1);
        // Fonte
        context.font = "20px Arial Bold";
        // Tamanho
        context.lineWidth = 1.8;
        // Texto do quadro
        context.strokeText("Quadro", props.width / 2 - 50, 20)
        //Criar as mesas
        generate(context, tables + 2, props.height, props.width)

    }, [])
    return (
        <canvas ref={canvasRef} width={props.width - 8} height={props.height} style={{ border: "4px solid black" }} />
    )
}

export default Display