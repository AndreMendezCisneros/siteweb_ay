import type { Dict } from "@/lib/i18n";

export type ModuleEntry = Dict["modules"][number];

export function getAvailableModules(dict: Dict) {
  return dict.modules.filter((m) => m.status === "available");
}

export function getComingModules(dict: Dict) {
  return dict.modules.filter((m) => m.status === "coming-soon");
}

export function getModule(dict: Dict, slug: string) {
  return dict.modules.find((m) => m.slug === slug);
}

export function getModuleSlugs(dict: Dict) {
  return dict.modules.map((m) => m.slug);
}
