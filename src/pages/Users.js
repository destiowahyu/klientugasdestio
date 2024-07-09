import React, { useReducer, useEffect, useState } from 'react';
import axios from 'axios';

const initialState = {
  users: [],
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        error: 'Error fetching data',
      };
    case 'UPDATE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    default:
      return state;
  }
};

function Users() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [editingUserId, setEditingUserId] = useState(null);
  const [newName, setNewName] = useState('');

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'FETCH_ERROR' });
      });
  }, []);

  const handleEditClick = (user) => {
    setEditingUserId(user.id);
    setNewName(user.name);
  };

  const handleSaveClick = (user) => {
    dispatch({ type: 'UPDATE_USER', payload: { ...user, name: newName } });
    setEditingUserId(null);
    setNewName('');
  };

  const { users, loading, error } = state;

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Daftar Pengguna</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Nama</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className="py-2 px-4 border-b">{user.id}</td>
              <td className="py-2 px-4 border-b">
                {editingUserId === user.id ? (
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="border-2 border-gray-300 p-1 rounded"
                  />
                ) : (
                  user.name
                )}
              </td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">
                {editingUserId === user.id ? (
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                    onClick={() => handleSaveClick(user)}
                  >
                    Simpan
                  </button>
                ) : (
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => handleEditClick(user)}
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
