import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);

  function addItem() {
    if (name.trim() === "") {
      alert("Enter a value");
      return;
    }

    setList([...list, name]);
    setName("");
  }

  function deleteItem(index) {
    setList(list.filter((item, i) => i !== index));
  }

  return (
    <div style={{ textAlign: "center", margin: "40px" }}>
      <h1>Management App</h1>

      <input
        placeholder="Enter item"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addItem}>Add</button>

      <br /><br />

      <input
        placeholder="Search item"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h2>Item List</h2>

      {list
        .filter((item) =>
          item.toLowerCase().includes(search.toLowerCase())
        )
        .map((item, index) => (
          <p key={index}>
            {item}
            <button onClick={() => deleteItem(list.indexOf(item))}>
              Delete
            </button>
          </p>
        ))}
    </div>
  );
}

export default App;