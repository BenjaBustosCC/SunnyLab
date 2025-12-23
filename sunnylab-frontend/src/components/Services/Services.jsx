import "./Services.css";

function Services() {
  const services = [
    {
      title: "Clases de Guitarra",
      description: "Aprende guitarra con clases personalizadas adaptadas a tu nivel.",
      icon: "🎸",
    },
    {
      title: "Clases de Piano",
      description: "Desarrolla tu técnica y expresión musical en piano.",
      icon: "🎹",
    },
    {
      title: "Clases de Canto",
      description: "Explora tu voz y mejora tu técnica vocal.",
      icon: "🎤",
    },
    {
      title: "Composición",
      description: "Crea tus propias canciones con acompañamiento profesional.",
      icon: "✍️",
    },
    {
      title: "Grabación",
      description: "Grabación de voces e instrumentos en estudio profesional.",
      icon: "🎧",
    },
    {
      title: "Arriendo de Espacio",
      description: "Usa el estudio para tus propios proyectos musicales.",
      icon: "🏠",
    },
  ];

  return (
    <div className="services-container" id="servicios">
      <h2 className="services-title">Nuestros Servicios</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;