
// import './App.css';

import { useEffect, useState } from "react";
import axios from "axios";
import UserList from "./UserLists/userLists";

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [listOfUser, setListOfUser] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      axios('https://jsonplaceholder.typicode.com/users')
      .then((res) => {setListOfUser(res.data);
      setIsLoading(false);
    })
  }
  fetchItems()
    },[])

  return (
    <div className="App">
      <h1>Users Fetched using Axios on JSON placeholder API</h1>

      <UserList isLoading={isLoading} listOfUser={listOfUser} />

    </div>
  );
}

export default App;
