const worlds = [
  { name: "Bosque del Dominio", topic: "Nivel fácil · preguntas 1 a 8 del banco", goal: 1, theme: "forest" },
  { name: "Pradera de las Transformaciones", topic: "Progresión de nivel fácil a intermedio · preguntas 9 a 16 del banco", goal: 1.5, theme: "meadow" },
  { name: "Cañón de las Composiciones", topic: "Nivel intermedio · preguntas 17 a 24 del banco", goal: 1.5, theme: "canyon" },
  { name: "Montañas de la Interpretación", topic: "Progresión de nivel intermedio a difícil · preguntas 25 a 32 del banco", goal: 2, theme: "mountain" },
  { name: "Costa de las Gráficas", topic: "Nivel difícil · preguntas 33 a 40 del banco", goal: 2, theme: "coast" }
];

const questions = [
  {
    "num": 1,
    "world": 1,
    "difficulty": "Fácil",
    "type": "Opción múltiple",
    "title": "Pregunta 1",
    "prompt": "La función \\(h(x)=\\dfrac{1}{x+2}\\) se compara con la función base \\(f(x)=\\dfrac{1}{x}\\). ¿Cuál afirmación describe correctamente sus asíntotas?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "La asíntota vertical de \\(h\\) es \\(x=2\\) y la horizontal es \\(y=0\\).",
      "La asíntota vertical de \\(h\\) es \\(x=-2\\) y la horizontal es \\(y=0\\).",
      "La asíntota vertical de \\(h\\) es \\(x=0\\) y la horizontal es \\(y=-2\\).",
      "La asíntota vertical de \\(h\\) es \\(x=0\\) y la horizontal es \\(y=2\\)."
    ],
    "answer": 1
  },
  {
    "num": 2,
    "world": 1,
    "difficulty": "Fácil",
    "type": "Opción múltiple",
    "title": "Pregunta 2",
    "prompt": "La gráfica de \\(h(x)=(x-1)^3\\) se obtiene a partir de \\(f(x)=x^3\\). El punto de inflexión de \\(h\\) es:",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción C.",
    "options": [
      "\\((-1,0)\\)",
      "\\((0,1)\\)",
      "\\((1,0)\\)",
      "\\((0,-1)\\)"
    ],
    "answer": 2
  },
  {
    "num": 3,
    "world": 1,
    "difficulty": "Fácil",
    "type": "Opción múltiple",
    "title": "Pregunta 3",
    "prompt": "Considere las funciones \\(f(x)=\\sqrt[3]{x}\\), \\(h(x)=-\\sqrt[3]{x}\\). Si el punto \\((8,2)\\) pertenece a la gráfica de \\(f\\), ¿cuál punto pertenece a la gráfica de \\(h\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "\\((-8,2)\\)",
      "\\((8,-2)\\)",
      "\\((-8,-2)\\)",
      "\\((2,-8)\\)"
    ],
    "answer": 1
  },
  {
    "num": 4,
    "world": 1,
    "difficulty": "Fácil",
    "type": "Opción múltiple",
    "title": "Pregunta 4",
    "prompt": "La expresión \\(y=x^2+6x+4\\) puede escribirse como \\(y=(x+3)^2-5\\). ¿Cuál información gráfica se obtiene directamente de esta segunda representación?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "El vértice es \\((3,-5)\\).",
      "El vértice es \\((-3,-5)\\).",
      "El vértice es \\((-5,-3)\\).",
      "El vértice es \\((3,5)\\)."
    ],
    "answer": 1
  },
  {
    "num": 5,
    "world": 1,
    "difficulty": "Fácil",
    "type": "Opción múltiple",
    "title": "Pregunta 5",
    "prompt": "La gráfica de \\(h(x)=\\sqrt{x-2}-1\\) comienza en el punto:",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "\\((-2,-1)\\)",
      "\\((2,-1)\\)",
      "\\((-1,2)\\)",
      "\\((1,-2)\\)"
    ],
    "answer": 1
  },
  {
    "num": 6,
    "world": 1,
    "difficulty": "Fácil",
    "type": "Opción múltiple",
    "title": "Pregunta 6",
    "prompt": "¿Cuál es el dominio de la función \\(h(x)=\\sqrt{x-2}-1\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "\\(( -\\infty,2]\\)",
      "\\([2,\\infty)\\)",
      "\\([-1,\\infty)\\)",
      "\\(( -\\infty,-1]\\)"
    ],
    "answer": 1
  },
  {
    "num": 7,
    "world": 1,
    "difficulty": "Fácil",
    "type": "Opción múltiple",
    "title": "Pregunta 7",
    "prompt": "Para la función \\(h(x)=4\\sin(3x)\\), la amplitud y el período son, respectivamente:",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción C.",
    "options": [
      "\\(4\\) y \\(6\\pi\\).",
      "\\(3\\) y \\(8\\pi\\).",
      "\\(4\\) y \\(\\dfrac{2\\pi}{3}\\).",
      "\\(\\dfrac14\\) y \\(3\\pi\\)."
    ],
    "answer": 2
  },
  {
    "num": 8,
    "world": 1,
    "difficulty": "Fácil",
    "type": "Opción múltiple",
    "title": "Pregunta 8",
    "prompt": "La función \\(f\\) contiene el punto \\((2,5)\\). ¿Qué punto debe aparecer en la gráfica de \\(h(x)=f(x-4)\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "\\((-2,5)\\)",
      "\\((6,5)\\)",
      "\\((2,1)\\)",
      "\\((2,9)\\)"
    ],
    "answer": 1
  },
  {
    "num": 9,
    "world": 2,
    "difficulty": "Fácil",
    "type": "Opción múltiple",
    "title": "Pregunta 9",
    "prompt": "Si el rango de \\(f\\) es \\([-2,4]\\), ¿cuál es el rango de \\(h(x)=f(x)+3\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "\\([-5,1]\\)",
      "\\([1,7]\\)",
      "\\([-2,7]\\)",
      "\\([3,12]\\)"
    ],
    "answer": 1
  },
  {
    "num": 10,
    "world": 2,
    "difficulty": "Fácil",
    "type": "Opción múltiple",
    "title": "Pregunta 10",
    "prompt": "La gráfica de \\(f\\) contiene los puntos \\((-2,8)\\), \\((0,4)\\), \\((2,-4)\\). ¿Cuáles son los puntos correspondientes en la gráfica de \\(h(x)=\\dfrac14 f(x)\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción A.",
    "options": [
      "\\((-2,2),(0,1),(2,-1)\\)",
      "\\((-8,8),(0,4),(8,-4)\\)",
      "\\((-\\tfrac12,8),(0,4),(\\tfrac12,-4)\\)",
      "\\((-2,12),(0,8),(2,0)\\)"
    ],
    "answer": 0
  },
  {
    "num": 11,
    "world": 2,
    "difficulty": "Fácil",
    "type": "Opción múltiple",
    "title": "Pregunta 11",
    "prompt": "Si \\((1,3)\\) pertenece a la gráfica de \\(f\\), ¿qué punto pertenece a la gráfica de \\(h(x)=-f(x+4)\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "\\((5,-3)\\)",
      "\\((-3,-3)\\)",
      "\\((-3,3)\\)",
      "\\((5,3)\\)"
    ],
    "answer": 1
  },
  {
    "num": 12,
    "world": 2,
    "difficulty": "Fácil",
    "type": "Opción múltiple",
    "title": "Pregunta 12",
    "prompt": "La gráfica de \\(f\\) contiene el punto \\((-2,4)\\). ¿Cuál punto pertenece a la gráfica de \\(h(x)=2f(x+6)\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción A.",
    "options": [
      "\\((-8,8)\\)",
      "\\((4,8)\\)",
      "\\((-8,2)\\)",
      "\\((4,2)\\)"
    ],
    "answer": 0
  },
  {
    "num": 13,
    "world": 2,
    "difficulty": "Fácil",
    "type": "Opción múltiple",
    "title": "Pregunta 13",
    "prompt": "Si \\(f(4)=0\\), ¿para cuál valor de \\(x\\) se cumple que \\(f(8x)=0\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción C.",
    "options": [
      "\\(x=32\\)",
      "\\(x=12\\)",
      "\\(x=\\dfrac12\\)",
      "\\(x=\\dfrac18\\)"
    ],
    "answer": 2
  },
  {
    "num": 14,
    "world": 2,
    "difficulty": "Fácil",
    "type": "Opción múltiple",
    "title": "Pregunta 14",
    "prompt": "La gráfica de \\(f\\) contiene el punto \\((2,3)\\). ¿Cuál punto pertenece a la gráfica de \\(h(x)=8f\\!\\left(\\dfrac{x}{8}\\right)\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "\\((\\tfrac14,24)\\)",
      "\\((16,24)\\)",
      "\\((16,\\tfrac38)\\)",
      "\\((10,11)\\)"
    ],
    "answer": 1
  },
  {
    "num": 15,
    "world": 2,
    "difficulty": "Intermedio",
    "type": "Opción múltiple",
    "title": "Pregunta 15",
    "prompt": "La siguiente tabla presenta algunos valores de \\(f\\): \\(x:-2,-1,0,1,2\\) y \\(f(x):3,1,0,1,3\\). Si \\(h(x)=f(x-2)+1\\), ¿cuál es el valor de \\(h(3)\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 1
  },
  {
    "num": 16,
    "world": 2,
    "difficulty": "Intermedio",
    "type": "Opción múltiple",
    "title": "Pregunta 16",
    "prompt": "Sean \\(f(x)=x^2-1\\), \\(g(x)=2x+1\\). ¿Cuál expresión representa \\((f\\circ g)(x)\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "\\(2x^2\\)",
      "\\((2x+1)^2-1\\)",
      "\\(2(x^2-1)+1\\)",
      "\\(x^2+2x\\)"
    ],
    "answer": 1
  },
  {
    "num": 17,
    "world": 3,
    "difficulty": "Intermedio",
    "type": "Opción múltiple",
    "title": "Pregunta 17",
    "prompt": "Con las funciones de la pregunta anterior, ¿cuál afirmación es correcta?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "\\(f\\circ g\\) y \\(g\\circ f\\) representan siempre la misma función.",
      "\\((f\\circ g)(x)=4x^2+4x\\).",
      "\\((g\\circ f)(x)=4x^2+4x\\).",
      "Ambas composiciones son funciones lineales."
    ],
    "answer": 1
  },
  {
    "num": 18,
    "world": 3,
    "difficulty": "Intermedio",
    "type": "Opción múltiple",
    "title": "Pregunta 18",
    "prompt": "Sean \\(f(x)=x-2\\), \\(g(x)=x^2+3x+4\\). ¿Cuál expresión representa el proceso de aplicar primero \\(f\\) y después \\(g\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "\\(f(g(x))\\)",
      "\\(g(f(x))\\)",
      "\\(f(x)+g(x)\\)",
      "\\(f(x)g(x)\\)"
    ],
    "answer": 1
  },
  {
    "num": 19,
    "world": 3,
    "difficulty": "Intermedio",
    "type": "Opción múltiple",
    "title": "Pregunta 19",
    "prompt": "Para las funciones \\(f(x)=x-2\\), \\(g(x)=x^2+3x+4\\), ¿cuál es el valor de \\((g\\circ f)(3)\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción C.",
    "options": [
      "2",
      "4",
      "8",
      "12"
    ],
    "answer": 2
  },
  {
    "num": 20,
    "world": 3,
    "difficulty": "Intermedio",
    "type": "Opción múltiple",
    "title": "Pregunta 20",
    "prompt": "Sean \\(f(x)=1-3x\\), \\(g(x)=\\cos x\\). ¿Cuál expresión representa \\((f\\circ g)(x)\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "\\(\\cos(1-3x)\\)",
      "\\(1-3\\cos x\\)",
      "\\(1-\\cos(3x)\\)",
      "\\(3\\cos(1-x)\\)"
    ],
    "answer": 1
  },
  {
    "num": 21,
    "world": 3,
    "difficulty": "Intermedio",
    "type": "Opción múltiple",
    "title": "Pregunta 21",
    "prompt": "Para las mismas funciones, \\((g\\circ f)(x)=\\cos(1-3x)\\). ¿Cuál es el período de esta función?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción C.",
    "options": [
      "\\(2\\pi\\)",
      "\\(6\\pi\\)",
      "\\(\\dfrac{2\\pi}{3}\\)",
      "\\(\\dfrac{\\pi}{3}\\)"
    ],
    "answer": 2
  },
  {
    "num": 22,
    "world": 3,
    "difficulty": "Intermedio",
    "type": "Opción múltiple",
    "title": "Pregunta 22",
    "prompt": "Sean \\(f(x)=\\sqrt{x}\\), \\(g(x)=\\sqrt[3]{1-x}\\). ¿Cuál expresión representa \\((f\\circ g)(x)\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "\\(\\sqrt[3]{1-\\sqrt{x}}\\)",
      "\\(\\sqrt{\\sqrt[3]{1-x}}\\)",
      "\\(\\sqrt[3]{\\sqrt{1-x}}\\)",
      "\\(\\dfrac{\\sqrt{1-x}}{3}\\)"
    ],
    "answer": 1
  },
  {
    "num": 23,
    "world": 3,
    "difficulty": "Intermedio",
    "type": "Opción múltiple",
    "title": "Pregunta 23",
    "prompt": "El dominio real de \\((f\\circ g)(x)=\\sqrt{\\sqrt[3]{1-x}}\\) es:",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "\\([1,\\infty)\\)",
      "\\(( -\\infty,1]\\)",
      "\\([0,\\infty)\\)",
      "\\(\\mathbb{R}\\)"
    ],
    "answer": 1
  },
  {
    "num": 24,
    "world": 3,
    "difficulty": "Intermedio",
    "type": "Opción múltiple",
    "title": "Pregunta 24",
    "prompt": "Con \\(f(x)=\\sqrt{x}\\), \\(g(x)=\\sqrt[3]{1-x}\\), la composición en el orden contrario, \\((g\\circ f)(x)=\\sqrt[3]{1-\\sqrt{x}}\\), tiene dominio:",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción C.",
    "options": [
      "\\(( -\\infty,1]\\)",
      "\\([0,1]\\)",
      "\\([0,\\infty)\\)",
      "\\(\\mathbb{R}\\)"
    ],
    "answer": 2
  },
  {
    "num": 25,
    "world": 4,
    "difficulty": "Intermedio",
    "type": "Opción múltiple",
    "title": "Pregunta 25",
    "prompt": "Sean \\(f(x)=x+\\dfrac1x\\), \\(g(x)=\\dfrac{x+1}{x+2}\\). ¿Cuál representación corresponde a \\(f(g(x))\\), antes de simplificar?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción A.",
    "options": [
      "\\(\\dfrac{x+1}{x+2}+\\dfrac{x+2}{x+1}\\)",
      "\\(x+\\dfrac{x+1}{x+2}\\)",
      "\\(x+\\dfrac{1}{\\frac{x+1}{x+2}}\\)",
      "\\(\\dfrac{x+1}{x+2}+\\dfrac1x\\)"
    ],
    "answer": 0
  },
  {
    "num": 26,
    "world": 4,
    "difficulty": "Intermedio",
    "type": "Opción múltiple",
    "title": "Pregunta 26",
    "prompt": "Para la composición de la pregunta anterior, los valores \\(x=-2\\) y \\(x=-1\\) se excluyen porque:",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "En ambos casos el valor final de la función es negativo.",
      "Uno hace que \\(g\\) no esté definida y el otro hace que \\(g(x)=0\\), valor no admitido por \\(f\\).",
      "Ambos hacen que \\(f(x)=0\\).",
      "La composición solamente admite números positivos."
    ],
    "answer": 1
  },
  {
    "num": 27,
    "world": 4,
    "difficulty": "Intermedio",
    "type": "Opción múltiple",
    "title": "Pregunta 27",
    "prompt": "La tabla muestra valores de dos funciones: \\(x:-2,-1,0,1,2\\), \\(f(x):1,0,2,-1,3\\), \\(g(x):0,2,-2,1,-1\\). ¿Cuál es el valor de \\((f\\circ g)(1)\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción A.",
    "options": [
      "-1",
      "0",
      "1",
      "3"
    ],
    "answer": 0
  },
  {
    "num": 28,
    "world": 4,
    "difficulty": "Intermedio",
    "type": "Opción múltiple",
    "title": "Pregunta 28",
    "prompt": "Usando la tabla anterior, ¿cuál es el valor de \\((g\\circ f)(1)\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción C.",
    "options": [
      "0",
      "1",
      "2",
      "-2"
    ],
    "answer": 2
  },
  {
    "num": 29,
    "world": 4,
    "difficulty": "Intermedio",
    "type": "Opción múltiple",
    "title": "Pregunta 29",
    "prompt": "Una máquina recibe un número \\(x\\), primero lo multiplica por \\(1{,}19\\) y después resta \\(20\\,000\\). Si \\(g(x)=1{,}19x\\) y \\(f(x)=x-20\\,000\\), ¿cuál representación corresponde al proceso completo?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "\\(g(f(x))\\)",
      "\\(f(g(x))\\)",
      "\\(f(x)+g(x)\\)",
      "\\(f(x)g(x)\\)"
    ],
    "answer": 1
  },
  {
    "num": 30,
    "world": 4,
    "difficulty": "Intermedio",
    "type": "Opción múltiple",
    "title": "Pregunta 30",
    "prompt": "Las funciones \\(f(x)=3x-2\\) y \\(g(x)=\\dfrac{x+2}{3}\\) satisfacen \\(f(g(x))=x\\) y \\(g(f(x))=x\\). ¿Qué interpretación es correcta?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción C.",
    "options": [
      "Las funciones tienen la misma gráfica.",
      "Las funciones son periódicas.",
      "Cada función deshace el efecto de la otra.",
      "Las funciones tienen necesariamente el mismo valor para cada \\(x\\)."
    ],
    "answer": 2
  },
  {
    "num": 31,
    "world": 4,
    "difficulty": "Difícil",
    "type": "Lectura de gráficas",
    "title": "Pregunta 31",
    "prompt": "En la gráfica se representan la función base \\(f\\) y una función transformada \\(h\\). ¿Cuál expresión corresponde a \\(h(x)\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "\\(h(x)=(x+2)^2-1\\)",
      "\\(h(x)=(x-2)^2-1\\)",
      "\\(h(x)=(x-1)^2-2\\)",
      "\\(h(x)=x^2+2\\)"
    ],
    "answer": 1,
    "image": "banco/q31.png"
  },
  {
    "num": 32,
    "world": 4,
    "difficulty": "Difícil",
    "type": "Lectura de gráficas",
    "title": "Pregunta 32",
    "prompt": "Observe las gráficas de \\(f\\) y \\(h\\). ¿Cuál transformación permite obtener \\(h\\) a partir de \\(f\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción A.",
    "options": [
      "Reflexionar respecto al eje x y trasladar dos unidades hacia arriba.",
      "Reflexionar respecto al eje y y trasladar dos unidades hacia abajo.",
      "Trasladar dos unidades hacia la derecha.",
      "Comprimir horizontalmente y trasladar dos unidades hacia arriba."
    ],
    "answer": 0,
    "image": "banco/q32.png"
  },
  {
    "num": 33,
    "world": 5,
    "difficulty": "Difícil",
    "type": "Lectura de gráficas",
    "title": "Pregunta 33",
    "prompt": "La gráfica azul representa \\(f(x)=\\sqrt{x}\\), y la gráfica roja representa una transformación \\(h\\). ¿Cuál es el punto inicial de la gráfica de \\(h\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "\\((1,2)\\)",
      "\\((-1,2)\\)",
      "\\((-2,1)\\)",
      "\\((2,-1)\\)"
    ],
    "answer": 1,
    "image": "banco/q33.png"
  },
  {
    "num": 34,
    "world": 5,
    "difficulty": "Difícil",
    "type": "Lectura de gráficas",
    "title": "Pregunta 34",
    "prompt": "Las gráficas representan dos funciones sinusoidales. De acuerdo con la gráfica, la amplitud de \\(h\\) es:",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción C.",
    "options": [
      "\\(\\dfrac12\\)",
      "1",
      "2",
      "\\(2\\pi\\)"
    ],
    "answer": 2,
    "image": "banco/q34.png"
  },
  {
    "num": 35,
    "world": 5,
    "difficulty": "Difícil",
    "type": "Lectura de gráficas",
    "title": "Pregunta 35",
    "prompt": "La gráfica roja es una transformación de la función \\(f(x)=\\dfrac1x\\). ¿Cuál es la asíntota vertical de \\(h\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción C.",
    "options": [
      "\\(x=-3\\)",
      "\\(x=0\\)",
      "\\(x=3\\)",
      "\\(y=3\\)"
    ],
    "answer": 2,
    "image": "banco/q35.png"
  },
  {
    "num": 36,
    "world": 5,
    "difficulty": "Difícil",
    "type": "Lectura de gráficas",
    "title": "Pregunta 36",
    "prompt": "La gráfica de \\(f\\) contiene, entre otros, el punto \\((1,2)\\). Se define \\(h(x)=f(x-2)+1\\). ¿En qué punto se transforma específicamente el punto \\((1,2)\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "\\((-1,3)\\)",
      "\\((3,3)\\)",
      "\\((1,5)\\)",
      "\\((3,1)\\)"
    ],
    "answer": 1,
    "image": "banco/q36.png"
  },
  {
    "num": 37,
    "world": 5,
    "difficulty": "Difícil",
    "type": "Lectura de gráficas",
    "title": "Pregunta 37",
    "prompt": "Las siguientes rectas representan las funciones \\(f\\) y \\(g\\). Utilizando la gráfica, determine el valor de \\((f\\circ g)(3)\\).",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción C.",
    "options": [
      "1",
      "2",
      "3",
      "7"
    ],
    "answer": 2,
    "image": "banco/q37.png"
  },
  {
    "num": 38,
    "world": 5,
    "difficulty": "Difícil",
    "type": "Lectura de gráficas",
    "title": "Pregunta 38",
    "prompt": "Las gráficas representan \\(f(x)=x^2\\) y \\(g(x)=x-1\\). ¿Cuál es el valor de \\((g\\circ f)(2)\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción C.",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 2,
    "image": "banco/q38.png"
  },
  {
    "num": 39,
    "world": 5,
    "difficulty": "Difícil",
    "type": "Lectura de gráficas",
    "title": "Pregunta 39",
    "prompt": "La gráfica representa una función \\(f\\). A partir de la gráfica se observa que el valor mínimo de \\(f\\) es \\(-2\\) y el valor máximo es \\(4\\). Si \\(h(x)=-f(x)+1\\), ¿cuál es el rango de \\(h\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción A.",
    "options": [
      "\\([-3,3]\\)",
      "\\([-5,1]\\)",
      "\\([-3,5]\\)",
      "\\([-1,5]\\)"
    ],
    "answer": 0,
    "image": "banco/q39.png"
  },
  {
    "num": 40,
    "world": 5,
    "difficulty": "Difícil",
    "type": "Lectura de gráficas",
    "title": "Pregunta 40",
    "prompt": "Las gráficas muestran una función \\(f\\) y una transformación \\(h\\). ¿Cuál relación describe correctamente la gráfica roja?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "\\(h(x)=f(x-2)\\)",
      "\\(h(x)=f(2x)\\)",
      "\\(h(x)=2f(x)\\)",
      "\\(h(x)=f\\!\\left(\\dfrac{x}{2}\\right)\\)"
    ],
    "answer": 1,
    "image": "banco/q40.png"
  }
];

