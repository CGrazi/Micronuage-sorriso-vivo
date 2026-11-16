export type NavLink = { label: string; href: string; description?: string };
export type NavItem = NavLink & { children?: NavLink[] };
export type FooterLink = { label: string; url: string };

export type Site = {
  name: string;
  tagline: string;
  logo: string;
  language: string;
  contact: { email: string; phone: string; whatsapp: string; address: string };
  social: Record<string, string>;
  header: { ctaText: string; ctaUrl: string; sticky: boolean };
  navigation: NavItem[];
  footer: { tagline: string; variant: string; showSocial: boolean; bottomText: string; links: FooterLink[]; columns: { title: string; links: FooterLink[] }[] };
  seo: { title: string; description: string };
  /** Texts the components show on their own (buttons, form messages). */
  ui: Record<"send" | "sending" | "sent" | "error" | "name" | "email" | "phone" | "message" | "select" | "field" | "yes" | "challenge" | "result", string>;
  /** The Micronuage project this site belongs to: leads go to its inbox. */
  micronuage: { apiBase: string; slug: string };
};

export const site: Site = {
  "name": "Sorriso Vivo",
  "tagline": "Cuidado odontológico com agenda simples e retorno claro.",
  "logo": "",
  "language": "pt-BR",
  "contact": {
    "email": "",
    "phone": "",
    "whatsapp": "",
    "address": ""
  },
  "social": {
    "instagram": "",
    "facebook": "",
    "linkedin": "",
    "youtube": ""
  },
  "header": {
    "ctaText": "Agendar consulta",
    "ctaUrl": "/agendar",
    "sticky": false
  },
  "navigation": [
    {
      "label": "Início",
      "href": "/"
    },
    {
      "label": "Serviços",
      "href": "/especialidades"
    },
    {
      "label": "A clínica",
      "href": "/a-clinica"
    },
    {
      "label": "Agendar",
      "href": "/agendar"
    }
  ],
  "footer": {
    "tagline": "Sorriso Vivo — clínica odontológica em São Paulo.",
    "variant": "columns",
    "showSocial": true,
    "bottomText": "",
    "links": [],
    "columns": []
  },
  "seo": {
    "title": "Sorriso Vivo",
    "description": "Clínica odontológica em São Paulo: consultas, limpeza, clareamento, ortodontia e implantes, com agenda simples."
  },
  "ui": {
    "send": "Enviar",
    "sending": "Enviando…",
    "sent": "Mensagem enviada. Obrigado!",
    "error": "Não foi possível enviar. Tente de novo.",
    "name": "Nome",
    "email": "E-mail",
    "phone": "Telefone",
    "message": "Mensagem",
    "select": "Selecione",
    "field": "Campo",
    "yes": "Sim",
    "challenge": "Desafio",
    "result": "Resultado"
  },
  "micronuage": {
    "apiBase": "https://micronuage.com.br",
    "slug": "sorriso-vivo"
  }
};
