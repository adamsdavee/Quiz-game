import QuizGame from "@/components/quiz-game"
import { quizData } from "@/data/quiz-data"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-8">Knowledge Quiz Challenge</h1>
      <QuizGame questions={quizData} />
    </main>
  )
}
