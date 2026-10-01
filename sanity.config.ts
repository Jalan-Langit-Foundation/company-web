import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./lib/cms/sanity/schemas";

export default defineConfig({
  name: "jalan-langit-foundation",
  title: "Jalan Langit Foundation",

  projectId: "uszkoceu",
  dataset: "production",

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
