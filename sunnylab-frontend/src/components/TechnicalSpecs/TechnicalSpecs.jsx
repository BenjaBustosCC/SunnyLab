import { useState } from "react";
import "./TechnicalSpecs.css";

function TechnicalSpecs() {
  const [activeTab, setActiveTab] = useState("audio");

  // Static data placeholder since CMS was removed
  const categories = {
    audio: {
      title: "Audio",
      items: [
        { name: "Equipos de Audio disponibles próximamente", image: null }
      ]
    },
    iluminacion: {
      title: "Iluminación",
      items: [
         { name: "Equipos de Iluminación disponibles próximamente", image: null }
      ]
    },
    video: {
      title: "Video",
      items: [
         { name: "Equipos de Video disponibles próximamente", image: null }
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

      {/* Contenido */}
      <div className="tab-content">
        {categories[activeTab]?.items.length > 0 ? (
          categories[activeTab].items.map((item, index) => (
            <div key={index} className="tab-card">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="tab-card-image"
                />
              )}
              <div>{item.name}</div>
            </div>
          ))
        ) : (
          <p>No hay equipos en esta categoría.</p>
        )}
      </div>
    </div>
  );
}

export default TechnicalSpecs;
