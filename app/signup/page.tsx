"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Briefcase, GraduationCap, Building2, ArrowRight, Check } from "lucide-react";
import { Navigation } from "@/components/navigation";

export default function SignupPage() {
  const [candidateStep, setCandidateStep] = useState(1);
  const [employerStep, setEmployerStep] = useState(1);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Join SkillForge</h1>
            <p className="text-muted-foreground">Start proving your skills or find verified talent</p>
          </div>

          <Tabs defaultValue="candidate" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="candidate" className="gap-2">
                <GraduationCap className="h-4 w-4" />
                I'm a Candidate
              </TabsTrigger>
              <TabsTrigger value="employer" className="gap-2">
                <Building2 className="h-4 w-4" />
                I'm an Employer
              </TabsTrigger>
            </TabsList>

            <TabsContent value="candidate">
              <Card>
                <CardHeader>
                  <CardTitle>Create Your Profile</CardTitle>
                  <CardDescription>
                    Step {candidateStep} of 3 - {candidateStep === 1 ? "Basic Info" : candidateStep === 2 ? "Skills & Interests" : "Preferences"}
                  </CardDescription>
                  <div className="flex gap-2 mt-4">
                    {[1, 2, 3].map((step) => (
                      <div
                        key={step}
                        className={`h-2 flex-1 rounded-full ${
                          step <= candidateStep ? "bg-foreground" : "bg-muted"
                        }`}
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {candidateStep === 1 && (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" placeholder="John" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" placeholder="Doe" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" placeholder="Create a strong password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="education">Current Education Level</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your education level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="high-school">High School</SelectItem>
                            <SelectItem value="associate">Associate Degree</SelectItem>
                            <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                            <SelectItem value="master">Master's Degree</SelectItem>
                            <SelectItem value="bootcamp">Bootcamp Graduate</SelectItem>
                            <SelectItem value="self-taught">Self-Taught</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </>
                  )}

                  {candidateStep === 2 && (
                    <>
                      <div className="space-y-2">
                        <Label>Select Your Primary Skills</Label>
                        <div className="grid grid-cols-2 gap-3">
                          {["Data Analysis", "Copywriting", "UI/UX Design", "Web Development", "Marketing", "Video Editing", "Financial Modeling", "Project Management"].map((skill) => (
                            <div key={skill} className="flex items-center space-x-2">
                              <Checkbox id={skill} />
                              <label htmlFor={skill} className="text-sm cursor-pointer">{skill}</label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Industries of Interest</Label>
                        <div className="grid grid-cols-2 gap-3">
                          {["Technology", "Finance", "Healthcare", "Marketing", "E-commerce", "Consulting", "Media", "Startups"].map((industry) => (
                            <div key={industry} className="flex items-center space-x-2">
                              <Checkbox id={industry} />
                              <label htmlFor={industry} className="text-sm cursor-pointer">{industry}</label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {candidateStep === 3 && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input id="location" placeholder="City, State" />
                      </div>
                      <div className="space-y-2">
                        <Label>Work Preference</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select preference" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="remote">Remote Only</SelectItem>
                            <SelectItem value="hybrid">Hybrid</SelectItem>
                            <SelectItem value="onsite">On-site</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="linkedin">LinkedIn Profile (Optional)</Label>
                        <Input id="linkedin" placeholder="linkedin.com/in/yourprofile" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="portfolio">Portfolio URL (Optional)</Label>
                        <Input id="portfolio" placeholder="yourportfolio.com" />
                      </div>
                      <div className="flex items-start space-x-2 pt-4">
                        <Checkbox id="terms" />
                        <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                          I agree to the <Link href="/terms" className="underline">Terms of Service</Link> and <Link href="/privacy" className="underline">Privacy Policy</Link>
                        </label>
                      </div>
                    </>
                  )}

                  <div className="flex gap-3 pt-4">
                    {candidateStep > 1 && (
                      <Button variant="outline" onClick={() => setCandidateStep(candidateStep - 1)} className="flex-1">
                        Back
                      </Button>
                    )}
                    {candidateStep < 3 ? (
                      <Button onClick={() => setCandidateStep(candidateStep + 1)} className="flex-1 gap-2">
                        Continue <ArrowRight className="h-4 w-4" />
                      </Button>
                    ) : (
                      <Button className="flex-1 gap-2">
                        Create Account <Check className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="employer">
              <Card>
                <CardHeader>
                  <CardTitle>Register Your Company</CardTitle>
                  <CardDescription>
                    Step {employerStep} of 2 - {employerStep === 1 ? "Company Info" : "Account Setup"}
                  </CardDescription>
                  <div className="flex gap-2 mt-4">
                    {[1, 2].map((step) => (
                      <div
                        key={step}
                        className={`h-2 flex-1 rounded-full ${
                          step <= employerStep ? "bg-foreground" : "bg-muted"
                        }`}
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {employerStep === 1 && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="companyName">Company Name</Label>
                        <Input id="companyName" placeholder="Acme Inc." />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="companyWebsite">Company Website</Label>
                        <Input id="companyWebsite" placeholder="https://acme.com" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Industry</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select industry" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="technology">Technology</SelectItem>
                              <SelectItem value="finance">Finance</SelectItem>
                              <SelectItem value="healthcare">Healthcare</SelectItem>
                              <SelectItem value="retail">Retail</SelectItem>
                              <SelectItem value="consulting">Consulting</SelectItem>
                              <SelectItem value="media">Media</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>Company Size</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select size" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-50">1-50 employees</SelectItem>
                              <SelectItem value="51-200">51-200 employees</SelectItem>
                              <SelectItem value="201-1000">201-1000 employees</SelectItem>
                              <SelectItem value="1001-5000">1001-5000 employees</SelectItem>
                              <SelectItem value="5000+">5000+ employees</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="companyDescription">Brief Company Description</Label>
                        <Input id="companyDescription" placeholder="What does your company do?" />
                      </div>
                    </>
                  )}

                  {employerStep === 2 && (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="adminFirstName">Your First Name</Label>
                          <Input id="adminFirstName" placeholder="Jane" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="adminLastName">Your Last Name</Label>
                          <Input id="adminLastName" placeholder="Smith" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="adminEmail">Work Email</Label>
                        <Input id="adminEmail" type="email" placeholder="jane@acme.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="adminPassword">Password</Label>
                        <Input id="adminPassword" type="password" placeholder="Create a strong password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="adminRole">Your Role</Label>
                        <Input id="adminRole" placeholder="e.g. Head of Talent, HR Director" />
                      </div>
                      <div className="flex items-start space-x-2 pt-4">
                        <Checkbox id="employerTerms" />
                        <label htmlFor="employerTerms" className="text-sm text-muted-foreground cursor-pointer">
                          I agree to the <Link href="/terms" className="underline">Terms of Service</Link>, <Link href="/privacy" className="underline">Privacy Policy</Link>, and <Link href="/employer-agreement" className="underline">Employer Agreement</Link>
                        </label>
                      </div>
                    </>
                  )}

                  <div className="flex gap-3 pt-4">
                    {employerStep > 1 && (
                      <Button variant="outline" onClick={() => setEmployerStep(employerStep - 1)} className="flex-1">
                        Back
                      </Button>
                    )}
                    {employerStep < 2 ? (
                      <Button onClick={() => setEmployerStep(employerStep + 1)} className="flex-1 gap-2">
                        Continue <ArrowRight className="h-4 w-4" />
                      </Button>
                    ) : (
                      <Button className="flex-1 gap-2">
                        Create Company Account <Check className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account? <Link href="/login" className="underline font-medium">Sign in</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
