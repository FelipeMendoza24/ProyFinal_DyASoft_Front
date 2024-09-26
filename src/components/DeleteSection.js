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
      <h3>Eliminar Propiedad</h3>
      <input
        type="text"
        placeholder="Ingrese ID de la propiedad"
        value={deleteId}
        onChange={(e) => setDeleteId(e.target.value)}
      />
      <button onClick={handleDeleteProperty}>Eliminar</button>
    </div>
  );
}

export default DeleteSection;