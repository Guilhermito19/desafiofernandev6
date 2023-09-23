import React from 'react';

const TableRow = ({ item, handleRemoveItem, handleMinOrPlus, index }) => {
  return (
    <tr>
      <td>
        <div className='product'>
          <img src='https://picsum.photos/100/120' alt='' />
          <div className='info'>
            <div className='name'>Nome do produto {index}</div>
            <div className='category'>Categoria</div>
          </div>
        </div>
      </td>
      <td>{item.price}</td>
      <td>
        <div className='qty'>
          <button onClick={() => {
            handleMinOrPlus(item, 'decrease', index)
          }}>
            <i className='bx bx-minus'></i>
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => {
            handleMinOrPlus(item, 'increase', index)
          }}>
            <i className='bx bx-plus'></i>
          </button>
        </div>
      </td>
      <td>{item.total}</td>
      <td>
        <button className='remove' onClick={() => {
          handleRemoveItem(item)
        }}>
          <i className='bx bx-x'></i>
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
