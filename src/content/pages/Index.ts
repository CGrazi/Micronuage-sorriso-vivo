import type { ComponentProps } from "react";
import type { Faq } from "@/components/sections/Faq";
import type { Features } from "@/components/sections/Features";
import type { Steps } from "@/components/sections/Steps";
import type { Trust } from "@/components/sections/Trust";

/** The lists the home page shows. Edit them here: src/pages/Index.tsx reads them. */
export const trustItems: NonNullable<ComponentProps<typeof Trust>["items"]> = [
  { label: "Avaliação completa", detail: "Começamos ouvindo você" },
  { label: "Plano explicado", detail: "Você entende cada etapa" },
  { label: "Retorno combinado", detail: "Acompanhamento claro" },
  { label: "Dados protegidos", detail: "Prontuário seguro, conforme a LGPD" },
];

export const featuresItems: NonNullable<ComponentProps<typeof Features>["items"]> = [
  { icon: "shield", title: "Prevenção e check-up", description: "Consultas de rotina para cuidar da saúde bucal antes que o problema apareça." },
  { icon: "sparkles", title: "Limpeza e clareamento", description: "Profilaxia e clareamento dental para um sorriso limpo e mais claro." },
  { icon: "smile", title: "Ortodontia", description: "Avaliação e acompanhamento do alinhamento dos dentes, para jovens e adultos." },
  { icon: "activity", title: "Implantes e reabilitação", description: "Reposição de dentes ausentes com planejamento e acompanhamento." },
  { icon: "stethoscope", title: "Tratamento de canal", description: "Cuidado para aliviar a dor e salvar o dente, com atendimento cuidadoso." },
  { icon: "baby", title: "Odontopediatria", description: "Atendimento acolhedor para crianças, com orientação aos pais." },
];

export const stepsItems: NonNullable<ComponentProps<typeof Steps>["items"]> = [
  { title: "Conte o que você precisa", description: "Informe o serviço desejado e se terá convênio ou será particular." },
  { title: "Envie o pedido", description: "Pelo formulário, com o melhor período para você." },
  { title: "Receba a confirmação", description: "Retornamos em horário comercial com dia e hora." },
  { title: "Compareça à consulta", description: "Leve documento com foto, carteirinha e exames anteriores, se tiver." },
];

export const faqItems: NonNullable<ComponentProps<typeof Faq>["items"]> = [
  { question: "Vocês atendem convênio?", answer: "Informe o convênio e o plano ao pedir o agendamento e confirmamos a cobertura antes da consulta." },
  { question: "Como funciona a primeira consulta?", answer: "Fazemos uma avaliação completa, conversamos sobre suas queixas e explicamos o plano de tratamento recomendado." },
  { question: "O que levar na primeira consulta?", answer: "Documento com foto, carteirinha do convênio (se houver), radiografias ou exames anteriores e a lista de medicamentos em uso." },
  { question: "Como remarcar ou cancelar?", answer: "Avise com antecedência pelos nossos contatos para liberarmos o horário para outro paciente." },
];
