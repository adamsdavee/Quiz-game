"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, RotateCcw } from "lucide-react"

interface ResultsCardProps {
  score: number
  totalQuestions: number
  onRestart: () => void
}

export default function ResultsCard({ score, totalQuestions, onRestart }: ResultsCardProps) {
  const percentage = Math.round((score / totalQuestions) * 100)

  let message = ""
  let color = ""

  if (percentage >= 90) {
    message = "Outstanding! You're a quiz master!"
    color = "text-green-500"
  } else if (percentage >= 70) {
    message = "Great job! You know your stuff!"
    color = "text-green-500"
  } else if (percentage >= 50) {
    message = "Good effort! Room for improvement."
    color = "text-yellow-500"
  } else {
    message = "Keep practicing! You'll get better."
    color = "text-red-500"
  }

  return (
    <Card className="w-full max-w-md mx-auto text-center">
      <CardHeader>
        <div className="flex justify-center mb-4">
          <Trophy className="h-16 w-16 text-yellow-500" />
        </div>
        <CardTitle className="text-2xl">Quiz Completed!</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-5xl font-bold">
          {score} / {totalQuestions}
        </div>
        <div className="text-xl font-medium">{percentage}%</div>
        <p className={`text-lg ${color}`}>{message}</p>

        <div className="mt-8 pt-4 border-t">
          <h3 className="text-lg font-medium mb-2">Share your score</h3>
          <div className="flex justify-center gap-3">
            <Button variant="outline" size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-blue-500"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              <span className="sr-only">Share on Facebook</span>
            </Button>
            <Button variant="outline" size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-blue-400"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
              <span className="sr-only">Share on Twitter</span>
            </Button>
            <Button variant="outline" size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-blue-600"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span className="sr-only">Share on LinkedIn</span>
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button onClick={onRestart} className="gap-2">
          <RotateCcw className="h-4 w-4" />
          Play Again
        </Button>
      </CardFooter>
    </Card>
  )
}
