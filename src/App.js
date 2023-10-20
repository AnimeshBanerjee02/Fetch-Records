import React, { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data.users)) // Note the 'data.users' here
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div className="App">
      <h1>User Table</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Maiden Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Username</th>
            <th>Password</th>
            <th>Date of Birth</th>
            <th>Image</th>
            <th>Blood Group</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Eye Color</th>
            <th>Hair</th>
            <th>Domain</th>
            <th>IP</th>
            <th>Address</th>
            <th>MacAddress</th>
            <th>University</th>
            <th>Bank</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {users && users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.maidenName}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.birthDate}</td>
                <td>{user.image}</td>
                <td>{user.bloodGroup}</td>
                <td>{user.height}</td>
                <td>{user.weight}</td>
                <td>{user.eyeColor}</td>
                <td>{user.hair.color}  {user.hair.type}</td>
                <td>{user.domain}</td>
                <td>{user.ip}</td>
                <td>
                  <div>
                    <strong>Address:</strong> {user.address.address}
                  </div>
                  <div>
                    <strong>City:</strong> {user.address.city}
                  </div>
                  <div>
                    <strong>Latitude:</strong> {user.address.coordinates.lat}
                  </div>
                  <div>
                    <strong>Longitude:</strong> {user.address.coordinates.lng}
                  </div>
                  <div>
                    <strong>Postal Code:</strong> {user.address.postalCode}
                  </div>
                  <div>
                    <strong>State:</strong> {user.address.state}
                  </div>
                </td>
                <td>{user.macAddress}</td>
                <td>{user.university}</td>
                <td>
                  <div>
                    <strong>Card Expire:</strong> {user.bank.cardExpire}
                  </div>
                  <div>
                    <strong>Card Number:</strong> {user.bank.cardNumber}
                  </div>
                  <div>
                    <strong>Card Type:</strong> {user.bank.cardType}
                  </div>
                  <div>
                    <strong>Currency:</strong> {user.bank.currency}
                  </div>
                  <div>
                    <strong>IBAN:</strong> {user.bank.iban}
                  </div>
                </td>
                <td>
                  <div>
                    <strong>Company Name:</strong> {user.company.name}
                  </div>
                  <div>
                    <strong>Department:</strong> {user.company.department}
                  </div>
                  <div>
                    <strong>Title:</strong> {user.company.title}
                  </div>
                  <div>
                    <strong>EIN:</strong> {user.ein}
                  </div>
                  <div>
                    <strong>SSN:</strong> {user.ssn}
                  </div>
                  <div>
                    <strong>User Agent:</strong> {user.userAgent}
                  </div>
                  <div>
                    <strong>Company Address:</strong> {user.company.address.address}
                  </div>
                  <div>
                    <strong>Company City:</strong> {user.company.address.city}
                  </div>
                  <div>
                    <strong>Company Latitude:</strong> {user.company.address.coordinates.lat}
                  </div>
                  <div>
                    <strong>Company Longitude:</strong> {user.company.address.coordinates.lng}
                  </div>
                  <div>
                    <strong>Company Postal Code:</strong> {user.company.address.postalCode}
                  </div>
                  <div>
                    <strong>Company State:</strong> {user.company.address.state}
                  </div>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  
                </td>
                

              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;