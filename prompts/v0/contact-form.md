# V0 Prompt: Contact Form (Advisor-approved v1.0.0)

**Advisor status:** ready · **Registry ID:** `contact-form`  
**Copy below the line to [v0.dev](https://v0.dev)**

---

<context>
Lead-gen contact form for Dr. Jan Duffy — Las Vegas / Centennial Hills real estate.
</context>

<constraints>
- Copy references Dr. Jan Duffy only (never Janet)
- Fair housing friendly; privacy note optional
- Required: name, email, phone, service interest, message
</constraints>

<design_system>
Primary blue #1e40af / #2563eb, card shadow, rounded inputs 0.5rem, two-column desktop
</design_system>

<sections>
Fields: Full Name, Email, Phone, Service Interest (7 options), Budget (optional), Neighborhood (optional), Message, Submit.
States: loading, validation errors, success.
</sections>

<technical_output>
Qwik component$() + useSignal + Tailwind. TypeScript types. Accessible labels and ARIA.
</technical_output>
