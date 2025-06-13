"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Trophy, Medal, Award } from "lucide-react"

interface LeaderboardEntry {
  id: string
  name: string
  score: number
  date: string
}

interface LeaderboardProps {
  currentScore?: number
}

export default function Leaderboard({ currentScore }: LeaderboardProps) {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([])

  // In a real app, this would fetch from an API or database
  useEffect(() => {
    // Mock data for demonstration
    const mockLeaderboard: LeaderboardEntry[] = [
      { id: "1", name: "Alex", score: 9, date: "2023-06-10" },
      { id: "2", name: "Jamie", score: 8, date: "2023-06-09" },
      { id: "3", name: "Taylor", score: 7, date: "2023-06-08" },
      { id: "4", name: "Jordan", score: 7, date: "2023-06-07" },
      { id: "5", name: "Casey", score: 6, date: "2023-06-06" },
    ]

    // If there's a current score, we could add it here
    // This is just for demonstration
    if (currentScore) {
      const newEntry: LeaderboardEntry = {
        id: "current",
        name: "You",
        score: currentScore,
        date: new Date().toISOString().split("T")[0],
      }

      const updatedLeaderboard = [...mockLeaderboard, newEntry].sort((a, b) => b.score - a.score).slice(0, 10)

      setLeaderboard(updatedLeaderboard)
    } else {
      setLeaderboard(mockLeaderboard)
    }
  }, [currentScore])

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center gap-2">
          <Trophy className="h-5 w-5 text-yellow-500" />
          Leaderboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">Rank</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">Score</TableHead>
              <TableHead className="text-right">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaderboard.map((entry, index) => (
              <TableRow key={entry.id} className={entry.id === "current" ? "bg-muted/50" : ""}>
                <TableCell className="font-medium">
                  {index === 0 ? (
                    <Trophy className="h-5 w-5 text-yellow-500" />
                  ) : index === 1 ? (
                    <Medal className="h-5 w-5 text-gray-400" />
                  ) : index === 2 ? (
                    <Award className="h-5 w-5 text-amber-700" />
                  ) : (
                    index + 1
                  )}
                </TableCell>
                <TableCell className={entry.id === "current" ? "font-medium" : ""}>{entry.name}</TableCell>
                <TableCell className="text-right">{entry.score}/10</TableCell>
                <TableCell className="text-right text-muted-foreground">{entry.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
