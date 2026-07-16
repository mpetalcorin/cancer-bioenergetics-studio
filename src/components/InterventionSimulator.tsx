import { useMemo, useState } from "react";
import { FlaskConical, Info } from "lucide-react";
import { InterventionChart } from "./Charts";

export function InterventionSimulator() {
  const [phenotype, setPhenotype] = useState("Hybrid high-energy");
  const [stress, setStress] = useState(50);

  const modifier = useMemo(() => {
    const base: Record<string, number> = {
      "Glycolytic dominant": 0.92,
      "Oxidative dominant": 1.07,
      "Hybrid high-energy": 0.82,
      "Glutamine-supported": 0.88
    };
    return base[phenotype] * (1.08 - stress / 500);
  }, [phenotype, stress]);

  return (
    <section className="panel">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Factorial response model</p>
          <h2>Intervention simulator</h2>
        </div>
        <FlaskConical aria-hidden="true" />
      </div>

      <div className="simulator-controls">
        <label>
          <span>Baseline metabolic phenotype</span>
          <select value={phenotype} onChange={(event) => setPhenotype(event.target.value)}>
            <option>Glycolytic dominant</option>
            <option>Oxidative dominant</option>
            <option>Hybrid high-energy</option>
            <option>Glutamine-supported</option>
          </select>
        </label>

        <label>
          <span>Simulated pathway pressure: {stress}%</span>
          <input
            type="range"
            min="0"
            max="100"
            value={stress}
            onChange={(event) => setStress(Number(event.target.value))}
          />
        </label>
      </div>

      <InterventionChart modifier={modifier} />

      <div className="info-callout">
        <Info aria-hidden="true" />
        <p>
          Lower bars indicate greater simulated growth suppression. The outputs are generated from illustrative
          response assumptions and must not be interpreted as evidence for treatment efficacy.
        </p>
      </div>
    </section>
  );
}
