import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserPage.css';
const baseurl = 'http://localhost:5000';
function UserPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const res = await axios.get(`${baseurl}/user/alluser`);
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <h1 className="text-3xl text-center">All Users</h1>
      <table className="w-full text-center">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>*******</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserPage;