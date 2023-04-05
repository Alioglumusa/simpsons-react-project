import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import HeadersSweetHome from "../headers/HeaderSweetHome";
import { updateList } from "../../redux/listItemSlice";

const ListPage = () => {
  const api_url = "https://5fc9346b2af77700165ae514.mockapi.io/simpsons";
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const formList = useSelector((state) => state.list.val);
  const dispatch = useDispatch();
  // -------------------------useEffect----------------------------------------------------
  useEffect(() => {
    if (localStorage.getItem("list")) {
      let resp = JSON.parse(localStorage.getItem("list"));
      setCharacters(resp);
      addRedux();
    } else {
      const fetchData = async () => {
        try {
          const response = await axios.get(api_url);
          setCharacters(response.data);
          localStorage.setItem("list", JSON.stringify(response.data));
          addRedux();
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }
  }, []);

  // -------------------------addRedux----------------------------------------------------
  const addRedux = () => {
    if (formList) {
      setCharacters((old) => [...old, formList]);
      appendToStorage("list", JSON.stringify(formList));
      dispatch(updateList(0))
    }
  };

  function appendToStorage(name, data) {
    let old = JSON.parse(localStorage.getItem(name));
    data = JSON.parse(data);
    data = [data];
    if (old === null) old = "";
    let newData = old.concat(data);
    localStorage.setItem(name, JSON.stringify(newData));
  }

  // -------------------------createImageUrl----------------------------------------------------
  const createImageUrl = (path) => {
    return path.split("png")[0] + "png";
  };

  // -------------------------DataControls----------------------------------------------------
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortOrder = () => {
    const sortedChars = [...filteredCharacters].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

    setCharacters(sortedChars);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const refreshData = () => {
    localStorage.removeItem("list");
    window.location.reload();
  };

  // ------------------------------ Up-Down-Delete---------------------------------------
  const handleMoveUp = (index) => {
    const newCharacters = [...characters];
    if (index === 0) {
      return;
    }
    [newCharacters[index - 1], newCharacters[index]] = [
      newCharacters[index],
      newCharacters[index - 1],
    ];
    setCharacters(newCharacters);
    localStorage.setItem("list", JSON.stringify(newCharacters));
  };

  const handleMoveDown = (index) => {
    const newCharacters = [...characters];
    if (index === newCharacters.length - 1) {
      return;
    }
    [newCharacters[index], newCharacters[index + 1]] = [
      newCharacters[index + 1],
      newCharacters[index],
    ];
    setCharacters(newCharacters);
    localStorage.setItem("list", JSON.stringify(newCharacters));
  };

  const handleDelete = (id) => {
    const newCharacters = characters.filter((character) => character.id !== id);
    setCharacters(newCharacters);
    localStorage.setItem("list", JSON.stringify(newCharacters));
  };

  // -------------------------------------------------------------------------------
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ------------------------------ Droppable---------------------------------------
  const dragEndFunction = (res) => {
    const items = Array.from(filteredCharacters);
    const [reorderedItem] = items.splice(res.source.index, 1);
    items.splice(res.destination.index, 0, reorderedItem);

    setCharacters(items);
    localStorage.setItem("list", JSON.stringify(items));
  };

  return (
    <>
      <HeadersSweetHome />

      <div className="flex justify-center items-center my-5 ">
        <input
          className="border-4"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button
          className="text-white rounded-xl bg-gray-400 p-2 mx-2"
          onClick={handleSortOrder}
        >
          {sortOrder === "asc" ? "A-Z" : "Z-A"}
        </button>
        <button
          className="text-white rounded-xl bg-gray-400 p-2 mx-2"
          onClick={refreshData}
        >
          Refresh Data🔃
        </button>
      </div>

      <DragDropContext onDragEnd={dragEndFunction}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              className="droppable "
              id="droppable"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {filteredCharacters.map((character, index) => (
                <Draggable
                  key={character.id}
                  draggableId={character.id}
                  index={index}
                >
                  {(provided) => (
                    <div
                      className="flex justify-between items-center py-7 px-5 "
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div className="text-white grid gap-x-2 grid-flow-col cursor-pointer">
                        <Link to={`/character/${character.id}`}>
                          {index + 1}
                        </Link>
                        <img
                          className="inline w-14"
                          src={createImageUrl(character.avatar)}
                          alt={character.name}
                        />
                        <Link to={`/character/${character.id}`}>
                          {character.name}
                        </Link>
                      </div>

                      <div className="grid gap-x-2 grid-flow-col">
                        <button onClick={() => handleMoveUp(index)}>🔼</button>
                        <button onClick={() => handleMoveDown(index)}>
                          🔽
                        </button>
                        <button onClick={() => handleDelete(character.id)}>
                          🗑
                        </button>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default ListPage;
