import React from 'react';

function FilterSection({ filterTipoPropiedad, setFilterTipoPropiedad, minPrecio, setMinPrecio, maxPrecio, setMaxPrecio,
 setProperties, fetchProperties}) 
 {

  const filterByPrecio = async () => {
    try {
      const url = `https://inmobiliariadyasoft.ue.r.appspot.com/filtrarPropiedadesPrecio?minPrecio=${minPrecio}&maxPrecio=${maxPrecio}`;
      const response = await fetch(url);
      const data = await response.json();
      setProperties(data);
    } catch (error) {
      console.error('Error filtering by precio:', error);
    }
  };
  const filterByTipoPropiedad = async () => {
    try {
      const response = await fetch(`https://inmobiliariadyasoft.ue.r.appspot.com/filtrarPropiedadesTipoPropiedad?tipoPropiedad=${filterTipoPropiedad}`);
      const data = await response.json();
      setProperties(data);
    } catch (error) {
      console.error('Error filtering by tipoPropiedad:', error);
    }
  };

  const clearFilters = () => {
    setFilterTipoPropiedad('');  // Clear tipoPropiedad filter
    setMinPrecio('');            // Clear minPrecio filter
    setMaxPrecio('');            // Clear maxPrecio filter
    fetchProperties('');           // Fetch all properties again
  };

  return (
    <div>
      {/* Filters UI */}
            <h3>Filtrar por Tipo de Propiedad</h3>
            <select value={filterTipoPropiedad} onChange={(e) => setFilterTipoPropiedad(e.target.value)}>
              <option value="">Todos</option>
              <option value="Casa">Casa</option>
              <option value="Apartamento">Apartamento</option>
            </select>
      <button onClick={filterByTipoPropiedad}>Filtrar por Tipo</button>
            <h3>Filtrar por Rango de Precio</h3>
            <label>Min Precio:</label>
            <input type="number" value={minPrecio} onChange={(e) => setMinPrecio(e.target.value)} />
            <label>Max Precio:</label>
            <input type="number" value={maxPrecio} onChange={(e) => setMaxPrecio(e.target.value)} />
      
      <button onClick={filterByPrecio}>Filtrar por Precio</button>

      <button onClick={clearFilters}>Eliminar Filtros</button>
    </div>
  );
}

export default FilterSection;
