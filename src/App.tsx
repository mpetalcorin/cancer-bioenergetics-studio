import { useState } from "react";
import {
  Activity,
  Atom,
  BookOpen,
  BrainCircuit,
  ChevronRight,
  Dna,
  Gauge,
  Microscope,
  ShieldAlert
} from "lucide-react";
import { MetricCard } from "./components/MetricCard";
import { GkiCalculator } from "./components/GkiCalculator";
import { PhenotypeExplorer } from "./components/PhenotypeExplorer";
import { AtlasChart, LongitudinalChart } from "./components/Charts";
import { InterventionSimulator } from "./components/InterventionSimulator";

type View = "overview" | "atlas" | "gki" | "interventions" | "evidence";

const navItems: { id: View; label: string; icon: typeof Activity }[] = [
  { id: "overview", label: "Overview", icon: Gauge },
  { id: "atlas", label: "Metabolic atlas", icon: Microscope },
  { id: "gki", label: "GKI explorer", icon: Activity },
  { id: "interventions", label: "Interventions", icon: BrainCircuit },
  { id: "evidence", label: "Evidence", icon: BookOpen }
];

function Overview() {
  return (
    <>
      <section className="hero">
        <div>
          <span className="hero-chip">Research simulation platform</span>
          <h1>Cancer Bioenergetics Studio</h1>
          <p>
            Explore glycolysis, mitochondrial respiration, glutamine metabolism, fatty-acid oxidation,
            glucose–ketone dynamics, and phenotype-dependent intervention responses using transparent synthetic data.
          </p>
        </div>
        <div className="hero-orbit" aria-hidden="true">
          <div className="mitochondrion">
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>

      <div className="metric-grid">
        <MetricCard label="Synthetic cell models" value="630" detail="Seven biological contexts" icon={<Dna />} />
        <MetricCard label="Host observations" value="13,440" detail="160 participants over 84 days" icon={<Activity />} />
        <MetricCard label="Metabolic phenotypes" value="4" detail="Glycolytic, oxidative, hybrid, glutamine-supported" icon={<Atom />} />
        <MetricCard label="Factorial conditions" value="8" detail="Pathway-restriction combinations" icon={<BrainCircuit />} />
      </div>

      <PhenotypeExplorer />

      <section className="panel concept-panel">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Systems-level model</p>
            <h2>From nutrient exposure to tumour response</h2>
          </div>
        </div>
        <div className="concept-flow">
          {[
            ["Host environment", "Glucose, ketones, hormones, oxygen, inflammation"],
            ["Tumour phenotype", "Lineage, genotype, microenvironment, metabolic state"],
            ["Pathway allocation", "Glycolysis, OXPHOS, glutaminolysis, FAO"],
            ["Adaptive response", "Compensation, stress tolerance, treatment escape"],
            ["Measured outcome", "ATP, lactate, OCR, proliferation, viability"]
          ].map(([title, copy], index, array) => (
            <div className="flow-item" key={title}>
              <article>
                <span>{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
              {index < array.length - 1 && <ChevronRight className="flow-arrow" />}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function Evidence() {
  return (
    <section className="panel evidence">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Interpretation framework</p>
          <h2>Evidence, uncertainty, and responsible use</h2>
        </div>
        <ShieldAlert aria-hidden="true" />
      </div>

      <div className="evidence-grid">
        <article>
          <span className="evidence-level established">Established</span>
          <h3>Aerobic glycolysis is common in cancer</h3>
          <p>
            Many tumours increase glucose uptake and lactate formation despite oxygen availability. This does not
            establish that mitochondrial respiration is absent.
          </p>
        </article>
        <article>
          <span className="evidence-level established">Established</span>
          <h3>Metabolic states are heterogeneous</h3>
          <p>
            Tumours can use OXPHOS, glutamine, fatty acids, and other substrates in lineage- and context-dependent ways.
          </p>
        </article>
        <article>
          <span className="evidence-level investigational">Investigational</span>
          <h3>GKI-guided oncology</h3>
          <p>
            GKI is a systemic exposure ratio. Its role as a predictive or therapeutic cancer biomarker remains
            investigational and tumour-specific.
          </p>
        </article>
        <article>
          <span className="evidence-level unsupported">Not demonstrated here</span>
          <h3>Universal mitochondrial failure</h3>
          <p>
            This simulation does not support claims that all cancers possess irreversibly defective mitochondria or
            cannot oxidise lipids or ketone bodies.
          </p>
        </article>
      </div>

      <div className="warning prominent">
        <ShieldAlert aria-hidden="true" />
        <p>
          This app is an educational research prototype built from synthetic data. It is not a medical device and must
          not be used to diagnose, prevent, or treat cancer, alter prescribed therapy, or design an unsupervised diet.
        </p>
      </div>
    </section>
  );
}

export default function App() {
  const [view, setView] = useState<View>("overview");

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark"><Atom /></div>
          <div>
            <strong>Bioenergetics</strong>
            <span>Research Studio</span>
          </div>
        </div>

        <nav aria-label="Primary navigation">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              type="button"
              key={id}
              className={view === id ? "active" : ""}
              onClick={() => setView(id)}
            >
              <Icon />
              <span>{label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-note">
          <ShieldAlert />
          <p>Synthetic-data research prototype. Not clinical advice.</p>
        </div>
      </aside>

      <main>
        <header className="topbar">
          <div>
            <span>Computational oncology</span>
            <strong>{navItems.find((item) => item.id === view)?.label}</strong>
          </div>
          <span className="data-badge">Synthetic data</span>
        </header>

        <div className="content">
          {view === "overview" && <Overview />}
          {view === "atlas" && <AtlasChart />}
          {view === "gki" && (
            <>
              <GkiCalculator />
              <LongitudinalChart />
            </>
          )}
          {view === "interventions" && <InterventionSimulator />}
          {view === "evidence" && <Evidence />}
        </div>
      </main>
    </div>
  );
}
