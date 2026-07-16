# Cancer Bioenergetics Studio

A white-background React and TypeScript research dashboard for exploring synthetic cancer bioenergetics data, metabolic plasticity, glucose–ketone dynamics, and phenotype-dependent intervention responses.

## Features

- Metabolic phenotype explorer.
- Synthetic tumour-cell bioenergetics atlas.
- Interactive glucose–ketone index calculator.
- Longitudinal dietary-scenario visualisation.
- Factorial metabolic-intervention simulator.
- Evidence and limitations panel.
- Responsive desktop and mobile layout.
- Explicit research-only and non-clinical labelling.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

```bash
npm install -g vercel
vercel
vercel --prod
```

## Automated installation

From the directory containing `create_cancer_bioenergetics_app.sh`:

```bash
chmod +x create_cancer_bioenergetics_app.sh
./create_cancer_bioenergetics_app.sh
```

## Scientific limitation

All data and response curves in this app are synthetic and illustrative. The app is not a medical device and does not provide medical advice, diagnosis, prevention guidance, or treatment recommendations.
