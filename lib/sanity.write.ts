// lib/sanity.write.ts
import { createClient } from "next-sanity";

export const writeClient = createClient({
  projectId: "12kbmfg3",
  dataset: "production",
  apiVersion: "2024-04-27",
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
});
