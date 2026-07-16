import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis
} from "recharts";
import { interventionBase, longitudinal, tumourGroups } from "../data/simulation";

export function AtlasChart() {
  return (
    <section className="panel">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Synthetic bioenergetics atlas</p>
          <h2>Lactate and mitochondrial respiration</h2>
        </div>
      </div>
      <p className="section-copy">
        High lactate and substantial oxygen consumption can coexist, illustrating hybrid metabolic states.
      </p>
      <div className="chart-frame">
        <ResponsiveContainer width="100%" height={380}>
          <ScatterChart margin={{ top: 15, right: 25, bottom: 25, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              type="number"
              dataKey="lactate"
              name="Lactate"
              unit=" mmol/L"
              domain={[0, 10]}
            />
            <YAxis
              type="number"
              dataKey="ocr"
              name="Basal OCR"
              unit=" pmol/min"
              domain={[50, 200]}
            />
            <ZAxis type="number" dataKey="proliferation" range={[150, 650]} />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter name="Biological context" data={tumourGroups} fill="#2563eb" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
      <div className="legend-list">
        {tumourGroups.map((item) => (
          <span key={item.group}>{item.group}</span>
        ))}
      </div>
    </section>
  );
}

export function LongitudinalChart() {
  return (
    <section className="panel">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Twelve-week synthetic cohort</p>
          <h2>Longitudinal GKI trajectories</h2>
        </div>
      </div>
      <p className="section-copy">
        Scenario trajectories reflect simulated dietary exposure and physiological adaptation, not clinical outcomes.
      </p>
      <div className="chart-frame">
        <ResponsiveContainer width="100%" height={380}>
          <LineChart data={longitudinal} margin={{ top: 10, right: 20, bottom: 20, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="week" label={{ value: "Week", position: "insideBottom", offset: -10 }} />
            <YAxis label={{ value: "Median GKI", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Legend verticalAlign="top" height={45} />
            <Line type="monotone" dataKey="westernGKI" name="Western pattern" stroke="#dc2626" strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="mediterraneanGKI" name="Mediterranean pattern" stroke="#d97706" strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="lowCarbGKI" name="Low carbohydrate" stroke="#2563eb" strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="ketogenicGKI" name="Ketogenic" stroke="#15803d" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export function InterventionChart({ modifier }: { modifier: number }) {
  const data = interventionBase.map((item, index) => ({
    ...item,
    viability: index === 0 ? 100 : Math.max(4, item.viability * modifier)
  }));

  return (
    <div className="chart-frame">
      <ResponsiveContainer width="100%" height={390}>
        <BarChart data={data} layout="vertical" margin={{ top: 10, right: 30, bottom: 10, left: 55 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis type="number" domain={[0, 105]} unit="%" />
          <YAxis type="category" dataKey="condition" width={140} />
          <Tooltip />
          <Bar dataKey="viability" name="Residual viability" fill="#7c3aed" radius={[0, 7, 7, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
