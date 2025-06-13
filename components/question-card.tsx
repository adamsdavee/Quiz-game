"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import type { Question } from "./quiz-game"

interface QuestionCardProps {
  question: Question
  selectedAnswer: number | null
  isAnswerSubmitted: boolean
  onSelectAnswer: (index: number) => void
}

export default function QuestionCard({
  question,
  selectedAnswer,
  isAnswerSubmitted,
  onSelectAnswer,
}: QuestionCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl">{question.question}</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup value={selectedAnswer?.toString()} className="space-y-3">
          {question.options.map((option, index) => {
            const isCorrect = index === question.correctAnswer
            const isSelected = selectedAnswer === index

            let optionClassName = "border-2 p-4 rounded-lg transition-all"

            if (isAnswerSubmitted) {
              if (isCorrect) {
                optionClassName += " border-green-500 bg-green-50 dark:bg-green-950/20"
              } else if (isSelected) {
                optionClassName += " border-red-500 bg-red-50 dark:bg-red-950/20"
              } else {
                optionClassName += " border-gray-200 dark:border-gray-700"
              }
            } else {
              optionClassName += isSelected
                ? " border-primary"
                : " border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
            }

            return (
              <div key={index} className={optionClassName} onClick={() => onSelectAnswer(index)}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={index.toString()}
                    id={`option-${index}`}
                    disabled={isAnswerSubmitted}
                    className="data-[state=checked]:border-primary"
                  />
                  <Label htmlFor={`option-${index}`} className="flex-grow cursor-pointer text-base">
                    {option}
                  </Label>
                </div>
              </div>
            )
          })}
        </RadioGroup>
      </CardContent>
    </Card>
  )
}
