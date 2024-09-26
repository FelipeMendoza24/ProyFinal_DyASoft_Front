import React, { useState } from 'react';

function PropertyForm({ fetchProperties }) {
  const [properties, setProperties] = useState([]);
    const [formData, setFormData] = useState({
    nombre: '',
    tipoOferta:'' ,
    ciudad: '',
    direccion: '',
    tipoPropiedad:'',
    tamano: '',
    precio: '',
    habitaciones: '',
    banos: '',
    estado: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://inmobiliariadyasoft.ue.r.appspot.com/guardarPropiedad', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        fetchProperties();
        setFormData({
          nombre: '',
          tipoOferta: 'Venta',
          ciudad: '',
          direccion: '',
          tipoPropiedad: 'Casa',
          tamano: '',
          precio: '',
          habitaciones: '',
          banos: '',
          estado: ''
        });
      }
    } catch (error) {
      console.error('Error añadiendo propiedad:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre:</label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
            <label>Tipo Oferta:</label>
            <select name="tipoOferta" value={formData.tipoOferta} onChange={handleChange} required>
              <option value=""></option>
              <option value="Venta">Venta</option>
              <option value="Arriendo">Arriendo</option>
            </select>
            <label>Ciudad:</label>
            <input type="text" name="ciudad" value={formData.ciudad} onChange={handleChange} required />
            <label>Dirección:</label>
            <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} required />
            <label>Tipo Propiedad:</label>
            <select name="tipoPropiedad" value={formData.tipoPropiedad} onChange={handleChange} required>
              <option value=""></option>
              <option value="Casa">Casa</option>
              <option value="Apartamento">Apartamento</option>
            </select>
            <label>Tamaño:</label>
            <input type="number" name="tamano" value={formData.tamano} onChange={handleChange} required />
            <label>Precio:</label>
            <input type="number" name="precio" value={formData.precio} onChange={handleChange} required />
            <label>Habitaciones:</label>
            <input type="number" name="habitaciones" value={formData.habitaciones} onChange={handleChange} required />
            <label>Baños:</label>
            <input type="number" name="banos" value={formData.banos} onChange={handleChange} required />
            <label>Estado:</label>
            <select name="estado" value={formData.estado} onChange={handleChange} required>
              <option value=""></option>
              <option value={true}>En Oferta</option>
              <option value={false}>Adquirida</option>
            </select>
      <button type="submit">Agregar Propiedad</button>
    </form>
  );
}
   
export default PropertyForm;
