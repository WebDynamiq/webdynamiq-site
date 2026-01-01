"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";
import { useForm } from "@tanstack/react-form";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export function ContactForm() {
  const router = useRouter();
  const submitForm = useMutation(api.contact.submitForm);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    },
    onSubmit: async ({ value }) => {
      setSubmissionError(null);
      try {
        await submitForm({
          name: value.name,
          email: value.email,
          subject: value.subject,
          message: value.message,
          phoneNumber: value.phoneNumber || undefined,
        });
        router.push("/thank-you");
      } catch (error) {
        console.error("Error submitting form:", error);
        setSubmissionError("Er ging iets mis bij het verzenden van je bericht. Probeer het opnieuw.");
      }
    },
  });

  return (
    <Card className="shadow-lg border-muted/40 bg-background/60 backdrop-blur-sm">
      <CardHeader>
        <CardTitle>Stuur mij een bericht</CardTitle>
        <CardDescription>
          Vul het onderstaande formulier in en ik neem zo snel mogelijk contact met u op.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <form.Field
              name="name"
              validators={{
                onBlur: ({ value }) =>
                  value.length < 2
                    ? "Naam moet minimaal 2 tekens bevatten"
                    : undefined,
              }}
            >
              {(field) => (
                <div className="space-y-2">
                  <Label htmlFor={field.name}>Naam</Label>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="Uw naam"
                    aria-invalid={field.state.meta.errors.length > 0}
                  />
                  {field.state.meta.errors.length > 0 ? (
                    <p className="text-sm text-destructive">
                      {field.state.meta.errors.join(", ")}
                    </p>
                  ) : null}
                </div>
              )}
            </form.Field>

            <form.Field
              name="email"
              validators={{
                onBlur: ({ value }) =>
                  !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                    ? "Voer een geldig e-mailadres in"
                    : undefined,
              }}
            >
              {(field) => (
                <div className="space-y-2">
                  <Label htmlFor={field.name}>E-mail</Label>
                  <Input
                    id={field.name}
                    name={field.name}
                    type="email"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="uw@email.com"
                    aria-invalid={field.state.meta.errors.length > 0}
                  />
                  {field.state.meta.errors.length > 0 ? (
                    <p className="text-sm text-destructive">
                      {field.state.meta.errors.join(", ")}
                    </p>
                  ) : null}
                </div>
              )}
            </form.Field>
          </div>

          <form.Field
            name="phoneNumber"
            validators={{
              onBlur: ({ value }) =>
                value && !/^\+?[0-9\s-]{8,}$/.test(value)
                  ? "Voer een geldig telefoonnummer in"
                  : undefined,
            }}
          >
            {(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Telefoonnummer (Optioneel)</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  type="tel"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="+32 123 45 67 89"
                  aria-invalid={field.state.meta.errors.length > 0}
                />
                {field.state.meta.errors.length > 0 ? (
                  <p className="text-sm text-destructive">
                    {field.state.meta.errors.join(", ")}
                  </p>
                ) : null}
              </div>
            )}
          </form.Field>

          <form.Field
            name="subject"
            validators={{
              onBlur: ({ value }) =>
                !value ? "Onderwerp is verplicht" : undefined,
            }}
          >
            {(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Onderwerp</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Projectaanvraag"
                  aria-invalid={field.state.meta.errors.length > 0}
                />
                {field.state.meta.errors.length > 0 ? (
                  <p className="text-sm text-destructive">
                    {field.state.meta.errors.join(", ")}
                  </p>
                ) : null}
              </div>
            )}
          </form.Field>

          <form.Field
            name="message"
            validators={{
              onBlur: ({ value }) =>
                value.length < 10
                  ? "Bericht moet minimaal 10 tekens bevatten"
                  : undefined,
            }}
          >
            {(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Bericht</Label>
                <Textarea
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Vertel mij over uw project, budget en tijdlijn..."
                  className="min-h-[150px]"
                  aria-invalid={field.state.meta.errors.length > 0}
                />
                {field.state.meta.errors.length > 0 ? (
                  <p className="text-sm text-destructive">
                    {field.state.meta.errors.join(", ")}
                  </p>
                ) : null}
              </div>
            )}
          </form.Field>

          {submissionError && (
            <div className="bg-destructive/15 border border-destructive/20 p-3 rounded-md flex items-center gap-2 text-sm text-destructive" role="alert" aria-live="polite">
              <AlertCircle className="h-4 w-4" />
              <p>{submissionError}</p>
            </div>
          )}

          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
          >
            {([canSubmit, isSubmitting]) => (
              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Verzenden..." : "Verstuur Bericht"}
              </Button>
            )}
          </form.Subscribe>
        </form>
      </CardContent>
    </Card>
  );
}
