import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// JSON.tsx
// Define the structure of the user object received from the API

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    suite: string;
    city: string;
    zipcode: string;
  };
}

// JsonComponent Component
// This component fetches and displays user information from a JSON API.

const JsonComponent: React.FC = () => {

  // State to store the fetched user data
  const [users, setUsers] = useState<User[]>([]);

  // Fetch user data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // Parse JSON response and set user state
        const jsonData: User[] = await response.json();
        setUsers(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, []); // Empty dependency array ensures useEffect runs only once, on component mount

  return (
    <div id="body-home">

      {/* Container for displaying user information */}
      <div id="json-div" className="container mt-4">

        {/* Title */}
        <h1 className='h1-title-hobbies'>USER INFORMATION</h1>
        <div className="row">

          {/* Conditionally render user information or loading message */}
          {users.length === 0 ? (
            <p>Loading...</p>
          ) : (
            users.map(user => (
              <div key={user.id} className="col-md-4 col-lg-4 mb-4">

                {/* Card to display user information */}
                <div className="json-card">

                  <div className="card-body">
                    {/* User name */}
                    <h5 className="json-card-name">{user.name}</h5>
                    {/* Username */}
                    <p className="json-card-usermail">Username: {user.username}</p>
                    {/* Email */}
                    <p className="json-card-usermail">Email: {user.email}</p>
                    {/* Address details */}
                    <p className="card-text top-line">Suite: {user.address.suite}</p> 
                    <p className="card-text top-line">City: {user.address.city}</p>
                    <p className="card-text top-line">Zipcode: {user.address.zipcode}</p>
                  </div>

                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default JsonComponent;