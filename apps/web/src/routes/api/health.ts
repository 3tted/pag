import { createFileRoute } from "@tanstack/react-router";
import { checkDatabase } from "@vyrox/db";

export const Route = createFileRoute("/api/health")({
  server: {
    handlers: {
      GET: async () => {
        try {
          const database = await checkDatabase();
          return Response.json({ status: "ok", database });
        } catch (error) {
          console.error("Health check: database error", error);
          return Response.json({ status: "ok", database: "error" });
        }
      },
    },
  },
});
