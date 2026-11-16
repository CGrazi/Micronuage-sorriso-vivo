import { Cta } from "@/components/sections/Cta";
import { Features } from "@/components/sections/Features";
import { featuresItems } from "@/content/pages/Especialidades";

export default function EspecialidadesPage() {
  return (
    <>
      <title>Serviços · Sorriso Vivo</title>
      <meta name="description" content="Serviços odontológicos da Sorriso Vivo em São Paulo: prevenção, limpeza, clareamento, ortodontia, implantes, canal e odontopediatria." />
      <Features
        id="features"
        title="Nossos serviços"
        intro="Atendimento odontológico para toda a família, particular e por convênio."
        layout="rows"
        items={featuresItems}
      />
      <Cta
        id="cta"
        title="Não achou o que procura?"
        subtitle="Conte sua necessidade no formulário e avaliamos o melhor caminho para você."
        buttonText="Agendar consulta"
        buttonUrl="/agendar"
      />
    </>
  );
}
