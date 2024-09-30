import React, { useState } from 'react';
import { fetchProperties } from './fetchProperties';

function UpdateSection({ updateId, setUpdateId, updateEstado, setUpdateEstado, refreshProperties}) {

  const handleUpdateEstado = async () => {
    if (!updateId || updateEstado === '') return;
    try {
      const response = await fetch(`https://inmobiliariadyasoft.ue.r.appspot.com/actualizarPropiedadEstado/${updateId}?estado=${updateEstado}`, {
        method: 'PUT',
      });

      if (response.ok) {
        refreshProperties(); // Fetch updated properties after state change
        setUpdateId(''); // Reset the update ID field
        setUpdateEstado(''); // Reset the estado field
      }
    } catch (error) {
      console.error('Error actualizando estado de la propiedad:', error);
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
            ¿Deseas actualizar el estado de una propiedad?
          </h2>
        </div>
        <p>
          Busca por su id, selecciona su tipo y actualiza.
        </p>
        <input
        type="text"
        placeholder="Ingrese ID de la propiedad"
        value={updateId}
        onChange={(e) => setUpdateId(e.target.value)}
      />
      <select value={updateEstado} onChange={(e) => setUpdateEstado(e.target.value)}>
        <option value="">Seleccione Estado</option>
        <option value={true}>En Oferta</option>
        <option value={false}>Adquirida</option>
      </select>
      <button onClick={handleUpdateEstado}>Actualizar Estado</button>
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

export default UpdateSection;
