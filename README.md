# LIC Management Frontend

Frontend corporativo dark enterprise com Next.js 15, App Router, TypeScript, Tailwind, Radix/shadcn-style e foco em UX/admin backoffice.

## Requisitos

- Node.js 20+
- npm 10+

## Executar localmente (porta 4000)

```bash
npm install
npm run dev
```

Abra `http://localhost:4000`.

## Scripts

```bash
npm run dev       # next dev -p 4000
npm run lint
npm run typecheck
npm run build
npm run start     # next start -p 4000
npm run check
```

## Docker (funcional)

### Subir com Docker Compose

```bash
docker compose up --build
```

Aplicação disponível em: `http://localhost:4000`

### Build + run sem compose

```bash
docker build -t lic-mgmt .
docker run --rm -p 4000:4000 lic-mgmt
```

## Rotas principais

- `/dashboard`
- `/documentos/dashboard`
- `/documentos/sem-permissao`
