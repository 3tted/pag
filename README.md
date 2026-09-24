# VYROX Nutrition — monorepo

Sitio de VYROX Nutrition (TanStack Start + React + Tailwind) con base de datos
en Supabase y despliegue en Render.

```
apps/web/            Sitio web (TanStack Start, SSR con servidor Node)
packages/db/         Cliente de Supabase y tipos compartidos (@vyrox/db)
supabase/migrations/ Esquema SQL de la base de datos
render.yaml          Blueprint de Render (despliegue desde GitHub)
```

## Desarrollo local

Requiere [Bun](https://bun.sh) ≥ 1.3.

```sh
bun install
bun run dev          # http://localhost:8080
```

Para conectar Supabase en local, crea `apps/web/.env` a partir de
`.env.example`. Sin esas variables el sitio funciona igual y muestra las
categorías por defecto.

## Base de datos (Supabase)

1. Crea un proyecto en https://supabase.com.
2. En **SQL Editor**, ejecuta el contenido de
   `supabase/migrations/20260923000000_create_categories.sql`
   (o usa `supabase db push` con la CLI de Supabase).
3. En **Project Settings → API** copia la *Project URL* y la clave
   *anon / public*.

Las categorías de la sección «Productos» se editan desde **Table Editor →
categories** y se reflejan en el sitio sin volver a desplegar.

## Despliegue (Render)

1. En Render: **New → Blueprint** y selecciona este repositorio de GitHub.
2. Render lee `render.yaml` y te pide `SUPABASE_URL` y `SUPABASE_ANON_KEY`.
3. Cada push a `main` que toque `apps/web`, `packages` o la configuración raíz
   redespliega automáticamente.

`GET /api/health` responde `{"status":"ok","database":"ok"}` cuando la conexión
con Supabase funciona (`not_configured` si faltan las variables, `error` si no
se puede conectar).
