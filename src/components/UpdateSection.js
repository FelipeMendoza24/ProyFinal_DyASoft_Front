import React, { useState } from 'react';

function UpdateSection({ fetchProperties}) {
  const [properties, setProperties] = useState([]);
  const [updateId, setUpdateId] = useState('');
  const [updateEstado, setUpdateEstado] = useState('');
  const handleUpdateEstado = async () => {
    if (!updateId || updateEstado === '') return;
    try {
      const response = await fetch(`https://inmobiliariadyasoft.ue.r.appspot.com/actualizarPropiedadEstado/${updateId}?estado=${updateEstado}`, {
        method: 'PUT',
      });

      if (response.ok) {
        fetchProperties(); // Fetch updated properties after state change
        setUpdateId(''); // Reset the update ID field
        setUpdateEstado(''); // Reset the estado field
      }
    } catch (error) {
      console.error('Error actualizando estado de la propiedad:', error);
    }
  };
  return (
    <div>
      <h3>Actualizar Estado de Propiedad</h3>
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
  );
}

export default UpdateSection;
