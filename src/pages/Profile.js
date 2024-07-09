import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../features/user/userSlice';

function Profile() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [newName, setNewName] = useState(user.name);

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(setUser({ name: newName, nim: user.nim }));
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">{user.name}</h1>
      <p className="text-2xl">NIM: {user.nim}</p>
      <input
        type="text"
        value={newName}
        onChange={handleNameChange}
        className="border-2 border-gray-300 p-2 rounded mb-4"
        placeholder="Masukkan nama baru"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        onClick={handleSubmit}
      >
        Ubah Nama
      </button>
    </div>
  );
}

export default Profile;
