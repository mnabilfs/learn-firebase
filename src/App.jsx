import { useState, useEffect } from "react";
import "./App.css";
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "./firebase-config";

function App() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(userCollectionRef, { name: newName, age: Number(newAge) });
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id)
    await deleteDoc(userDoc)
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <>
      <div className="App p-2">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Name..."
            className="border-1 p-1"
            onChange={(event) => {
              setNewName(event.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Age..."
            className="border-1 p-1"
            onChange={(event) => {
              setNewAge(event.target.value);
            }}
          />
          <button
            className="rounded-md w-30 h-8 bg-blue-300 cursor-pointer"
            onClick={createUser}
          >
            Create User
          </button>
        </div>

        {users.map((user) => {
          return (
            <div
              key={user.id}
              className="w-full flex flex-col gap-2 mb-2 justify-center items-center"
            >
              <h1 className="text-2xl font-bold">Name: {user.name}</h1>
              <h1 className="text-2xl font-bold">Age: {user.age}</h1>
              <button
                className="rounded-md w-30 h-8 bg-blue-300 cursor-pointer"
                onClick={() => {
                  updateUser(user.id, user.age);
                }}
              >
                Increase Age
              </button>
              <button className="rounded-md w-30 h-8 bg-blue-300 cursor-pointer" onClick={() => {deleteUser(user.id)}}>Delete User</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
