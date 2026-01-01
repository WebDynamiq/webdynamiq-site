"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ContactForm() {
  const router = useRouter();
  const submitForm = useMutation(api.contact.submitForm);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitForm({ name, email, subject, message, phoneNumber });
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setPhoneNumber("");
      router.push("/thank-you");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Er is iets misgegaan. Probeer het later opnieuw.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="shadow-lg border-muted/40 bg-background/60 backdrop-blur-sm">
      <CardHeader>
        <CardTitle>Stuur mij een bericht</CardTitle>
        <CardDescription>Vul het onderstaande formulier in en ik neem zo snel mogelijk contact met u op.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Naam</Label>
              <Input 
                id="name" 
                placeholder="Uw naam" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="uw@email.com" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefoonnummer (Optioneel)</Label>
            <Input 
              id="phone" 
              type="tel" 
              placeholder="+32 123 45 67 89" 
              value={phoneNumber} 
              onChange={(e) => setPhoneNumber(e.target.value)} 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="subject">Onderwerp</Label>
            <Input 
              id="subject" 
              placeholder="Projectaanvraag" 
              value={subject} 
              onChange={(e) => setSubject(e.target.value)} 
              required 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Bericht</Label>
            <Textarea 
              id="message" 
              placeholder="Vertel mij over uw project, budget en tijdlijn..." 
              className="min-h-[150px]"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Verzenden..." : "Verstuur Bericht"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
