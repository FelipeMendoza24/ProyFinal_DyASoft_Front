import React from 'react';

function PropertyList({ properties }) {
  return (
    <table>
      <thead>
        <tr>
          {/* Table headers */}
          <th>Nombre</th>
                  <th>Tipo Oferta</th>
                  <th>Ciudad</th> 
                  <th>Dirección</th>
                  <th>Tipo Propiedad</th>
                  <th>Tamaño</th>
                  <th>Precio</th>
                  <th>Habitaciones</th>
                  <th>Baños</th>
                  <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {properties.map((property) => (
          <tr key={property.id}>
            {/* Table rows with property data */}
            <td>{property.nombre}</td>
                    <td>{property.tipoOferta}</td>
                    <td>{property.ciudad}</td>
                    <td>{property.direccion}</td>
                    <td>{property.tipoPropiedad}</td>
                    <td>{property.tamano}</td>
                    <td>{property.precio}</td>
                    <td>{property.habitaciones}</td>
                    <td>{property.banos}</td>
                    <td>{property.estado ? "En Oferta" : "Adquirida"}</td>
                
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PropertyList;
