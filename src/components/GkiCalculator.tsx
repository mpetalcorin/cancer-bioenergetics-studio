import { useMemo, useState } from "react";
import { Calculator, AlertTriangle } from "lucide-react";

function interpretGki(gki: number) {
  if (!Number.isFinite(gki)) return { label: "Enter valid measurements", className: "neutral" };
  if (gki < 1) return { label: "Very low GKI, verify context and clinical safety", className: "purple" };
  if (gki < 3) return { label: "Ketotic metabolic state", className: "green" };
  if (gki < 6) return { label: "Moderate glucose–ketone balance", className: "blue" };
  if (gki < 10) return { label: "Glucose-predominant state", className: "orange" };
  return { label: "Strongly glucose-predominant state", className: "red" };
}

export function GkiCalculator() {
  const [glucose, setGlucose] = useState(90);
  const [unit, setUnit] = useState<"mgdl" | "mmol">("mgdl");
  const [ketones, setKetones] = useState(0.8);

  const glucoseMmol = unit === "mgdl" ? glucose / 18 : glucose;
  const gki = ketones > 0 ? glucoseMmol / ketones : Number.NaN;
  const interpretation = useMemo(() => interpretGki(gki), [gki]);

  return (
    <section className="panel">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Interactive research calculator</p>
          <h2>Glucose–ketone index</h2>
        </div>
        <Calculator aria-hidden="true" />
      </div>

      <div className="form-grid">
        <label>
          <span>Glucose</span>
          <input
            type="number"
            min="0"
            step="0.1"
            value={glucose}
            onChange={(event) => setGlucose(Number(event.target.value))}
          />
        </label>

        <label>
          <span>Glucose unit</span>
          <select value={unit} onChange={(event) => setUnit(event.target.value as "mgdl" | "mmol")}>
            <option value="mgdl">mg/dL</option>
            <option value="mmol">mmol/L</option>
          </select>
        </label>

        <label>
          <span>β-hydroxybutyrate, mmol/L</span>
          <input
            type="number"
            min="0.01"
            step="0.1"
            value={ketones}
            onChange={(event) => setKetones(Number(event.target.value))}
          />
        </label>
      </div>

      <div className="gki-result" aria-live="polite">
        <div>
          <span>Calculated GKI</span>
          <strong>{Number.isFinite(gki) ? gki.toFixed(2) : "—"}</strong>
        </div>
        <span className={`status ${interpretation.className}`}>{interpretation.label}</span>
      </div>

      <div className="formula">
        GKI = glucose in mmol/L ÷ β-hydroxybutyrate in mmol/L
      </div>

      <div className="warning">
        <AlertTriangle aria-hidden="true" />
        <p>
          GKI is a dynamic systemic ratio, not a tumour assay, diagnostic test, treatment recommendation,
          or validated universal cancer-prevention threshold.
        </p>
      </div>
    </section>
  );
}
