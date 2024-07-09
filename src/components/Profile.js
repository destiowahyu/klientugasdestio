import React from 'react';

function Profile({ name, nim }) {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">{name}</h1>
      <p className="text-2xl">NIM: {nim}</p>
    </div>
  );
}

export default Profile;
