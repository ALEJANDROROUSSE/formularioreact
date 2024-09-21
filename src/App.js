import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    matricula: '',
    nombre: '',
    apellidoPaterno: '',
    telefono: '',
    correo: ''
  });

  const [estudiantes, setEstudiantes] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEstudiantes([...estudiantes, formData]);
    setFormData({
      matricula: '',
      nombre: '',
      apellidoPaterno: '',
      telefono: '',
      correo: ''
    });
  };

  const handleReset = () => {
    setFormData({
      matricula: '',
      nombre: '',
      apellidoPaterno: '',
      telefono: '',
      correo: ''
    });
    setEstudiantes([]);
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
      <div className="card p-4" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Formulario Registro</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="matricula" className="form-label">Matrícula</label>
            <input
              type="text"
              className="form-control"
              id="matricula"
              name="matricula"
              value={formData.matricula}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="apellidoPaterno" className="form-label">Apellido Paterno</label>
            <input
              type="text"
              className="form-control"
              id="apellidoPaterno"
              name="apellidoPaterno"
              value={formData.apellidoPaterno}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="telefono" className="form-label">Teléfono</label>
            <input
              type="tel"
              className="form-control"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="correo" className="form-label">Correo</label>
            <input
              type="email"
              className="form-control"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Registrar</button>
        </form>
        <button className="btn btn-danger w-100 mt-3" onClick={handleReset}>Reiniciar</button>
      </div>

      <div className="mt-4">
        <h4>Estudiantes Registrados</h4>
        <ul className="list-group">
          {estudiantes.map((estudiante, index) => (
            <li key={index} className="list-group-item">
              {estudiante.nombre} {estudiante.apellidoPaterno} - {estudiante.correo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