const $ = s => document.querySelector(s);
const canvas = $("#gameCanvas");
if (!canvas) throw new Error("No se encontró el lienzo principal #gameCanvas.");
const ctx = canvas.getContext("2d");
const g = 9.8;
const ACTIVE_AVATAR = "explorador";
const ANGLE_MIN = -45;
const ANGLE_MAX = 70;
const ANGLE_REFERENCE_ROWS = [-45,-35,-25,-15,-5,5,15,25,35,45,55,65,70];
const targetColors = ["#ff4d6d", "#ff8c42", "#ffd166", "#06d6a0", "#4cc9f0", "#7b2ff7", "#f72585", "#2dd4bf"];
const targetRadii = [30, 36, 42, 48, 54, 60];

const state = { started:false, world:0, totalScore:0, arrows:80, shotPoints:0, worldFails:0, wrongAttempts:0, correctAnswers:0, angle:0, speed:0, avatar:ACTIVE_AVATAR, target:null, animating:false, answered:false, arrowLoaded:false, playerName:"Equipo 1", groupName:"Cálculo diferencial", startedAt:null, endedAt:null, sessionSeconds:0, timerId:null, shots:[], questionHistory:[], events:[], questionQueues:{}, usedQuestions:new Set(), currentOptionOrder:[], worldSequences:{}, sequenceStep:0, worldScore:0, challengeFails:0, challengeWrong:0, currentQuestion:null, security:{hidden:0,screenshot:0,fullscreen:0,blur:0,escape:0,screenShare:0,rightClick:0,devtools:0,external:0,total:0}, fullscreenRequired:true, fullscreenRecoveryRequired:false, fullscreenRecoveryReason:"", securityGateRequired:false, lastSecurityReason:"", quizAnnulled:false, annulReason:"", annulledAt:null, lastSecurityAttemptAt:0, ignoreSecurityUntil:0, shotVisualProgress:0, finalReportDeliveryStarted:false, finalReportDownloaded:false };
const els = {
  startScreen:$("#startScreen"), gameShell:$("#gameShell"), accessCode:$("#accessCode"), accessError:$("#accessError"),
  worldTitle:$("#worldTitle"), worldLabel:$("#worldLabel"), scoreLabel:$("#scoreLabel"), shotProgressLabel:$("#shotProgressLabel"), shotGoalLabel:$("#shotGoalLabel"), arrowsLabel:$("#arrowsLabel"), worldGradeLabel:$("#worldGradeLabel"), distanceLabel:$("#distanceLabel"), heightLabel:$("#heightLabel"), radiusLabel:$("#radiusLabel"),
  angle:$("#angle"), speed:$("#speed"), angleValue:$("#angleValue"), speedValue:$("#speedValue"), message:$("#messageBox"),
  announcement:$("#worldAnnouncement"), announceTitle:$("#announceTitle"), announceText:$("#announceText"),
  dialog:$("#questionDialog"), form:$("#questionForm"), qType:$("#questionType"), qTitle:$("#questionTitle"), sequenceProgress:$("#sequenceProgress"), qBody:$("#questionBody"), hintBox:$("#hintBox"), feedback:$("#feedbackBox"), btnHint:$("#btnHint"), btnSubmit:$("#btnSubmitAnswer"), btnContinue:$("#btnContinue"),
  playerName:$("#playerName"), groupName:$("#groupName"), playerInfo:$("#playerInfo"), selectedAvatarTop:$("#selectedAvatarTop"), sessionTime:$("#sessionTime"), correctInfo:$("#correctInfo"), wrongInfo:$("#wrongInfo"), blockInfo:$("#blockInfo"), reportDialog:$("#reportDialog"), reportContent:$("#reportContent")
};

function escapeHTML(value){return String(value ?? "").replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));}
function fmtDuration(total){total=Math.max(0,Math.floor(total||0));const m=String(Math.floor(total/60)).padStart(2,'0');const sec=String(total%60).padStart(2,'0');return `${m}:${sec}`;}
function tickClock(){const now=new Date();const text=now.toLocaleTimeString('es-CO',{hour:'2-digit',minute:'2-digit',second:'2-digit'});const el=document.querySelector('#alwaysClockText');if(el)el.textContent=text;}
setInterval(tickClock,1000);tickClock();
const avatarPortraitMap = {
  explorador:"avframes/explorador/preview.png"
};
const avatarLabels = {
  explorador:"Arquero élfico"
};
const avatarSceneMap = {...avatarPortraitMap};
const avatarImages = {};
const aimAngleValues = [-60,-50,-40,-30,-20,-10,0,10,20,30,40,50,60,70];
const shotRowAngles = [-45,-35,-25,-15,-5,5,15,25,35,45,55,65,70];
const avatarSpriteCatalog = {
  explorador:{
    portrait:avatarPortraitMap.explorador,
    x:8,
    yOffset:4,
    rowAngles:ANGLE_REFERENCE_ROWS,
    rows:Object.fromEntries(ANGLE_REFERENCE_ROWS.map(a=>[String(a),Array.from({length:10},(_,i)=>`avframes/explorador_sheets/row_${a<0?`n${Math.abs(a)}`:`p${a}`}.png::${i}`)]))
  }
};
const avatarSpriteImages = {};
const fantasyBackgroundPaths = [
  "bg_progression/phase_01.png",
  "bg_progression/phase_02.png",
  "bg_progression/phase_03.png",
  "bg_progression/phase_04.png",
  "bg_progression/phase_05.png",
  "bg_progression/phase_06.png",
  "bg_progression/phase_07.png",
  "bg_progression/phase_08.png",
  "bg_progression/phase_09.png",
  "bg_progression/phase_10.png"
];
const fantasyBackgroundImages = {};
const medievalTargetImagePath = "targets/target_medieval.png";
const medievalTargetImage = new Image();
let medievalTargetImageReady = false;
function preloadBackground(src){
  const img = new Image();
  img.onload = () => { fantasyBackgroundImages[src] = img; scheduleSceneDraw(); };
  img.src = src;
}
function loadFantasyBackgrounds(){ fantasyBackgroundPaths.forEach(preloadBackground); }
function loadMedievalTarget(){
  medievalTargetImage.onload = () => { medievalTargetImageReady = true; scheduleSceneDraw(); };
  medievalTargetImage.src = medievalTargetImagePath;
}
function allFantasyBackgroundsReady(){ return fantasyBackgroundPaths.every(p=>fantasyBackgroundImages[p]?.complete); }
function drawCoverImage(img, dx=0, dy=0){
  if(!img || !img.complete) return;
  const W=canvas.width, H=canvas.height;
  const iw=img.width||1, ih=img.height||1;
  const scale=Math.max((W+Math.abs(dx)*2)/iw,(H+Math.abs(dy)*2)/ih);
  const dw=iw*scale, dh=ih*scale;
  const x=(W-dw)/2 + dx;
  const y=(H-dh)/2 + dy;
  ctx.drawImage(img,x,y,dw,dh);
}

