import { useEffect, useState } from 'react';
import axios from 'axios';

const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const result = await axios.get('http://localhost:3000/contacts');
      setContacts(result.data);
    };
    fetchContacts();
  }, []);

  return (
    <div className="container mt-5">
      <h1>Contact List</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Hobbies</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.address}</td>
              <td>{contact.phone}</td>
              <td>{contact.email}</td>
              <td>{contact.hobbies}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminContacts;
