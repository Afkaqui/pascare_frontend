# Pascare — Frontend

Sitio corporativo multipágina construido con Next.js 16 (App Router), React 19 y Anime.js.

Este repo es **solo el frontend**. La API (formularios de cotización y contacto)
vive en el repo separado `pascare-backend` (NestJS + Prisma).

## Páginas

Inicio · Nosotros · Servicios · Proyectos · Precios · Cotización · Contacto

## Desarrollo local

Requiere Node.js 20+. Copia `.env.example` como `.env.local` y ajusta
`NEXT_PUBLIC_API_URL` para que apunte al backend (por defecto `http://localhost:4000/api`).

```bash
npm install
npm run dev
```

El sitio estará disponible en `http://localhost:3000`.
Levanta también el backend (`pascare-backend`) para que los formularios funcionen.

## Variables de entorno

| Variable | Descripción |
|---|---|
| `NEXT_PUBLIC_API_URL` | URL base del backend, incluyendo `/api`. Ej.: `https://api.pascare.tech/api` |

## Formularios

Los formularios de contacto y cotización hacen `fetch` a `NEXT_PUBLIC_API_URL`
(`/contacts` y `/quotes`). El backend valida, guarda en PostgreSQL y, opcionalmente,
envía una notificación por correo.

> Antes de publicar reemplaza redes sociales, casos de ejemplo (`lib/content.js`)
> y añade páginas de Privacidad/Términos si las necesitas.
