import { createServerFn } from "@tanstack/react-start";
import { listCategories, type Category } from "@vyrox/db";

const fallbackCategories: Category[] = [
  {
    position: 1,
    name: "Proteínas",
    copy: "Opciones para complementar tu alimentación y acompañar tu recuperación.",
  },
  {
    position: 2,
    name: "Rendimiento",
    copy: "Suplementos pensados para tus sesiones de entrenamiento y objetivos diarios.",
  },
  {
    position: 3,
    name: "Bienestar",
    copy: "Vitaminas y complementos para integrar a una rutina activa y equilibrada.",
  },
];

// Reads categories from Supabase; falls back to the built-in list when the
// database is not configured or unreachable so the page always renders.
export const getCategories = createServerFn({ method: "GET" }).handler(async () => {
  try {
    const rows = await listCategories();
    if (rows && rows.length > 0) return rows;
  } catch (error) {
    console.error("Failed to load categories from Supabase", error);
  }
  return fallbackCategories;
});
