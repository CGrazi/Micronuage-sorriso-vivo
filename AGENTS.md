# Sorriso Vivo — regras do projeto

Regras que toda mudança deste projeto mantém. A IA da Micronuage lê este arquivo a cada pedido e acrescenta as decisões que tomar.

- Os dados do negócio (nome, contatos, menu, rodapé) ficam em `src/content/site.ts`; as páginas leem e-mail e telefone de lá.
- As listas de cada página (serviços, perguntas, passos) ficam em `src/content/pages/<Página>.ts`, tipadas pela seção que as mostra; a página guarda os títulos e textos.
- Formulários enviam com `submitLead()` de `src/lib/micronuage.ts` (as mensagens chegam na caixa de Leads da Micronuage); contas e dados salvos usam `@micronuage/sdk` e `data/model.json`.
- Cores, fontes e cantos vêm dos tokens de `src/index.css` (`@theme`): azul-petróleo, Manrope nos títulos e Inter no texto.
- Ícones são do `lucide-react`; nunca emoji no lugar de ícone. Os serviços usam o nome do ícone em `icon` (veja `Features.tsx`).
- Cada página tem sua rota em `src/routes.ts`; `npm test` confere que o menu só leva a páginas que existem.
- Número de registro profissional (CRO…), CNPJ, preços, horários, equipe, números do negócio e fotos só entram quando o cliente informar. Ainda faltam: contatos, endereço, horários, fotos e dentistas.
- Os textos dos serviços e das perguntas frequentes são exemplos genéricos a revisar com a clínica.
