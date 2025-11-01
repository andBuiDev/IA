'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
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
import { BookOpen, Code2, Database, LineChart, BarChart3, PieChart, TrendingUp, FileText, Lightbulb, Target, Zap, Trophy, Star, CheckCircle, Circle, Play, Lock, Unlock, Brain, Bot, Cpu, Globe, Rocket, Award, Timer, ArrowLeft } from "lucide-react"

interface Module {
  id: string
  title: string
  description: string
  duration: string
  difficulty: 'Principiante' | 'Intermedio' | 'Avanzado'
  lessons: number
  exercises: number
  points: number
  locked: boolean
  completed: boolean
  progress: number
  icon: React.ReactNode
  color: string
}

interface UserProgress {
  totalPoints: number
  completedModules: string[]
  currentModule: string
  badges: string[]
  streak: number
}

export default function Home() {
  const [userProgress, setUserProgress] = useState<UserProgress>({
    totalPoints: 0,
    completedModules: [],
    currentModule: 'module0',
    badges: [],
    streak: 1
  })

  const [selectedModule, setSelectedModule] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<string>('modules')
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({})
  const [codeAnswers, setCodeAnswers] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState<Record<string, boolean>>({})

  const modules: Module[] = [
    {
      id: 'module0',
      title: 'Módulo 0: Bienvenida a la IA',
      description: 'Introducción a la inteligencia artificial, su historia y configuración del entorno de desarrollo.',
      duration: '2 horas',
      difficulty: 'Principiante',
      lessons: 4,
      exercises: 3,
      points: 100,
      locked: false,
      completed: userProgress.completedModules.includes('module0'),
      progress: userProgress.completedModules.includes('module0') ? 100 : 0,
      icon: <Rocket className="h-6 w-6" />,
      color: 'bg-blue-500'
    },
    {
      id: 'module1',
      title: 'Módulo 1: Python para IA',
      description: 'Fundamentos de Python enfocados en aplicaciones de inteligencia artificial y machine learning.',
      duration: '6 horas',
      difficulty: 'Principiante',
      lessons: 8,
      exercises: 12,
      points: 200,
      locked: false,
      completed: userProgress.completedModules.includes('module1'),
      progress: userProgress.completedModules.includes('module1') ? 100 : 0,
      icon: <Code2 className="h-6 w-6" />,
      color: 'bg-green-500'
    },
    {
      id: 'module2',
      title: 'Módulo 2: Conceptos de Machine Learning',
      description: 'Aprendizaje automático supervisado, no supervisado y refuerzo. Algoritmos fundamentales.',
      duration: '8 horas',
      difficulty: 'Intermedio',
      lessons: 10,
      exercises: 15,
      points: 300,
      locked: !userProgress.completedModules.includes('module1'),
      completed: userProgress.completedModules.includes('module2'),
      progress: userProgress.completedModules.includes('module2') ? 100 : 0,
      icon: <Brain className="h-6 w-6" />,
      color: 'bg-purple-500'
    },
    {
      id: 'module3',
      title: 'Módulo 3: Métodos Probabilísticos',
      description: 'Estadística aplicada a la IA, teoría de probabilidades y modelos bayesianos.',
      duration: '6 horas',
      difficulty: 'Intermedio',
      lessons: 7,
      exercises: 10,
      points: 250,
      locked: !userProgress.completedModules.includes('module2'),
      completed: userProgress.completedModules.includes('module3'),
      progress: userProgress.completedModules.includes('module3') ? 100 : 0,
      icon: <BarChart3 className="h-6 w-6" />,
      color: 'bg-orange-500'
    },
    {
      id: 'module4',
      title: 'Módulo 4: Algoritmos Bio-inspirados',
      description: 'Redes neuronales, algoritmos genéticos y sistemas inspirados en la naturaleza.',
      duration: '7 horas',
      difficulty: 'Avanzado',
      lessons: 8,
      exercises: 12,
      points: 350,
      locked: !userProgress.completedModules.includes('module3'),
      completed: userProgress.completedModules.includes('module4'),
      progress: userProgress.completedModules.includes('module4') ? 100 : 0,
      icon: <Cpu className="h-6 w-6" />,
      color: 'bg-red-500'
    },
    {
      id: 'module5',
      title: 'Módulo 5: Proyecto Final',
      description: 'Proyecto integrador aplicando todos los conocimientos adquiridos en un caso real.',
      duration: '10 horas',
      difficulty: 'Avanzado',
      lessons: 5,
      exercises: 8,
      points: 500,
      locked: !userProgress.completedModules.includes('module4'),
      completed: userProgress.completedModules.includes('module5'),
      progress: userProgress.completedModules.includes('module5') ? 100 : 0,
      icon: <Trophy className="h-6 w-6" />,
      color: 'bg-yellow-500'
    }
  ]

  const handleModuleComplete = (moduleId: string) => {
    const moduleData = modules.find(m => m.id === moduleId)
    if (moduleData && !userProgress.completedModules.includes(moduleId)) {
      setUserProgress(prev => ({
        ...prev,
        totalPoints: prev.totalPoints + moduleData.points,
        completedModules: [...prev.completedModules, moduleId],
        currentModule: getNextModule(moduleId)
      }))
    }
  }

  const getNextModule = (currentModuleId: string): string => {
    const currentIndex = modules.findIndex(m => m.id === currentModuleId)
    if (currentIndex < modules.length - 1) {
      return modules[currentIndex + 1].id
    }
    return 'completed'
  }

  const checkQuizAnswer = (questionId: string, correctAnswer: string) => {
    const userAnswer = quizAnswers[questionId]
    return userAnswer?.toLowerCase().trim() === correctAnswer.toLowerCase().trim()
  }

  const checkCodeAnswer = (exerciseId: string, expectedCode: string) => {
    const userCode = codeAnswers[exerciseId]
    return userCode?.trim() === expectedCode.trim()
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Principiante': return 'bg-green-100 text-green-800'
      case 'Intermedio': return 'bg-yellow-100 text-yellow-800'
      case 'Avanzado': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  if (selectedModule) {
    const ModuleContent = dynamic(() => import('@/components/ModuleContent'), {
      ssr: false
    })
    
    return (
      <ModuleContent
        moduleId={selectedModule}
        onBack={() => setSelectedModule(null)}
        onComplete={handleModuleComplete}
      />
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-blue-900 dark:via-slate-900 dark:to-green-900">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-slate-900/95 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg">
                <Bot className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Bootcamp IA Interactivo</h1>
                <p className="text-sm text-slate-600 dark:text-slate-400">Talento Tech - Versión Mejorada</p>
              </div>
            </div>
            
            {/* User Stats */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                <span className="font-semibold text-slate-700 dark:text-slate-300">{userProgress.totalPoints} pts</span>
              </div>
              <div className="flex items-center gap-2">
                <Timer className="h-5 w-5 text-blue-500" />
                <span className="font-semibold text-slate-700 dark:text-slate-300">{userProgress.streak} días</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-green-500" />
                <span className="font-semibold text-slate-700 dark:text-slate-300">{userProgress.badges.length} insignias</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Inteligencia Artificial [Explorador] - Versión Interactiva
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Aprende inteligencia artificial de manera práctica y divertida con ejercicios interactivos, 
            proyectos reales y un sistema de gamificación que hará tu aprendizaje increíble.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Badge variant="outline" className="text-sm border-blue-200 text-blue-700 bg-blue-50">
              <Code2 className="w-4 h-4 mr-1" />
              Python
            </Badge>
            <Badge variant="outline" className="text-sm border-green-200 text-green-700 bg-green-50">
              <Brain className="w-4 h-4 mr-1" />
              Machine Learning
            </Badge>
            <Badge variant="outline" className="text-sm border-purple-200 text-purple-700 bg-purple-50">
              <Zap className="w-4 h-4 mr-1" />
              Interactivo
            </Badge>
          </div>
        </div>

        {/* Progress Overview */}
        <Card className="mb-8 border-blue-200 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
              <TrendingUp className="h-5 w-5" />
              Tu Progreso General
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Progreso del Bootcamp</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {userProgress.completedModules.length} / {modules.length} módulos
                  </span>
                </div>
                <Progress 
                  value={(userProgress.completedModules.length / modules.length) * 100} 
                  className="h-2"
                />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{userProgress.totalPoints}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Puntos Totales</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{userProgress.completedModules.length}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Módulos Completados</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">{userProgress.streak}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Racha de Días</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500">{userProgress.badges.length}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Insignias</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900">
            <TabsTrigger value="modules" className="text-base data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800">
              <BookOpen className="w-4 h-4 mr-2" />
              Módulos
            </TabsTrigger>
            <TabsTrigger value="exercises" className="text-base data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800">
              <Target className="w-4 h-4 mr-2" />
              Ejercicios
            </TabsTrigger>
            <TabsTrigger value="projects" className="text-base data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800">
              <Rocket className="w-4 h-4 mr-2" />
              Proyectos
            </TabsTrigger>
          </TabsList>

          {/* Módulos */}
          <TabsContent value="modules" className="space-y-6">
            <div className="grid gap-6">
              {modules.map((module) => (
                <Card key={module.id} className={`transition-all duration-200 ${module.locked ? 'opacity-60' : 'hover:shadow-lg'}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 ${module.color} text-white rounded-lg`}>
                          {module.icon}
                        </div>
                        <div>
                          <CardTitle className="text-xl flex items-center gap-2">
                            {module.title}
                            {module.completed ? (
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            ) : module.locked ? (
                              <Lock className="h-5 w-5 text-gray-400" />
                            ) : (
                              <Unlock className="h-5 w-5 text-blue-500" />
                            )}
                          </CardTitle>
                          <CardDescription>{module.description}</CardDescription>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={getDifficultyColor(module.difficulty)}>
                          {module.difficulty}
                        </Badge>
                        <div className="text-sm text-muted-foreground mt-1">
                          {module.duration}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Module Stats */}
                      <div className="grid grid-cols-4 gap-4 text-sm">
                        <div className="text-center">
                          <div className="font-semibold">{module.lessons}</div>
                          <div className="text-muted-foreground">Lecciones</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold">{module.exercises}</div>
                          <div className="text-muted-foreground">Ejercicios</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold">{module.points}</div>
                          <div className="text-muted-foreground">Puntos</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold">{module.progress}%</div>
                          <div className="text-muted-foreground">Progreso</div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <Progress value={module.progress} className="h-2" />

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        {module.locked ? (
                          <Button disabled className="flex-1">
                            <Lock className="w-4 h-4 mr-2" />
                            Bloqueado
                          </Button>
                        ) : module.completed ? (
                          <Button variant="outline" className="flex-1">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Completado
                          </Button>
                        ) : (
                          <Button 
                            className="flex-1"
                            onClick={() => setSelectedModule(module.id)}
                          >
                            <Play className="w-4 h-4 mr-2" />
                            Continuar
                          </Button>
                        )}
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setSelectedModule(module.id)}
                        >
                          <FileText className="w-4 h-4 mr-1" />
                          Detalles
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Ejercicios Interactivos */}
          <TabsContent value="exercises" className="space-y-6">
            <div className="grid gap-6">
              {/* Quiz Rápido */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5" />
                    Quiz Rápido: Conceptos Básicos de IA
                  </CardTitle>
                  <CardDescription>Pon a prueba tus conocimientos fundamentales</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium mb-2">1. ¿Qué significa la sigla IA?</p>
                      <Input
                        placeholder="Escribe tu respuesta..."
                        value={quizAnswers['q1'] || ''}
                        onChange={(e) => setQuizAnswers({...quizAnswers, 'q1': e.target.value})}
                      />
                      {showResults['q1'] && (
                        <Alert className="mt-2">
                          <AlertDescription>
                            {checkQuizAnswer('q1', 'inteligencia artificial') ? 
                              '✅ ¡Correcto! IA significa Inteligencia Artificial.' : 
                              '❌ Incorrecto. La respuesta correcta es: Inteligencia Artificial'}
                          </AlertDescription>
                        </Alert>
                      )}
                    </div>

                    <div>
                      <p className="font-medium mb-2">2. Menciona 3 aplicaciones de IA en la vida diaria</p>
                      <Textarea
                        placeholder="Escribe tus respuestas separadas por comas..."
                        value={quizAnswers['q2'] || ''}
                        onChange={(e) => setQuizAnswers({...quizAnswers, 'q2': e.target.value})}
                      />
                      {showResults['q2'] && (
                        <Alert className="mt-2">
                          <AlertDescription>
                            ✅ Buen trabajo! Ejemplos comunes: asistentes virtuales, recomendaciones, reconocimiento facial, etc.
                          </AlertDescription>
                        </Alert>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button onClick={() => setShowResults({...showResults, 'q1': true, 'q2': true})}>
                      Ver Respuestas
                    </Button>
                    <Button variant="outline" onClick={() => {
                      setQuizAnswers({})
                      setShowResults({})
                    }}>
                      Limpiar
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Ejercicio de Código */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code2 className="h-5 w-5" />
                    Ejercicio de Código: Tu Primer Programa en Python
                  </CardTitle>
                  <CardDescription>Crea un programa simple que salude al mundo</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium mb-2">Instrucciones:</p>
                      <p className="text-sm text-muted-foreground">
                        Escribe el código Python para imprimir "Hola, Mundo!" usando la función print().
                      </p>
                    </div>

                    <div>
                      <p className="font-medium mb-2">Tu código:</p>
                      <Textarea
                        placeholder="Escribe tu código Python aquí..."
                        className="font-mono"
                        rows={4}
                        value={codeAnswers['ex1'] || ''}
                        onChange={(e) => setCodeAnswers({...codeAnswers, 'ex1': e.target.value})}
                      />
                    </div>

                    {showResults['ex1'] && (
                      <Alert>
                        <AlertDescription>
                          {checkCodeAnswer('ex1', 'print("Hola, Mundo!")') || checkCodeAnswer('ex1', "print('Hola, Mundo!')") ? 
                            '✅ ¡Perfecto! Has escrito tu primer programa en Python correctamente.' : 
                            '❌ No es correcto. La respuesta correcta es: print("Hola, Mundo!")'}
                        </AlertDescription>
                      </Alert>
                    )}

                    <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                      <p className="font-medium mb-2">Pista:</p>
                      <code className="text-sm bg-slate-900 text-slate-100 p-2 rounded">
                        print("Hola, Mundo!")
                      </code>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button onClick={() => setShowResults({...showResults, 'ex1': true})}>
                      Verificar Código
                    </Button>
                    <Button variant="outline" onClick={() => {
                      setCodeAnswers({})
                      setShowResults({})
                    }}>
                      Limpiar
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Ejercicio Interactivo de Conceptos */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" />
                    Ejercicio Visual: Tipos de Aprendizaje Automático
                  </CardTitle>
                  <CardDescription>Arrastra y clasifica los ejemplos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Clasifica los siguientes ejemplos en Supervisado, No Supervisado o Refuerzo:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="border-2 border-dashed border-blue-300 rounded-lg p-4">
                        <h4 className="font-medium text-blue-700 mb-2">Supervisado</h4>
                        <div className="space-y-2">
                          <div className="bg-blue-50 p-2 rounded text-sm">Clasificación de correos</div>
                          <div className="bg-blue-50 p-2 rounded text-sm">Predicción de precios</div>
                        </div>
                      </div>
                      
                      <div className="border-2 border-dashed border-green-300 rounded-lg p-4">
                        <h4 className="font-medium text-green-700 mb-2">No Supervisado</h4>
                        <div className="space-y-2">
                          <div className="bg-green-50 p-2 rounded text-sm">Agrupamiento de clientes</div>
                          <div className="bg-green-50 p-2 rounded text-sm">Reducción de dimensionalidad</div>
                        </div>
                      </div>
                      
                      <div className="border-2 border-dashed border-purple-300 rounded-lg p-4">
                        <h4 className="font-medium text-purple-700 mb-2">Refuerzo</h4>
                        <div className="space-y-2">
                          <div className="bg-purple-50 p-2 rounded text-sm">Juegos de ajedrez</div>
                          <div className="bg-purple-50 p-2 rounded text-sm">Robots aprendiendo</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Proyectos Prácticos */}
          <TabsContent value="projects" className="space-y-6">
            <div className="grid gap-6">
              {/* Mini-Proyecto 1 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Rocket className="h-5 w-5" />
                    Mini-Proyecto 1: Clasificador de Iris
                  </CardTitle>
                  <CardDescription>Clásico proyecto de machine learning para principiantes</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">🎯 Objetivo:</h4>
                      <p className="text-sm text-muted-foreground">
                        Crear un modelo que clasifique diferentes especies de flores iris basándose en sus características.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">📋 Requisitos:</h4>
                      <ul className="text-sm text-muted-foreground list-disc list-inside">
                        <li>Conocimientos básicos de Python</li>
                        <li>Bibliotecas: pandas, scikit-learn, matplotlib</li>
                        <li>Dataset de iris (incluido en scikit-learn)</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">🔧 Pasos a seguir:</h4>
                      <ol className="text-sm text-muted-foreground list-decimal list-inside space-y-1">
                        <li>Cargar y explorar el dataset</li>
                        <li>Visualizar los datos</li>
                        <li>Preparar los datos para el modelo</li>
                        <li>Entrenar un clasificador</li>
                        <li>Evaluar el rendimiento</li>
                        <li>Hacer predicciones</li>
                      </ol>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">💡 Código de inicio:</h4>
                      <pre className="text-sm bg-slate-900 text-slate-100 p-4 rounded overflow-x-auto">
{`from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score

# Cargar dataset
iris = load_iris()
X, y = iris.data, iris.target

# Dividir datos
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Crear y entrenar modelo
model = KNeighborsClassifier(n_neighbors=3)
model.fit(X_train, y_train)

# Evaluar
predictions = model.predict(X_test)
accuracy = accuracy_score(y_test, predictions)
print(f'Accuracy: {accuracy:.2f}')`}
                      </pre>
                    </div>

                    <div className="flex gap-2">
                      <Button>
                        <Star className="w-4 h-4 mr-2" />
                        Comenzar Proyecto
                      </Button>
                      <Button variant="outline">
                        <FileText className="w-4 h-4 mr-2" />
                        Ver Guía Completa
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Mini-Proyecto 2 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Mini-Proyecto 2: Análisis de Sentimientos
                  </CardTitle>
                  <CardDescription>Procesamiento de lenguaje natural básico</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">🎯 Objetivo:</h4>
                      <p className="text-sm text-muted-foreground">
                        Crear un sistema que analice el sentimiento (positivo/negativo) de textos en español.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">🔧 Tecnologías:</h4>
                      <ul className="text-sm text-muted-foreground list-disc list-inside">
                        <li>Python y NLTK/spaCy</li>
                        <li>Técnicas de preprocesamiento de texto</li>
                        <li>Modelos de clasificación de texto</li>
                      </ul>
                    </div>

                    <div className="flex gap-2">
                      <Button>
                        <Star className="w-4 h-4 mr-2" />
                        Comenzar Proyecto
                      </Button>
                      <Button variant="outline">
                        <FileText className="w-4 h-4 mr-2" />
                        Ver Guía Completa
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Proyecto Final */}
              <Card className="border-2 border-yellow-200 bg-yellow-50 dark:bg-yellow-900/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-yellow-600" />
                    Proyecto Final: Sistema de Recomendación
                  </CardTitle>
                  <CardDescription>Aplica todo lo aprendido en un proyecto integral</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">🏆 Desafío Final:</h4>
                      <p className="text-sm text-muted-foreground">
                        Construye un sistema completo de recomendación que sugiera productos a usuarios 
                        basándose en sus preferencias y comportamiento histórico.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-600">500</div>
                        <div className="text-sm text-muted-foreground">Puntos</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">15+</div>
                        <div className="text-sm text-muted-foreground">Horas</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">3</div>
                        <div className="text-sm text-muted-foreground">Insignias</div>
                      </div>
                    </div>

                    <Button className="w-full" size="lg">
                      <Trophy className="w-5 h-5 mr-2" />
                      Iniciar Proyecto Final
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gradient-to-r from-blue-600 to-green-600 text-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-lg font-semibold mb-2">
              Bootcamp Interactivo de Inteligencia Artificial
            </p>
            <p className="text-sm mb-4 opacity-90">
              Versión mejorada para GitHub - Educación accesible para todos
            </p>
            <div className="flex justify-center gap-4 mb-6">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Python
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Machine Learning
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Educación Interactiva
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Open Source
              </Badge>
            </div>
            <div className="border-t border-white/20 pt-4">
              <p className="text-sm opacity-80">
                Realizado con ❤️ por <span className="font-semibold">Andrés Buitrago</span> y <span className="font-semibold">Talento Tech</span>
              </p>
              <p className="text-xs opacity-70 mt-2">
                © 2024 Bootcamp IA Interactivo - Todos los derechos reservados
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}