const avatarSpriteSourceImages = {};
const avatarSpriteSourceWaiters = {};
function parseSpriteRef(ref){
  const value=String(ref||"");
  const match=value.match(/^(.*)::(\d+)$/);
  if(!match) return {src:value,frameIndex:null,frameWidth:null,frameHeight:null};
  return {src:match[1],frameIndex:Number(match[2]),frameWidth:420,frameHeight:560};
}
function preloadSprite(ref){
  const meta=parseSpriteRef(ref);
  if(avatarSpriteSourceImages[meta.src]){
    avatarSpriteImages[ref]=avatarSpriteSourceImages[meta.src];
    return;
  }
  if(avatarSpriteSourceWaiters[meta.src]){
    avatarSpriteSourceWaiters[meta.src].push(ref);
    return;
  }
  avatarSpriteSourceWaiters[meta.src]=[ref];
  const img=new Image();
  img.onload=()=>{
    avatarSpriteSourceImages[meta.src]=img;
    (avatarSpriteSourceWaiters[meta.src]||[]).forEach(key=>{avatarSpriteImages[key]=img;});
    delete avatarSpriteSourceWaiters[meta.src];
    scheduleSceneDraw();
  };
  img.onerror=()=>{delete avatarSpriteSourceWaiters[meta.src];};
  img.src=meta.src;
}
function loadAvatarImages(){
  Object.entries(avatarSceneMap).forEach(([key,src])=>{
    const img = new Image();
    img.onload = () => { avatarImages[key] = img; if(state.avatar===key || key===ACTIVE_AVATAR) drawScene(); };
    img.src = src;
  });
  const allSpritePaths = new Set();
  Object.values(avatarSpriteCatalog).forEach(cfg=>{
    (cfg.prep||[]).forEach(p=>allSpritePaths.add(p));
    (cfg.follow||[]).forEach(p=>allSpritePaths.add(p));
    (cfg.aim||[]).forEach(item=>allSpritePaths.add(item.path));
    Object.values(cfg.rows||{}).forEach(arr=>arr.forEach(p=>allSpritePaths.add(p)));
    if(cfg.portrait) allSpritePaths.add(cfg.portrait);
  });
  allSpritePaths.forEach(preloadSprite);
}
function closestItem(list, value){ return list.reduce((best,item)=>Math.abs(item.angle-value) < Math.abs(best.angle-value) ? item : best, list[0]); }
function closestNumber(list, value){ return list.reduce((best,item)=>Math.abs(item-value) < Math.abs(best-value) ? item : best, list[0]); }
function angleBounds(list, value){
  const sorted = [...list].sort((a,b)=>a-b);
  if(value <= sorted[0]) return {lower:sorted[0], upper:sorted[0], t:0};
  if(value >= sorted[sorted.length-1]) return {lower:sorted[sorted.length-1], upper:sorted[sorted.length-1], t:0};
  for(let i=0;i<sorted.length-1;i++){
    const a=sorted[i], b=sorted[i+1];
    if(value>=a && value<=b){
      const span = Math.max(1e-6, b-a);
      return {lower:a, upper:b, t:(value-a)/span};
    }
  }
  return {lower:sorted[0], upper:sorted[0], t:0};
}
function angleSweep(rowAngles, fromAngle, toAngle){
  const low=Math.min(fromAngle,toAngle), high=Math.max(fromAngle,toAngle);
  const between=(rowAngles||[]).filter(a=>a>=low && a<=high).sort((a,b)=>a-b);
  const sweep = between.length ? between : [closestNumber(rowAngles||[0], fromAngle), closestNumber(rowAngles||[0], toAngle)];
  return toAngle >= fromAngle ? sweep : [...sweep].reverse();
}
function getAvatarIdleSprite(avatarId=state.avatar, angle=state.angle){
  const cfg = avatarSpriteCatalog[avatarId] || avatarSpriteCatalog[ACTIVE_AVATAR];
  if(cfg.aim && cfg.aim.length) return closestItem(cfg.aim, angle).path;
  const nearest = closestNumber(cfg.rowAngles || [0], angle);
  const row = cfg.rows?.[String(nearest)] || [];
  return row[5] || row[4] || row[0] || cfg.portrait;
}
function getAvatarIdleBlend(avatarId=state.avatar, angle=state.angle){
  const cfg = avatarSpriteCatalog[avatarId] || avatarSpriteCatalog[ACTIVE_AVATAR];
  const bounds = angleBounds(cfg.rowAngles || [0], angle);
  const lowerRow = cfg.rows?.[String(bounds.lower)] || [];
  const upperRow = cfg.rows?.[String(bounds.upper)] || lowerRow;
  const lowerPath = lowerRow[5] || lowerRow[4] || lowerRow[0] || cfg.portrait;
  const upperPath = upperRow[5] || upperRow[4] || upperRow[0] || cfg.portrait;
  return {lower:lowerPath, upper:upperPath, t:bounds.t, lowerAngle:bounds.lower, upperAngle:bounds.upper};
}
function getAvatarSequenceForShot(avatarId=state.avatar, angle=state.angle){
  const cfg = avatarSpriteCatalog[avatarId] || avatarSpriteCatalog[ACTIVE_AVATAR];
  if(cfg.aim && cfg.aim.length){
    const target = closestItem(cfg.aim, angle);
    const targetIndex = Math.max(0, cfg.aim.findIndex(item=>item.path===target.path));
    const neutralIndex = Math.max(0, cfg.aim.findIndex(item=>item.angle===0));
    const step = targetIndex >= neutralIndex ? 1 : -1;
    const sweep = [];
    for(let i=neutralIndex; step>0 ? i<=targetIndex : i>=targetIndex; i+=step) sweep.push(cfg.aim[i].path);
    return {
      prep:(cfg.prep||[]).map(path=>({path,duration:9})),
      aim:sweep.flatMap((path,idx)=>[{path,duration:7},{path,duration:idx===sweep.length-1?10:6}]),
      hold:[{path:target.path,duration:10}],
      follow:(cfg.follow||[]).map(path=>({path,duration:7}))
    };
  }
  // Cada ángulo ideal posee una secuencia independiente completa. No se
  // concatenan filas de otros ángulos: así el arquero conserva escala, apoyo
  // y continuidad desde la preparación hasta el seguimiento.
  const nearest = closestNumber(cfg.rowAngles || [0], angle);
  const row = cfg.rows?.[String(nearest)] || [];
  return {
    prep:[0,1,2].map(i=>row[i]).filter(Boolean).map(path=>({path,duration:6})),
    aim:[3,4,5,6].map(i=>row[i]).filter(Boolean).map(path=>({path,duration:5})),
    hold:[{path:row[7] || row[6] || row[5] || row[0],duration:9}],
    follow:[row[8]||row[7]||row[6]||row[0], row[9]||row[8]||row[7]||row[0]].filter(Boolean).map(path=>({path,duration:7}))
  };
}
function playAvatarPreparation(avatarId, angle, onRelease){
  const seq = getAvatarSequenceForShot(avatarId, angle);
  const frames = [...(seq.prep||[]), ...(seq.aim||[]), ...(seq.hold||[])];
  if(!frames.length){ state.avatarFramePath = getAvatarIdleSprite(avatarId, angle); onRelease?.(seq); return; }
  state.avatarPrepActive = true;
  let i=0, tick=0;
  const step = ()=>{
    const frame = frames[Math.min(i, frames.length-1)];
    state.avatarFramePath = frame.path;
    const showLaunchArrow = i >= Math.max(0, frames.length-2);
    drawScene([],null,0,showLaunchArrow);
    tick++;
    if(tick >= (frame.duration || 8)){
      tick = 0;
      i++;
      if(i >= frames.length){ state.avatarPrepActive = false; state.avatarFramePath = frame.path; onRelease?.(seq); return; }
    }
    requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
loadAvatarImages();
loadFantasyBackgrounds();
loadMedievalTarget();
updateAvatarPresentation();
function updateAvatarPresentation(){
  state.avatar = ACTIVE_AVATAR;
  if(els.selectedAvatarTop){
    els.selectedAvatarTop.src = avatarPortraitMap[ACTIVE_AVATAR];
    els.selectedAvatarTop.alt = `Avatar seleccionado: ${avatarLabels[ACTIVE_AVATAR]}`;
  }
}
function updateTeacherPanel(){
  if(els.playerInfo){
    const fullName=state.playerName || '-';
    els.playerInfo.textContent=fullName;
    els.playerInfo.title=fullName;
  }
  if(els.sessionTime) els.sessionTime.textContent=fmtDuration(state.sessionSeconds);
  if(els.correctInfo) els.correctInfo.textContent=state.correctAnswers||0;
  if(els.wrongInfo) els.wrongInfo.textContent=state.wrongAttempts||0;
  if(els.blockInfo) els.blockInfo.textContent=`${totalSecurity()}/5`;
  updateSecurityCounters();
  updateAvatarPresentation();
}
function startSessionTimer(){
  clearInterval(state.timerId);
  state.sessionSeconds=0;
  state.timerId=setInterval(()=>{if(state.started){state.sessionSeconds++;updateTeacherPanel();}},1000);
  updateTeacherPanel();
}
function stopSessionTimer(){clearInterval(state.timerId);state.timerId=null;updateTeacherPanel();}
function logEvent(kind, detail){state.events.push({time:new Date().toLocaleString('es-CO'),kind,detail});}
function shuffleArray(arr){
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
  return a;
}
function shuffledIndices(n){return shuffleArray(Array.from({length:n},(_,i)=>i));}
function resetQuestionQueues(){state.questionQueues={};state.usedQuestions=new Set();state.worldSequences={};}
const microRoles=[
  {name:"Activación",description:"Reconoce el concepto esencial del mundo."},
  {name:"Comprensión",description:"Relaciona representaciones y propiedades."},
  {name:"Aplicación",description:"Usa el concepto en una situación concreta."},
  {name:"Integración",description:"Resuelve el reto de cierre del mundo."}
];
const worldQuestionPairs={
  1:[[1,2],[3,4],[5,6],[7,8]],
  2:[[9,10],[11,12],[13,14],[15,16]],
  3:[[17,18],[19,20],[21,22],[23,24]],
  4:[[25,26],[27,28],[29,30],[31,32]],
  5:[[33,34],[35,36],[37,38],[39,40]]
};
function prepareWorldSequences(){
  state.worldSequences={};
  Object.entries(worldQuestionPairs).forEach(([world,pairs])=>{
    state.worldSequences[world]=pairs.map(pair=>pair[Math.floor(Math.random()*pair.length)]);
  });
}
function currentMicroRole(){return microRoles[state.sequenceStep]||microRoles[0];}
function renderSequenceProgress(){
  if(!els.sequenceProgress)return;
  els.sequenceProgress.innerHTML=microRoles.map((role,i)=>{
    const cls=i<state.sequenceStep?'done':i===state.sequenceStep?'active':'pending';
    return `<div class="sequence-step ${cls}"><span>${i<state.sequenceStep?'✓':i+1}</span><div><b>${role.name}</b><small>${i===state.sequenceStep?role.description:`Reto ${i+1} de 4`}</small></div></div>`;
  }).join('');
}
function selectedOptionText(q){
  if(q.mode==='number'||q.mode==='text'||q.mode==='textarea'){
    return String(new FormData(els.form).get('answerText')||'');
  }
  const raw=new FormData(els.form).get('answer');
  if(raw===null) return '';
  const displayIdx=Number(raw);
  const originalIdx=state.currentOptionOrder[displayIdx];
  return Number.isFinite(displayIdx) && q.options && Number.isFinite(originalIdx)
    ? `${String.fromCharCode(65+displayIdx)}. ${q.options[originalIdx]}`
    : '';
}
function correctAnswerText(q){
  if(q.mode==='number') return String(q.numericAnswer);
  if(q.mode==='text'||q.mode==='textarea') return (q.alternatives&&q.alternatives[0]) || (q.keywords||[]).join(', ');
  if(q.options && Number.isFinite(Number(q.answer))){
    const displayIdx=Math.max(0,state.currentOptionOrder.indexOf(Number(q.answer)));
    return `${String.fromCharCode(65+displayIdx)}. ${q.options[Number(q.answer)]}`;
  }
  return '';
}
function securityDefaults(){return {hidden:0,screenshot:0,fullscreen:0,blur:0,escape:0,screenShare:0,rightClick:0,devtools:0,external:0,total:0};}
const MAX_SECURITY_BLOCKS=5;
const TEACHER_RECOVERY_PASSWORD='CRG25';
let lastSecurityBlockAt=0;
function ensureSecurityState(){
  state.security={...securityDefaults(), ...(state.security||{})};
  state.security.total=Object.entries(state.security).filter(([k])=>k!=='total').reduce((a,[,v])=>a+Number(v||0),0);
  return state.security;
}
function totalSecurity(){return ensureSecurityState().total||0;}
function gameIsRunning(){return Boolean(state.started && !state.quizAnnulled && !els.gameShell?.classList.contains('hidden'));}
function questionDialogVisible(){return Boolean(els.dialog?.open);}
function isFullScreen(){return Boolean(document.fullscreenElement || document.webkitFullscreenElement);}
function fullscreenCapable(){const el=document.documentElement;return Boolean(document.fullscreenEnabled || document.webkitFullscreenEnabled || el.requestFullscreen || el.webkitRequestFullscreen);}
function teacherPasswordMatches(value){return String(value||'').trim().toUpperCase()===TEACHER_RECOVERY_PASSWORD;}
function updateSecurityCounters(){
  const value=`${totalSecurity()}/${MAX_SECURITY_BLOCKS}`;
  const gateCounter=$("#securityBlockCounter");
  if(gateCounter) gateCounter.textContent=value;
  if(els.blockInfo) els.blockInfo.textContent=value;
}
async function requestFullScreen(){
  const el=document.documentElement;
  try{
    if(!isFullScreen()){
      if(el.requestFullscreen) await el.requestFullscreen({navigationUI:'hide'});
      else if(el.webkitRequestFullscreen) await el.webkitRequestFullscreen();
    }
  }catch(err){
    state.fullscreenRecoveryRequired=true;
    state.fullscreenRecoveryReason='El navegador bloqueó la entrada automática. Pulsa el botón para activar la pantalla completa.';
  }
  setTimeout(checkFullscreenState,120);
  return isFullScreen();
}
function fullscreenRecoveryMessage(){
  return state.lastSecurityReason || state.fullscreenRecoveryReason || 'La partida está pausada porque el juego dejó de estar en pantalla completa.';
}
function checkFullscreenState(){
  const block=$("#fullscreenBlock");
  if(!block) return;
  updateSecurityCounters();
  if(!fullscreenCapable()){
    const required=Boolean(state.fullscreenRequired && gameIsRunning());
    document.body.classList.toggle('fullscreen-paused',required);
    const p=$("#fullscreenBlockMessage");
    if(p) p.textContent='Este navegador no permite activar la pantalla completa. Abre el juego en una versión actual de Chrome, Edge o Firefox para continuar.';
    block.classList.toggle('hidden',!required);
    return;
  }
  const mustRecover=Boolean(state.fullscreenRequired && gameIsRunning() && (state.securityGateRequired || state.fullscreenRecoveryRequired || !isFullScreen()));
  document.body.classList.toggle('fullscreen-paused',mustRecover);
  if(mustRecover){
    const p=$("#fullscreenBlockMessage");
    if(p) p.textContent=fullscreenRecoveryMessage();
    const row=$("#securityTeacherRow");
    if(row) row.classList.toggle('hidden',!state.securityGateRequired);
    const btn=$("#resumeFullscreenBtn");
    if(btn) btn.textContent=state.securityGateRequired?'Validar y reingresar':'Volver a pantalla completa';
    block.classList.remove('hidden');
  }else block.classList.add('hidden');
}
async function resumeFullScreenFlow(requireTeacher=true){
  const passInput=$("#securityTeacherPass");
  const passMsg=$("#securityPassMsg");
  if(requireTeacher && state.securityGateRequired){
    if(!teacherPasswordMatches(passInput?.value)){
      if(passMsg) passMsg.textContent='Contraseña docente incorrecta.';
      if(passInput){passInput.focus();passInput.select();}
      return false;
    }
    if(passMsg) passMsg.textContent='Contraseña correcta. Restaurando pantalla completa...';
  }
  if(state.fullscreenRequired && gameIsRunning() && !isFullScreen()) await requestFullScreen();
  if(isFullScreen()){
    state.fullscreenRecoveryRequired=false;
    state.fullscreenRecoveryReason='';
    state.securityGateRequired=false;
    state.lastSecurityReason='';
    if(passInput) passInput.value='';
    if(passMsg) passMsg.textContent='';
    allowSafeNavigation(900);
  }
  checkFullscreenState();
  if(isFullScreen()){
    try{canvas.focus({preventScroll:true});}catch(_e){canvas.focus();}
    return true;
  }
  if(passMsg) passMsg.textContent='No fue posible activar la pantalla completa. Intenta nuevamente.';
  return false;
}
function insistFullscreen(){
  if(state.fullscreenRequired && gameIsRunning() && !isFullScreen()){
    state.fullscreenRecoveryRequired=true;
    if(!state.fullscreenRecoveryReason) state.fullscreenRecoveryReason='Debes volver a pantalla completa para continuar la partida.';
  }
  checkFullscreenState();
}
function armFullscreenFromGesture(){
  const go=()=>{
    if(state.fullscreenRequired && gameIsRunning() && !state.securityGateRequired && (state.fullscreenRecoveryRequired || !isFullScreen())) resumeFullScreenFlow(false);
  };
  ['pointerdown','touchstart','keydown'].forEach(ev=>document.addEventListener(ev,go,{capture:true,passive:true}));
}
function allowSafeNavigation(ms=2500){state.ignoreSecurityUntil=Date.now()+ms;}
function announceSecurityMessage(msg){
  const toast=$("#securityToast");
  if(toast){toast.textContent=msg;toast.classList.remove('hidden');clearTimeout(window.__qaSecurityToastTimer);window.__qaSecurityToastTimer=setTimeout(()=>toast.classList.add('hidden'),3600);}
  if(els.message) els.message.textContent=msg;
}
function showSecurityGate(reason){
  state.securityGateRequired=true;
  state.fullscreenRecoveryRequired=true;
  state.lastSecurityReason=reason;
  state.fullscreenRecoveryReason=`${reason} La partida quedó bloqueada. Ingresa la contraseña docente y vuelve a pantalla completa.`;
  const passInput=$("#securityTeacherPass");
  const passMsg=$("#securityPassMsg");
  if(passInput) passInput.value='';
  if(passMsg) passMsg.textContent='';
  updateSecurityCounters();
  checkFullscreenState();
  setTimeout(()=>passInput?.focus(),100);
}
function registerSecurity(kind,detail){registerSecurityBlock(kind,detail||kind);}
function registerSecurityAttempt(kind,detail){registerSecurityBlock(kind,detail||kind);}
function registerCriticalSecurity(kind,detail){registerSecurityBlock(kind,detail||kind);}
function registerDevtoolsAttempt(detail){registerSecurityBlock('devtools',detail);}
function registerSecurityBlock(kind,reason){
  const now=Date.now();
  if(now < (state.ignoreSecurityUntil||0)) return;
  if(!gameIsRunning() || !state.fullscreenRequired || state.quizAnnulled) return;
  const gate=$("#fullscreenBlock");
  if(state.securityGateRequired && gate && !gate.classList.contains('hidden')) return;
  if(now-lastSecurityBlockAt<2200) return;
  lastSecurityBlockAt=now;
  const sec=ensureSecurityState();
  if(!(kind in sec)) sec[kind]=0;
  sec[kind]=(sec[kind]||0)+1;
  sec.total=totalSecurity();
  state.lastSecurityAttemptAt=now;
  logEvent('bloqueo de seguridad',`${totalSecurity()}/${MAX_SECURITY_BLOCKS}: ${reason}`);
  updateSecurityCounters();
  updateTeacherPanel();
  if(totalSecurity()>=MAX_SECURITY_BLOCKS){
    zeroQuizForBlocks(reason);
    return;
  }
  announceSecurityMessage(`⚠️ Bloqueo ${totalSecurity()}/${MAX_SECURITY_BLOCKS}: ${reason}`);
  showSecurityGate(reason);
}
function zeroQuizForBlocks(reason){
  if(state.quizAnnulled) return;
  state.security.total=MAX_SECURITY_BLOCKS;
  state.totalScore=0;
  state.quizAnnulled=true;
  state.annulReason=`Se acumularon ${MAX_SECURITY_BLOCKS} bloqueos de seguridad. Último evento: ${reason}`;
  state.annulledAt=new Date().toLocaleString('es-CO');
  state.endedAt=state.annulledAt;
  state.started=false;
  state.fullscreenRequired=false;
  state.securityGateRequired=false;
  stopSessionTimer();
  try{els.dialog?.close();}catch(e){}
  $("#fullscreenBlock")?.classList.add('hidden');
  document.body.classList.remove('quiz-secure-active','fullscreen-paused');
  document.body.classList.add('quiz-annulled');
  if(els.message) els.message.textContent=`⛔ QUIZ EN CERO: se acumularon ${MAX_SECURITY_BLOCKS} bloqueos. Nota final 0/5.`;
  logEvent('quiz en cero',state.annulReason);
  drawScene();
  try{window.SCORMBridge?.finish?.(0,'failed',state.sessionSeconds);}catch(error){console.warn('SCORM:',error);}
  deliverFinalReportAutomatically();
}
function annulQuiz(reason){zeroQuizForBlocks(reason||'Se alcanzó el límite de bloqueos.');}
function installScreenShareAndExternalGuards(){
  // Igual que en Pac-Man: no se penalizan acciones accesorias; el control se
  // concentra en pantalla completa y cambio de pestaña/minimización.
}
function installAntiInspectionGuards(){
  document.addEventListener('contextmenu',event=>{
    if(!gameIsRunning() || !state.fullscreenRequired || state.quizAnnulled) return;
    event.preventDefault();
    event.stopPropagation();
    if(typeof event.stopImmediatePropagation==='function') event.stopImmediatePropagation();
    registerSecurityBlock('rightClick','Se intentó usar el clic derecho durante la partida.');
  },{capture:true,passive:false});
}
function initSecurityGuards(){
  armFullscreenFromGesture();
  installAntiInspectionGuards();
  const onFullscreenChange=()=>{
    if(state.fullscreenRequired&&gameIsRunning()&&!isFullScreen()){
      registerSecurityBlock('fullscreen','Saliste de pantalla completa.');
    }else if(isFullScreen()&&!state.securityGateRequired){
      state.fullscreenRecoveryRequired=false;
      state.fullscreenRecoveryReason='';
    }
    checkFullscreenState();
  };
  document.addEventListener('fullscreenchange',onFullscreenChange,true);
  document.addEventListener('webkitfullscreenchange',onFullscreenChange,true);
  document.addEventListener('visibilitychange',()=>{
    if(document.hidden&&state.fullscreenRequired&&gameIsRunning()){
      registerSecurityBlock('hidden','Cambiaste de pestaña o minimizaste el navegador.');
    }
    setTimeout(checkFullscreenState,160);
  },true);
  window.addEventListener('focus',()=>setTimeout(insistFullscreen,160));
  setInterval(()=>{
    if(state.fullscreenRequired&&gameIsRunning()&&!document.hidden&&!isFullScreen()&&!state.securityGateRequired){
      state.fullscreenRecoveryRequired=true;
      if(!state.fullscreenRecoveryReason) state.fullscreenRecoveryReason='La partida requiere pantalla completa durante todo el juego.';
      checkFullscreenState();
    }
  },1200);
  $("#resumeFullscreenBtn")?.addEventListener('click',()=>resumeFullScreenFlow(true));
  $("#securityTeacherPass")?.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();resumeFullScreenFlow(true);}});
}
function categoryFromQuestion(q){
  const t=String(q?.type||'').toLowerCase();
  if(t.includes('verdadero')) return 'V/F';
  if(t.includes('num')) return 'Respuesta numérica';
  if(t.includes('palabra')) return 'Palabra clave';
  if(t.includes('afirmaciones')) return 'Selección de afirmaciones';
  if(t.includes('clasificación')||t.includes('ordenamiento')||t.includes('asociación')) return 'Clasificación/asociación';
  if(t.includes('gráfica')) return 'Lectura de gráficas';
  return 'Opción múltiple';
}
function topicFromQuestion(q){
  const prompt=`${q?.title||''} ${q?.prompt||''} ${(q?.options||[]).join(' ')}`;
  if(/composici[oó]n|\\circ/i.test(prompt)) return 'Composición de funciones';
  if(/inversa|f\^\{-1\}|uno a uno|inyectiva/i.test(prompt)) return 'Funciones inversas';
  if(/dominio|denominador|radicando|logaritm|as[ií]ntota/i.test(prompt)) return 'Dominio y asíntotas';
  if(/rango|recorrido|m[aá]ximo|m[ií]nimo|v[eé]rtice/i.test(prompt)) return 'Rango y puntos notables';
  if(/reflexi[oó]n|traslaci[oó]n|desplazamiento|compresi[oó]n|estiramiento|transformaci[oó]n/i.test(prompt)) return 'Transformaciones de funciones';
  if(/gr[aá]fica|punto abierto|punto cerrado|creciente|decreciente|intercepto/i.test(prompt)) return 'Interpretación de gráficas';
  return 'Funciones y representaciones';
}
function reportFormula(text){
  return String(text||'').replace(/\\/g,'\\\\').replace(/\$/g,'\\$');
}
function reportMath(value){return String(value||'').replace(/\$\$/g,'').trim() || '-';}
function percent(ok,total){return total?Math.round(100*ok/total):0;}
function reportBar(label, ok, total){
  const pct=percent(ok,total);
  return `<div class="report-bar-row"><div class="report-bar-label"><b>${escapeHTML(label)}</b><span>${ok}/${total} · ${pct}%</span></div><div class="report-bar"><i style="width:${pct}%"></i></div></div>`;
}
function buildReviewCards(){
  const cards=[
    ['Modelo general de transformación','Describe traslaciones, reflexiones y escalas desde una función base.',String.raw`h(x)=a\,f\!\bigl(b(x-c)\bigr)+d`,'Primero analiza el interior b(x-c), luego el factor a y finalmente el desplazamiento vertical d.','Cambiar el signo del desplazamiento horizontal: f(x-c) se desplaza c unidades a la derecha.'],
    ['Desplazamientos','Relaciona la ecuación transformada con el movimiento de la gráfica.',String.raw`f(x-c)+d:\quad (x,y)\mapsto(x+c,y+d)`,'Ubica un punto notable de la función base y aplica el desplazamiento.','Mover a la izquierda cuando aparece x-c.'],
    ['Reflexiones y escalas','Reconoce cambios verticales y horizontales.',String.raw`a f(x):\ |a|\text{ escala vertical},\qquad f(bx):\ |b|^{-1}\text{ escala horizontal}`,'Compara por separado el signo y el valor absoluto de a y b.','Creer que f(2x) estira horizontalmente; en realidad comprime por factor 1/2.'],
    ['Dominio, rango y asíntotas','Determina entradas permitidas y comportamiento límite.',String.raw`\mathrm{Dom}(f)=\{x:f(x)\text{ está definida}\},\qquad \mathrm{Ran}(f)=\{f(x):x\in\mathrm{Dom}(f)\}`,'Revisa denominadores, raíces, logaritmos, puntos abiertos y asíntotas.','Confundir una asíntota vertical x=c con una asíntota horizontal y=c.'],
    ['Composición e inversa','Aplica funciones en el orden correcto y verifica la inversión.',String.raw`(f\circ g)(x)=f(g(x)),\qquad f^{-1}(f(x))=x`,'Trabaja de adentro hacia afuera; para la inversa intercambia x e y y despeja.','Cambiar el orden de la composición.'],
    ['Movimiento parabólico de la flecha','Modela la trayectoria usada por el reto de tiro.',String.raw`x(t)=x_0+v_0\cos(\theta)t,\qquad y(t)=y_0+v_0\sin(\theta)t-\tfrac12gt^2`,'Ajusta primero el ángulo y luego la velocidad para alcanzar la altura del centro de la diana.','Usar grados directamente en funciones trigonométricas que esperan radianes.'],
    ['Velocidad recomendada para el blanco','Relaciona distancia, altura y ángulo con la velocidad inicial.',String.raw`v_0=\sqrt{\frac{g d^2}{2\cos^2\theta\,(d\tan\theta-\Delta y)}}`,'Comprueba que d·tan(θ)-Δy sea positivo antes de calcular.','Elegir un ángulo que hace imposible alcanzar el blanco con la trayectoria ideal.'],
    ['Sistema de calificación','Cada mundo parte de 1.0 y aplica penalizaciones por fallos.',String.raw`\mathrm{Nota}=\sum_{m=1}^{5}\max\!\left(1-0.10F_m-0.20E_m,0\right)`,'Reduce los tiros de prueba y justifica la respuesta antes de enviarla.','Confundir los puntos de tiro con puntos directos de la nota.']
  ];
  return cards.map(c=>`<article class="report-guide-card"><h4>${c[0]}</h4><p><b>Idea central:</b> ${c[1]}</p><div class="report-formula">\\[${c[2]}\\]</div><p><b>Método recomendado:</b> ${c[3]}</p><p><b>Error frecuente:</b> ${c[4]}</p></article>`).join('');
}
function buildImprovementPlan(){
  const history=state.questionHistory||[];
  const wrong=history.filter(h=>!h.correct);
  if(!history.length) return `<article class="report-plan-card"><h4>${escapeHTML(state.playerName)}</h4><p>Debe jugar una partida completa para obtener un diagnóstico individual.</p></article>`;
  const topicCounts={};
  wrong.forEach(h=>{topicCounts[h.topic]=(topicCounts[h.topic]||0)+1;});
  const topics=Object.entries(topicCounts).sort((a,b)=>b[1]-a[1]).slice(0,3);
  const topicHtml=topics.length?topics.map(([t,n],i)=>`<li><b>${escapeHTML(t)}:</b> ${n} error(es). Revisar definición, procedimiento y lectura de opciones.</li>`).join(''):`<li><b>Consolidación:</b> mantén la estrategia de lectura y justificación, porque no se registraron errores.</li>`;
  return `<article class="report-plan-card"><h4>${escapeHTML(state.playerName)}</h4><p><b>Nota:</b> ${state.totalScore.toFixed(2)}/5.00. <b>Acierto:</b> ${percent(state.correctAnswers,history.length)}%.</p><ol>${topicHtml}<li><b>Rutina sugerida:</b> resolver tres ejercicios adicionales del tema con menor desempeño y escribir una justificación breve antes de elegir la opción.</li></ol></article>`;
}

