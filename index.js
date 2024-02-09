const perguntas = [
    {
      pergunta: 'Qual é a palavra-chave utilizada para declarar uma variável em JavaScript?',
      respostas: [
        'let',
        'var',
        'const'
      ],
      correta: 0
    },
    {
      pergunta: 'Qual método é utilizado para imprimir algo no console em JavaScript?',
      respostas: [
        'print()',
        'log()',
        'display()'
      ],
      correta: 1
    },
    {
      pergunta: 'Como você escreve um comentário de uma única linha em JavaScript?',
      respostas: [
        '<!-- comentário -->',
        '// comentário',
        '/* comentário */'
      ],
      correta: 1
    },
    {
      pergunta: 'Qual operador é usado para concatenar strings em JavaScript?',
      respostas: [
        '+',
        '*',
        '&'
      ],
      correta: 0
    },
    {
      pergunta: 'O que o operador "===" verifica em JavaScript?',
      respostas: [
        'Valor e tipo',
        'Apenas valor',
        'Apenas tipo'
      ],
      correta: 0
    },
    {
      pergunta: 'Qual função é usada para converter uma string para um número inteiro em JavaScript?',
      respostas: [
        'parseInt()',
        'toFloat()',
        'stringToNumber()'
      ],
      correta: 0
    },
    {
      pergunta: 'O que é JavaScript?',
      respostas: [
        'Uma linguagem de marcação',
        'Uma linguagem de programação',
        'Um framework'
      ],
      correta: 1
    },
    {
      pergunta: 'Qual método é usado para selecionar um elemento pelo ID em JavaScript?',
      respostas: [
        'getElementByClass()',
        'selectByID()',
        'getElementById()'
      ],
      correta: 2
    },
    {
      pergunta: 'O que o operador "!" representa em JavaScript?',
      respostas: [
        'Negação lógica',
        'Concatenação',
        'Atribuição'
      ],
      correta: 0
    },
    {
      pergunta: 'Qual é a finalidade do comando "return" em uma função JavaScript?',
      respostas: [
        'Imprimir no console',
        'Encerrar a execução da função',
        'Retornar um valor da função'
      ],
      correta: 2
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const correta = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = correta.size + ' de ' + totalDePerguntas
  
  
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
  
      correta.delete(item)
      if(estaCorreta){
        correta.add(item)
      } 
  
      mostrarTotal.textContent = correta.size + ' de ' + totalDePerguntas
    }
  
  quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
  
  quiz.appendChild(quizItem)
  
  }
  quiz.appendChild(quizItem)
  