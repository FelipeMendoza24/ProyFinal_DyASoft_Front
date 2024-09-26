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
        {/* Left side for adding new property */}
        <div className="left-side">
          <h2>Gestión de Propiedades</h2>

          {/* Form to add new property */}
          <PropertyForm refreshProperties={refreshProperties} />

          {/* Section for deleting a property by ID */}
          <DeleteProperty deleteId={deleteId} setDeleteId={setDeleteId} refreshProperties={refreshProperties} />

          {/* Section for updating a property state by ID */}
          <UpdateProperty updateId={updateId} setUpdateId={setUpdateId} updateEstado={updateEstado} setUpdateEstado={setUpdateEstado} refreshProperties={refreshProperties} />
        </div>

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
            setMaxPrecio={setMaxPrecio}
            setProperties={setProperties}
            refreshProperties={refreshProperties}
          />

          {/* Property List */}
          <PropertyList properties={properties} />
        </div>
      </div>
    </div>
  );
}

export default App;