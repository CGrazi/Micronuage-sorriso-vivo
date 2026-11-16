import { Cta } from "@/components/sections/Cta";
import { Features } from "@/components/sections/Features";
import { valuesItems } from "@/content/pages/Sobre";

export default function SobrePage() {
  return (
    <>
      <title>A clínica · Sorriso Vivo</title>
      <meta name="description" content="Conheça a Sorriso Vivo, clínica odontológica em São Paulo com atendimento acolhedor, plano de tratamento claro e agenda simples." />
      <section className="mx-auto max-w-3xl px-5 pb-4 pt-16 text-center sm:px-8 sm:pt-20">
        <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">A clínica Sorriso Vivo</h1>
        <p className="mt-6 text-lg opacity-80">
          Somos uma clínica odontológica em São Paulo que acredita em atendimento acolhedor, plano de tratamento explicado com clareza e uma agenda fácil de usar.
        </p>
      </section>
      <Features id="values" title="Como trabalhamos" layout="grid" items={valuesItems} />
      <Cta
        id="cta"
        title="Venha conhecer a clínica"
        subtitle="Peça sua consulta pelo formulário e retornamos com dia e hora."
        buttonText="Agendar consulta"
        buttonUrl="/agendar"
      />
    </>
  );
}
