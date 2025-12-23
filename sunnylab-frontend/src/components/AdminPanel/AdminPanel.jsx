import './AdminPanel.css';

function AdminPanel() {
    return (
        <div className="admin-panel">
            <h1 className="admin-title">Panel de Administrador</h1>
            <div className="admin-content">
                <p>Bienvenido al panel de administración de Sunny Lab.</p>
                <p>Aquí podrás gestionar el contenido de la plataforma próximamente.</p>
                {/* Aquí irán los futuros controles del administrador */}
            </div>
        </div>
    );
}

export default AdminPanel;
