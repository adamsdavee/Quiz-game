"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, XCircle, Timer } from "lucide-react"
import QuestionCard from "./question-card"
import ResultsCard from "./results-card"

export interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
}

interface QuizGameProps {
  questions: Question[]
  timePerQuestion?: number
}

export default function QuizGame({ questions, timePerQuestion = 30 }: QuizGameProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(timePerQuestion)
  const [timerActive, setTimerActive] = useState(true)

  const currentQuestion = questions[currentQuestionIndex]
  const progress = (currentQuestionIndex / questions.length) * 100

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null

    if (timerActive && timeLeft > 0 && !isAnswerSubmitted) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)
    } else if (timeLeft === 0 && !isAnswerSubmitted) {
      handleSubmitAnswer()
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [timeLeft, timerActive, isAnswerSubmitted])

  const handleSelectAnswer = (index: number) => {
    if (!isAnswerSubmitted) {
      setSelectedAnswer(index)
    }
  }

  const handleSubmitAnswer = () => {
    setIsAnswerSubmitted(true)
    setTimerActive(false)

    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer(null)
      setIsAnswerSubmitted(false)
      setTimeLeft(timePerQuestion)
      setTimerActive(true)
    } else {
      setQuizCompleted(true)
    }
  }

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0)
    setScore(0)
    setSelectedAnswer(null)
    setIsAnswerSubmitted(false)
    setQuizCompleted(false)
    setTimeLeft(timePerQuestion)
    setTimerActive(true)
  }

  if (quizCompleted) {
    return <ResultsCard score={score} totalQuestions={questions.length} onRestart={handleRestartQuiz} />
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center mb-2">
        <div className="text-sm font-medium">
          Question {currentQuestionIndex + 1} of {questions.length}
        </div>
        <div className="flex items-center gap-2">
          <Timer className="h-4 w-4 text-muted-foreground" />
          <span className={`text-sm font-medium ${timeLeft <= 5 ? "text-red-500" : ""}`}>{timeLeft}s</span>
        </div>
      </div>

      <Progress value={progress} className="h-2" />

      <QuestionCard
        question={currentQuestion}
        selectedAnswer={selectedAnswer}
        isAnswerSubmitted={isAnswerSubmitted}
        onSelectAnswer={handleSelectAnswer}
      />

      <div className="flex justify-end mt-4">
        {!isAnswerSubmitted ? (
          <Button onClick={handleSubmitAnswer} disabled={selectedAnswer === null} className="px-8">
            Submit Answer
          </Button>
        ) : (
          <Button onClick={handleNextQuestion} className="px-8">
            {currentQuestionIndex < questions.length - 1 ? "Next Question" : "See Results"}
          </Button>
        )}
      </div>

      {isAnswerSubmitted && (
        <Card
          className={`mt-4 border ${
            selectedAnswer === currentQuestion.correctAnswer
              ? "border-green-500 bg-green-50 dark:bg-green-950/20"
              : "border-red-500 bg-red-50 dark:bg-red-950/20"
          }`}
        >
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              {selectedAnswer === currentQuestion.correctAnswer ? (
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
              ) : (
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
              )}
              <div>
                <p className="font-medium">
                  {selectedAnswer === currentQuestion.correctAnswer ? "Correct!" : "Incorrect!"}
                </p>
                {currentQuestion.explanation && (
                  <p className="text-muted-foreground mt-1">{currentQuestion.explanation}</p>
                )}
                {selectedAnswer !== currentQuestion.correctAnswer && (
                  <p className="mt-1">
                    The correct answer is:{" "}
                    <span className="font-medium">{currentQuestion.options[currentQuestion.correctAnswer]}</span>
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