function buildAdventureReportThemeStyles(){
  // Un único tema embebido se usa tanto dentro del juego como en el archivo
  // descargado. Así el informe visible y el HTML descargado son idénticos.
  return String.raw`<style id="arcotransforma-adventure-report-theme">
.adventure-report,.adventure-report *{box-sizing:border-box}
.adventure-report{width:100%;font-family:Georgia,'Times New Roman',serif;line-height:1.58;color:#10243d}
.adventure-report .report-section,.adventure-report .report-question-card{background:#fff;border:1px solid #dfe8f5;border-radius:22px;padding:24px;margin:20px 0;box-shadow:0 10px 28px rgba(8,35,74,.07);break-inside:avoid;page-break-inside:avoid}
.adventure-report .report-cover{background:linear-gradient(145deg,#06184c,#112f7a)!important;color:#fff!important;text-align:center!important;border-color:#244a93!important;padding:28px 24px!important}
.adventure-report .report-cover h1{font-size:clamp(2rem,5vw,4rem);line-height:1.05;margin:8px 0;color:#ffd866!important}
.adventure-report .report-cover h2{border:0!important;color:#fff!important;margin:.35rem 0!important;font-size:1.2rem!important;padding:0!important}
.adventure-report .report-cover p{margin:.4rem 0;color:#e9f0ff}
.adventure-report .report-hero-icon{font-size:58px;line-height:1}
.adventure-report .report-topline{text-transform:uppercase;letter-spacing:.17em;font-size:.82rem;font-weight:900;color:#ffd866}
.adventure-report .report-security-alert{max-width:780px;margin:16px auto 0;padding:12px 16px;border:1px solid #ff9eaa;border-radius:14px;background:#fff0f2;color:#9f1239;font-weight:800}
.adventure-report h2{color:#062f8a;border-bottom:3px solid #dfe8f5;padding-bottom:8px;margin-top:0}
.adventure-report h3,.adventure-report h4,.adventure-report h5{color:#0a357d}
.adventure-report .report-metrics{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:16px 0}
.adventure-report .report-metric{background:#082d76;color:#fff;border-radius:16px;padding:16px;min-height:94px;box-shadow:0 8px 18px rgba(8,45,118,.15)}
.adventure-report .report-metric b{display:block;font-size:1.7rem;color:#ffd866;line-height:1.1}
.adventure-report .report-metric span{display:block;margin-top:6px;font-size:.82rem;text-transform:uppercase;letter-spacing:.04em;color:#e8f0ff}
.adventure-report .report-clean-table{width:100%;border-collapse:collapse;background:#fff;border-radius:14px;overflow:hidden}
.adventure-report .report-clean-table td,.adventure-report .report-clean-table th{border-bottom:1px solid #e7edf5;padding:10px;text-align:left;vertical-align:top}
.adventure-report .report-clean-table th{background:#062f8a;color:#fff}
.adventure-report .report-clean-table tr:last-child td{border-bottom:0}
.adventure-report .report-bar-row{border:1px solid #dfe8f5;background:#f7fbff;border-radius:14px;padding:12px;margin:10px 0;break-inside:avoid}
.adventure-report .report-bar-label{display:flex;justify-content:space-between;gap:12px;align-items:center}
.adventure-report .report-bar-label span{font-weight:900;color:#0a357d}
.adventure-report .report-bar{height:12px;background:#e7edf5;border-radius:999px;overflow:hidden;margin-top:8px}
.adventure-report .report-bar i{display:block;height:100%;background:linear-gradient(90deg,#062f8a,#26a69a);border-radius:999px}
.adventure-report .report-plan-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:12px}
.adventure-report .report-plan-card{background:#fbfdff;border:1px solid #dfe8f5;border-radius:16px;padding:14px;break-inside:avoid}
.adventure-report .report-plan-card h4{margin:0 0 8px}
.adventure-report .report-guide-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.adventure-report .report-guide-card{background:#fbfdff;border:1px solid #dfe8f5;border-radius:16px;padding:14px;break-inside:avoid}
.adventure-report .report-guide-card h4{margin:0 0 10px}
.adventure-report .report-guide-card p{margin:8px 0}
.adventure-report .report-formula,.adventure-report .report-question-prompt,.adventure-report .report-feedback-box{background:#f7fbff;border:1px solid #dfe8f5;border-radius:14px;padding:13px;margin:10px 0;overflow-x:auto}
.adventure-report .report-formula.big{background:#fff9e8;border-color:#ead99f}
.adventure-report .report-question-card{padding:20px}
.adventure-report .report-question-card header{display:flex;gap:12px;align-items:center}
.adventure-report .report-qnum{flex:0 0 42px;width:42px;height:42px;border-radius:50%;display:grid;place-items:center;background:#062f8a;color:#fff;font-weight:900}
.adventure-report .report-question-card header>div{min-width:0;flex:1}
.adventure-report .report-question-card header>div>b{display:block;color:#062f8a;font-size:1.08rem}
.adventure-report .report-question-card header small{display:block;margin-top:2px;color:#5c6f8c}
.adventure-report .report-question-card header>strong{margin-left:auto;padding:8px 13px;border-radius:999px;white-space:nowrap}
.adventure-report .report-question-card strong.ok{background:#e4f8ee;color:#0b754f}
.adventure-report .report-question-card strong.bad{background:#ffe7ed;color:#a80f32}
.adventure-report .report-question-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.adventure-report .report-question-grid>div{background:#f7fbff;border:1px solid #dfe8f5;border-radius:14px;padding:13px}
.adventure-report .report-question-grid h5,.adventure-report .report-feedback-box h5{margin:0 0 8px}
.adventure-report .report-question-grid p,.adventure-report .report-feedback-box p{margin:4px 0}
.adventure-report .report-options-list{margin:10px 0 0;padding-left:22px}
.adventure-report .report-option{background:#fff;border:1px solid #dfe8f5;border-radius:12px;padding:9px 11px;margin:7px 0}
.adventure-report .report-option.correct{background:#eafaf2;border-color:#b9e8ce}
.adventure-report .report-option small{display:block;color:#5c6f8c;margin-top:3px}
.adventure-report .report-footer{text-align:right;color:#667;margin:18px 4px 0}
.adventure-report mjx-container{font-size:118%!important;max-width:100%;overflow-x:auto;overflow-y:hidden}
.adventure-report .report-formula mjx-container,.adventure-report .report-question-prompt mjx-container,.adventure-report .report-feedback-box mjx-container{font-size:122%!important}
@media(max-width:760px){
  .adventure-report .report-metrics,.adventure-report .report-guide-grid,.adventure-report .report-question-grid{grid-template-columns:1fr}
  .adventure-report .report-section,.adventure-report .report-question-card{padding:16px}
  .adventure-report .report-question-card header{align-items:flex-start;flex-wrap:wrap}
  .adventure-report .report-question-card header>strong{margin-left:54px}
}
@media print{
  .adventure-report .report-section,.adventure-report .report-question-card{box-shadow:none}
  .adventure-report .report-cover,.adventure-report .report-metric,.adventure-report .report-clean-table th{-webkit-print-color-adjust:exact;print-color-adjust:exact}
}
</style>`;
}

function buildReportHTML(){
  const history=state.questionHistory||[];
  const shots=state.shots||[];
  const end=state.endedAt || new Date().toLocaleString('es-CO');
  const total=history.length;
  const ok=history.filter(h=>h.correct).length;
  const wrong=total-ok;
  const centers=shots.filter(s=>s.result==='Centro').length;
  const borders=shots.filter(s=>s.result==='Borde').length;
  const misses=shots.filter(s=>s.result==='Sin impacto').length;
  const effective=centers+borders;
  const shotPct=percent(effective,shots.length);
  const topicStats={};
  history.forEach(h=>{const k=h.topic||'Funciones';if(!topicStats[k])topicStats[k]={ok:0,total:0};topicStats[k].total++;if(h.correct)topicStats[k].ok++;});
  const topicRows=Object.entries(topicStats).sort((a,b)=>b[1].total-a[1].total).map(([topic,s])=>`<tr><td>${escapeHTML(topic)}</td><td>${s.ok}/${s.total}</td><td>${percent(s.ok,s.total)}%</td></tr>`).join('') || '<tr><td colspan="3">No hay preguntas respondidas.</td></tr>';
  const byWorld=worlds.map((w,i)=>{const arr=history.filter(h=>h.world===i+1);const o=arr.filter(h=>h.correct).length;return reportBar(`${i+1}. ${w.name}`,o,arr.length);}).join('');
  const securityRows=[
    ['Minimizaciones o pestaña oculta',state.security.hidden||0],
    ['Salidas de pantalla completa',state.security.fullscreen||0],
    ['Intentos de clic derecho',state.security.rightClick||0],
    ['Cambios de ventana o pérdida de foco',state.security.blur||0],
    ['Intentos de captura, impresión o guardado',state.security.screenshot||0],
    ['Otros eventos no permitidos',Math.max(0,totalSecurity()-(state.security.hidden||0)-(state.security.fullscreen||0)-(state.security.rightClick||0)-(state.security.blur||0)-(state.security.screenshot||0))],
    ['Total de eventos',totalSecurity()]
  ].map(r=>`<tr><td>${escapeHTML(r[0])}</td><td>${r[1]}</td></tr>`).join('');
  const detail=history.map((h,i)=>{
    const opts=(h.options||[]).map((op,j)=>`<li><div class="report-option ${op===h.correctOption?'correct':''}"><b>${String.fromCharCode(65+j)}.</b> <span>${escapeHTML(op)}</span>${op===h.correctOption?'<small>Opción correcta.</small>':''}</div></li>`).join('');
    return `<article class="report-question-card"><header><span class="report-qnum">${i+1}</span><div><b>${escapeHTML(h.title)}</b><small>${escapeHTML(h.worldName)} · ${escapeHTML(h.topic||'Funciones')} · ${escapeHTML(h.category||h.type)} · ${h.duration||0}s</small></div><strong class="${h.correct?'ok':'bad'}">${h.correct?'Correcta':'Incorrecta'}</strong></header>
      <div class="report-question-prompt">${escapeHTML(h.prompt||h.title)}</div>
      <div class="report-question-grid"><div><h5>Respuesta del estudiante</h5><p>${escapeHTML(h.selected||'-')}</p></div><div><h5>Respuesta esperada</h5><p>${escapeHTML(h.correctAnswer||'-')}</p></div></div>
      <div class="report-feedback-box"><h5>Retroalimentación</h5><p>${escapeHTML(h.feedback||'Sin retroalimentación registrada.')}</p>${h.hint?`<p><b>Pista:</b> ${escapeHTML(h.hint)}</p>`:''}${opts?`<ol class="report-options-list">${opts}</ol>`:''}</div>
    </article>`;
  }).join('') || '<p class="report-muted">No hay preguntas respondidas todavía.</p>';
  return `${buildAdventureReportThemeStyles()}<div class="latex-report adventure-report">
    <section class="report-cover report-section"><div class="report-hero-icon">🏹🎯</div><div class="report-topline">Informe final · ArcoTransforma</div>${state.quizAnnulled?`<div class="report-security-alert">⛔ Quiz con nota 0 por bloqueos de seguridad: ${escapeHTML(state.annulReason)}</div>`:''}<h1>Informe ArcoTransforma</h1><h2>Transformaciones de funciones · Tiro parabólico</h2><p>${escapeHTML(end)}</p></section>
    <section class="report-section"><h2>Resumen</h2><div class="report-metrics"><div class="report-metric"><b>${state.totalScore.toFixed(2)}</b><span>Nota final / 5.0</span></div><div class="report-metric"><b>${ok}/${total||0}</b><span>Aciertos</span></div><div class="report-metric"><b>${shots.length}</b><span>Flechas lanzadas</span></div><div class="report-metric"><b>${centers}</b><span>Centros</span></div><div class="report-metric"><b>${borders}</b><span>Impactos de borde</span></div><div class="report-metric"><b>${shotPct}%</b><span>Eficacia de tiro</span></div></div><p><strong>Jugador:</strong> ${escapeHTML(state.playerName)} · <strong>Grupo:</strong> ${escapeHTML(state.groupName)} · <strong>Mundo alcanzado:</strong> ${escapeHTML(worlds[Math.min(state.world,worlds.length-1)]?.name||'-')} · <strong>Errores matemáticos:</strong> ${wrong} · <strong>Tiros fallidos:</strong> ${misses} · <strong>Tiempo:</strong> ${fmtDuration(state.sessionSeconds)} · <strong>Estado:</strong> ${state.quizAnnulled?'Quiz en cero por 5 bloqueos':'Partida registrada'} · <strong>Entrega:</strong> informe HTML descargado automáticamente al finalizar</p><div class="report-formula big">\\[\\mathrm{Nota}=\\sum_{m=1}^{5}\\max\\!\\left(1-0.10F_m-0.20E_m,0\\right)\\]</div></section>
    <section class="report-section"><h2>Desempeño por tema</h2><table class="report-clean-table"><thead><tr><th>Tema</th><th>Aciertos</th><th>Porcentaje</th></tr></thead><tbody>${topicRows}</tbody></table><h3>Desempeño por mundo</h3>${byWorld}</section>
    <section class="report-section"><h2>Plan de mejora</h2><div class="report-plan-grid">${buildImprovementPlan()}</div></section>
    <section class="report-section"><h2>Formulario teórico en LaTeX</h2><p>Fórmulas centrales de las transformaciones de funciones y de la física del tiro utilizada en el proyecto.</p><div class="report-guide-grid">${buildReviewCards()}</div></section>
    <section class="report-section"><h2>Registro de seguridad y pantalla completa</h2><table class="report-clean-table"><thead><tr><th>Evento</th><th>Cantidad</th></tr></thead><tbody>${securityRows}</tbody></table></section>
    <section class="report-section"><h2>Detalle de preguntas</h2>${detail}</section>
    <p class="report-footer">Generado automáticamente por ArcoTransforma.</p>
  </div>`;
}
function openReport(final=false){
  if(final) state.endedAt=new Date().toLocaleString('es-CO');
  if(!els.reportContent||!els.reportDialog) return;
  els.reportContent.innerHTML=buildReportHTML();
  typesetMath(els.reportContent);
  if(!els.reportDialog.open) els.reportDialog.showModal();
}
function buildStandaloneReportHTML(reportRawHTML){
  const title = `Informe ArcoTransforma - ${state.playerName || 'Jugador'}`;
  // reportRawHTML ya incluye exactamente el mismo CSS que se usa en el modal.
  // Por eso el archivo descargado conserva la misma tipografía, colores,
  // tarjetas, tablas, métricas, fórmulas y detalle de preguntas.
  return String.raw`<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHTML(title)}</title>
<script>
window.MathJax={
  tex:{
    inlineMath:[["\\(","\\)"],["$","$"]],
    displayMath:[["\\[","\\]"],["$$","$$"]],
    processEscapes:true
  },
  svg:{fontCache:"global"}
};
</script>
<script defer src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>
<style>
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;background:#f5f8ff;color:#10243d;font-family:Georgia,'Times New Roman',serif;line-height:1.58}
.page{width:min(1040px,calc(100% - 24px));margin:22px auto 56px}
@media print{body{background:#fff}.page{width:100%;margin:0}}
</style>
</head>
<body>
<main class="page">
${reportRawHTML}
</main>
</body>
</html>`;
}

