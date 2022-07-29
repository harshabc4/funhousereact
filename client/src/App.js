import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    document.title = "Finish Line";
  }, []);

  const [didItChange, setDidItChange] = useState(false);
  const [item, setItem] = useState({
    title: "",
    description: "",
  });

  const [items, setItems] = useState([
    {
      title: "",
      description: "",
      _id: "",
    },
  ]);

  const [isPut, setIsPut] = useState(false);
  const [updatedItem, setUpdatedItem] = useState({
    title: "",
    description: "",
    id: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("/showMaterials")
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
          })
          .then((jsonRes) => setItems(jsonRes));
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [didItChange]);

  // useEffect(() => {
  //   fetch("/showMaterials")
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //     })
  //     .then((jsonRes) => setItems(jsonRes))
  //     .catch((err) => console.log(err));
  // }, [didItChange]);

  function handleChange(event) {
    const { name, value } = event.target;
    setItem((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  const addItem = async (event) => {
    event.preventDefault();
    const newItem = {
      title: item.title,
      description: item.description,
    };
    try {
      const resp = await axios
        .post("/addMaterial/", newItem)
        .then(setDidItChange(!didItChange))
        .then(
          setItem({
            title: "",
            description: "",
          })
        );
      console.log(newItem);
      console.log(resp.data);
    } catch (err) {
      console.error(err);
    }
  };

  // function addItem(event) {
  //   event.preventDefault();
  //   const newItem = {
  //     title: item.title,
  //     description: item.description,
  //   };
  //   // axios.post("/addMaterial", newItem);
  //   axios.post("/addMaterial", newItem).then(setDidItChange(!didItChange));
  //   console.log(newItem);
  //   // alert("item added");

  //   setItem({
  //     title: "",
  //     description: "",
  //   });
  //   // setDidItChange(!didItChange);
  // }

  const deleteItem = async (id) => {
    try {
      const resp = await axios
        .delete("/delete/" + id)
        .then(setDidItChange(!didItChange));
      console.log(resp.data);
    } catch (err) {
      console.error(err);
    }
  };

  // function deleteItem(id) {
  //   axios.delete("/delete/" + id).then(setDidItChange(!didItChange));
  //   // alert("item deleted");
  //   console.log(`Deleted item with id ${id}`);
  //   // setDidItChange(!didItChange);
  // }

  function openUpdate(id) {
    setIsPut(true);
    setUpdatedItem((prevInput) => {
      return {
        ...prevInput,
        id: id,
      };
    });
  }

  function updateItem(id) {
    axios.put("/put/" + id, updatedItem);
    // alert("item updated");
    console.log(`item with id ${id} updated`);
    setDidItChange(!didItChange);
  }

  function handleUpdate(event) {
    const { name, value } = event.target;
    setUpdatedItem((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
    console.log(updatedItem);
  }

  return (
    <div className="App">
      <div className="all-content-minus-footer">
        <Navbar />
        {!isPut ? (
          <div className="main">
            <input
              onChange={handleChange}
              name="title"
              value={item.title}
              placeholder="title"
            ></input>
            <input
              onChange={handleChange}
              name="description"
              value={item.description}
              placeholder="description"
            ></input>
            {/* <input
              onChange={handleChange}
              name="due"
              value={item.dueDate}
              placeholder="due date"
            ></input> */}
            <button onClick={addItem}>ADD ITEM</button>
          </div>
        ) : (
          <div className="main">
            <input
              onChange={handleUpdate}
              name="title"
              value={updatedItem.title}
              placeholder="title"
            ></input>
            <input
              onChange={handleUpdate}
              name="description"
              value={updatedItem.description}
              placeholder="description"
            ></input>
            <button onClick={() => updateItem(updatedItem.id)}>
              UPDATE ITEM
            </button>
          </div>
        )}
        <div className="project-container">
          {items.map((item) => {
            return (
              <div key={item._id} className="project-tile">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <div className="button-container">
                  <button
                    className="update-button"
                    onClick={() => openUpdate(item._id)}
                  >
                    UPDATE
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => deleteItem(item._id)}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            );
            //
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
