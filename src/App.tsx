import React from "react";
import { Analytics } from "@vercel/analytics/react";

import "./App.css";
import { UserDisplay } from "./UserDisplay";
import { Summary } from "./Summary";
import { getHighestUser } from "./utils";
const API_URL = "https://randomuser.me/api?results=15";

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

export interface AppUser extends User {
  likes: number;
  celebrates: number;
}

function App() {
  const [users, setUsers] = React.useState<AppUser[]>([]);
  React.useEffect(() => {
    async function getUsers() {
      const response = await fetch(API_URL);
      const data = await response.json();

      const newUsers = data.results.map((user: User) => ({
        ...user,
        likes: 0,
        celebrates: 0,
      }));
      setUsers(newUsers);
    }
    getUsers();
  }, []);

  const handleClick = (buttonName: string, uuid: string): void => {
    let newUsers;
    if (buttonName === "like") {
      newUsers = users.map((user) => {
        if (user.login.uuid === uuid) {
          return { ...user, celebrates: 0, likes: user.likes + 1 };
        }
        return user;
      });
    }
    if (buttonName === "celebrate") {
      newUsers = users.map((user) => {
        if (user.login.uuid === uuid) {
          return { ...user, celebrates: user.celebrates + 1, likes: 0 };
        }
        return user;
      });
    }

    newUsers && setUsers(newUsers);
  };

  const mostLikedUser = React.useMemo(
    () => getHighestUser("likes", users),
    [users]
  );
  const mostCelebratedUser = React.useMemo(
    () => getHighestUser("celebrates", users),
    [users]
  );

  return (
    <div style={{ textAlign: "center" }}>
      <header>
        <h1>Linkedin Lite</h1>
      </header>
      <div style={{ margin: "0 auto", width: "60%" }}>
        {users.map((user) => (
          <UserDisplay
            firstName={user.name.first}
            lastName={user.name.last}
            uuid={user.login.uuid}
            key={user.login.uuid}
            likes={user.likes}
            celebrates={user.celebrates}
            handleClick={handleClick}
          />
        ))}
      </div>

      <div style={{ marginTop: "10px" }}>
        <Summary
          mostLikedUser={mostLikedUser}
          mostCelebratedUser={mostCelebratedUser}
        />
      </div>
      <Analytics />
    </div>
  );
}

export default App;
