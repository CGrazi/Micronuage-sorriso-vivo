import { Contact } from "@/components/sections/Contact";
import { site } from "@/content/site";

export default function AgendarPage() {
  return (
    <>
      <title>Agendar consulta · Sorriso Vivo</title>
      <meta name="description" content="Peça sua consulta na Sorriso Vivo, clínica odontológica em São Paulo. Informe o serviço, o convênio e o melhor período." />
      <Contact
        id="contact"
        title="Agendar consulta"
        subtitle="Informe o serviço desejado, o convênio (se houver) e o melhor período. Retornamos em horário comercial."
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
