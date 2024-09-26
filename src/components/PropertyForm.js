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
       
      {/* Filters UI */}
      <div class="container">
      <div class="row">
        <div class="col-md-6">
         
        </div>
        <div class="col-md-6">
          <div class="detail-box">
            <div class="heading_container">
              <h2>
                ¿Desea registrar una propiedad en nuestro sitio?
              </h2>
            </div>
            <p>
              -Llene los datos y en seguido se actualizara nuestra base de datos
            </p>
            
          </div>
        </div>
      </div>
    </div>
      <h3>Nombre:</h3>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
            <h3>Tipo Oferta:</h3>
            <select name="tipoOferta" value={formData.tipoOferta} onChange={handleChange} required>
              <option value=""></option>
              <option value="Venta">Venta</option>
              <option value="Arriendo">Arriendo</option>
            </select>
            <h3>Ciudad:</h3>
            <input type="text" name="ciudad" value={formData.ciudad} onChange={handleChange} required />
            <h3>Dirección:</h3>
            <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} required />
            <h3>Tipo Propiedad:</h3>
            <select name="tipoPropiedad" value={formData.tipoPropiedad} onChange={handleChange} required>
              <option value=""></option>
              <option value="Casa">Casa</option>
              <option value="Apartamento">Apartamento</option>
            </select>
            <h3>Tamaño:</h3>
            <input type="number" name="tamano" value={formData.tamano} onChange={handleChange} required />
            <h3>Precio:</h3>
            <input type="number" name="precio" value={formData.precio} onChange={handleChange} required />
            <h3>Habitaciones:</h3>
            <input type="number" name="habitaciones" value={formData.habitaciones} onChange={handleChange} required />
            <h3>Baños:</h3>
            <input type="number" name="banos" value={formData.banos} onChange={handleChange} required />
            <h3>Estado:</h3>
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
