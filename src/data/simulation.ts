export type Phenotype = {
  name: string;
  description: string;
  glycolysis: number;
  oxphos: number;
  glutamine: number;
  fao: number;
  lactate: number;
  ocr: number;
  colour: string;
};

export const phenotypes: Phenotype[] = [
  {
    name: "Glycolytic dominant",
    description: "High glucose uptake and lactate production with comparatively lower respiratory dependence.",
    glycolysis: 92,
    oxphos: 34,
    glutamine: 56,
    fao: 28,
    lactate: 8.4,
    ocr: 82,
    colour: "#7c3aed"
  },
  {
    name: "Oxidative dominant",
    description: "Substantial mitochondrial respiration, spare respiratory capacity, and fatty-acid oxidation.",
    glycolysis: 43,
    oxphos: 91,
    glutamine: 49,
    fao: 76,
    lactate: 4.1,
    ocr: 174,
    colour: "#15803d"
  },
  {
    name: "Hybrid high-energy",
    description: "Concurrent glycolysis and OXPHOS, supporting metabolic flexibility and treatment escape.",
    glycolysis: 83,
    oxphos: 81,
    glutamine: 74,
    fao: 61,
    lactate: 7.6,
    ocr: 158,
    colour: "#2563eb"
  },
  {
    name: "Glutamine-supported",
    description: "Strong glutamine anaplerosis and biosynthesis, with context-dependent glycolytic and respiratory support.",
    glycolysis: 62,
    oxphos: 58,
    glutamine: 94,
    fao: 43,
    lactate: 6.0,
    ocr: 126,
    colour: "#ea580c"
  }
];

export const tumourGroups = [
  { group: "Glioblastoma", glucose: 131, lactate: 7.5, ocr: 113, glutamine: 82, fao: 41, proliferation: 1.15 },
  { group: "Triple-negative breast", glucose: 139, lactate: 8.1, ocr: 109, glutamine: 91, fao: 52, proliferation: 1.22 },
  { group: "Colorectal", glucose: 119, lactate: 6.8, ocr: 130, glutamine: 70, fao: 58, proliferation: 1.08 },
  { group: "Pancreatic", glucose: 128, lactate: 7.3, ocr: 126, glutamine: 94, fao: 63, proliferation: 1.18 },
  { group: "Melanoma", glucose: 104, lactate: 5.8, ocr: 155, glutamine: 64, fao: 75, proliferation: 1.06 },
  { group: "Oxidative lymphoma", glucose: 88, lactate: 4.5, ocr: 181, glutamine: 61, fao: 83, proliferation: 1.02 },
  { group: "Normal epithelial", glucose: 53, lactate: 2.3, ocr: 144, glutamine: 38, fao: 51, proliferation: 0.61 }
];

export const longitudinal = Array.from({ length: 12 }, (_, i) => {
  const week = i + 1;
  return {
    week,
    westernGKI: Math.max(13.5, 18.8 - week * 0.25 + Math.sin(week) * 0.5),
    mediterraneanGKI: Math.max(7.1, 12.5 - week * 0.43 + Math.sin(week / 2) * 0.35),
    lowCarbGKI: Math.max(3.1, 11.0 - week * 0.72 + Math.cos(week) * 0.3),
    ketogenicGKI: Math.max(1.3, 8.4 - week * 0.67 + Math.sin(week / 3) * 0.22)
  };
});

export const interventionBase = [
  { condition: "Control", viability: 100 },
  { condition: "Low carbohydrate", viability: 78 },
  { condition: "GLS inhibitor", viability: 66 },
  { condition: "Complex I inhibitor", viability: 64 },
  { condition: "Low carb + GLS", viability: 43 },
  { condition: "Low carb + CI", viability: 46 },
  { condition: "GLS + CI", viability: 39 },
  { condition: "Triple combination", viability: 23 }
];
