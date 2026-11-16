import type { ComponentProps } from "react";
import type { Features } from "@/components/sections/Features";

/** The lists the "A clínica" page shows. Edit them here: src/pages/Sobre.tsx reads them. */
export const valuesItems: NonNullable<ComponentProps<typeof Features>["items"]> = [
  { icon: "care", title: "Acolhimento", description: "Ouvimos suas dúvidas e medos antes de qualquer procedimento, sem pressa." },
  { icon: "stethoscope", title: "Clareza", description: "Explicamos o diagnóstico e o plano de tratamento em linguagem simples." },
  { icon: "shield", title: "Prevenção", description: "Acompanhamento regular para evitar problemas e manter o sorriso saudável." },
];
