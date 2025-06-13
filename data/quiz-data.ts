import type { Question } from "@/components/quiz-game"

export const quizData: Question[] = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: 2,
    explanation: "Paris is the capital and most populous city of France.",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1,
    explanation: "Mars is called the Red Planet because of its reddish appearance.",
  },
  {
    id: 3,
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
    correctAnswer: 2,
    explanation: "William Shakespeare wrote 'Romeo and Juliet' around 1595.",
  },
  {
    id: 4,
    question: "What is the chemical symbol for gold?",
    options: ["Go", "Gd", "Au", "Ag"],
    correctAnswer: 2,
    explanation: "The chemical symbol for gold is Au, from the Latin word 'aurum'.",
  },
  {
    id: 5,
    question: "Which of these is NOT a programming language?",
    options: ["Python", "Java", "Cobra", "Crocodile"],
    correctAnswer: 3,
    explanation: "Crocodile is not a programming language. Python, Java, and Cobra are all programming languages.",
  },
  {
    id: 6,
    question: "What year did the first iPhone release?",
    options: ["2005", "2007", "2009", "2010"],
    correctAnswer: 1,
    explanation: "The first iPhone was released on June 29, 2007.",
  },
  {
    id: 7,
    question: "Which of these countries is NOT in Europe?",
    options: ["Portugal", "Romania", "Thailand", "Sweden"],
    correctAnswer: 2,
    explanation: "Thailand is located in Southeast Asia, not Europe.",
  },
  {
    id: 8,
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctAnswer: 3,
    explanation: "The Pacific Ocean is the largest and deepest ocean on Earth.",
  },
  {
    id: 9,
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    correctAnswer: 2,
    explanation: "Leonardo da Vinci painted the Mona Lisa between 1503 and 1519.",
  },
  {
    id: 10,
    question: "What is the main component of the Sun?",
    options: ["Helium", "Oxygen", "Hydrogen", "Carbon"],
    correctAnswer: 2,
    explanation: "The Sun is primarily composed of hydrogen (about 73% of its mass).",
  },
]
