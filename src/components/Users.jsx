import { useState, useEffect } from "react";
import Layout from "./Layout";
import useLocalStorage from "../useLocalStorage.js";

const mockData = [
  { username: "Ola Normann", email: "ola.normann@norge.no" },
  { username: "Torleif", email: "torleif@kodehode.no" },
  { username: "Jan Egil", email: "jan.egil@kodehode.no" },
  { username: "Sander", email: "sander@kodehode.no" },
];

function Users() {
  const [users, setUsers] = useLocalStorage("users", []);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (users.length === 0) {
      setUsers(mockData);
    }
  }, )

  const addUser = () => {
    if (!username || !email) return;
    setUsers([...users, { username, email }]);
    setUsername("");
    setEmail("");
  };

  return (
    <Layout title="Users">
      <div className="simple-list">
        {users.map((user, index) => (
          <p key={index}>
            {user.username} – {user.email}
          </p>
        ))}
      </div>

      <div className="form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={addUser}>Add user</button>
      </div>
    </Layout>
  );
}

export default Users;