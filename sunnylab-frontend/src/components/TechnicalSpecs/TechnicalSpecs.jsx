import { useEffect, useState } from "react";
import { getEquipment, getEquipmentCategory } from "../../services/TechnicalSpecsService";
import { API_URL } from "../../../config"; // asegúrate que config.js existe y tiene export const API_URL = ...
import "./TechnicalSpecs.css";

function TechnicalSpecs() {
  const [activeTab, setActiveTab] = useState(null);
  const [categories, setCategories] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [categoriesData, equipmentData] = await Promise.all([
          getEquipmentCategory(),
          getEquipment()
        ]);

        console.log("Categorías recibidas:", categoriesData);
        console.log("Equipos recibidos:", equipmentData);

        // 1️⃣ Formateamos las categorías
        const formattedCategories = {};
        categoriesData.forEach((cat) => {
          if (!cat.Slug || !cat.Nombre) return;
          formattedCategories[cat.Slug] = { title: cat.Nombre, items: [] };
          console.log("Cat Slug agregado:", cat.Slug);
        });

        // 2️⃣ Clasificamos los equipos
        equipmentData.forEach((eq) => {
  const { Nombre, Cover, brand, equipment_category } = eq;
  if (!Nombre || !equipment_category?.Slug) return;

  const categorySlug = equipment_category.Slug;
  const brandName = brand?.Nombre || "Sin marca";
  const imageUrl = Cover?.[0]?.url
    ? `${API_URL.replace("/api", "")}${Cover[0].url}`
    : null;

  if (formattedCategories[categorySlug]) {
    formattedCategories[categorySlug].items.push({
      name: `${brandName} – ${Nombre}`,
      image: imageUrl
    });
  }
});


        console.log("Categorías formateadas:", formattedCategories);

        setCategories(formattedCategories);

        // 3️⃣ Activamos la primera tab automáticamente
        const firstSlug = Object.keys(formattedCategories)[0];
        if (firstSlug) setActiveTab(firstSlug);

        setLoading(false);
      } catch (error) {
        console.error("Error cargando datos:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p>Cargando ficha técnica...</p>;

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
