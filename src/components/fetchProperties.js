import React, { useState } from 'react';


export const fetchProperties = async (setProperties) => {
  
  try {
    const response = await fetch('https://inmobiliariadyasoft.ue.r.appspot.com/propiedades/todos');
    const data = await response.json();
    setProperties(data);
    
    
  } catch (error) {
    console.error('Error fetching properties:', error);
  }
};