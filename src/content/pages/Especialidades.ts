import type { ComponentProps } from "react";
import type { Features } from "@/components/sections/Features";

/** The lists the "Serviços" page shows. Edit them here: src/pages/Especialidades.tsx reads them. */
export const featuresItems: NonNullable<ComponentProps<typeof Features>["items"]> = [
  { icon: "shield", title: "Prevenção e check-up", description: "Consulta de rotina com avaliação de dentes e gengivas, orientação de higiene e plano de acompanhamento." },
  { icon: "sparkles", title: "Limpeza e clareamento", description: "Remoção de placa e tártaro e clareamento dental, com indicação conforme a avaliação de cada paciente." },
  { icon: "smile", title: "Ortodontia", description: "Avaliação do alinhamento dos dentes e da mordida, com acompanhamento durante o tratamento." },
  { icon: "activity", title: "Implantes e reabilitação", description: "Planejamento para repor dentes ausentes e devolver conforto ao mastigar e sorrir." },
  { icon: "stethoscope", title: "Tratamento de canal", description: "Atendimento para dor e infecção no interior do dente, com o objetivo de preservá-lo." },
  { icon: "baby", title: "Odontopediatria", description: "Consultas adaptadas às crianças, com cuidado, paciência e orientação aos responsáveis." },
];
