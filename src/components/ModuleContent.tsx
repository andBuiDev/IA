'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  BookOpen, 
  Code2, 
  PlayCircle,
  CheckCircle,
  Target,
  Lightbulb,
  FileText,
  Video,
  Download,
  Clock,
  Users,
  Award,
  Brain,
  BarChart3,
  Cpu,
  Zap,
  ArrowLeft,
  Trophy
} from "lucide-react"

interface ModuleContentProps {
  moduleId: string
  onBack: () => void
  onComplete: (moduleId: string) => void
}

interface Exercise {
  id: string
  title: string
  description: string
  type: 'quiz' | 'code' | 'practical'
  points: number
  completed: boolean
  questions?: Array<{
    question: string
    options?: string[]
    correct: string | number
  }>
  codeProblem?: {
    description: string
    starterCode: string
    solution: string
  }
}

const moduleData: Record<string, {
  title: string
  description: string
  objectives: string[]
  lessons: Array<{
    id: string
    title: string
    duration: string
    type: 'video' | 'reading' | 'exercise'
    completed: boolean
    content: string
  }>
  exercises: Exercise[]
  resources: Array<{title: string, url: string, type: string}>
}> = {
  'module0': {
    title: 'Módulo 0: Bienvenida a la IA',
    description: 'Introducción fundamental al mundo de la Inteligencia Artificial, su historia, conceptos básicos y aplicaciones en la vida real.',
    objectives: [
      'Comprender qué es la Inteligencia Artificial y sus diferentes tipos',
      'Conocer la historia y evolución de la IA',
      'Identificar aplicaciones prácticas de IA en el mundo real',
      'Configurar el entorno de desarrollo para Python',
      'Entender el panorama general del bootcamp'
    ],
    lessons: [
      {
        id: 'm0l1',
        title: 'Lección 1: ¿Qué es la Inteligencia Artificial?',
        duration: '15 min',
        type: 'video',
        completed: false,
        content: `
# ¿Qué es la Inteligencia Artificial?

La Inteligencia Artificial (IA) es una rama de la informática que se enfoca en crear sistemas capaces de realizar tareas que normalmente requieren inteligencia humana.

## Definiciones Clave

**IA Débil (Estrecha):** Sistemas diseñados para realizar tareas específicas.
- Ejemplos: Asistentes virtuales, sistemas de recomendación, reconocimiento facial

**IA Fuerte (General):** Sistemas con capacidad de entender y aprender cualquier tarea intelectual.
- Actualmente en fase de investigación y desarrollo

## Tipos de IA

1. **Basada en funcionalidad:**
   - IA Reactiva
   - Memoria limitada
   - Teoría de la mente
   - Autoconciencia

2. **Basada en capacidad:**
   - IA Artificial Estrecha (ANI)
   - IA Artificial General (AGI)
   - Superinteligencia Artificial (ASI)

## Aplicaciones Actuales

- **Salud:** Diagnóstico médico, descubrimiento de fármacos
- **Finanzas:** Trading algorítmico, detección de fraudes
- **Transporte:** Vehículos autónomos, optimización de rutas
- **Entretenimiento:** Sistemas de recomendación, generación de contenido
        `
      },
      {
        id: 'm0l2',
        title: 'Lección 2: Historia y Evolución de la IA',
        duration: '20 min',
        type: 'reading',
        completed: false,
        content: `
# Historia y Evolución de la Inteligencia Artificial

## Orígenes (1940-1950)

**1943:** McCulloch y Pitts crean el primer modelo matemático de una neurona.

**1950:** Alan Turing publica "Computing Machinery and Intelligence" y propone el Test de Turing.

**1956:** Conferencia de Dartmouth - Nacimiento oficial del término "Inteligencia Artificial".

## Primera Ola de IA (1956-1974)

- Desarrollo de los primeros programas de IA
- ELIZA (1966) - Primer chatbot
- SHRDLU (1972) - Sistema de comprensión del lenguaje natural
- Primer invierno de la IA (1974-1980)

## Segunda Ola (1980-1987)

- Sistemas expertos
- Redes neuronales artificiales
- Segundo invierno de la IA (1987-1993)

## Era Moderna (1993-Presente)

**1997:** Deep Blue vence a Garry Kasparov en ajedrez
**2011:** Watson gana en Jeopardy!
**2012:** AlexNet revoluciona el reconocimiento de imágenes
**2016:** AlphaGo vence a Lee Sedol en Go
**2020:** GPT-3 demuestra capacidades avanzadas de lenguaje
**2022-presente:** ChatGPT y modelos de lenguaje masivos
        `
      },
      {
        id: 'm0l3',
        title: 'Lección 3: Configuración del Entorno Python',
        duration: '25 min',
        type: 'exercise',
        completed: false,
        content: `
# Configuración del Entorno Python para IA

## ¿Por qué Python para IA?

Python es el lenguaje más popular para IA y Machine Learning por:
- **Sintaxis simple y legible**
- **Gran ecosistema de librerías**
- **Comunidad activa**
- **Integración con otras herramientas**

## Instalación

### 1. Instalar Python
\`\`\`bash
# Descargar desde python.org
# Verificar instalación
python --version
\`\`\`

### 2. Configurar entorno virtual
\`\`\`bash
# Crear entorno virtual
python -m venv ia_env

# Activar (Windows)
ia_env\\Scripts\\activate

# Activar (Mac/Linux)
source ia_env/bin/activate
\`\`\`

### 3. Instalar librerías esenciales
\`\`\`bash
pip install numpy pandas matplotlib seaborn
pip install scikit-learn jupyter notebook
\`\`\`

## Librerías Fundamentales

- **NumPy:** Computación numérica
- **Pandas:** Manipulación de datos
- **Matplotlib/Seaborn:** Visualización
- **Scikit-learn:** Machine Learning
- **Jupyter:** Notebooks interactivos

## Tu Primer Programa

\`\`\`python
# Hola Mundo en Python
print("¡Hola, Inteligencia Artificial!")

# Importar librerías
import numpy as np
import pandas as pd

# Crear datos simples
datos = [1, 2, 3, 4, 5]
array = np.array(datos)

print(f"Array NumPy: {array}")
print(f"Media: {np.mean(array)}")
\`\`\`
        `
      },
      {
        id: 'm0l4',
        title: 'Lección 4: Panorama del Bootcamp',
        duration: '10 min',
        type: 'video',
        completed: false,
        content: `
# Panorama del Bootcamp de IA

## Estructura del Bootcamp

Este bootcamp está diseñado para llevarte desde cero hasta tener habilidades básicas en Inteligencia Artificial.

### Módulo 0: Fundamentos ✅
- Introducción a la IA
- Configuración del entorno
- Conceptos básicos

### Módulo 1: Python para IA 🐍
- Fundamentos de Python
- Estructuras de datos
- Librerías esenciales
- Proyectos básicos

### Módulo 2: Machine Learning 🧠
- Aprendizaje supervisado
- Aprendizaje no supervisado
- Algoritmos fundamentales
- Evaluación de modelos

### Módulo 3: Métodos Probabilísticos 📊
- Estadística aplicada
- Teoría de probabilidades
- Modelos bayesianos
- Inferencia estadística

### Módulo 4: Algoritmos Bio-inspirados 🔌
- Redes neuronales
- Algoritmos genéticos
- Sistemas difusos
- Computación evolutiva

### Módulo 5: Proyecto Final 🏆
- Sistema completo
- Integración de conocimientos
- Presentación de resultados

## Metodología de Aprendizaje

1. **Teoría:** Conceptos fundamentales
2. **Práctica:** Ejercicios guiados
3. **Proyectos:** Aplicación real
4. **Evaluación:** Retroalimentación continua

¡Estás listo para comenzar esta increíble aventura en el mundo de la IA! 🚀
        `
      }
    ],
    exercises: [
      {
        id: 'm0e1',
        title: 'Quiz: Conceptos Básicos de IA',
        description: 'Evalúa tu comprensión sobre los fundamentos de la Inteligencia Artificial',
        type: 'quiz',
        points: 20,
        completed: false,
        questions: [
          {
            question: '¿Qué significa la sigla IA?',
            options: ['Inteligencia Artificial', 'Información Avanzada', 'Interfaz Automática', 'Integración Aplicada'],
            correct: 0
          },
          {
            question: '¿Cuál es un ejemplo de IA débil?',
            options: ['Siri', 'Un humano', 'Skynet', 'Un robot con conciencia'],
            correct: 0
          },
          {
            question: '¿En qué año se celebró la conferencia de Dartmouth?',
            options: ['1943', '1950', '1956', '1997'],
            correct: 2
          }
        ]
      },
      {
        id: 'm0e2',
        title: 'Ejercicio: Tu Primer Script Python',
        description: 'Crea tu primer programa en Python con operaciones básicas',
        type: 'code',
        points: 30,
        completed: false,
        codeProblem: {
          description: 'Escribe un programa que: 1) Defina una variable llamada "nombre" con tu nombre, 2) Calcule el área de un rectángulo con base=5 y altura=3, 3) Imprima ambos resultados',
          starterCode: '# Escribe tu código aquí\n',
          solution: 'nombre = "Tu nombre"\nbase = 5\naltura = 3\narea = base * altura\nprint(f"Nombre: {nombre}")\nprint(f"Área del rectángulo: {area}")'
        }
      },
      {
        id: 'm0e3',
        title: 'Práctica: Configuración de Entorno',
        description: 'Instala y configura tu entorno de desarrollo Python',
        type: 'practical',
        points: 50,
        completed: false
      }
    ],
    resources: [
      { title: 'Guía de Instalación Python', url: '#', type: 'PDF' },
      { title: 'Video: Historia de la IA', url: '#', type: 'Video' },
      { title: 'Cheat Sheet: Comandos Python', url: '#', type: 'PDF' }
    ]
  },
  'module1': {
    title: 'Módulo 1: Python para IA',
    description: 'Fundamentos esenciales de Python enfocados en aplicaciones de Inteligencia Artificial y Machine Learning.',
    objectives: [
      'Dominar la sintaxis básica de Python',
      'Trabajar con estructuras de datos fundamentales',
      'Utilizar librerías NumPy y Pandas para análisis de datos',
      'Crear visualizaciones con Matplotlib y Seaborn',
      'Aplicar Python en problemas básicos de IA'
    ],
    lessons: [
      {
        id: 'm1l1',
        title: 'Lección 1: Fundamentos de Python',
        duration: '30 min',
        type: 'video',
        completed: false,
        content: `
# Fundamentos de Python para IA

## Variables y Tipos de Datos

Python es un lenguaje dinámicamente tipado:

\`\`\`python
# Variables numéricas
edad = 25
altura = 1.75
peso = 70.5

# Cadenas de texto
nombre = "Andrés"
mensaje = 'Hola, Mundo!'

# Booleanos
es_estudiante = True
tiene_experiencia = False

# Listas
numeros = [1, 2, 3, 4, 5]
nombres = ["Ana", "Juan", "María"]

# Diccionarios
persona = {
    "nombre": "Andrés",
    "edad": 25,
    "ciudad": "Bogotá"
}
\`\`\`

## Operadores

### Aritméticos
\`\`\`python
a = 10
b = 3

suma = a + b      # 13
resta = a - b     # 7
multiplicacion = a * b  # 30
division = a / b  # 3.333...
division_entera = a // b  # 3
modulo = a % b    # 1
potencia = a ** b # 1000
\`\`\`

## Estructuras de Control

### Condicionales
\`\`\`python
edad = 18

if edad >= 18:
    print("Eres mayor de edad")
elif edad >= 13:
    print("Eres adolescente")
else:
    print("Eres niño")
\`\`\`

### Bucles
\`\`\`python
# Bucle for
for i in range(5):
    print(f"Iteración {i}")

# Bucle while
contador = 0
while contador < 3:
    print(f"Contador: {contador}")
    contador += 1
\`\`\`

## Funciones

\`\`\`python
def saludar(nombre):
    return f"Hola, {nombre}!"

def calcular_area_rectangulo(base, altura):
    return base * altura

def es_par(numero):
    return numero % 2 == 0

# Usar funciones
print(saludar("Andrés"))
area = calcular_area_rectangulo(5, 3)
print(f"El área es: {area}")
print(f"¿7 es par? {es_par(7)}")
\`\`\`
        `
      },
      {
        id: 'm1l2',
        title: 'Lección 2: Estructuras de Datos Avanzadas',
        duration: '35 min',
        type: 'exercise',
        completed: false,
        content: `
# Estructuras de Datos Avanzadas en Python

## Listas (Arrays)

### Operaciones básicas
\`\`\`python
# Crear listas
numeros = [1, 2, 3, 4, 5]
frutas = ["manzana", "banana", "naranja"]
mixta = [1, "hola", 3.14, True]

# Acceder elementos
print(numeros[0])      # Primer elemento
print(numeros[-1])     # Último elemento
print(numeros[1:3])    # Slice [2, 3]

# Modificar elementos
numeros[0] = 10
frutas.append("uva")   # Agregar al final
frutas.insert(1, "pera")  # Insertar en posición
frutas.remove("banana")  # Eliminar elemento
elemento = frutas.pop()  # Eliminar último

# Métodos útiles
longitud = len(numeros)
indice = frutas.index("manzana")
conteo = numeros.count(2)
ordenado = sorted(numeros)
numeros.sort()  # Ordenar in-place
numeros.reverse()  # Invertir
\`\`\`

## Diccionarios

\`\`\`python
# Crear diccionarios
persona = {
    "nombre": "Andrés",
    "edad": 25,
    "ciudad": "Bogotá",
    "hobbies": ["programar", "leer", "música"]
}

# Acceder elementos
print(persona["nombre"])
print(persona.get("edad"))  # Más seguro

# Modificar y agregar
persona["edad"] = 26
persona["email"] = "andres@email.com"

# Eliminar
del persona["hobbies"]
email = persona.pop("email")

# Recorrer diccionario
for clave, valor in persona.items():
    print(f"{clave}: {valor}")
\`\`\`

## List Comprehensions

\`\`\`python
# Forma tradicional
cuadrados = []
for i in range(10):
    cuadrados.append(i ** 2)

# List comprehension
cuadrados = [i ** 2 for i in range(10)]

# Con condición
pares = [x for x in range(20) if x % 2 == 0]

# Diccionary comprehension
cuadrados_dict = {x: x ** 2 for x in range(10)}
\`\`\`
        `
      },
      {
        id: 'm1l3',
        title: 'Lección 3: NumPy - Computación Numérica',
        duration: '40 min',
        type: 'exercise',
        completed: false,
        content: `
# NumPy - Fundamentos de Computación Numérica

## ¿Qué es NumPy?

NumPy (Numerical Python) es la librería fundamental para computación científica en Python.

## Instalación
\`\`\`bash
pip install numpy
\`\`\`

## Arrays de NumPy

### Creación de arrays
\`\`\`python
import numpy as np

# Desde listas
lista = [1, 2, 3, 4, 5]
array = np.array(lista)

# Arrays especiales
ceros = np.zeros(5)           # [0. 0. 0. 0. 0.]
unos = np.ones(3)             # [1. 1. 1.]
identidad = np.eye(3)         # Matriz identidad 3x3
rango = np.arange(10)         # [0 1 2 3 4 5 6 7 8 9]
espaciado = np.linspace(0, 1, 5)  # [0.   0.25 0.5  0.75 1. ]
aleatorios = np.random.rand(3, 3)  # Matriz 3x3 aleatoria
\`\`\`

## Operaciones con Arrays

### Operaciones aritméticas
\`\`\`python
a = np.array([1, 2, 3, 4])
b = np.array([5, 6, 7, 8])

# Operaciones elemento a elemento
suma = a + b           # [6 8 10 12]
resta = a - b          # [-4 -4 -4 -4]
multiplicacion = a * b # [5 12 21 32]
division = a / b       # [0.2 0.333... 0.428... 0.5]

# Operaciones con escalares
doble = a * 2          # [2 4 6 8]
cuadrado = a ** 2      # [1 4 9 16]
\`\`\`

### Funciones estadísticas
\`\`\`python
datos = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

media = np.mean(datos)     # 5.5
mediana = np.median(datos) # 5.5
desviacion = np.std(datos) # 2.87
varianza = np.var(datos)   # 8.25
minimo = np.min(datos)     # 1
maximo = np.max(datos)     # 10
suma = np.sum(datos)       # 55
\`\`\`

## Aplicaciones en IA

NumPy es fundamental para:
- Manipulación de datos numéricos
- Operaciones matemáticas eficientes
- Base para otras librerías (Pandas, Scikit-learn)
- Procesamiento de imágenes
- Cálculos matriciales en redes neuronales
        `
      },
      {
        id: 'm1l4',
        title: 'Lección 4: Pandas - Análisis de Datos',
        duration: '45 min',
        type: 'exercise',
        completed: false,
        content: `
# Pandas - Análisis y Manipulación de Datos

## ¿Qué es Pandas?

Pandas es la librería más importante para manipulación y análisis de datos en Python.

## Instalación
\`\`\`bash
pip install pandas
\`\`\`

## Estructuras de Datos Principales

### Series
\`\`\`python
import pandas as pd

# Crear Series
datos = [10, 20, 30, 40, 50]
serie = pd.Series(datos)

# Con índice personalizado
indices = ['a', 'b', 'c', 'd', 'e']
serie_con_indice = pd.Series(datos, index=indices)

# Desde diccionario
diccionario = {'A': 1, 'B': 2, 'C': 3}
serie_desde_dict = pd.Series(diccionario)
\`\`\`

### DataFrames
\`\`\`python
# Crear DataFrame desde diccionario
datos = {
    'nombre': ['Ana', 'Juan', 'María', 'Pedro'],
    'edad': [25, 30, 28, 35],
    'ciudad': ['Bogotá', 'Medellín', 'Cali', 'Bucaramanga'],
    'salario': [50000, 60000, 55000, 70000]
}

df = pd.DataFrame(datos)
\`\`\`

## Exploración de Datos

### Información básica
\`\`\`python
# Ver primeras filas
print(df.head())        # Primeras 5 filas
print(df.head(3))       # Primeras 3 filas

# Información del DataFrame
print(df.info())        # Tipos de datos, valores no nulos

# Estadísticas descriptivas
print(df.describe())    # Estadísticas básicas

# Dimensiones
print(df.shape)         # (filas, columnas)
print(df.columns)       # Nombres de columnas
print(df.dtypes)        # Tipos de datos por columna
\`\`\`

## Selección y Filtrado

### Seleccionar columnas
\`\`\`python
# Una columna
nombres = df['nombre']
edades = df.nombre  # También funciona

# Múltiples columnas
subset = df[['nombre', 'edad']]
\`\`\`

### Filtrado condicional
\`\`\`python
# Condición simple
mayores_25 = df[df['edad'] > 25]
salario_alto = df[df['salario'] > 55000]

# Múltiples condiciones
condicion = (df['edad'] > 25) & (df['salario'] < 65000)
filtro_multiple = df[condicion]
\`\`\`

## Aplicaciones en IA

Pandas es esencial para:
- Limpieza y preparación de datos
- Análisis exploratorio de datos (EDA)
- Preprocesamiento para Machine Learning
- Manipulación de datasets grandes
        `
      },
      {
        id: 'm1l5',
        title: 'Lección 5: Visualización con Matplotlib y Seaborn',
        duration: '35 min',
        type: 'exercise',
        completed: false,
        content: `
# Visualización de Datos con Matplotlib y Seaborn

## Instalación
\`\`\`bash
pip install matplotlib seaborn
\`\`\`

## Matplotlib - Fundamentos

### Gráficos básicos
\`\`\`python
import matplotlib.pyplot as plt
import numpy as np

# Datos
x = np.linspace(0, 10, 100)
y = np.sin(x)

# Gráfico de líneas
plt.figure(figsize=(10, 6))
plt.plot(x, y, label='sin(x)', color='blue', linewidth=2)
plt.xlabel('X')
plt.ylabel('Y')
plt.title('Función Seno')
plt.legend()
plt.grid(True)
plt.show()
\`\`\`

### Gráficos de dispersión
\`\`\`python
# Datos aleatorios
np.random.seed(42)
x = np.random.randn(100)
y = 2 * x + np.random.randn(100) * 0.5

plt.figure(figsize=(8, 6))
plt.scatter(x, y, alpha=0.6, color='red')
plt.xlabel('X')
plt.ylabel('Y')
plt.title('Gráfico de Dispersión')
plt.grid(True, alpha=0.3)
plt.show()
\`\`\`

## Seaborn - Visualización Estadística

### Configuración
\`\`\`python
import seaborn as sns

# Configurar estilo
sns.set_style("whitegrid")
sns.set_palette("husl")
\`\`\`

### Gráficos de distribución
\`\`\`python
# Datos de ejemplo
tips = sns.load_dataset("tips")

# Histograma con KDE
plt.figure(figsize=(10, 6))
sns.histplot(data=tips, x='total_bill', kde=True)
plt.title('Distribución del Total de la Cuenta')
plt.show()

# Box plot
plt.figure(figsize=(8, 6))
sns.boxplot(data=tips, x='day', y='total_bill')
plt.title('Total de Cuenta por Día')
plt.show()
\`\`\`

## Aplicaciones en IA

La visualización es crucial para:
- Análisis exploratorio de datos
- Identificación de patrones
- Comunicación de resultados
- Evaluación de modelos
- Presentación de insights
        `
      }
    ],
    exercises: [
      {
        id: 'm1e1',
        title: 'Quiz: Fundamentos de Python',
        description: 'Evalúa tu conocimiento sobre sintaxis y estructuras básicas de Python',
        type: 'quiz',
        points: 25,
        completed: false,
        questions: [
          {
            question: '¿Cuál es la salida de print(2 ** 3)?',
            options: ['6', '8', '9', '5'],
            correct: 1
          },
          {
            question: '¿Cómo se crea una lista vacía en Python?',
            options: ['[]', '{}', '()', 'list()'],
            correct: 0
          },
          {
            question: '¿Qué método se usa para agregar un elemento al final de una lista?',
            options: ['add()', 'append()', 'push()', 'insert()'],
            correct: 1
          }
        ]
      },
      {
        id: 'm1e2',
        title: 'Ejercicio: Operaciones con NumPy',
        description: 'Resuelve problemas matemáticos usando NumPy',
        type: 'code',
        points: 35,
        completed: false,
        codeProblem: {
          description: 'Crea un array NumPy con los números del 1 al 10, calcula: 1) La media, 2) La desviación estándar, 3) Los números mayores que 5',
          starterCode: 'import numpy as np\n\n# Tu código aquí\n',
          solution: 'import numpy as np\n\n# Crear array\narr = np.arange(1, 11)\n\n# Calcular estadísticas\nmedia = np.mean(arr)\ndesviacion = np.std(arr)\nmayores_5 = arr[arr > 5]\n\nprint(f"Array: {arr}")\nprint(f"Media: {media}")\nprint(f"Desviación estándar: {desviacion}")\nprint(f"Números mayores que 5: {mayores_5}")'
        }
      },
      {
        id: 'm1e3',
        title: 'Proyecto: Análisis de Datos con Pandas',
        description: 'Crea y analiza un dataset usando Pandas',
        type: 'practical',
        points: 40,
        completed: false
      },
      {
        id: 'm1e4',
        title: 'Visualización: Gráficos con Matplotlib',
        description: 'Crea diferentes tipos de visualizaciones',
        type: 'code',
        points: 30,
        completed: false,
        codeProblem: {
          description: 'Crea un gráfico de líneas y un gráfico de dispersión usando datos generados',
          starterCode: 'import matplotlib.pyplot as plt\nimport numpy as np\n\n# Generar datos y crear gráficos\n',
          solution: 'import matplotlib.pyplot as plt\nimport numpy as np\n\n# Generar datos\nx = np.linspace(0, 10, 50)\ny1 = np.sin(x)\ny2 = np.cos(x)\n\n# Gráfico de líneas\nplt.figure(figsize=(12, 5))\n\nplt.subplot(1, 2, 1)\nplt.plot(x, y1, label=\'sin(x)\', color=\'blue\')\nplt.plot(x, y2, label=\'cos(x)\', color=\'red\')\nplt.xlabel(\'X\')\nplt.ylabel(\'Y\')\nplt.title(\'Funciones Trigonométricas\')\nplt.legend()\nplt.grid(True)\n\n# Gráfico de dispersión\nplt.subplot(1, 2, 2)\nx_scatter = np.random.randn(50)\ny_scatter = 2 * x_scatter + np.random.randn(50) * 0.5\nplt.scatter(x_scatter, y_scatter, alpha=0.6)\nplt.xlabel(\'X\')\nplt.ylabel(\'Y\')\nplt.title(\'Dispersión\')\nplt.grid(True, alpha=0.3)\n\nplt.tight_layout()\nplt.show()'
        }
      }
    ],
    resources: [
      { title: 'Guía Completa de Python', url: '#', type: 'PDF' },
      { title: 'Ejercicios NumPy', url: '#', type: 'Notebook' },
      { title: 'Tutorial Pandas', url: '#', type: 'Video' },
      { title: 'Galería de Gráficos', url: '#', type: 'Web' }
    ]
  }
}

