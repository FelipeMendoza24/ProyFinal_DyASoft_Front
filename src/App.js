import React, { useState, useEffect } from 'react';
import { fetchProperties } from './components/fetchProperties';
import PropertyForm from './components/PropertyForm';
import PropertyList from './components/PropertyList';
import FilterSection from './components/FilterSection';
import DeleteProperty from './components/DeleteSection';
import UpdateProperty from './components/UpdateSection';

import './style.css';

function App() {
  const [properties, setProperties] = useState([]);
  const [filterTipoPropiedad, setFilterTipoPropiedad] = useState('');
  const [minPrecio, setMinPrecio] = useState('');
  const [maxPrecio, setMaxPrecio] = useState('');
  const [deleteId, setDeleteId] = useState('');
  const [updateId, setUpdateId] = useState('');
  const [updateEstado, setUpdateEstado] = useState('');
  const [filterCiudad, setFilterCiudad] = useState('');
  const [filterNombre, setFilterNombre] = useState('');

  useEffect(() => {
    fetchProperties(setProperties);
  }, []);

  // Fetch properties function passed to children for use in other actions
  const refreshProperties = () => {
    fetchProperties(setProperties);
  };

  return (
    <div>
    <div className="app-container">
      {/* Right side for filtering and listing properties */}
      <div className="right-side">
        <h2>Lista de Propiedades</h2>

        {/* Filtering section */}
        <FilterSection
          filterTipoPropiedad={filterTipoPropiedad}
          setFilterTipoPropiedad={setFilterTipoPropiedad}
          minPrecio={minPrecio}
          setMinPrecio={setMinPrecio}
          maxPrecio={maxPrecio}
          filterCiudad={filterCiudad}
          setFilterCiudad={setFilterCiudad}
          setMaxPrecio={setMaxPrecio}
          setProperties={setProperties}
          filterNombre={filterNombre}
          setFilterNombre={setFilterNombre}
          refreshProperties={refreshProperties}
        />

        {/* Property List */}
        <PropertyList properties={properties} />
      </div>

      {/* Left side for adding new property */}
      <div className="left-side">
      <section class="sale_section layout_padding-bottom">
    <div class="container-fluid">
      <div class="heading_container">
        <h2>
          Propiedades 
        </h2>
      </div>
    </div>
  </section>

        

        
        {/* Form to add new property */}
        <PropertyForm refreshProperties={refreshProperties} />

        {/* Section for updating a property state by ID */}
        <UpdateProperty updateId={updateId} setUpdateId={setUpdateId} updateEstado={updateEstado} setUpdateEstado={setUpdateEstado} refreshProperties={refreshProperties} />

        {/* Section for deleting a property by ID */}
        <DeleteProperty deleteId={deleteId} setDeleteId={setDeleteId} refreshProperties={refreshProperties} />

        
      </div>
    </div>
  </div>
);
}

export default App;