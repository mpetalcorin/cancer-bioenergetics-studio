import type { ReactNode } from "react";

type Props = {
  label: string;
  value: string;
  detail: string;
  icon: ReactNode;
};

export function MetricCard({ label, value, detail, icon }: Props) {
  return (
    <article className="metric-card">
      <div className="metric-icon">{icon}</div>
      <div>
        <p className="eyebrow">{label}</p>
        <p className="metric-value">{value}</p>
        <p className="metric-detail">{detail}</p>
      </div>
    </article>
  );
}
