-- Product categories shown in the "Productos" section of the site.
create table if not exists public.categories (
  id bigint generated always as identity primary key,
  position smallint not null unique,
  name text not null,
  copy text not null,
  created_at timestamptz not null default now()
);

alter table public.categories enable row level security;

-- The site reads with the public anon key; only reads are allowed.
drop policy if exists "Categories are publicly readable" on public.categories;
create policy "Categories are publicly readable"
  on public.categories for select
  to anon, authenticated
  using (true);

insert into public.categories (position, name, copy) values
  (1, 'Proteínas', 'Opciones para complementar tu alimentación y acompañar tu recuperación.'),
  (2, 'Rendimiento', 'Suplementos pensados para tus sesiones de entrenamiento y objetivos diarios.'),
  (3, 'Bienestar', 'Vitaminas y complementos para integrar a una rutina activa y equilibrada.')
on conflict (position) do nothing;
