import React from 'react';

function FilterSection({ filterTipoPropiedad, setFilterTipoPropiedad, minPrecio, setMinPrecio, maxPrecio, setMaxPrecio,
 setProperties, fetchProperties}) 
 {

  const filterByPrecio = async () => {
    if (minPrecio === '' || maxPrecio === '') {
      console.error('Por favor, ingrese un valor para el precio mínimo y máximo');
      return;
    }
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
  


  const clearFilters = async () => {
    setFilterTipoPropiedad('');  // Clear tipoPropiedad filter
    setMinPrecio('');            // Clear minPrecio filter
    setMaxPrecio('');            // Clear maxPrecio filter
    
  };     // Fetch all properties again
  

  return (
    <div>
      {/* Filters UI */}
      <div class="container">
      <div class="row">
        <div class="col-md-6">
         
        </div>
        <div class="col-md-6">
          <div class="detail-box">
            <div class="heading_container">
              <h2>
                ¿Casa o Apartamento?
              </h2>
            </div>
            <p>
              -Puedes filtrar por la opción que mas te guste y ver nuestras mejores opciones.
            </p>
            
          </div>
        </div>
      </div>
    </div>
            <select value={filterTipoPropiedad} onChange={(e) => setFilterTipoPropiedad(e.target.value)}>
              <option value="">Todos</option>
              <option value="Casa">Casa</option>
              <option value="Apartamento">Apartamento</option>
            </select>
      <button onClick={filterByTipoPropiedad}>Filtrar por Tipo</button>
            <h3>-Precios que se acomoden a tí</h3>

            <input type="number" value={minPrecio} onChange={(e) => setMinPrecio(e.target.value)} placeholder="Ingrese el precio mínimo" />

            <input type="number" value={maxPrecio} onChange={(e) => setMaxPrecio(e.target.value)} placeholder="Ingrese el precio Maximo" />
      
      <button onClick={filterByPrecio}>Filtrar por Precio</button>
 
      <button onClick={clearFilters}>Eliminar Filtros</button>
    </div>
  );
}

export default FilterSection;