export default function ModuleContent({ moduleId, onBack, onComplete }: ModuleContentProps) {
  const [activeTab, setActiveTab] = useState('lessons')
  const [currentLesson, setCurrentLesson] = useState<string | null>(null)
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({})
  const [codeAnswers, setCodeAnswers] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState<Record<string, boolean>>({})
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set())
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(new Set())

  const moduleInfo = moduleData[moduleId]

  if (!moduleInfo) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Alert>
          <AlertDescription>Módulo no encontrado</AlertDescription>
        </Alert>
      </div>
    )
  }

  const handleLessonComplete = (lessonId: string) => {
    setCompletedLessons(prev => new Set([...prev, lessonId]))
  }

  const handleExerciseComplete = (exerciseId: string) => {
    setCompletedExercises(prev => new Set([...prev, exerciseId]))
  }

  const checkQuizAnswer = (exerciseId: string, questionIndex: number, correctAnswer: number) => {
    const userAnswer = quizAnswers[`${exerciseId}_q${questionIndex}`]
    return userAnswer ? parseInt(userAnswer) === correctAnswer : false
  }

  const checkCodeAnswer = (exerciseId: string, solution: string) => {
    const userCode = codeAnswers[exerciseId]
    return userCode?.trim().toLowerCase() === solution.trim().toLowerCase()
  }

  const progress = ((completedLessons.size + completedExercises.size) / (moduleInfo.lessons.length + moduleInfo.exercises.length)) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-blue-900 dark:via-slate-900 dark:to-green-900">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-slate-900/95 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button variant="ghost" onClick={onBack} className="p-2">
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  {moduleInfo.title}
                </h1>
                <p className="text-sm text-slate-600 dark:text-slate-400">{moduleInfo.description}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm font-medium text-slate-700 dark:text-slate-300">Progreso</div>
                <div className="text-lg font-bold text-blue-600">{Math.round(progress)}%</div>
              </div>
              <Progress value={progress} className="w-32" />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Objectives */}
        <Card className="mb-8 border-blue-200 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
              <Target className="h-5 w-5" />
              Objetivos del Módulo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {moduleInfo.objectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">{objective}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900">
            <TabsTrigger value="lessons" className="text-base data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800">
              <BookOpen className="w-4 h-4 mr-2" />
              Lecciones
            </TabsTrigger>
            <TabsTrigger value="exercises" className="text-base data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800">
              <Target className="w-4 h-4 mr-2" />
              Ejercicios
            </TabsTrigger>
            <TabsTrigger value="resources" className="text-base data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800">
              <Download className="w-4 h-4 mr-2" />
              Recursos
            </TabsTrigger>
          </TabsList>

          {/* Lessons Tab */}
          <TabsContent value="lessons" className="space-y-6">
            {currentLesson ? (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {moduleInfo.lessons.find(l => l.id === currentLesson)?.type === 'video' && <Video className="h-5 w-5" />}
                        {moduleInfo.lessons.find(l => l.id === currentLesson)?.type === 'reading' && <FileText className="h-5 w-5" />}
                        {moduleInfo.lessons.find(l => l.id === currentLesson)?.type === 'exercise' && <Code2 className="h-5 w-5" />}
                        {moduleInfo.lessons.find(l => l.id === currentLesson)?.title}
                      </CardTitle>
                      <CardDescription>
                        Duración: {moduleInfo.lessons.find(l => l.id === currentLesson)?.duration}
                      </CardDescription>
                    </div>
                    <Button 
                      variant="outline" 
                      onClick={() => setCurrentLesson(null)}
                    >
                      Cerrar
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="prose prose-slate dark:prose-invert max-w-none">
                      <pre className="whitespace-pre-wrap bg-slate-100 dark:bg-slate-800 p-4 rounded-lg text-sm">
                        {moduleInfo.lessons.find(l => l.id === currentLesson)?.content}
                      </pre>
                    </div>
                  </ScrollArea>
                  <div className="mt-4 flex gap-2">
                    <Button 
                      onClick={() => handleLessonComplete(currentLesson)}
                      disabled={completedLessons.has(currentLesson)}
                    >
                      {completedLessons.has(currentLesson) ? (
                        <>
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Completado
                        </>
                      ) : (
                        <>
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Marcar como Completado
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4">
                {moduleInfo.lessons.map((lesson) => (
                  <Card key={lesson.id} className={`transition-all duration-200 ${completedLessons.has(lesson.id) ? 'border-green-200 bg-green-50' : 'hover:shadow-lg'}`}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 ${lesson.type === 'video' ? 'bg-blue-100' : lesson.type === 'reading' ? 'bg-green-100' : 'bg-purple-100'} rounded-lg`}>
                            {lesson.type === 'video' && <Video className="h-5 w-5 text-blue-600" />}
                            {lesson.type === 'reading' && <FileText className="h-5 w-5 text-green-600" />}
                            {lesson.type === 'exercise' && <Code2 className="h-5 w-5 text-purple-600" />}
                          </div>
                          <div>
                            <CardTitle className="text-lg">{lesson.title}</CardTitle>
                            <CardDescription className="flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              {lesson.duration}
                            </CardDescription>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {completedLessons.has(lesson.id) && (
                            <Badge className="bg-green-100 text-green-800">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              Completado
                            </Badge>
                          )}
                          <Button 
                            onClick={() => setCurrentLesson(lesson.id)}
                            size="sm"
                          >
                            <PlayCircle className="w-4 h-4 mr-2" />
                            {completedLessons.has(lesson.id) ? 'Repasar' : 'Comenzar'}
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Exercises Tab */}
          <TabsContent value="exercises" className="space-y-6">
            <div className="grid gap-6">
              {moduleInfo.exercises.map((exercise) => (
                <Card key={exercise.id} className={`transition-all duration-200 ${completedExercises.has(exercise.id) ? 'border-green-200 bg-green-50' : 'hover:shadow-lg'}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          {exercise.type === 'quiz' && <Brain className="h-5 w-5" />}
                          {exercise.type === 'code' && <Code2 className="h-5 w-5" />}
                          {exercise.type === 'practical' && <Target className="h-5 w-5" />}
                          {exercise.title}
                        </CardTitle>
                        <CardDescription>{exercise.description}</CardDescription>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">
                          {exercise.points} pts
                        </Badge>
                        {completedExercises.has(exercise.id) && (
                          <Badge className="bg-green-100 text-green-800">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Completado
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {exercise.type === 'quiz' && exercise.questions && (
                      <div className="space-y-4">
                        {exercise.questions.map((question, qIndex) => (
                          <div key={qIndex} className="space-y-2">
                            <p className="font-medium">{question.question}</p>
                            <div className="grid gap-2">
                              {question.options?.map((option, oIndex) => (
                                <label key={oIndex} className="flex items-center space-x-2">
                                  <input
                                    type="radio"
                                    name={`${exercise.id}_q${qIndex}`}
                                    value={oIndex}
                                    onChange={(e) => setQuizAnswers({
                                      ...quizAnswers,
                                      [`${exercise.id}_q${qIndex}`]: e.target.value
                                    })}
                                  />
                                  <span>{option}</span>
                                </label>
                              ))}
                            </div>
                            {showResults[`${exercise.id}_q${qIndex}`] && (
                              <Alert className={checkQuizAnswer(exercise.id, qIndex, question.correct) ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}>
                                <AlertDescription>
                                  {checkQuizAnswer(exercise.id, qIndex, question.correct) ? '✅ Correcto' : `❌ Incorrecto. La respuesta correcta es: ${question.options?.[question.correct]}`}
                                </AlertDescription>
                              </Alert>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {exercise.type === 'code' && exercise.codeProblem && (
                      <div className="space-y-4">
                        <p className="font-medium">{exercise.codeProblem.description}</p>
                        <Textarea
                          placeholder="Escribe tu código aquí..."
                          className="font-mono"
                          rows={8}
                          value={codeAnswers[exercise.id] || ''}
                          onChange={(e) => setCodeAnswers({...codeAnswers, [exercise.id]: e.target.value})}
                        />
                        {showResults[exercise.id] && (
                          <Alert className={checkCodeAnswer(exercise.id, exercise.codeProblem.solution) ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}>
                            <AlertDescription>
                              {checkCodeAnswer(exercise.id, exercise.codeProblem.solution) ? '✅ ¡Correcto! Tu solución es correcta.' : '❌ Tu solución no es correcta. Revisa el código e intenta de nuevo.'}
                            </AlertDescription>
                          </Alert>
                        )}
                      </div>
                    )}

                    {exercise.type === 'practical' && (
                      <div className="space-y-4">
                        <p className="font-medium">{exercise.description}</p>
                        <Alert>
                          <AlertDescription>
                            Este es un ejercicio práctico que debes realizar en tu entorno local. 
                            Una vez completado, marca el ejercicio como terminado.
                          </AlertDescription>
                        </Alert>
                      </div>
                    )}

                    <div className="flex gap-2 mt-4">
                      <Button 
                        onClick={() => setShowResults({...showResults, [exercise.id]: true})}
                        variant="outline"
                      >
                        Verificar Respuesta
                      </Button>
                      <Button 
                        onClick={() => handleExerciseComplete(exercise.id)}
                        disabled={completedExercises.has(exercise.id)}
                      >
                        {completedExercises.has(exercise.id) ? (
                          <>
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Completado
                          </>
                        ) : (
                          <>
                            <Award className="w-4 h-4 mr-2" />
                            Completar Ejercicio
                          </>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              {moduleInfo.resources.map((resource, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Download className="h-5 w-5" />
                      {resource.title}
                    </CardTitle>
                    <CardDescription>Tipo: {resource.type}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Descargar Recurso
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Complete Module Button */}
        {progress === 100 && (
          <Card className="mt-8 border-green-200 bg-gradient-to-r from-green-50 to-blue-50">
            <CardContent className="pt-6">
              <div className="text-center">
                <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">¡Módulo Completado!</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Has completado todas las lecciones y ejercicios de este módulo.
                </p>
                <Button onClick={() => onComplete(moduleId)} size="lg">
                  <Award className="w-5 h-5 mr-2" />
                  Completar Módulo y Ganar Puntos
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}