import React, { useState } from 'react';

function DeleteSection({ deleteId, setDeleteId, fetchProperties }) {
  const [properties, setProperties] = useState([]);
  const [updateId, setUpdateId] = useState('');
  const [updateEstado, setUpdateEstado] = useState('');
  const handleDeleteProperty = async () => {
    if (!deleteId) return;
    try {
      const response = await fetch(`https://inmobiliariadyasoft.ue.r.appspot.com/eliminarPropiedad/${deleteId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchProperties(); // Fetch updated properties after deletion
        setDeleteId('');
        setUpdateEstado(''); // Reset delete ID field
      }
    } catch (error) {
      console.error('Error eliminando la propiedad:', error);
    }
  };
  
  return (
    <div>
      <section class="deal_section layout_padding-bottom">
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <div class="detail-box">
        <div class="heading_container">
          <h2>
            ¿Deseas eliminar una propiedad?
          </h2>
        </div>
        <p>
          - Busca por su id y podras realizar la eliminacion.
        </p>
        <input
        type="text"
        placeholder="Ingrese ID de la propiedad"
        value={deleteId}
        onChange={(e) => setDeleteId(e.target.value)}
      />
      <button onClick={handleDeleteProperty}>Eliminar</button>
      </div>
    </div>
    <div class="col-md-6">
      <div class="img-box">
        
        <div class="box b1">
          
        </div>
      </div>
    </div>
  </div>
</div>
</section>
      
    </div>
  );
}

export default DeleteSection;

