import React, { useEffect, useState } from 'react';

export default function ContactList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('http://hminnovation.in:3306/api/contact')
      .then(res => res.json())
      .then(data => setList(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Contact Submissions</h2>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
            <th>Message</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {list.map(row => (
            <tr key={row.id ?? row['s.no']}>
              <td>{row.id ?? row['s.no']}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.phone_no}</td>
              <td>{row.company}</td>
              <td>{row.message}</td>
              <td>{new Date(row.date).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
