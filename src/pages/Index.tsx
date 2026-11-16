import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/sections/Faq";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { Steps } from "@/components/sections/Steps";
import { Trust } from "@/components/sections/Trust";
import { site } from "@/content/site";
import { trustItems, featuresItems, stepsItems, faqItems } from "@/content/pages/Index";

export default function IndexPage() {
  return (
    <>
      <title>Sorriso Vivo · Clínica odontológica em São Paulo</title>
      <meta name="description" content="Clínica odontológica em São Paulo: consultas, limpeza, clareamento, ortodontia e implantes, com agenda simples e retorno claro." />
      <Hero
        id="hero"
        eyebrow="Clínica odontológica em São Paulo"
        title="Um sorriso saudável começa com uma consulta simples de marcar"
        subtitle="Prevenção, estética e tratamento em um só lugar, com plano explicado de forma clara e retorno combinado ao final de cada consulta."
        buttonText="Agendar consulta"
        buttonUrl="/agendar"
        buttonSecondaryText="Ver serviços"
        buttonSecondaryUrl="/especialidades"
        alignment="center"
      />
      <Trust id="trust" title="Como cuidamos de você" items={trustItems} />
      <Features
        id="features"
        eyebrow="Serviços"
        title="Cuidado para cada fase do sorriso"
        intro="Da prevenção ao tratamento, tudo no mesmo lugar. Veja os detalhes na página de serviços."
        layout="grid"
        items={featuresItems}
      />
      <Steps id="steps" tone="soft" title="Como agendar" intro="Do pedido ao atendimento, sem fila e sem ligação que não atende." layout="horizontal" items={stepsItems} />
      <Faq id="faq" title="Perguntas frequentes" items={faqItems} />
      <Contact
        id="contact"
        title="Peça sua consulta"
        subtitle="Informe o serviço desejado, o convênio (se houver) e o melhor período."
        email={site.contact.email}
        phone={site.contact.phone}
        buttonText="Solicitar agendamento"
        namePlaceholder="Seu nome"
        emailPlaceholder="Seu e-mail"
        messagePlaceholder="Serviço, convênio e melhor período"
        showPhone
        showMap={false}
        mode="lead"
      />
    </>
  );
}
