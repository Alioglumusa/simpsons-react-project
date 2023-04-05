import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import HeadersGoBack from "../headers/HeaderGoBack";

const CharacterDetailPage = () => {
  const api_url = "https://5fc9346b2af77700165ae514.mockapi.io/simpsons";
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  // -------------------------createImageUrl-----------------------------------------------
  const createImageUrl = (path) => {
    console.log("path", path);
    return path.split("png")[0] + "png";
  };

  // -------------------------useEffect----------------------------------------------------
  useEffect(() => {
    if (localStorage.getItem("list")) {
      let resp = JSON.parse(localStorage.getItem("list"));
      resp = resp.find((val) => {
        return val.id === id;
      });
      setCharacter(resp);
    } else {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${api_url}/${id}`);
          setCharacter(response.data);
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }
  }, [id]);

  // -------------------------!character----------------------------------------------------
  if (!character) {
    return <div className="text-white text-center">Loading...</div>;
  }

  return (
    <>
      <HeadersGoBack />

      <div className="flex flex-col items-center justify-center w-full my-20">
        <img
          className="w-1/7 my-5"
          src={createImageUrl(character.avatar)}
          alt={character.name}
        />
        <h1 className="text-white font-black text-lg px-6">{character.name}</h1>
        <h2 className="text-white font-extralight text-sm px-6 m-2">
          {character.job}
        </h2>
        <p className="text-white px-6 w-1/2">{character.description}</p>
        <Link
          className="text-white py-3 px-6 mt-5 bg-gray-400 rounded-lg hover:bg-gray-500 transition-all"
          to="/"
        >
          Back to List
        </Link>
      </div>
    </>
  );
};

export default CharacterDetailPage;
