import React from "react";

import "./App.css";
import { UserDisplay } from "./UserDisplay";
const API_URL = "https://randomuser.me/api?results=10";

interface Name {
  title: string;
  first: string;
  last: string;
}

interface Login {
  uuid: string;
  username: string;
}
interface User {
  gender: string;
  email: string;
  name: Name;
  login: Login;
}

function App() {
  const [users, setUsers] = React.useState<User[]>([]);

  React.useEffect(() => {
    async function getUsers() {
      const response = await fetch(API_URL);
      const data = await response.json();
      setUsers(data.results);
    }
    getUsers();
  }, []);

  return (
    <div>
      <header>
        <h1>Linkedin Lite</h1>
      </header>
      <div>
        {users.map((user) => (
          <UserDisplay
            firstName={user.name.first}
            lastName={user.name.last}
            userID={user.login.uuid}
            key={user.login.uuid}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
