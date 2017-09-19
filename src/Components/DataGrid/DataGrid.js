
/* React */
import React from 'react'
import ReactDataGrid from 'react-data-grid'

/* Components */

/* Grid Utilitites */
let _rows = [];
for (let i = 1; i < 100; i++) {
  _rows.push({
    id: i,
    title: `Title ${i}`,
    count: i * 1000
  });
}

const rowGetter = i => _rows[i];

let columns = [
  {
    key: 'id',
    name: 'ID'
  },
  {
    key: 'title',
    name: 'Title'
  },
  {
    key: 'count',
    name: 'Count'
  }
]

class DataGrid extends React.Component {

  render() {
    if(typeof window == 'undefined') return false;
    
    return (
      <ReactDataGrid 
        columns={columns}
        rowGetter={rowGetter}
        rowsCount={_rows.length}
        minHeight={500} />
    );       
  }
}

export default DataGrid;
