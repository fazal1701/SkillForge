"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Building2 } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12 bg-muted/20">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Welcome back to SkillForge</h1>
          <p className="text-muted-foreground">Choose a demo account to sign in</p>
        </div>

        <div className="grid gap-4">
          {/* Candidate Login */}
          <Link href="/dashboard">
            <Card className="hover:border-primary transition-colors cursor-pointer text-left">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-base">Candidate Demo</CardTitle>
                  <CardDescription>Login as Alex Rivera</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  Preview the candidate dashboard, view stats, and browse tasks.
                </p>
              </CardContent>
            </Card>
          </Link>

          {/* Employer Login */}
          <Link href="/for-employers">
            <Card className="hover:border-primary transition-colors cursor-pointer text-left">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="h-10 w-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-base">Employer Demo</CardTitle>
                  <CardDescription>Login as TechCorp</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  (Coming Soon) Post bounties and review submissions.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>

        <p className="text-center text-xs text-muted-foreground">
          This is a demo environment. No password required.
        </p>
      </div>
    </div>
  )
}
