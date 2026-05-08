# Guia do Hóspede

Guest guide multilíngue (PT / EN / ES) para 4 apartamentos de Airbnb, construído em Astro + Tailwind e pronto para deploy gratuito no Cloudflare Pages.

## URLs geradas

**Uma única URL por apartamento.** O hóspede troca de idioma direto no header (bandeiras BR / UK / ES) e a escolha fica salva no navegador dele.

| Apartamento | URL única |
| --- | --- |
| Z. Pinheiros 314 | `/zpinheiros-apto314` |
| Mapp 1213A | `/mapp-apto1213a` |
| Ocian 116 | `/ocian-apto116` |
| Setin 607 | `/setin-apto607` |

Comportamento do idioma:

1. **Primeira visita**: detecta o idioma do navegador (`navigator.language`) e mostra PT, EN ou ES automaticamente
2. **Hóspede clica numa bandeira**: a página inteira troca instantaneamente, sem reload e sem mudar a URL
3. **Próxima visita**: abre direto no idioma escolhido anteriormente (salvo em `localStorage`)

A página `/` é uma landing interna (com `noindex`) que lista os 4 apartamentos para você acessar rapidamente.

## Pré-requisitos

- **Node.js 20+** (Astro 5 não funciona com Node 18). Baixe em [nodejs.org](https://nodejs.org/) ou via [nvm-windows](https://github.com/coreybutler/nvm-windows).

## Como rodar localmente

```bash
npm install
npm run dev
```

A aplicação sobe em `http://localhost:4321`.

## Como editar o conteúdo

Tudo que muda entre apartamentos está em **`src/data/aptos/<slug>.json`** — você não precisa mexer em código.

```text
src/data/aptos/
├── zpinheiros-apto314.json
├── mapp-apto1213a.json
├── ocian-apto116.json
└── setin-apto607.json
```

Cada arquivo tem:

- `hero` — imagem de capa, mensagem de boas-vindas (em 3 idiomas)
- `location` — endereço, link do Google Maps, passos de chegada e transportes
- `schedule` — horários de check-in/out
- `apartment.wifi` — rede + senha (com botão "copiar")
- `apartment.notes` — instruções (ar, chuveiro, etc.)
- `rules` — regras da casa
- `tips` — dicas locais (mercado, restaurante, etc.)
- `contact` — anfitrião + WhatsApp
- `theme` — paleta de cores específica do apto

### Trocar o anfitrião / WhatsApp

Em cada JSON, edite `contact.hostPhone` no formato internacional **sem `+`**:

```json
"contact": {
  "hostName": "Pedro",
  "hostPhotoInitial": "P",
  "hostPhone": "5511987654321"
}
```

### Trocar fotos do hero

Substitua a URL em `hero.image` por uma foto do apto. Recomendado: 1920x1080, hospedada em CDN (Imgur, Cloudinary) ou colocada em `public/img/<slug>.jpg`.

Se colocar em `public/img/`, use:

```json
"hero": { "image": "/img/zpinheiros-apto314.jpg" }
```

### Adicionar / remover transportes ou dicas

Basta adicionar/remover objetos nos arrays `location.transports` e `tips`. As categorias de dicas suportadas são:

`mercado`, `padaria`, `restaurante`, `oQueFazer`, `cultura`, `lojas`, `farmacia`

### Adicionar foto às dicas

Cada `tip` aceita um campo opcional `image` com a URL de uma foto do estabelecimento:

```json
{
  "category": "restaurante",
  "name": "Bráz Pizzaria",
  "distance": "1.3km",
  "mapsQuery": "Braz+Pizzaria+Vupabucu+Pinheiros",
  "image": "https://exemplo.com/foto-da-pizzaria.jpg",
  "description": { "pt": "...", "en": "...", "es": "..." }
}
```

Sem `image`, o card mostra um gradiente bonito com a cor do tema do apto + ícone da categoria como placeholder. Se a URL quebrar (404), o placeholder também aparece automaticamente — você nunca vê uma imagem partida.

Boas fontes de foto:

- **Tirar você mesmo** quando visitar o local (melhor qualidade e autenticidade)
- **Site oficial do estabelecimento** (botão direito → copiar endereço da imagem)
- **Google Maps** → ficha do local → fotos → clicar em "Compartilhar" e usar a URL embed
- **Wikipedia Commons** ([commons.wikimedia.org](https://commons.wikimedia.org)) para pontos turísticos famosos — URLs estáveis e gratuitas
- **Unsplash** para fotos genéricas profissionais (use `https://images.unsplash.com/photo-ID?auto=format&fit=crop&w=600&q=80`)

### Trocar paleta de cores de um apto

Edite `theme` no JSON:

```json
"theme": {
  "primary": "#7c5e3c",
  "accent": "#c8a97e",
  "background": "#f7f1e8"
}
```

### Adicionar / remover idiomas

A UI usa `src/i18n/ui.ts`. Para mudar uma string da interface, edite ali. Para adicionar um novo idioma:

1. Adicione o código em `Lang` (`src/types.ts`) e em `languages` (`src/i18n/ui.ts`).
2. Adicione o bloco de traduções em `ui` (`src/i18n/ui.ts`).
3. Adicione a chave em todos os campos `LocalizedString` dos JSONs.
4. Adicione o idioma em `astro.config.mjs` → `i18n.locales`.

### Adicionar um 5º apartamento

1. Crie `src/data/aptos/novo-apto.json` (copie um existente).
2. Em `src/data/aptos/index.ts`, importe e adicione no array `aptos`.
3. Pronto. As rotas são geradas automaticamente.

## Deploy no Cloudflare Pages (free)

1. Suba o projeto para o GitHub (público ou privado).
2. Acesse [dash.cloudflare.com](https://dash.cloudflare.com/) → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Conecte ao seu repositório.
4. Configure o build:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node version** (em *Environment variables*): `20`
5. **Save and Deploy**.

Em ~2 minutos o site estará no ar em `<nome-do-projeto>.pages.dev`. Cada `git push` na main vai redepoyar automaticamente.

### Enviar para os hóspedes

Compartilhe a **mesma URL** com qualquer hóspede, em qualquer idioma:

```
https://meuguia.pages.dev/zpinheiros-apto314
```

O site detecta o idioma do navegador automaticamente e o hóspede pode trocar pelas bandeiras no topo. Não precisa enviar 3 links diferentes.

> Dica: gere um QR code apontando para essa URL e cole na geladeira do apto.

## Stack

- [Astro 5](https://astro.build) — SSG ultrarrápido
- [Tailwind CSS v4](https://tailwindcss.com)
- TypeScript estrito
- Sem framework de UI (zero JS no cliente, exceto pequenos scripts inline)
- View Transitions nativas para navegação fluida entre idiomas

## Estrutura

```
.
├── astro.config.mjs       # Config Astro + i18n + tailwind
├── tsconfig.json          # TS strict + paths @/
├── package.json
├── public/
│   ├── _headers           # Headers de cache para Cloudflare
│   └── favicon.svg
├── src/
│   ├── components/        # Header, Hero, ComoChegar, etc.
│   ├── data/aptos/        # 1 JSON por apartamento
│   ├── i18n/ui.ts         # Strings da interface
│   ├── layouts/
│   ├── pages/
│   │   ├── index.astro    # Landing interna
│   │   └── [slug].astro   # Uma página por apto (idioma trocado via JS)
│   ├── styles/global.css
│   └── types.ts
└── README.md
```

## Próximas melhorias sugeridas

- [ ] Substituir as imagens placeholder do Unsplash por fotos reais
- [ ] Atualizar o telefone do anfitrião nos 4 JSONs
- [ ] Adicionar PWA (`@vite-pwa/astro`) para uso offline
- [ ] Adicionar mapa interativo (Leaflet + OpenStreetMap)
- [ ] Domínio próprio (Cloudflare → Custom Domains)
