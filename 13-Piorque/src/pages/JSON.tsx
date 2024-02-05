import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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

const JsonComponent: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData: User[] = await response.json();
        setUsers(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, []);

  return (
    <div id="body-home">
       
    <div id="json-div" className="container mt-4">
      <h1 className='h1-title-hobbies'>USER INFORMATION</h1>
      <div className="row">
        {users.length === 0 ? (
          <p>Loading...</p>
        ) : (
          users.map(user => (
            <div key={user.id} className="col-md-3 mb-4">
              <div className="json-card">
                <div className="card-body">
                  <h5 className="json-card-name">{user.name}</h5>
                  <p className="json-card-usermail">Username: {user.username}</p>
                  <p className="json-card-usermail">Email: {user.email}</p>
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