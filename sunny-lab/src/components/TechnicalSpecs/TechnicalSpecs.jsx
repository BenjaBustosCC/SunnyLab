import { useState } from "react";
import "./TechnicalSpecs.css";

function TechnicalSpecs() {
  const [activeTab, setActiveTab] = useState("mics");

  const categories = {
    mics: {
      title: "Micrófonos",
      items: [
        "Neumann TLM 103 – Ideal para voces",
        "Shure SM7B – Podcast y locución",
        "AKG C414 – Grabación de instrumentos"
      ]
    },
    instruments: {
      title: "Instrumentos",
      items: [
        "Teclado Yamaha P125",
        "Guitarra Fender Stratocaster",
        "Bajo Fender Jazz Bass"
      ]
    },
    audio: {
      title: "Monitores y Audio",
      items: [
        "Monitores Yamaha HS8",
        "Interface Focusrite Scarlett 18i20",
        "Auriculares Audio-Technica ATH-M50x"
      ]
    }
  };

  return (
    <div className="tech-container">
      <h2 className="tech-title">Ficha Técnica</h2>

      {/* Tabs */}
      <div className="tab-buttons">
        {Object.keys(categories).map((key) => (
          <button
            key={key}
            className={`tab-btn ${activeTab === key ? "active" : ""}`}
            onClick={() => setActiveTab(key)}
          >
            {categories[key].title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="tab-content">
        {categories[activeTab].items.map((item, index) => (
          <div key={index} className="tab-card">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechnicalSpecs;