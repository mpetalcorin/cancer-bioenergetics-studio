import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { phenotypes } from "../data/simulation";

export function PhenotypeExplorer() {
  const [selected, setSelected] = useState(phenotypes[2]);
  const chartData = [
    { pathway: "Glycolysis", score: selected.glycolysis },
    { pathway: "OXPHOS", score: selected.oxphos },
    { pathway: "Glutamine", score: selected.glutamine },
    { pathway: "FAO", score: selected.fao }
  ];

  return (
    <section className="panel">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Metabolic plasticity</p>
          <h2>Phenotype explorer</h2>
        </div>
      </div>

      <div className="phenotype-tabs" role="tablist" aria-label="Metabolic phenotypes">
        {phenotypes.map((phenotype) => (
          <button
            key={phenotype.name}
            type="button"
            className={selected.name === phenotype.name ? "active" : ""}
            onClick={() => setSelected(phenotype)}
          >
            {phenotype.name}
          </button>
        ))}
      </div>

      <div className="phenotype-layout">
        <div>
          <div className="phenotype-name" style={{ borderColor: selected.colour }}>
            <h3>{selected.name}</h3>
            <p>{selected.description}</p>
          </div>

          <div className="two-metrics">
            <div>
              <span>Illustrative lactate</span>
              <strong>{selected.lactate.toFixed(1)} mmol/L</strong>
            </div>
            <div>
              <span>Illustrative basal OCR</span>
              <strong>{selected.ocr} pmol/min</strong>
            </div>
          </div>
        </div>

        <div className="chart-frame" aria-label={`Pathway activity chart for ${selected.name}`}>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={chartData} margin={{ top: 10, right: 10, bottom: 20, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="pathway" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Bar dataKey="score" fill={selected.colour} radius={[7, 7, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
