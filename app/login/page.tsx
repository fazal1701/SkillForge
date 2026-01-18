"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { GraduationCap, Building2 } from "lucide-react";
import { Navigation } from "@/components/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Welcome Back</h1>
            <p className="text-muted-foreground">Sign in to continue to SkillForge</p>
          </div>

          <Tabs defaultValue="candidate" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="candidate" className="gap-2">
                <GraduationCap className="h-4 w-4" />
                Candidate
              </TabsTrigger>
              <TabsTrigger value="employer" className="gap-2">
                <Building2 className="h-4 w-4" />
                Employer
              </TabsTrigger>
            </TabsList>

            <TabsContent value="candidate">
              <Card>
                <CardHeader>
                  <CardTitle>Candidate Sign In</CardTitle>
                  <CardDescription>Access your dashboard and portfolio</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="candidateEmail">Email</Label>
                    <Input 
                      id="candidateEmail" 
                      type="email" 
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="candidatePassword">Password</Label>
                      <Link href="/forgot-password" className="text-sm text-muted-foreground hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Input 
                      id="candidatePassword" 
                      type="password" 
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="rememberCandidate" />
                    <label htmlFor="rememberCandidate" className="text-sm cursor-pointer">
                      Remember me for 30 days
                    </label>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href="/dashboard">Sign In</Link>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="employer">
              <Card>
                <CardHeader>
                  <CardTitle>Employer Sign In</CardTitle>
                  <CardDescription>Manage tasks and review submissions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="employerEmail">Work Email</Label>
                    <Input 
                      id="employerEmail" 
                      type="email" 
                      placeholder="you@company.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="employerPassword">Password</Label>
                      <Link href="/forgot-password" className="text-sm text-muted-foreground hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Input 
                      id="employerPassword" 
                      type="password" 
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="rememberEmployer" />
                    <label htmlFor="rememberEmployer" className="text-sm cursor-pointer">
                      Remember me for 30 days
                    </label>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href="/employer">Sign In</Link>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Don't have an account? <Link href="/signup" className="underline font-medium">Sign up</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
