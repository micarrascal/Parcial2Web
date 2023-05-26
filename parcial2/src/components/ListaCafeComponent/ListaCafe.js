import React from 'react'

const ListaCafe = () => {
    
    const handlelista = async (event) => {
        event.preventDefault();
    try {
        fetch('http://localhost:3001/cafes')
        .then((resp) => resp.json())
        .then(function(data) {
  let cafes = data.results;
   cafes.map(function(cafe) {
    let id = createNode('id');
    let nombre = createNode('nombre');
    let tipo = createNode('tipo');
    let region = createNode('region');
        },
    });

  return (
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Tipo</th>
      <th scope="col">Region</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>id </td>
      <td>nombre </td>
      <td>tipo</td>
      <td>region</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
  </table>
  )
}

export default ListaCafe;