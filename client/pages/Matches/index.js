import React from 'react';

const Matches = ({ matches=[{name: 'Rich'}] }) => (
  <div>
    <h3> Matches </h3>
    {matches.map(match => match.name)}
  </div>
)

export default Matches;
