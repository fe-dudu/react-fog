import Fog from 'react-fog';
import './App.css';

const horizontalItems = Array.from({ length: 12 }, (_, index) => `Item ${index + 1}`);
const gridItems = Array.from({ length: 40 }, (_, index) => `Cell ${index + 1}`);
const verticalItems = Array.from({ length: 18 }, (_, index) => `Row ${index + 1}`);
const cardItems = Array.from({ length: 50 }, (_, index) => `Report ${index + 1}`);

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <div>
          <h1>react-fog example</h1>
          <p>Scroll the containers to see the fog edges.</p>
        </div>
      </header>

      <section className="section">
        <div className="section-header">
          <h2>Horizontal</h2>
          <span>fogSize 12px</span>
        </div>
        <Fog fogSize={12} fogInnerColor="rgba(255, 255, 255, 0)" fogOuterColor="rgba(0, 0, 0, 0.15)">
          <div className="row">
            {horizontalItems.map((label) => (
              <div className="chip" key={label}>
                {label}
              </div>
            ))}
          </div>
        </Fog>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Vertical list</h2>
          <span>height 220px</span>
        </div>
        <Fog height={220} fogSize={10} fogInnerColor="rgba(255, 255, 255, 0)" fogOuterColor="rgba(0, 0, 0, 0.12)">
          <div className="column">
            {verticalItems.map((label) => (
              <div className="row-item" key={label}>
                <span className="row-title">{label}</span>
                <span className="row-meta">Updated today</span>
              </div>
            ))}
          </div>
        </Fog>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Both axes</h2>
          <span>height 180px</span>
        </div>
        <Fog
          height={180}
          fogSize={12}
          fogInnerColor="rgba(255, 255, 255, 0)"
          fogOuterColor="rgba(0, 0, 0, 0.2)"
          fogZIndex={2}
        >
          <div className="grid">
            {gridItems.map((label) => (
              <div className="cell" key={label}>
                {label}
              </div>
            ))}
          </div>
        </Fog>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Thick fog on tinted surface</h2>
          <span>fogSize 20px</span>
        </div>
        <div className="panel">
          <Fog
            height={200}
            fogSize={20}
            fogInnerColor="rgba(255, 255, 255, 0)"
            fogOuterColor="rgba(246, 231, 207, 0.95)"
          >
            <div className="cards">
              {cardItems.map((label) => (
                <article className="card" key={label}>
                  <p className="card-title">{label}</p>
                  <p className="card-body">Weekly summary · 6 metrics</p>
                </article>
              ))}
            </div>
          </Fog>
        </div>
      </section>
    </div>
  );
}
