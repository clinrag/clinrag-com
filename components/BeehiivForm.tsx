"use client";

interface BeehiivFormProps {
  variant?: "default" | "slim";
}

export default function BeehiivForm({ variant = "default" }: BeehiivFormProps) {
  return (
    <div>
      <script
        async
        src="https://subscribe-forms.beehiiv.com/v3/loader.js"
        data-beehiiv-form="9142325d-0266-4e8c-a324-d1c850081d28"
      />
    </div>
  );
}
