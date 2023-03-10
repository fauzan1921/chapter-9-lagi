import React from "react";

export default function Table({ users }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Nomor</th>
          <th>Nama</th>
          <th>Usia</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.nama}</td>
              <td>{user.umur}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