function downloadReportHTML(){
  // Se descarga el HTML fuente con expresiones LaTeX sin procesar. El modal
  // puede renderizarse con MathJax, pero el archivo conserva un documento
  // compacto, editable y visualmente idéntico al informe del juego.
  const reportRawHTML = buildReportHTML();
  const standalone = buildStandaloneReportHTML(reportRawHTML);
  const blob = new Blob(['\ufeff', standalone], {type:'text/html;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const safe=(state.playerName||'equipo').replace(/[^a-z0-9_-]+/gi,'_').slice(0,30);
  const stamp=new Date().toISOString().replace(/[:.]/g,'-').slice(0,19);
  const filename=`Informe_ArcoTransforma_${safe}_${stamp}.html`;
  const a=document.createElement('a');
  a.href=url;
  a.download=filename;
  a.style.display='none';
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1800);
  return filename;
}

function deliverFinalReportAutomatically(){
  // Una única entrega por partida. Se ejecuta para finalización manual,
  // recorrido completado, agotamiento de flechas y anulación por bloqueos.
  if(state.finalReportDeliveryStarted) return;
  state.finalReportDeliveryStarted=true;
  logEvent('entrega automática del informe','Se generó y descargó el informe final en formato HTML.');
  openReport(false);
  try{
    const filename=downloadReportHTML();
    state.finalReportDownloaded=true;
    const button=$('#btnDownloadHtml');
    if(button) button.textContent='Descargar nuevamente el informe HTML';
    const toast=$('#securityToast');
    if(toast){
      toast.textContent=`✅ Informe HTML descargado automáticamente: ${filename}`;
      toast.classList.remove('hidden');
      clearTimeout(window.__qaSecurityToastTimer);
      window.__qaSecurityToastTimer=setTimeout(()=>toast.classList.add('hidden'),5200);
    }
  }catch(error){
    console.error('No fue posible iniciar la descarga automática del informe.',error);
    state.finalReportDeliveryStarted=false;
    const button=$('#btnDownloadHtml');
    if(button) button.textContent='Descargar informe HTML';
  }
}

function clamp(n,min,max){return Math.max(min,Math.min(max,n));}
function rand(min,max){return min+Math.random()*(max-min);}
function currentWorld(){return worlds[state.world];}
function currentQuestion(){
  const world=state.world+1;
  const sequence=state.worldSequences[String(world)]||state.worldSequences[world]||[];
  const num=sequence[state.sequenceStep];
  const q=questions.find(item=>item.num===num) || questions.find(item=>item.world===world) || questions[0];
  if(q && q.num) state.usedQuestions.add(q.num);
  return q;
}
function totalMicroChallenges(){
  return worlds.length * 4;
}
function currentBackgroundProgress(){
  const total = totalMicroChallenges();
  if(total <= 1) return 0;
  const completed = state.world * 4 + state.sequenceStep;
  let local = 0;
  if(state.animating){
    local = 0.18 + 0.22 * clamp(state.shotVisualProgress || 0, 0, 1);
  }else if(state.currentQuestion){
    local = state.answered ? 0.82 : 0.56;
  }else if((state.shotPoints || 0) > 0){
    local = 0.32;
  }
  return clamp((completed + local) / (total - 1), 0, 1);
}
function groundY(){return canvas.height*0.78;}
function avatarLayoutMetrics(avatarId=ACTIVE_AVATAR, angle=state.angle){
  const cfg = avatarSpriteCatalog[ACTIVE_AVATAR];
  const spritePath = ((state.animating || state.avatarPrepActive) && state.avatarFramePath) ? state.avatarFramePath : getAvatarIdleSprite(ACTIVE_AVATAR, angle);
  const img = avatarSpriteImages[spritePath] || avatarImages[ACTIVE_AVATAR];
  const spriteMeta = parseSpriteRef(spritePath);
  const gY = groundY();
  const topMargin = Math.max(10, canvas.height*0.022);
  const availableH = Math.max(190, gY - topMargin - (cfg.yOffset || 0));
  // Nuevo ajuste fino: se reduce ligeramente la estatura visual del avatar
  // y se recoloca su apoyo en el suelo para que la mano que sostiene el arco
  // quede mejor alineada con el inicio de la trayectoria punteada.
  const proportionalH = canvas.width * 0.230;
  const minAvatarH = Math.min(222, availableH);
  const maxCanvasH = Math.min(availableH, canvas.height*0.670);
  const drawHeight = clamp(proportionalH, minAvatarH, maxCanvasH);
  const ratio = (spriteMeta.frameWidth && spriteMeta.frameHeight)
    ? (spriteMeta.frameWidth / spriteMeta.frameHeight)
    : ((img && img.naturalWidth && img.naturalHeight) ? (img.naturalWidth / img.naturalHeight) : 0.72);
  const drawWidth = drawHeight * ratio;
  const leftMargin = Math.max(18, canvas.width*0.032);
  const stanceFineTuneX = canvas.width * 0.016;
  const stanceFineTuneY = canvas.height * 0.024;
  const x = leftMargin + (cfg.x || 0) + stanceFineTuneX;
  const y = gY - drawHeight - (cfg.yOffset || 0) + stanceFineTuneY;
  return {cfg, spritePath, spriteMeta, img, gY, drawHeight, drawWidth, x, y};
}
function avatarArrowGuide(metrics=avatarLayoutMetrics(), angle=state.angle){
  const nearest = closestNumber(shotRowAngles, angle);
  const anchorPresets = {
    '-45': {origin:[0.462,0.454], scale:0.238},
    '-35': {origin:[0.458,0.433], scale:0.241},
    '-25': {origin:[0.452,0.409], scale:0.244},
    '-15': {origin:[0.446,0.386], scale:0.247},
    '-5':  {origin:[0.441,0.367], scale:0.249},
    '5':   {origin:[0.437,0.350], scale:0.250},
    '15':  {origin:[0.433,0.336], scale:0.249},
    '25':  {origin:[0.430,0.321], scale:0.247},
    '35':  {origin:[0.427,0.305], scale:0.245},
    '45':  {origin:[0.424,0.289], scale:0.242},
    '55':  {origin:[0.420,0.273], scale:0.239},
    '65':  {origin:[0.417,0.257], scale:0.235},
    '70':  {origin:[0.415,0.248], scale:0.233}
  };
  // El punto de lanzamiento se ancla al nock de la flecha (mano que tira de
  // la cuerda), no a la mano delantera del arco. Así la parábola nace desde
  // donde visualmente se ve la cola de la flecha en cada pose.
  const anchorAngles = Object.keys(anchorPresets).map(Number).sort((a,b)=>a-b);
  const bounds = angleBounds(anchorAngles, angle);
  const pa = anchorPresets[String(bounds.lower)] || anchorPresets['5'];
  const pb = anchorPresets[String(bounds.upper)] || pa;
  const preset = {
    origin:[
      pa.origin[0] + (pb.origin[0]-pa.origin[0])*bounds.t,
      pa.origin[1] + (pb.origin[1]-pa.origin[1])*bounds.t
    ],
    scale:pa.scale + (pb.scale-pa.scale)*bounds.t
  };
  const fineTune = {x: metrics.drawWidth*0.004, y: metrics.drawHeight*0.002};
  const origin = {
    x: metrics.x + metrics.drawWidth*preset.origin[0] + fineTune.x,
    y: metrics.y + metrics.drawHeight*preset.origin[1] + fineTune.y
  };
  const visualAngle = -angle * Math.PI/180;
  const arrowLen = metrics.drawWidth * preset.scale;
  const backLen = arrowLen * 0.18;
  const frontLen = arrowLen * 1.46;
  const ux = Math.cos(visualAngle);
  const uy = Math.sin(visualAngle);
  const start = {x: origin.x - ux*backLen, y: origin.y - uy*backLen};
  const end = {x: origin.x + ux*frontLen, y: origin.y + uy*frontLen};
  const center = {x:(start.x+end.x)/2, y:(start.y+end.y)/2};
  const launch = {x: origin.x, y: origin.y};
  const length = Math.hypot(end.x-start.x,end.y-start.y);
  return {start,end,center,launch,visualAngle,length,nearest,origin};
}
function avatarArrowAnchor(metrics=avatarLayoutMetrics(), angle=state.angle){
  return avatarArrowGuide(metrics, angle).launch;
}
function origin(){const m=avatarLayoutMetrics(); const a=avatarArrowGuide(m,state.angle).launch; return {x:a.x, y:a.y};}
function distanceScale(){return (canvas.width*0.72)/105;}
function distToX(d){return origin().x + d*distanceScale();}
function heightMeters(){return Math.round((groundY() - state.target.y)/8);}
function possibleChallengeGrade(){return clamp(0.25*(1-state.challengeFails*0.10-state.challengeWrong*0.20),0,0.25);}
function possibleWorldGrade(){return clamp(state.worldScore+possibleChallengeGrade(),0,1);}
function normalizeText(v){return (v||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9. ]/g," ").replace(/\s+/g," ").trim();}
function recommendedSpeed(){
  if(!state.target) return null;
  const d = state.target.distance;
  const h = (arrowNock().y - state.target.y)/8;
  const theta = state.angle * Math.PI/180;
  const denom = 2*Math.cos(theta)**2*(d*Math.tan(theta)-h);
  if(denom <= 0) return null;
  return Math.sqrt(g*d*d/denom);
}
function targetPalette(theme){
  const palettes={
    forest:["#f3eed8","#5c8f54","#234037","#d9bf62","#f8f1c7"],
    meadow:["#fbf4df","#8bbf56","#325a45","#f4c95a","#fff2b8"],
    canyon:["#f7ead7","#c97a43","#5d3a2d","#f2c063","#fff0c9"],
    mountain:["#f4f6f0","#6c97b8","#274154","#f0d36c","#fff6c9"],
    coast:["#fff8e9","#55b8c8","#1c6076","#ffd36e","#fff0b2"]
  };
  return palettes[theme]||palettes.forest;
}
function newTarget(){
  const minD = 46 + state.world*6;
  const maxD = 68 + state.world*7;
  const distance = Math.round(rand(minD,maxD));
  const minY = canvas.height*0.18;
  const maxY = groundY()-55;
  let y = Math.round(rand(minY,maxY));
  if(state.target && Math.abs(y-state.target.y)<canvas.height*0.16){ y = y < (minY+maxY)/2 ? Math.min(maxY,y+canvas.height*0.22) : Math.max(minY,y-canvas.height*0.22); }
  const radius = targetRadii[Math.floor(Math.random()*targetRadii.length)];
  const palette = targetPalette(currentWorld().theme);
  state.target = {distance, x:distToX(distance), y, radius, palette};
  state.angle = 0; state.speed = 0; state.arrowLoaded = false;
  updateLabels();
}
function updateLabels(){
  const w=currentWorld();
  els.worldTitle.textContent = w.name; els.worldLabel.textContent = `${state.world+1}/5`; els.scoreLabel.textContent = state.totalScore.toFixed(2);
  els.shotProgressLabel.textContent = state.shotPoints.toFixed(1); els.shotGoalLabel.textContent = w.goal; els.arrowsLabel.textContent = state.arrows; els.worldGradeLabel.textContent = state.worldScore.toFixed(2);
  els.distanceLabel.textContent = state.target ? state.target.distance : "-"; els.heightLabel.textContent = state.target ? heightMeters() : "-"; els.radiusLabel.textContent = state.target ? state.target.radius : "-";
  els.angleValue.textContent = state.angle; els.speedValue.textContent = state.speed; els.angle.value = state.angle; els.speed.value = state.speed;
  updateTeacherPanel();
}
function drawRoundedRect(x,y,w,h,r,fill,stroke){ctx.beginPath();ctx.roundRect(x,y,w,h,r);ctx.fillStyle=fill;ctx.fill();if(stroke){ctx.strokeStyle=stroke;ctx.stroke();}}
function drawBackground(){
  const gY=groundY();
  const W=canvas.width, H=canvas.height;
  ctx.clearRect(0,0,W,H);

  if(allFantasyBackgroundsReady()){
    const phaseCount = fantasyBackgroundPaths.length;
    const progress = currentBackgroundProgress();
    const segment = progress * (phaseCount - 1);
    const baseIndex = Math.min(phaseCount - 1, Math.floor(segment));
    const nextIndex = Math.min(phaseCount - 1, baseIndex + 1);
    const blend = baseIndex === nextIndex ? 0 : (segment - baseIndex);
    const pan = (progress - 0.5) * W * 0.024;
    const lift = Math.sin(progress * Math.PI) * H * 0.008;

    ctx.save();
    ctx.globalAlpha = 1;
    drawCoverImage(fantasyBackgroundImages[fantasyBackgroundPaths[baseIndex]], pan, -lift);
    if(nextIndex !== baseIndex && blend > 0.001){
      ctx.globalAlpha = blend;
      drawCoverImage(fantasyBackgroundImages[fantasyBackgroundPaths[nextIndex]], pan*0.65, -lift*0.6);
    }
    ctx.restore();

    // Capa tenue para integrar el campo de juego con el fondo cinematográfico.
    const overlay = ctx.createLinearGradient(0, H*0.48, 0, H);
    overlay.addColorStop(0, 'rgba(255,255,255,0.03)');
    overlay.addColorStop(0.55, 'rgba(80,116,54,0.08)');
    overlay.addColorStop(1, 'rgba(53,102,41,0.14)');
    ctx.fillStyle = overlay;
    ctx.fillRect(0,0,W,H);

    // Franja del campo para que el arquero y el blanco se apoyen visualmente.
    const turf = ctx.createLinearGradient(0,gY-16,0,H);
    turf.addColorStop(0,'rgba(128,192,92,0.18)');
    turf.addColorStop(1,'rgba(81,150,64,0.30)');
    ctx.fillStyle = turf;
    ctx.fillRect(0,gY-10,W,H-gY+10);

    ctx.strokeStyle='rgba(224,244,178,.16)';
    ctx.lineWidth=Math.max(1.2,W*0.0017);
    for(let i=0;i<6;i++){
      const y=gY-4+i*(H*0.028);
      ctx.beginPath();
      ctx.moveTo(0,y);
      ctx.lineTo(W,y);
      ctx.stroke();
    }

    const laneLeftNear=origin().x+26;
    const laneRightNear=origin().x+212;
    const laneLeftFar=W*0.72;
    const laneRightFar=W*0.94;
    ctx.fillStyle='rgba(238,229,153,.12)';
    ctx.beginPath();
    ctx.moveTo(laneLeftNear,gY+16);
    ctx.lineTo(laneRightNear,gY+16);
    ctx.lineTo(laneRightFar,gY-42);
    ctx.lineTo(laneLeftFar,gY-42);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle='rgba(250,242,176,.16)';
    ctx.lineWidth=3.5;
    ctx.beginPath();
    ctx.moveTo(laneLeftNear+10,gY+14);
    ctx.lineTo(laneLeftFar+8,gY-42);
    ctx.moveTo(laneRightNear-12,gY+14);
    ctx.lineTo(laneRightFar-10,gY-42);
    ctx.stroke();
    return;
  }

  // Respaldo simple si las imágenes aún no han cargado.
  const sky=ctx.createLinearGradient(0,0,0,H*0.78);
  sky.addColorStop(0,'#72a8db');
  sky.addColorStop(1,'#c6e6ff');
  ctx.fillStyle=sky;
  ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#8fbe68';
  ctx.fillRect(0,gY-12,W,H-gY+12);
}

function drawTarget(){
  const t=state.target;
  if(!t) return;
  ctx.save();

  if(medievalTargetImageReady && medievalTargetImage.complete){
    // La diana medieval se dibuja alineando exactamente el centro visual del
    // tablero con state.target.x/state.target.y, de modo que el puntaje y la
    // colisión sigan usando el mismo radio lógico del juego.
    const boardOuterRadius = 346;   // radio del disco en el asset recortado
    const boardCenterX = 386;       // centro del disco dentro del asset
    const boardCenterY = 543;
    const scale = t.radius / boardOuterRadius;
    const drawW = medievalTargetImage.width * scale;
    const drawH = medievalTargetImage.height * scale;
    const drawX = t.x - boardCenterX * scale;
    const drawY = t.y - boardCenterY * scale;

    ctx.shadowColor='rgba(0,0,0,.28)';
    ctx.shadowBlur=14;
    ctx.shadowOffsetY=6;
    ctx.drawImage(medievalTargetImage, drawX, drawY, drawW, drawH);
    ctx.shadowBlur=0;

    // Marca tenue del centro para apoyar la lectura del impacto.
    ctx.strokeStyle='rgba(35,24,19,.55)';
    ctx.lineWidth=Math.max(1.2, t.radius*0.028);
    ctx.beginPath();
    ctx.moveTo(t.x-t.radius*1.04,t.y);
    ctx.lineTo(t.x+t.radius*1.04,t.y);
    ctx.moveTo(t.x,t.y-t.radius*1.04);
    ctx.lineTo(t.x,t.y+t.radius*1.04);
    ctx.stroke();
    ctx.restore();
    return;
  }

  // Respaldo simple si el asset de la diana aún no ha cargado.
  ctx.strokeStyle="#8a542d";
  ctx.lineWidth=Math.max(7, canvas.width*0.0052);
  ctx.beginPath();
  ctx.moveTo(t.x, t.y+t.radius*0.9);
  ctx.lineTo(t.x, groundY()+10);
  ctx.stroke();

  ctx.shadowColor='rgba(0,0,0,.28)';
  ctx.shadowBlur=18;
  ctx.shadowOffsetY=6;
  const colors=t.palette || ["#f4efe2","#6f9c63","#204633","#e0bf58","#f5eec2"];
  const rings=[1,.78,.58,.36,.16];
  rings.forEach((r,i)=>{
    ctx.beginPath();
    ctx.fillStyle=colors[i]||colors[colors.length-1];
    ctx.arc(t.x,t.y,t.radius*r,0,Math.PI*2);
    ctx.fill();
    ctx.strokeStyle='rgba(0,0,0,.48)';
    ctx.lineWidth=2;
    ctx.stroke();
  });
  ctx.shadowBlur=0;
  ctx.strokeStyle='rgba(0,0,0,.72)';
  ctx.lineWidth=2.5;
  ctx.beginPath();
  ctx.moveTo(t.x-t.radius-12,t.y);
  ctx.lineTo(t.x+t.radius+12,t.y);
  ctx.moveTo(t.x,t.y-t.radius-12);
  ctx.lineTo(t.x,t.y+t.radius+12);
  ctx.stroke();
  ctx.restore();
}

function avatarStyle(){
  const styles={
    hombre:{
      accent:"#3b82f6", secondary:"#1e3a8a", trim:"#dbeafe", tunic:"#2b3a67", sleeves:"#314a87", pants:"#3c2f25", skin:"#d7a179", hair:"#1a1615", shoes:"#7b4f2f", eye:"#5ab0ff", hat:"#6a4b2b", hatBand:"#2563eb", feather:"#dbeafe", belt:"#5c3c22", cape:"#1c274b", quiver:"#6f4b2c", build:1, height:1.02, headScale:1, kind:"human"
    },
    mujer:{
      accent:"#ec4899", secondary:"#9d174d", trim:"#ffe4f1", tunic:"#5b2a50", sleeves:"#7c3b6d", pants:"#34273e", skin:"#e7b48d", hair:"#2b1b20", shoes:"#925d72", eye:"#7cc7ff", hat:"#7a4655", hatBand:"#ec4899", feather:"#ffd1dc", belt:"#623346", cape:"#432247", quiver:"#70452f", build:.98, height:1.01, headScale:1, kind:"woman"
    },
    marciano:{
      accent:"#84cc16", secondary:"#365314", trim:"#ecfccb", tunic:"#1f4130", sleeves:"#2d5a43", pants:"#234635", skin:"#8cdf72", hair:"#1a2f22", shoes:"#8b6a2d", eye:"#e4ff8f", hat:"#4b5d3c", hatBand:"#84cc16", feather:"#d9ff7a", belt:"#4a5a35", cape:"#183628", quiver:"#53693f", build:.97, height:1.03, headScale:1.08, kind:"alien"
    },
    enano:{
      accent:"#c08457", secondary:"#7c4a26", trim:"#f8e7d3", tunic:"#5a3826", sleeves:"#754a33", pants:"#47352a", skin:"#cb9768", hair:"#4b2a19", shoes:"#8b5e3c", eye:"#7bd1ff", hat:"#6c4a2d", hatBand:"#b77945", feather:"#f5d2a9", belt:"#3a271c", cape:"#40261b", quiver:"#6b4729", build:1.05, height:.89, headScale:1.02, kind:"dwarf"
    },
    elfo:{
      accent:"#2dd4bf", secondary:"#0f766e", trim:"#def7f3", tunic:"#285548", sleeves:"#2f6a58", pants:"#31483f", skin:"#efc79c", hair:"#25362d", shoes:"#7d6f52", eye:"#6cf0e2", hat:"#2f5f54", hatBand:"#14b8a6", feather:"#d3fff9", belt:"#365244", cape:"#1f3f37", quiver:"#4c6c57", build:.96, height:1.05, headScale:.98, kind:"elf"
    }
  };
  styles.guerrero = styles.hombre;
  styles.elfica = styles.elfo;
  styles.explorador = styles.elfo;
  return styles[state.avatar]||styles.hombre;
}
function avatarPose(){
  const st=avatarStyle(), s=st.height, a=state.angle*Math.PI/180, dir={x:Math.cos(a),y:-Math.sin(a)}, perp={x:-dir.y,y:dir.x};
  const baseX=96, baseY=groundY()-16;

  // Postura QA28: el brazo izquierdo sostiene realmente el arco. La empuñadura
  // coincide con la mano delantera y todo el conjunto se mantiene por debajo
  // del rostro para dejar visible la expresión del avatar.
  const shoulderLine={x:baseX+55*s,y:baseY-188*s};
  const armReach=42*s;
  const bowHand={
    x:shoulderLine.x + dir.x*armReach + perp.x*7*s,
    y:shoulderLine.y + dir.y*armReach + perp.y*7*s
  };
  const bowCenter={x:bowHand.x,y:bowHand.y};
  const bowSize=77*s;
  const bowTop={x:bowCenter.x+perp.x*bowSize,y:bowCenter.y+perp.y*bowSize};
  const bowBottom={x:bowCenter.x-perp.x*bowSize,y:bowCenter.y-perp.y*bowSize};
  const tension=clamp(state.speed/170,0,1);
  const drawBack=23*s + tension*7*s;
  const stringHand={
    x:bowCenter.x - dir.x*drawBack - perp.x*3*s,
    y:bowCenter.y - dir.y*drawBack + perp.y*10*s
  };
  return {st,s,a,dir,perp,baseX,baseY,shoulderLine,bowHand,bowCenter,bowTop,bowBottom,stringHand};
}
function arrowNock(){const m=avatarLayoutMetrics(); return avatarArrowAnchor(m, state.angle);} // mano que sostiene la cola de la flecha

