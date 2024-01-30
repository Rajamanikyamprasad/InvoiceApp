import React, { useState, useEffect } from 'react';

const API_ENDPOINT = 'https://localhost:7133/api/Values';

const CustomTableModal = ({ columns, updateColumnName, updateApiValue, deleteColumn, toggleEditing, addColumn, closeModal }) => (
  <div className="custom-table-modal">
    {columns.map((column, index) => (
      <div key={index}>
        <label>Column Name:</label>
        <input type="text" value={column.name} onChange={(e) => updateColumnName(index, e.target.value)} />

        <label>API Value:</label>
        <input type="text" value={column.apiValue} onChange={(e) => updateApiValue(index, e.target.value)} />

        <button onClick={() => toggleEditing(index)}>
          {column.isEditing ? 'Save' : 'Edit'}
        </button>
        {!column.isEditing && <button onClick={() => deleteColumn(index)}>Delete</button>}
      </div>
    ))}
    <button onClick={addColumn}>Add Column</button>
    <button onClick={closeModal}>Close</button>
  </div>
);

const CustomSalesTable = () => {
  const [tableData, setTableData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [columns, setColumns] = useState([{ name: 'Ordered Date', apiValue: 'orderDate', isEditing: false }]);
  const [isTableGenerated, setIsTableGenerated] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isTableGenerated) {
      fetchTableData();
    }
  }, [isTableGenerated]);

  const fetchTableData = async () => {
    try {
      const response = await fetch(API_ENDPOINT);

      if (response.ok) {
        const data = await response.json();
        setTableData(data);
      } else {
        setError('Failed to fetch data from API');
      }
    } catch (error) {
      setError('Error fetching data from API');
    }
  };

  const updateColumnName = (index, value) => {
    const updatedColumns = [...columns];
    updatedColumns[index].name = value;
    setColumns(updatedColumns);
  };

  const updateApiValue = (index, value) => {
    const updatedColumns = [...columns];
    updatedColumns[index].apiValue = value;
    setColumns(updatedColumns);
  };

  const deleteColumn = (index) => {
    const updatedColumns = [...columns];
    updatedColumns.splice(index, 1);
    setColumns(updatedColumns);
  };

  const toggleEditing = (index) => {
    const updatedColumns = [...columns];
    const updatedColumn = { ...updatedColumns[index], isEditing: !columns[index].isEditing };
    updatedColumns[index] = updatedColumn;
    setColumns(updatedColumns);
  };

  const addColumn = () => {
    setColumns([...columns, { name: '', apiValue: '', isEditing: true }]);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const clearTable = () => {
    setTableData([]);
    setIsTableGenerated(false);
    setShowModal(false);
  };

  const generateTable = () => {
    setIsTableGenerated(true);
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Create Table</button>
      <button onClick={clearTable}>Clear</button>
      <button onClick={generateTable}>Generate Table</button>

      {showModal && (
        <CustomTableModal
          columns={columns}
          updateColumnName={updateColumnName}
          updateApiValue={updateApiValue}
          deleteColumn={deleteColumn}
          toggleEditing={toggleEditing}
          addColumn={addColumn}
          closeModal={closeModal}
        />
      )}

      {error && <div style={{ color: 'red' }}>{error}</div>}

      <table className="custom-sales-table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex}>{item[column.apiValue]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomSalesTable;