function drawAvatarHat(kind,x,y,scale,st){
  if(kind==="alien") return;
  ctx.save();
  if(kind==="human"){
    ctx.fillStyle=st.hat;
    ctx.beginPath();
    ctx.ellipse(x,y+3*scale,26*scale,7*scale,0,0,Math.PI*2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(x-16*scale,y+4*scale);
    ctx.quadraticCurveTo(x-10*scale,y-14*scale,x+6*scale,y-16*scale);
    ctx.quadraticCurveTo(x+18*scale,y-9*scale,x+15*scale,y+4*scale);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle=st.hatBand;
    ctx.fillRect(x-12*scale,y-2*scale,21*scale,4*scale);
    ctx.strokeStyle=st.feather; ctx.lineWidth=2.2*scale;
    ctx.beginPath(); ctx.moveTo(x+5*scale,y-14*scale); ctx.quadraticCurveTo(x+15*scale,y-28*scale,x+22*scale,y-14*scale); ctx.stroke();
  } else if(kind==="woman"){
    ctx.fillStyle=st.hat;
    ctx.beginPath(); ctx.ellipse(x,y+4*scale,25*scale,7*scale,0,0,Math.PI*2); ctx.fill();
    ctx.beginPath();
    ctx.moveTo(x-13*scale,y+4*scale);
    ctx.quadraticCurveTo(x-2*scale,y-18*scale,x+14*scale,y-12*scale);
    ctx.quadraticCurveTo(x+18*scale,y-2*scale,x+11*scale,y+6*scale);
    ctx.closePath(); ctx.fill();
    ctx.fillStyle=st.hatBand; ctx.fillRect(x-10*scale,y-1*scale,18*scale,4*scale);
    ctx.strokeStyle=st.feather; ctx.lineWidth=2*scale; ctx.beginPath(); ctx.moveTo(x+8*scale,y-9*scale); ctx.quadraticCurveTo(x+18*scale,y-20*scale,x+24*scale,y-3*scale); ctx.stroke();
  } else if(kind==="alien"){
    ctx.fillStyle=st.hat;
    ctx.beginPath(); ctx.ellipse(x+2*scale,y-4*scale,19*scale,12*scale,0,0,Math.PI*2); ctx.fill();
    ctx.fillStyle="rgba(236,252,203,.25)"; ctx.beginPath(); ctx.ellipse(x+1*scale,y-6*scale,13*scale,8*scale,0,0,Math.PI*2); ctx.fill();
    ctx.strokeStyle=st.accent; ctx.lineWidth=2*scale; ctx.beginPath(); ctx.moveTo(x-8*scale,y-15*scale); ctx.lineTo(x-14*scale,y-28*scale); ctx.moveTo(x+11*scale,y-15*scale); ctx.lineTo(x+16*scale,y-28*scale); ctx.stroke();
    ctx.fillStyle=st.feather; ctx.beginPath(); ctx.arc(x-14*scale,y-28*scale,3*scale,0,Math.PI*2); ctx.arc(x+16*scale,y-28*scale,3*scale,0,Math.PI*2); ctx.fill();
  } else if(kind==="dwarf"){
    ctx.fillStyle=st.hat;
    ctx.beginPath(); ctx.ellipse(x,y+4*scale,23*scale,7*scale,0,0,Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.moveTo(x-14*scale,y+5*scale); ctx.quadraticCurveTo(x-8*scale,y-17*scale,x+7*scale,y-18*scale); ctx.quadraticCurveTo(x+17*scale,y-10*scale,x+15*scale,y+5*scale); ctx.closePath(); ctx.fill();
    ctx.fillStyle=st.hatBand; ctx.fillRect(x-11*scale,y-1*scale,20*scale,5*scale);
    ctx.fillStyle="#d8c4a8"; ctx.fillRect(x-2*scale,y-2*scale,5*scale,7*scale);
  } else if(kind==="elf"){
    ctx.fillStyle=st.hat;
    ctx.beginPath();
    ctx.moveTo(x-13*scale,y+6*scale);
    ctx.quadraticCurveTo(x-5*scale,y-3*scale,x+4*scale,y-33*scale);
    ctx.quadraticCurveTo(x+20*scale,y-14*scale,x+10*scale,y+8*scale);
    ctx.closePath(); ctx.fill();
    ctx.fillStyle=st.hatBand; ctx.fillRect(x-9*scale,y+1*scale,15*scale,4*scale);
    ctx.strokeStyle=st.feather; ctx.lineWidth=1.8*scale; ctx.beginPath(); ctx.moveTo(x+5*scale,y-26*scale); ctx.quadraticCurveTo(x+18*scale,y-34*scale,x+19*scale,y-20*scale); ctx.stroke();
  }
  ctx.restore();
}

function drawLimbPath(points,width,gradStops){
  const grad = ctx.createLinearGradient(points[0].x,points[0].y,points[points.length-1].x,points[points.length-1].y);
  gradStops.forEach(stop=>grad.addColorStop(stop[0],stop[1]));
  ctx.strokeStyle=grad; ctx.lineWidth=width; ctx.beginPath();
  ctx.moveTo(points[0].x,points[0].y);
  for(let i=1;i<points.length;i++) ctx.lineTo(points[i].x,points[i].y);
  ctx.stroke();
}
function drawArmPath(points,width,stops){
  const g=ctx.createLinearGradient(points[0].x,points[0].y,points[points.length-1].x,points[points.length-1].y);
  stops.forEach(s=>g.addColorStop(s[0],s[1]));
  ctx.strokeStyle=g; ctx.lineWidth=width; ctx.lineCap='round'; ctx.lineJoin='round';
  ctx.beginPath(); ctx.moveTo(points[0].x,points[0].y);
  for(let i=1;i<points.length;i++) ctx.lineTo(points[i].x,points[i].y);
  ctx.stroke();
}
function drawMaleHand(x,y,s,dir,perp,fill='#231a22'){
  const ang=Math.atan2(dir.y,dir.x);
  ctx.save();
  ctx.translate(x,y); ctx.rotate(ang);
  const handGrad=ctx.createLinearGradient(-7*s,-5*s,7*s,6*s);
  handGrad.addColorStop(0,fill); handGrad.addColorStop(.55,fill); handGrad.addColorStop(1,'rgba(0,0,0,.30)');
  ctx.fillStyle=handGrad;
  ctx.beginPath();
  ctx.ellipse(0,0,6.9*s,5.2*s,0,0,Math.PI*2);
  ctx.fill();
  ctx.strokeStyle='rgba(255,229,191,.42)'; ctx.lineWidth=1.05*s;
  for(const yy of [-2.3,-0.4,1.6]){ctx.beginPath();ctx.moveTo(-1.5*s,yy*s);ctx.lineTo(5.2*s,yy*s+0.65*s);ctx.stroke();}
  ctx.fillStyle='rgba(255,255,255,.10)';
  ctx.beginPath(); ctx.ellipse(-1.7*s,-1.5*s,2.8*s,1.8*s,-.2,0,Math.PI*2); ctx.fill();
  ctx.restore();
}
function drawTubeLimb(a,b,c,outerW,innerW,outerStops,innerStops,shine){
  const grad=ctx.createLinearGradient(a.x,a.y,c.x,c.y); outerStops.forEach(s=>grad.addColorStop(s[0],s[1]));
  ctx.strokeStyle=grad; ctx.lineWidth=outerW; ctx.lineCap='round'; ctx.lineJoin='round';
  ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.quadraticCurveTo(b.x,b.y,c.x,c.y); ctx.stroke();
  const grad2=ctx.createLinearGradient(a.x,a.y,c.x,c.y); innerStops.forEach(s=>grad2.addColorStop(s[0],s[1]));
  ctx.strokeStyle=grad2; ctx.lineWidth=innerW;
  ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.quadraticCurveTo(b.x,b.y,c.x,c.y); ctx.stroke();
  if(shine){
    ctx.strokeStyle=shine; ctx.lineWidth=Math.max(1,innerW*.13);
    ctx.beginPath(); ctx.moveTo(a.x-1.2,a.y-1.8); ctx.quadraticCurveTo(b.x-1.8,b.y-2.5,c.x-1.5,c.y-2); ctx.stroke();
  }
}
function drawArmBrace(center,dir,s,w=11){
  const ang=Math.atan2(dir.y,dir.x);
  ctx.save(); ctx.translate(center.x,center.y); ctx.rotate(ang);
  const g=ctx.createLinearGradient(-w*s,0,w*s,0); g.addColorStop(0,'#8b6846'); g.addColorStop(.5,'#d8b07a'); g.addColorStop(1,'#6d4b2d');
  ctx.strokeStyle=g; ctx.lineWidth=2.2*s;
  ctx.beginPath(); ctx.moveTo(-w*s,-6*s); ctx.lineTo(-w*s,6*s); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(w*s,-6*s); ctx.lineTo(w*s,6*s); ctx.stroke();
  ctx.restore();
}
function drawShoulderCap(x,y,rx,ry,rot,s){
  ctx.save();
  ctx.translate(x,y); ctx.rotate(rot);
  const g=ctx.createLinearGradient(-rx, -ry, rx, ry); g.addColorStop(0,'#49506a'); g.addColorStop(.55,'#242c40'); g.addColorStop(1,'#101726');
  ctx.fillStyle=g; ctx.beginPath(); ctx.ellipse(0,0,rx,ry,0,0,Math.PI*2); ctx.fill();
  ctx.strokeStyle='rgba(226,190,137,.80)'; ctx.lineWidth=1.5*s; ctx.stroke();
  ctx.strokeStyle='rgba(227,237,255,.28)'; ctx.lineWidth=1*s; ctx.beginPath(); ctx.arc(-rx*.12,-ry*.08,Math.max(8,rx*.64),Math.PI*1.1,Math.PI*1.75); ctx.stroke();
  ctx.restore();
}
function solveTwoBoneElbow(shoulder,hand,upperLen,foreLen,bendSign=1){
  const dx=hand.x-shoulder.x, dy=hand.y-shoulder.y;
  const raw=Math.hypot(dx,dy) || 1;
  const maxReach=Math.max(upperLen+foreLen-0.6,1);
  const minReach=Math.abs(upperLen-foreLen)+0.6;
  const dist=clamp(raw,minReach,maxReach);
  const ux=dx/raw, uy=dy/raw;
  const a=(upperLen*upperLen - foreLen*foreLen + dist*dist)/(2*dist);
  const h=Math.sqrt(Math.max(upperLen*upperLen - a*a,0));
  const px=shoulder.x + ux*a;
  const py=shoulder.y + uy*a;
  const perpX=-uy, perpY=ux;
  return {x:px + perpX*h*bendSign, y:py + perpY*h*bendSign};
}

function drawDetailedMaleAvatar(st,s,baseX,baseY,bowHand,stringHand,dir,perp){
  const img = avatarImages.hombre;
  const ground = groundY()+6;
  const ratio = (img && img.naturalWidth && img.naturalHeight) ? (img.naturalWidth/img.naturalHeight) : (220/380);
  const spriteH = Math.min(canvas.height*.46, 312);
  const spriteW = spriteH*ratio;
  const sx = baseX - spriteW*.295;
  const sy = ground-spriteH+7;

  ctx.fillStyle='rgba(0,0,0,.18)';
  ctx.beginPath(); ctx.ellipse(sx+spriteW*.48,ground+10,56*s,11*s,0,0,Math.PI*2); ctx.fill();
  if(img && img.complete && img.naturalWidth){
    ctx.save();
    ctx.shadowColor='rgba(0,0,0,.14)'; ctx.shadowBlur=8; ctx.shadowOffsetY=3;
    ctx.drawImage(img,sx,sy,spriteW,spriteH);
    ctx.restore();
  }

  // Los anclajes vuelven a los hombros anatómicos del SVG. Así los brazos
  // quedan unidos al cuerpo y ya no parecen salir del pecho o flotar.
  const svgToCanvas=(x,y)=>({x:sx+(x/220)*spriteW,y:sy+(y/380)*spriteH});
  const rearShoulder=svgToCanvas(78,109);
  const frontShoulder=svgToCanvas(145,110);
  const upperArmLen=20.5*s;
  const foreArmLen=20.5*s;

  // Ambos brazos conservan la misma longitud. El brazo delantero termina justo
  // en la empuñadura del arco; el posterior lleva la mano a la cuerda.
  const rearElbow=solveTwoBoneElbow(rearShoulder,stringHand,upperArmLen,foreArmLen,-1);
  rearElbow.x-=1.5*s; rearElbow.y+=2.5*s;
  const frontElbow=solveTwoBoneElbow(frontShoulder,bowHand,upperArmLen,foreArmLen,1);
  frontElbow.x+=0.8*s; frontElbow.y+=2.8*s;

  drawShoulderCap(rearShoulder.x,rearShoulder.y,12.0*s,8.5*s,.22,s);
  drawShoulderCap(frontShoulder.x,frontShoulder.y,12.6*s,8.7*s,-.12,s);

  drawTubeLimb(rearShoulder,
    {x:(rearShoulder.x+rearElbow.x)/2,y:(rearShoulder.y+rearElbow.y)/2},rearElbow,
    12.8*s,7.9*s,
    [[0,'#4b5878'],[.55,'#2c3855'],[1,'#182136']],
    [[0,'#354464'],[.55,'#202b46'],[1,'#11182a']],
    'rgba(235,242,255,.18)');
  drawTubeLimb(rearElbow,
    {x:(rearElbow.x+stringHand.x)/2,y:(rearElbow.y+stringHand.y)/2},stringHand,
    10.0*s,6.0*s,
    [[0,'#61432f'],[.55,'#3b2a20'],[1,'#20161a']],
    [[0,'#33263a'],[.6,'#211a2c'],[1,'#100d16']],
    'rgba(248,227,195,.12)');
  drawArmBrace({x:(rearElbow.x+stringHand.x)/2,y:(rearElbow.y+stringHand.y)/2},dir,s,5.6);
  drawMaleHand(stringHand.x,stringHand.y,s,dir,perp,'#201519');

  drawTubeLimb(frontShoulder,
    {x:(frontShoulder.x+frontElbow.x)/2,y:(frontShoulder.y+frontElbow.y)/2},frontElbow,
    12.8*s,7.9*s,
    [[0,'#536487'],[.52,'#35466c'],[1,'#1f2b47']],
    [[0,'#3e5078'],[.58,'#293a5e'],[1,'#15213a']],
    'rgba(229,238,255,.20)');
  drawTubeLimb(frontElbow,
    {x:(frontElbow.x+bowHand.x)/2,y:(frontElbow.y+bowHand.y)/2},bowHand,
    10.1*s,6.0*s,
    [[0,'#71503a'],[.5,'#4b3528'],[1,'#2d211a']],
    [[0,'#40527a'],[.55,'#293858'],[1,'#151d31']],
    'rgba(229,238,255,.16)');
  drawArmBrace({x:(frontElbow.x+bowHand.x)/2,y:(frontElbow.y+bowHand.y)/2},dir,s,5.8);
  drawMaleHand(bowHand.x,bowHand.y,s,dir,perp,'#162033');
  // Empuñadura visible: confirma que la mano izquierda está apoyada en el arco.
  ctx.save();
  ctx.translate(bowHand.x,bowHand.y);
  ctx.rotate(Math.atan2(perp.y,perp.x));
  const grip=ctx.createLinearGradient(-7*s,0,7*s,0);
  grip.addColorStop(0,'#3a2417'); grip.addColorStop(.5,'#8b5a34'); grip.addColorStop(1,'#2b190f');
  ctx.fillStyle=grip; ctx.beginPath(); ctx.roundRect(-5.2*s,-10*s,10.4*s,20*s,4*s); ctx.fill();
  ctx.strokeStyle='rgba(244,211,157,.5)'; ctx.lineWidth=1.2*s; ctx.stroke();
  ctx.restore();

  // Detalle decorativo: broche central del peto para reforzar el acabado visual.
  ctx.save();
  const clasp=ctx.createLinearGradient(frontShoulder.x-12*s,frontShoulder.y+16*s,frontShoulder.x+12*s,frontShoulder.y+27*s);
  clasp.addColorStop(0,'rgba(245,214,154,.95)'); clasp.addColorStop(.55,'rgba(170,118,54,.98)'); clasp.addColorStop(1,'rgba(92,59,27,.98)');
  ctx.fillStyle=clasp; ctx.beginPath(); ctx.ellipse((rearShoulder.x+frontShoulder.x)/2,(rearShoulder.y+frontShoulder.y)/2+25*s,8*s,5.4*s,0,0,Math.PI*2); ctx.fill();
  ctx.strokeStyle='rgba(255,242,210,.55)'; ctx.lineWidth=1.2*s; ctx.stroke();
  ctx.restore();

  // Refuerzo visual de las articulaciones para eliminar quiebres o brazos flotantes.
  ctx.save();
  ctx.fillStyle='#293858';
  ctx.beginPath(); ctx.arc(frontElbow.x,frontElbow.y,5.2*s,0,Math.PI*2); ctx.fill();
  ctx.fillStyle='#211a2c';
  ctx.beginPath(); ctx.arc(rearElbow.x,rearElbow.y,5.2*s,0,Math.PI*2); ctx.fill();
  ctx.restore();
}
function drawArrowGraphic(x,y,angle,length=34,alpha=1){
  const len = length;
  const shaftHalf = Math.max(1.1, len*0.028);
  const headLen = len*0.22;
  const fletchLen = len*0.18;
  const fletchHeight = Math.max(3.5, len*0.085);
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.translate(x,y);
  ctx.rotate(angle);

  const shaft = ctx.createLinearGradient(-len,0,len,0);
  shaft.addColorStop(0,'#61381d');
  shaft.addColorStop(.35,'#9b6130');
  shaft.addColorStop(.65,'#7a471f');
  shaft.addColorStop(1,'#4c2915');
  ctx.strokeStyle = shaft;
  ctx.lineCap = 'round';
  ctx.lineWidth = shaftHalf*2;
  ctx.beginPath();
  ctx.moveTo(-len*0.82,0);
  ctx.lineTo(len*0.70,0);
  ctx.stroke();

  ctx.strokeStyle = 'rgba(35,18,10,.45)';
  ctx.lineWidth = Math.max(0.7, shaftHalf*0.75);
  ctx.beginPath();
  ctx.moveTo(-len*0.80,-shaftHalf*0.55);
  ctx.lineTo(len*0.68,-shaftHalf*0.55);
  ctx.stroke();

  const head = ctx.createLinearGradient(len*0.54,-headLen*0.15,len*0.98,headLen*0.15);
  head.addColorStop(0,'#cfd6df');
  head.addColorStop(.55,'#7b8693');
  head.addColorStop(1,'#e8edf2');
  ctx.fillStyle = head;
  ctx.beginPath();
  ctx.moveTo(len*0.98,0);
  ctx.lineTo(len*0.68,-headLen*0.30);
  ctx.lineTo(len*0.74,0);
  ctx.lineTo(len*0.68,headLen*0.30);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = 'rgba(42,47,54,.7)';
  ctx.lineWidth = Math.max(0.6, len*0.015);
  ctx.stroke();

  const feather = ctx.createLinearGradient(-len*1.03,0,-len*0.70,0);
  feather.addColorStop(0,'#3a2417');
  feather.addColorStop(.4,'#8f5622');
  feather.addColorStop(1,'#d08a3a');
  ctx.fillStyle = feather;
  [[-1, -len*0.76], [1, -len*0.76], [-1, -len*0.92]].forEach(([sign,base])=>{
    ctx.beginPath();
    ctx.moveTo(base,0);
    ctx.lineTo(base - fletchLen, sign*fletchHeight);
    ctx.lineTo(base - fletchLen*0.42, sign*fletchHeight*0.16);
    ctx.closePath();
    ctx.fill();
  });
  ctx.strokeStyle = 'rgba(59,30,11,.55)';
  ctx.lineWidth = Math.max(0.5, len*0.012);
  [[-1, -len*0.76], [1, -len*0.76], [-1, -len*0.92]].forEach(([sign,base])=>{
    ctx.beginPath();
    ctx.moveTo(base,0);
    ctx.lineTo(base - fletchLen*0.92, sign*fletchHeight*0.88);
    ctx.stroke();
  });
  ctx.restore();
}
function drawBowString(metrics=avatarLayoutMetrics(), angle=state.angle, pulled=false){
  const guide = avatarArrowGuide(metrics, angle);
  const origin = guide.origin || guide.launch;
  const ux = Math.cos(guide.visualAngle);
  const uy = Math.sin(guide.visualAngle);
  const perp = {x:-uy, y:ux};
  const limbLen = metrics.drawHeight * 0.205;
  const top = {x: origin.x + perp.x*limbLen, y: origin.y + perp.y*limbLen};
  const bottom = {x: origin.x - perp.x*limbLen, y: origin.y - perp.y*limbLen};
  const pull = pulled ? metrics.drawWidth*0.036 : metrics.drawWidth*0.012;
  const mid = {x: origin.x - ux*pull, y: origin.y - uy*pull};
  ctx.save();
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.strokeStyle = 'rgba(111, 90, 60, 0.82)';
  ctx.lineWidth = Math.max(0.95, metrics.drawWidth*0.0042);
  ctx.beginPath();
  ctx.moveTo(top.x, top.y);
  ctx.lineTo(mid.x, mid.y);
  ctx.lineTo(bottom.x, bottom.y);
  ctx.stroke();
  ctx.restore();
}
function drawAvatar(showLoadedArrow=state.arrowLoaded){
  const m = avatarLayoutMetrics();
  const {img, gY, drawWidth, drawHeight, x, y} = m;
  ctx.save();
  ctx.shadowColor = "rgba(0,0,0,.18)";
  ctx.shadowBlur = 14;
  ctx.shadowOffsetY = 8;
  ctx.fillStyle = "rgba(0,0,0,.13)";
  ctx.beginPath();
  ctx.ellipse(x + drawWidth*0.45, gY + 8, drawWidth*0.34, 16, 0, 0, Math.PI*2);
  ctx.fill();
  ctx.shadowBlur = 0;
  ctx.shadowOffsetY = 0;

  // Se dibuja un único fotograma por vez. Ya no se mezclan dos sprites con
  // alpha porque eso producía un arquero semitransparente y una sensación de
  // doble imagen. La continuidad ahora depende de las 13 secuencias ideales.
  if(img && img.complete){
    if(m.spriteMeta?.frameIndex !== null && m.spriteMeta?.frameIndex !== undefined){
      const sx=m.spriteMeta.frameIndex*m.spriteMeta.frameWidth;
      ctx.drawImage(img,sx,0,m.spriteMeta.frameWidth,m.spriteMeta.frameHeight,x,y,drawWidth,drawHeight);
    }else{
      ctx.drawImage(img, x, y, drawWidth, drawHeight);
    }
  }else{
    const fallback = avatarImages[ACTIVE_AVATAR];
    if(fallback && fallback.complete) ctx.drawImage(fallback, x, y, drawWidth, drawHeight);
    else { ctx.fillStyle = "#d9e5f2"; ctx.fillRect(x+18, y+30, drawWidth*0.55, drawHeight*0.72); }
  }

  if(showLoadedArrow && (!state.animating || state.avatarPrepActive)){
    const guide = avatarArrowGuide(m, state.angle);
    drawFlightArrow(guide.launch, guide.visualAngle, 0.92, 1);
  }
  ctx.restore();
}
function drawFlightArrow(p,angle,scale=1,alpha=1){
  // El punto p representa la mano/nock que sostiene la cola de la flecha.
  // Se convierte al centro visual de la flecha para que la cola quede anclada en la mano del avatar.
  const len = 38*scale;
  const anchorOffset = len*0.82;
  const cx = p.x + Math.cos(angle)*anchorOffset;
  const cy = p.y + Math.sin(angle)*anchorOffset;
  drawArrowGraphic(cx, cy, angle, len, alpha);
}
function drawTrajectoryReference(path, currentIdx, preview=false){
  if(!path.length) return;
  ctx.save();
  ctx.setLineDash(preview ? [14,10] : [12,9]);
  ctx.strokeStyle = preview ? "rgba(255,255,255,.84)" : "rgba(255,255,255,.72)";
  ctx.lineWidth = preview ? 5.0 : 4.2;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(path[0].x,path[0].y);
  path.forEach(p=>ctx.lineTo(p.x,p.y));
  ctx.stroke();
  ctx.setLineDash([]);

  // Segmento inicial sólido para que la guía apunte en la misma dirección en
  // la que el arquero sostiene la flecha antes de iniciar la parábola.
  const p0 = path[0];
  const p1 = path[Math.min(3, path.length-1)] || p0;
  ctx.strokeStyle = 'rgba(255,255,255,.92)';
  ctx.lineWidth = 3.2;
  ctx.beginPath();
  ctx.moveTo(p0.x,p0.y);
  ctx.lineTo(p1.x,p1.y);
  ctx.stroke();

  ctx.fillStyle = 'rgba(255,255,255,.95)';
  ctx.beginPath();
  ctx.arc(p0.x, p0.y, preview ? 3.6 : 3.0, 0, Math.PI*2);
  ctx.fill();
  ctx.restore();
}
function previewPath(){
  // La guía de trayectoria ya no se muestra durante la fase de apuntado.
  // Solo aparece durante el disparo real de la flecha.
  return [];
}
function drawScene(path=[],arrowPoint=null,arrowAngle=0,showLoadedArrow=state.arrowLoaded, currentIdx=null){
  drawBackground();
  drawTarget();
  // Primero se dibuja el arquero y luego la guía. De esta forma el punto de
  // salida de la parábola se ve claramente en la mano/flecha y no queda oculto
  // detrás del cuerpo del avatar.
  drawAvatar(showLoadedArrow);
  const isPreview = !path.length && !arrowPoint;
  const displayPath = path.length ? path : previewPath();
  if(displayPath.length) drawTrajectoryReference(displayPath, path.length ? currentIdx : null, isPreview);
  if(arrowPoint) drawFlightArrow(arrowPoint,arrowAngle,0.9,1);
}
function computePath(){
  const o=arrowNock();
  const theta=state.angle*Math.PI/180;
  const pxPerMeter = distanceScale();
  const vx = state.speed*Math.cos(theta);
  const vy = state.speed*Math.sin(theta);
  const pts=[];
  let impact=null;
  for(let t=0;t<=6;t+=0.02){
    const x=o.x + vx*pxPerMeter*t;
    const y=o.y - vy*pxPerMeter*t + 0.5*g*pxPerMeter*t*t;
    if(x>canvas.width+60 || y>groundY()+90) break;
    const point={x,y,t};
    pts.push(point);
    if(state.target && x>=state.target.x){ impact=point; break; }
  }
  if(!impact) impact=pts[pts.length-1]||o;
  return {pts,impact};
}
function classifyImpact(impact){const t=state.target,dx=impact.x-t.x,dy=impact.y-t.y,radial=Math.sqrt(dx*dx+dy*dy);if(radial<=t.radius*.17)return{hit:true,center:true,points:1,radial,label:"Centro"};if(radial<=t.radius)return{hit:true,center:false,points:.5,radial,label:"Borde"};return{hit:false,center:false,points:0,radial,label:"Sin impacto"};}
function shotSuggestion(impact){const t=state.target,rec=recommendedSpeed();if(impact.x<t.x-t.radius)return"La flecha no alcanzó la distancia: aumenta la velocidad o sube el ángulo.";if(impact.y>t.y+t.radius)return"La flecha llegó baja: aumenta velocidad o ángulo.";if(impact.y<t.y-t.radius)return"La flecha pasó alta: baja el ángulo o reduce la velocidad.";if(rec&&state.speed<rec-5)return`Prueba una velocidad cercana a ${Math.round(rec)} m/s.`;return"Ajusta ligeramente y conserva una velocidad cercana a la guía.";}
function updateInstantSuggestion(){if(!state.target||!els.message)return;els.message.textContent=`Listo para disparar · Ángulo ${state.angle}° · Velocidad ${state.speed} m/s`;}
function animateShot(path,impact,classification){
  state.animating=true;
  state.shotVisualProgress=0;
  const totalFrames=Math.max(150, Math.round(path.length*3.4));
  let frameIndex=0;
  const frame=()=>{
    const progress=clamp(frameIndex/totalFrames,0,1);
    state.shotVisualProgress = progress;
    const idx=Math.min(path.length-1,Math.floor(progress*Math.max(1,path.length-1)));
    const visiblePath = path.slice(0, idx+1);
    const p=path[idx]||impact;
    const prev=path[Math.max(0,idx-2)]||p;
    const a=Math.atan2(p.y-prev.y,p.x-prev.x);
    drawScene(visiblePath,p,a,false,idx);
    frameIndex++;
    if(frameIndex<=totalFrames) requestAnimationFrame(frame);
    else {
      drawScene(path,impact,a,false,path.length-1);
      setTimeout(()=>{ state.shotVisualProgress=0; state.animating=false; afterShot(impact,classification); }, 320);
    }
  };
  frame();
}
function afterShot(impact,cl){
  state.shotVisualProgress=0;
  state.arrows=Math.max(0,state.arrows-1);
  state.shots.push({time:new Date().toLocaleString('es-CO'),world:state.world+1,worldName:currentWorld().name,angle:state.angle,speed:state.speed,distance:state.target?.distance||0,height:state.target?heightMeters():0,result:cl.label,points:cl.points,radial:Number(cl.radial||0).toFixed(1)});
  if(!cl.hit){
    state.worldFails++;
    state.challengeFails++;
    updateLabels();
    if(els.message)els.message.textContent=`Tiro fallido. ${shotSuggestion(impact)} Penalización: -0.10 en la nota del mundo.`;
    logEvent('tiro fallido',`${currentWorld().name}: ángulo ${state.angle}°, velocidad ${state.speed} m/s`);
    drawScene([],null,0,false);
    if(state.arrows<=0)endGame("Te quedaste sin flechas antes de completar la ruta.");
    else setTimeout(()=>{state.arrowLoaded=false;updateInstantSuggestion();drawScene();},360);
    return;
  }
  state.shotPoints=clamp(state.shotPoints+cl.points,0,currentWorld().goal);
  updateLabels();
  if(els.message)els.message.textContent=`${cl.label}: +${cl.points} punto(s) de tiro. ${state.shotPoints>=currentWorld().goal?`Reto de tiro superado: responde la pregunta ${state.sequenceStep+1} de 4.`:"Nuevo blanco generado para el siguiente tiro."}`;
  logEvent('tiro exitoso',`${currentWorld().name}: ${cl.label}, ${cl.points} punto(s)`);
  if(state.shotPoints>=currentWorld().goal){drawScene([],null,0,false);setTimeout(openQuestion,550);}else{drawScene([],null,0,false);setTimeout(()=>{newTarget();updateInstantSuggestion();drawScene();},650);}
}
function shoot(){
  if(state.animating||!state.started||!state.target||!els.announcement.classList.contains("hidden"))return;
  if(state.arrows<=0){endGame("Te quedaste sin flechas.");return;}
  const {pts,impact}=computePath(),cl=classifyImpact(impact);
  state.arrowLoaded=false;
  state.animating=true;
  playAvatarPreparation(state.avatar, state.angle, seq=>{
    state.arrowLoaded=false;
    animateShot(pts,impact,cl);
    const tail = [...(seq?.follow||[])];
    if(tail.length){
      let idx=0, tick=0;
      const followAnim = ()=>{
        if(state.animating){ requestAnimationFrame(followAnim); return; }
        const frame = tail[Math.min(idx, tail.length-1)];
        state.avatarFramePath = frame.path;
        drawScene([],null,0,false);
        tick++;
        if(tick >= (frame.duration || 7)){
          tick = 0;
          idx++;
          if(idx >= tail.length){ state.avatarFramePath = ''; drawScene(); return; }
        }
        requestAnimationFrame(followAnim);
      };
      requestAnimationFrame(followAnim);
    }
  });
}
function typesetMath(root){
  const target = root || els.dialog;
  if(!target || !window.MathJax || !MathJax.typesetPromise) return;
  try{
    if(MathJax.typesetClear) MathJax.typesetClear([target]);
    MathJax.typesetPromise([target]).catch(err=>console.warn("MathJax render error", err));
  }catch(err){
    console.warn("MathJax render error", err);
  }
}


/* ===== v10: Vista gráfica dinámica tipo GeoGebra para preguntas del banco HTML ===== */
const dynamicGraphInstances = {};
function dgFmt(n){ if(!Number.isFinite(n)) return ''; if(Math.abs(n)<1e-9)n=0; return Number.isInteger(n)?String(n):n.toFixed(2); }
function dgEscape(s){return String(s).replace(/[&<>\"]/g, m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]||m));}
function dgFval(kind,p,x){
  if(kind==='linear') return p.a*x+p.b;
  if(kind==='quadratic') return (p.a??1)*Math.pow(x-p.h,2)+p.k;
  if(kind==='abs') return Math.abs(x-p.h)+p.k;
  if(kind==='piecewise') return x < (p.cut??0) ? p.m1*x+p.b1 : p.m2*x+p.b2;
  if(kind==='rational') return p.a/(x-p.h)+p.k;
  if(kind==='sqrt') return x>=p.h ? Math.sqrt(x-p.h)+p.k : NaN;
  if(kind==='exp') return (p.c??1)*Math.pow(p.a,x)+p.k;
  if(kind==='log') return x>p.h ? Math.log(x-p.h)/Math.log(p.a)+p.k : NaN;
  return NaN;
}
function dgCurves(g){
  const k=g.kind,p=g.params||{};
  if(k==='inverseLinear') return [{fn:x=>p.a*x+p.b, cls:'dg-curve1', label:'f'},{fn:x=>(x-p.b)/p.a, cls:'dg-curve2', label:'f^{-1}'},{fn:x=>x, cls:'dg-curve3', label:'y=x'}];
  if(k==='expLogPair') return [{fn:x=>Math.pow(p.a,x), cls:'dg-curve1', label:'a^x'},{fn:x=>x>0?Math.log(x)/Math.log(p.a):NaN, cls:'dg-curve2', label:'log_a x'},{fn:x=>x, cls:'dg-curve3', label:'y=x'}];
  if(k==='mixed') return [{fn:x=>Math.pow(2,x), cls:'dg-curve1', label:'2^x'},{fn:x=>x>0?Math.log(x)/Math.log(2):NaN, cls:'dg-curve2', label:'log_2 x'},{fn:x=>Math.abs(x-1)-2, cls:'dg-curve3', label:'|x-1|-2'},{fn:x=>(x+1)*(x+1)-3, cls:'dg-curve2', label:'(x+1)^2-3'}];
  return [{fn:x=>dgFval(k,p,x), cls:'dg-curve1', label:'f'}];
}
class DynamicGraphView{
  constructor(svg, q){this.svg=svg;this.q=q;this.params=JSON.parse(JSON.stringify(q.dynamicGraph?.params||{}));this.kind=q.dynamicGraph?.kind||'linear';this.xMark=q.dynamicGraph?.xMark??0;this.cx=0;this.cy=0;this.scale=38;this.showGrid=true;this.showAxes=true;this.trace=true;this.showSpecial=true;this.clickPoints=[];this.dragging=false;this.last=null;this.initEvents();this.render();}
  W(){return this.svg.clientWidth||560} H(){return this.svg.clientHeight||360}
  sx(x){return this.W()/2+(x-this.cx)*this.scale} sy(y){return this.H()/2-(y-this.cy)*this.scale} wx(px){return (px-this.W()/2)/this.scale+this.cx} wy(py){return -(py-this.H()/2)/this.scale+this.cy}
  mouse(e){const r=this.svg.getBoundingClientRect();return{x:e.clientX-r.left,y:e.clientY-r.top};}
  setParam(n,v){this.params[n]=Number(v); if(n==='x') this.xMark=Number(v); this.render();}
  zoom(f){this.scale=Math.max(12,Math.min(130,this.scale*f));this.render();}
  pan(dx,dy){this.cx+=dx;this.cy+=dy;this.render();}
  reset(){this.cx=0;this.cy=0;this.scale=38;this.clickPoints=[];this.render();}
  toggle(name){this[name]=!this[name];this.render();}
  initEvents(){
    this.svg.addEventListener('wheel', e=>{e.preventDefault();const m=this.mouse(e),before={x:this.wx(m.x),y:this.wy(m.y)};this.scale*=e.deltaY<0?1.15:1/1.15;this.scale=Math.max(12,Math.min(130,this.scale));const after={x:this.wx(m.x),y:this.wy(m.y)};this.cx+=before.x-after.x;this.cy+=before.y-after.y;this.render();},{passive:false});
    this.svg.addEventListener('pointerdown', e=>{this.dragging=true;this.last=this.mouse(e);try{this.svg.setPointerCapture(e.pointerId)}catch(_){}});
    this.svg.addEventListener('pointermove', e=>{const m=this.mouse(e);const coord=this.svg.closest('.dynamic-graph-card')?.querySelector('.dg-coord');if(coord)coord.textContent=`x=${dgFmt(this.wx(m.x))}, y=${dgFmt(this.wy(m.y))}`;if(this.dragging&&this.last){this.cx-=(m.x-this.last.x)/this.scale;this.cy+=(m.y-this.last.y)/this.scale;this.last=m;this.render();}});
    this.svg.addEventListener('pointerup', e=>{const m=this.mouse(e);if(this.dragging&&this.last&&Math.hypot(m.x-this.last.x,m.y-this.last.y)<3){this.clickPoints.push({x:this.wx(m.x),y:this.wy(m.y)});}this.dragging=false;this.render();});
    this.svg.addEventListener('pointerleave',()=>{this.dragging=false;});
  }
  addLine(x1,y1,x2,y2,cls='dg-gridline'){return `<line class="${cls}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;}
  point(x,y,label,cls){return `<circle class="${cls}" cx="${this.sx(x)}" cy="${this.sy(y)}" r="5"/><text class="dg-point-label" x="${this.sx(x)+7}" y="${this.sy(y)-7}">${dgEscape(label)}</text>`;}
  pathFor(fn,xmin,xmax){let d='',open=false;const N=420;for(let i=0;i<=N;i++){const x=xmin+(xmax-xmin)*i/N,y=fn(x);if(!Number.isFinite(y)||Math.abs(y)>1e4){open=false;continue;}const px=this.sx(x),py=this.sy(y);if(py<-2000||py>this.H()+2000){open=false;continue;}d+=(open?'L':'M')+px.toFixed(1)+' '+py.toFixed(1)+' ';open=true;}return d;}
  specialPoints(){const k=this.kind,p=this.params,pts=[];if(k==='linear'){pts.push({x:0,y:p.b,t:'corte y'});if(p.a!==0)pts.push({x:-p.b/p.a,y:0,t:'corte x'});}if(k==='quadratic')pts.push({x:p.h,y:p.k,t:'vértice'});if(k==='abs'||k==='sqrt')pts.push({x:p.h,y:p.k,t:k==='abs'?'vértice':'inicio'});if(k==='exp')pts.push({x:0,y:(p.c??1)+p.k,t:'corte y'});if(k==='log')pts.push({x:p.h+1,y:p.k,t:'punto base'});return pts;}
  render(){const W=this.W(),H=this.H(),xmin=this.wx(0),xmax=this.wx(W),ymin=this.wy(H),ymax=this.wy(0);let out='';
    if(this.showGrid){for(let x=Math.floor(xmin);x<=Math.ceil(xmax);x++){out+=this.addLine(this.sx(x),0,this.sx(x),H);if(x!==0&&this.scale>25)out+=`<text class="dg-ticktext" x="${this.sx(x)+2}" y="${this.sy(0)+12}">${x}</text>`;}for(let y=Math.floor(ymin);y<=Math.ceil(ymax);y++){out+=this.addLine(0,this.sy(y),W,this.sy(y));if(y!==0&&this.scale>25)out+=`<text class="dg-ticktext" x="${this.sx(0)+4}" y="${this.sy(y)-3}">${y}</text>`;}}
    if(this.showAxes){out+=this.addLine(0,this.sy(0),W,this.sy(0),'dg-axis');out+=this.addLine(this.sx(0),0,this.sx(0),H,'dg-axis');out+=`<text class="dg-ticktext" x="${W-15}" y="${this.sy(0)-5}">x</text><text class="dg-ticktext" x="${this.sx(0)+5}" y="12">y</text>`;}
    const k=this.kind,p=this.params;let curves=dgCurves({kind:k,params:p});
    if(k==='piecewise'){const cut=p.cut??0,eps=1e-3,left=x=>p.m1*x+p.b1,right=x=>p.m2*x+p.b2;out+=`<path class="dg-curve1" d="${this.pathFor(left,xmin,Math.min(cut-eps,xmax))}"/>`;out+=`<path class="dg-curve1" d="${this.pathFor(right,Math.max(cut,xmin),xmax)}"/>`;if(this.showSpecial){const yl=left(cut),yr=right(cut);if(Number.isFinite(yl))out+=this.point(cut,yl,`limite izquierdo: (${dgFmt(cut)}, ${dgFmt(yl)})`,'dg-openmark');if(Number.isFinite(yr))out+=this.point(cut,yr,`f(${dgFmt(cut)})=${dgFmt(yr)}`,'dg-closedmark');}curves=[{fn:x=>x<cut?left(x):right(x),cls:'dg-curve1',label:'f'}];}
    else{curves.forEach(c=>{out+=`<path class="${c.cls}" d="${this.pathFor(c.fn,xmin,xmax)}"/>`;});}
    if(this.showSpecial){if(k==='rational'){out+=this.addLine(this.sx(p.h),0,this.sx(p.h),H,'dg-asym');out+=this.addLine(0,this.sy(p.k),W,this.sy(p.k),'dg-asym');}if(k==='log')out+=this.addLine(this.sx(p.h),0,this.sx(p.h),H,'dg-asym');if(k==='exp')out+=this.addLine(0,this.sy(p.k),W,this.sy(p.k),'dg-asym');if(k!=='piecewise')this.specialPoints().forEach(pt=>{if(Number.isFinite(pt.x)&&Number.isFinite(pt.y))out+=this.point(pt.x,pt.y,pt.t,'dg-mark');});}
    if(this.trace){curves.slice(0,1).forEach(c=>{const y=c.fn(this.xMark);if(Number.isFinite(y)){if(k!=='piecewise')out+=this.addLine(this.sx(this.xMark),this.sy(0),this.sx(this.xMark),this.sy(y),'dg-asym');out+=this.point(this.xMark,y,`(${dgFmt(this.xMark)}, ${dgFmt(y)})`,'dg-mark');}});}this.clickPoints.forEach((pt,i)=>out+=this.point(pt.x,pt.y,`P${i+1}=(${dgFmt(pt.x)},${dgFmt(pt.y)})`,'dg-clickpoint'));this.svg.innerHTML=out;}
}
function dynamicGraphHTML(q){
  const controls=(q.dynamicControls||[]).map(c=>`<label>${dgEscape(c.name)}</label><div><input type="range" min="${c.min}" max="${c.max}" step="${c.step}" value="${c.value}" oninput="updateDynamicSlider(${q.num}, '${dgEscape(c.name)}', this.value)"><span class="dg-val" id="dg-val-${q.num}-${dgEscape(c.name)}">${c.value}</span></div>`).join('');
  return `<section class="dynamic-graph-card"><div class="dg-toolbar"><button type="button" onclick="dynamicGraphAct(${q.num}, 'zoomIn')">Zoom +</button><button type="button" onclick="dynamicGraphAct(${q.num}, 'zoomOut')">Zoom -</button><button type="button" onclick="dynamicGraphAct(${q.num}, 'left')">←</button><button type="button" onclick="dynamicGraphAct(${q.num}, 'right')">→</button><button type="button" onclick="dynamicGraphAct(${q.num}, 'up')">↑</button><button type="button" onclick="dynamicGraphAct(${q.num}, 'down')">↓</button><button type="button" onclick="dynamicGraphAct(${q.num}, 'grid')">Cuadrícula</button><button type="button" onclick="dynamicGraphAct(${q.num}, 'axes')">Ejes</button><button type="button" onclick="dynamicGraphAct(${q.num}, 'trace')">Rastro</button><button type="button" onclick="dynamicGraphAct(${q.num}, 'special')">Puntos clave</button><button type="button" class="dg-reset" onclick="dynamicGraphAct(${q.num}, 'reset')">Reset</button><span class="dg-coord">x=0, y=0</span></div><svg class="dynamic-svgbox" id="dynamic-svg-${q.num}" aria-label="Vista gráfica dinámica"></svg><div class="dynamic-control-panel">${controls}</div><p class="dynamic-help"><strong>Ayudas:</strong> rueda del mouse para zoom, arrastre para desplazar la vista y clic para resaltar puntos. En funciones por partes se usan puntos abiertos y cerrados, sin segmentos verticales en los saltos.</p></section>`;
}
function initDynamicGraph(q){
  if(!q.dynamicGraph) return;
  setTimeout(()=>{const svg=document.getElementById(`dynamic-svg-${q.num}`);if(svg){dynamicGraphInstances[q.num]=new DynamicGraphView(svg,q);}},60);
}
function updateDynamicSlider(num,name,value){const inst=dynamicGraphInstances[num];const v=document.getElementById(`dg-val-${num}-${name}`);if(v)v.textContent=value;if(inst)inst.setParam(name,value);}
function dynamicGraphAct(num,act){const g=dynamicGraphInstances[num];if(!g)return;if(act==='zoomIn')g.zoom(1.2);if(act==='zoomOut')g.zoom(1/1.2);if(act==='left')g.pan(-.8,0);if(act==='right')g.pan(.8,0);if(act==='up')g.pan(0,.8);if(act==='down')g.pan(0,-.8);if(act==='grid')g.toggle('showGrid');if(act==='axes')g.toggle('showAxes');if(act==='trace')g.toggle('trace');if(act==='special')g.toggle('showSpecial');if(act==='reset')g.reset();}

function openQuestion(){
  Object.keys(dynamicGraphInstances).forEach(k=>delete dynamicGraphInstances[k]);
  state.answered=false;
  const q=state.currentQuestion || currentQuestion();
  state.currentQuestion=q;
  const role=currentMicroRole();
  renderSequenceProgress();
  els.dialog.classList.toggle("graph-question", Boolean(q.image || q.dynamicGraph));
  els.qType.textContent=`Reto ${state.sequenceStep+1} de 4 · ${role.name} · ${q.difficulty} · ${q.type} · valor máximo: ${possibleChallengeGrade().toFixed(2)}`;
  els.qTitle.textContent=q.title;
  els.hintBox.classList.add("hidden");
  els.feedback.className="feedback hidden";
  els.feedback.replaceChildren();
  els.btnContinue.classList.add("hidden");
  els.btnHint.classList.add("hidden");
  if(els.btnSubmit){
    els.btnSubmit.disabled=false;
    els.btnSubmit.classList.remove("hidden");
    els.btnSubmit.textContent="Responder";
  }
  els.qBody.innerHTML = q.prompt ? `<p class="question-prompt">${escapeHTML(q.prompt)}</p>` : "";
  if(q.image){
    els.qBody.innerHTML += `<figure class="question-graph"><img src="${q.image}" alt="Gráfica de apoyo para ${escapeHTML(q.title)}"><figcaption>Gráfica centrada para analizar la pregunta con mayor claridad.</figcaption></figure>`;
  }
  if(q.dynamicGraph){
    els.qBody.innerHTML += dynamicGraphHTML(q);
  }
  state.questionStartedAt=Date.now();
  state.currentOptionOrder=[];
  if(q.mode==="text") els.qBody.innerHTML+=`<input type="text" name="answerText" autocomplete="off" placeholder="Escribe tu respuesta" required>`;
  else if(q.mode==="textarea") els.qBody.innerHTML+=`<textarea name="answerText" placeholder="Escribe una respuesta breve con conceptos clave" required></textarea>`;
  else if(q.mode==="number") els.qBody.innerHTML+=`<input type="text" name="answerText" inputmode="decimal" autocomplete="off" placeholder="Escribe el valor numérico" required>`;
  else {
    state.currentOptionOrder=Array.from({length:q.options.length},(_,i)=>i);
    state.currentOptionOrder.forEach((origIdx,i)=>els.qBody.innerHTML+=`<label class="option"><input type="radio" name="answer" value="${i}" required> <span><b>${String.fromCharCode(65+i)}.</b> ${escapeHTML(q.options[origIdx])}</span></label>`);
  }
  els.dialog.showModal();
  initDynamicGraph(q);
  typesetMath(els.dialog);
}
function validateCurrentAnswer(){
  const q=state.currentQuestion;
  if(!q) return {valid:false,message:"No se encontró la pregunta activa."};
  const data=new FormData(els.form);
  if(q.mode==="number"||q.mode==="text"||q.mode==="textarea"){
    const value=String(data.get("answerText")||"").trim();
    if(!value) return {valid:false,message:"Escribe una respuesta antes de continuar."};
  }else if(data.get("answer")===null){
    return {valid:false,message:"Selecciona una de las opciones antes de responder."};
  }
  return {valid:true,message:""};
}
function showAnswerValidation(message){
  els.feedback.className="feedback bad";
  els.feedback.replaceChildren();
  const strong=document.createElement("strong");
  strong.textContent="Falta completar la respuesta.";
  els.feedback.append(strong,document.createTextNode(` ${message}`));
  els.feedback.classList.remove("hidden");
  try{els.feedback.scrollIntoView({behavior:"smooth",block:"nearest"});}catch(_e){}
}
function checkAnswer(){
  const q=state.currentQuestion;
  const data=new FormData(els.form);
  if(q.mode==="number"){
    const raw=String(data.get("answerText")||"").replace(",",".");
    const val=Number(raw);
    return Number.isFinite(val) && Math.abs(val-Number(q.numericAnswer)) <= (q.tolerance ?? 0.01);
  }
  if(q.mode==="text"||q.mode==="textarea"){
    const text=normalizeText(data.get("answerText"));
    const alternatives=(q.alternatives||[]).map(normalizeText);
    if(alternatives.includes(text))return true;
    return (q.keywords||[]).every(k=>text.includes(normalizeText(k)));
  }
  const raw=data.get("answer");
  if(raw===null) return false;
  const displayIdx=Number(raw);
  return state.currentOptionOrder[displayIdx]===q.answer;
}
function submitAnswer(e){
  if(e){e.preventDefault();e.stopPropagation();}
  if(state.answered) return;
  const validation=validateCurrentAnswer();
  if(!validation.valid){showAnswerValidation(validation.message);return;}
  const q = state.currentQuestion;
  const correct = checkAnswer();
  const selectedText=selectedOptionText(q);
  const correctText=correctAnswerText(q);
  const gradeBefore=possibleChallengeGrade();
  els.feedback.replaceChildren();
  const prefix = document.createElement("strong");
  if(correct){
    const grade = gradeBefore;
    state.correctAnswers++;
    state.totalScore = clamp(state.totalScore + grade, 0, 5);
    try{window.SCORMBridge?.saveScore?.(state.totalScore,state.sessionSeconds);}catch(error){console.warn('SCORM:',error);}
    state.worldScore = clamp(state.worldScore + grade, 0, 1);
    els.feedback.className = "feedback good";
    prefix.textContent = "Respuesta correcta.";
    els.feedback.append(prefix, document.createTextNode(` Ganaste ${grade.toFixed(2)} puntos. Completaste el reto ${state.sequenceStep+1} de 4. ${q.feedback}`));
    els.btnContinue.textContent = state.sequenceStep<3 ? `Continuar al reto ${state.sequenceStep+2} de 4` : (state.world >= worlds.length-1 ? "Ver resultado final" : "Completar mundo y avanzar");
  }else{
    state.wrongAttempts++;
    state.challengeWrong++;
    state.shotPoints = 0;
    els.feedback.className = "feedback bad";
    prefix.textContent = "Respuesta incorrecta.";
    els.feedback.append(prefix, document.createTextNode(` Debes repetir el reto de tiro antes de volver a responder esta misma pregunta. La penalización se aplica únicamente al valor de este reto. ${q.feedback}`));
    els.btnContinue.textContent = `Reintentar reto ${state.sequenceStep+1} de 4`;
  }
  const duration=Math.max(0,Math.round((Date.now()-(state.questionStartedAt||Date.now()))/1000));
  const optionOrder=state.currentOptionOrder && state.currentOptionOrder.length?state.currentOptionOrder:((q.options||[]).map((_,i)=>i));
  const displayedOptions=(q.options||[]).length?optionOrder.map(i=>q.options[i]):[];
  const correctOption=(q.options||[]).length?q.options[q.answer]:correctText;
  state.questionHistory.push({time:new Date().toLocaleString('es-CO'),world:state.world+1,worldName:currentWorld().name,microRole:currentMicroRole().name,sequenceStep:state.sequenceStep+1,title:q.title,type:q.type,category:categoryFromQuestion(q),topic:topicFromQuestion(q),prompt:q.prompt,hint:q.hint,correct,selected:selectedText,correctAnswer:correctText,correctOption,options:displayedOptions,grade:correct?gradeBefore:0,feedback:q.feedback,duration});
  logEvent(correct?'respuesta correcta':'respuesta incorrecta',q.title);
  state.answered = true;
  updateLabels();
  els.feedback.classList.remove("hidden");
  // La transición de fase es automática: tras responder, el juego pasa por sí
  // mismo al siguiente reto o regresa al reto de tiro si la respuesta fue incorrecta.
  els.btnContinue.classList.add("hidden");
  els.btnHint.classList.add("hidden");
  if(els.btnSubmit){
    els.btnSubmit.disabled=true;
    els.btnSubmit.classList.add("hidden");
  }
  // Evita respuestas dobles y deja claro el siguiente paso.
  els.qBody.querySelectorAll('input,textarea').forEach(control=>control.disabled=true);
  typesetMath(els.feedback);
  requestAnimationFrame(()=>{
    try{els.feedback.scrollIntoView({behavior:"smooth",block:"nearest"});}catch(_e){}
  });
  const nextDelay = correct ? 1150 : 1450;
  setTimeout(()=>{
    if(state.answered && els.dialog?.open) continueGame();
  }, nextDelay);
}
function setupMicroChallenge(showAnnouncement=true,isRetry=false){
  state.shotPoints=0;state.angle=0;state.speed=0;state.currentQuestion=null;state.avatar=ACTIVE_AVATAR;newTarget();updateLabels();drawScene();
  const role=currentMicroRole();
  if(showAnnouncement){
    els.announceTitle.textContent=`${currentWorld().name} · Reto ${state.sequenceStep+1} de 4`;
    els.announceText.textContent=`${role.name}: ${role.description} Completa ${currentWorld().goal} punto(s) de tiro para desbloquear la pregunta. Tema: ${currentWorld().topic}.`;
    els.announcement.classList.remove("hidden");
  }else if(els.message){
    els.message.textContent=isRetry?`Reintento del reto ${state.sequenceStep+1} de 4. Completa el tiro para responder nuevamente.`:`Reto ${state.sequenceStep+1} de 4: ${role.name}. Completa el desafío de tiro.`;
  }
}
function continueGame(){
  const correct=els.feedback.classList.contains("good");els.dialog.close();
  if(correct){
    if(state.sequenceStep<3){state.sequenceStep++;state.challengeFails=0;state.challengeWrong=0;setupMicroChallenge(true,false);return;}
    state.world++;
    if(state.world>=worlds.length){endGame(`Ruta completada: 20 retos matemáticos superados. Nota final: ${state.totalScore.toFixed(2)} / 5.00.`);return;}
    startWorld(true);
  }else setupMicroChallenge(false,true);
}
function startWorld(showAnnouncement=true){
  state.sequenceStep=0;state.worldScore=0;state.worldFails=0;state.challengeFails=0;state.challengeWrong=0;
  setupMicroChallenge(showAnnouncement,false);
}
function endGame(text){
  if(state.finalReportDeliveryStarted) return;
  allowSafeNavigation();
  state.started=false;
  state.fullscreenRequired=false;
  state.endedAt=new Date().toLocaleString('es-CO');
  stopSessionTimer();
  document.body.classList.remove('quiz-secure-active','game-active','fullscreen-paused');
  $('#fullscreenBlock')?.classList.add('hidden');
  if(els.message) els.message.textContent=text;
  logEvent('fin de partida',text);
  drawScene();
  try{window.SCORMBridge?.finish?.(state.totalScore,state.totalScore>=3?'passed':'failed',state.sessionSeconds);}catch(error){console.warn('SCORM:',error);}
  deliverFinalReportAutomatically();
}
let pendingSceneFrame=0;
function scheduleSceneDraw(){
  if(pendingSceneFrame) return;
  pendingSceneFrame=requestAnimationFrame(()=>{pendingSceneFrame=0;drawScene();});
}
function syncControlUI(){
  if(els.angle) els.angle.value=String(state.angle);
  if(els.speed) els.speed.value=String(state.speed);
}
function adjustAngle(delta){if(!state.started||state.animating)return;state.angle=clamp(state.angle+delta,ANGLE_MIN,ANGLE_MAX);syncControlUI();updateLabels();updateInstantSuggestion();scheduleSceneDraw();}
function adjustSpeed(delta){if(!state.started||state.animating)return;state.speed=clamp(state.speed+delta,0,170);syncControlUI();updateLabels();updateInstantSuggestion();scheduleSceneDraw();}
function startGame(){
  if(els.accessCode.value.trim()!=="CRG25"){els.accessError.classList.remove("hidden");els.accessCode.focus();return;}
  els.accessError.classList.add("hidden");
  const selected=document.querySelector('input[name="avatar"]:checked');
  state.avatar=ACTIVE_AVATAR;
  updateAvatarPresentation();
  state.playerName=(els.playerName?.value||"Equipo 1").trim().replace(/\s+/g,' ')||"Equipo 1";
  state.groupName="Cálculo diferencial";
  state.started=true;state.fullscreenRequired=true;state.fullscreenRecoveryRequired=true;state.fullscreenRecoveryReason='Activa la pantalla completa para comenzar la partida.';state.securityGateRequired=false;state.lastSecurityReason='';state.quizAnnulled=false;state.annulReason='';state.annulledAt=null;state.finalReportDeliveryStarted=false;state.finalReportDownloaded=false;state.lastSecurityAttemptAt=0;state.ignoreSecurityUntil=Date.now()+1800;document.body.classList.remove('quiz-annulled');document.body.classList.add('quiz-secure-active','game-active');state.world=0;state.totalScore=0;state.arrows=80;state.wrongAttempts=0;state.correctAnswers=0;state.worldFails=0;state.sequenceStep=0;state.worldScore=0;state.challengeFails=0;state.challengeWrong=0;state.shots=[];state.questionHistory=[];state.events=[];state.security=securityDefaults();resetQuestionQueues();prepareWorldSequences();state.startedAt=new Date().toLocaleString('es-CO');state.endedAt=null;
  els.startScreen.classList.add("hidden");els.gameShell.classList.remove("hidden");
  try{document.activeElement?.blur?.();}catch(_e){}
  requestAnimationFrame(()=>{try{canvas.focus({preventScroll:true});}catch(_e){canvas.focus();}});
  resumeFullScreenFlow(false);
  startSessionTimer();logEvent('inicio de partida',`${state.playerName} · ${state.groupName}`);
  try{window.SCORMBridge?.startAttempt?.();window.SCORMBridge?.saveScore?.(0,0);}catch(error){console.warn('SCORM:',error);}
  resizeCanvas();startWorld(true);
}
let resizeTimer=0;
function syncResponsiveViewport(){
  const viewportHeight=Math.max(320,Math.round(window.visualViewport?.height||window.innerHeight||720));
  const viewportWidth=Math.max(320,Math.round(window.visualViewport?.width||window.innerWidth||1280));
  document.documentElement.style.setProperty('--app-height',`${viewportHeight}px`);
  document.documentElement.style.setProperty('--app-width',`${viewportWidth}px`);
  document.body.classList.toggle('compact-device',viewportWidth<760 || viewportHeight<560);
  document.body.classList.toggle('portrait-device',viewportHeight>viewportWidth);
}
function resizeCanvas(){
  clearTimeout(resizeTimer);
  resizeTimer=setTimeout(()=>{
    syncResponsiveViewport();
    const rect=canvas.getBoundingClientRect();
    const cssWidth=Math.max(320,Math.round(rect.width||window.innerWidth||1280));
    const cssHeight=Math.max(300,Math.round(rect.height||Math.max(360,(window.innerHeight||720)-110)));
    let ratio=Math.min(Math.max(window.devicePixelRatio||1,1),2);
    const maxBackingPixels=5200000;
    if(cssWidth*cssHeight*ratio*ratio>maxBackingPixels){
      ratio=Math.max(1,Math.sqrt(maxBackingPixels/(cssWidth*cssHeight)));
    }
    const nextW=Math.max(320,Math.round(cssWidth*ratio));
    const nextH=Math.max(300,Math.round(cssHeight*ratio));
    if(canvas.width!==nextW || canvas.height!==nextH){
      canvas.width=nextW;
      canvas.height=nextH;
      ctx.setTransform(1,0,0,1,0,0);
    }
    if(state.target) state.target.x=distToX(state.target.distance);
    scheduleSceneDraw();
  },60);
}

// Bloqueos usuales tipo Pac-Man: pantalla completa, minimización/pestaña, clic derecho, contraseña docente y nota 0 al quinto bloqueo.
initSecurityGuards();
$("#btnStart").addEventListener("click",startGame);
$("#btnReport")?.addEventListener("click",()=>openReport(false));
$("#btnFinish")?.addEventListener("click",()=>endGame(`Partida finalizada manualmente. Nota final: ${state.totalScore.toFixed(2)} / 5.00.`));
$("#btnCloseReport")?.addEventListener("click",()=>els.reportDialog?.close());
$("#btnDownloadHtml")?.addEventListener("click",downloadReportHTML);els.accessCode.addEventListener("keydown",e=>{if(e.key==="Enter")startGame();});$("#btnShoot").addEventListener("click",shoot);$("#btnReset").addEventListener("click",startGame);$("#btnExitFullscreen").addEventListener("click",resumeFullScreenFlow);$("#btnGuide").addEventListener("click",()=>$("#guideDialog").showModal());$("#btnAnnounceStart").addEventListener("click",()=>{els.announcement.classList.add("hidden");updateInstantSuggestion();drawScene();});els.btnHint.addEventListener("click",()=>{
  els.hintBox.textContent = state.currentQuestion?.hint || "";
  els.hintBox.classList.remove("hidden");
  typesetMath(els.hintBox);
});
// El envío se controla por JavaScript. Esto evita que method="dialog" cierre o
// intercepte el formulario antes de mostrar la retroalimentación.
els.form.addEventListener("submit",submitAnswer);
els.btnSubmit?.addEventListener("click",submitAnswer);
els.btnContinue.addEventListener("click",continueGame);
els.form.addEventListener("keydown",e=>{
  if(e.key==="Enter" && !e.shiftKey && String(e.target?.tagName||"").toUpperCase()!=="TEXTAREA"){
    e.preventDefault();
    submitAnswer(e);
  }
});
els.angle?.addEventListener("input",e=>{if(!state.started||state.animating)return;state.angle=clamp(Number(e.target.value)||0,ANGLE_MIN,ANGLE_MAX);updateLabels();updateInstantSuggestion();scheduleSceneDraw();});
els.speed?.addEventListener("input",e=>{if(!state.started||state.animating)return;state.speed=clamp(Number(e.target.value)||0,0,170);updateLabels();updateInstantSuggestion();scheduleSceneDraw();});
const gameplayCodes=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"]);
function handleGameplayKey(e){
  if(!gameplayCodes.has(e.code)) return;
  if(!state.started || document.querySelector("dialog[open]")) return;
  const active=document.activeElement;
  const tag=String(active?.tagName||"").toUpperCase();
  const editable=active?.isContentEditable || ["INPUT","TEXTAREA","SELECT","BUTTON"].includes(tag);
  const hiddenStartField=editable && els.startScreen?.classList.contains("hidden");
  if(editable && !hiddenStartField && active!==canvas) return;
  e.preventDefault();
  e.stopPropagation();
  if(typeof e.stopImmediatePropagation==="function") e.stopImmediatePropagation();
  if(hiddenStartField){try{active.blur();canvas.focus({preventScroll:true});}catch(_e){}}
  const step=e.shiftKey?5:1;
  if(e.code==="ArrowUp") adjustAngle(step);
  else if(e.code==="ArrowDown") adjustAngle(-step);
  else if(e.code==="ArrowRight") adjustSpeed(step*2);
  else if(e.code==="ArrowLeft") adjustSpeed(-step*2);
  else if(e.code==="Space" && !e.repeat) shoot();
}
document.addEventListener("keydown",handleGameplayKey,{capture:true,passive:false});
canvas.addEventListener("pointerdown",()=>{try{canvas.focus({preventScroll:true});}catch(_e){canvas.focus();}});
window.addEventListener("resize",resizeCanvas,{passive:true});
window.addEventListener("orientationchange",()=>setTimeout(resizeCanvas,180),{passive:true});
window.visualViewport?.addEventListener("resize",resizeCanvas,{passive:true});
window.visualViewport?.addEventListener("scroll",resizeCanvas,{passive:true});
if(typeof ResizeObserver!=="undefined"){
  const gameResizeObserver=new ResizeObserver(()=>resizeCanvas());
  gameResizeObserver.observe(canvas);
  if(els.gameShell) gameResizeObserver.observe(els.gameShell);
}
syncResponsiveViewport();


document.querySelectorAll('input[name="avatar"]').forEach(el=>el.addEventListener('change',e=>{ state.avatar=ACTIVE_AVATAR; updateAvatarPresentation(); scheduleSceneDraw(); }));
updateAvatarPresentation();
