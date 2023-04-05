import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateList } from "../../redux/listItemSlice";
import { useNavigate } from "react-router-dom";
import HeadersGoBack from "../headers/HeaderGoBack";

const AddCharacterPage = () => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [job, setJob] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // -------------------------setFormChange--------------------
  const handleNameChange = (event) => {
    setName(event.target.value);
    // console.log("name", name);
  };

  const handleAvatarChange = (event) => {
    setAvatar(event.target.value);
    // console.log("avatar", avatar);
  };

  const handleJobChange = (event) => {
    setJob(event.target.value);
    // console.log("job", job);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    // console.log("gender", gender);
  };

  // -------------------------FormAdd--------------------
  const handleAddCharacter = () => {
    const newCharacter = {
      name: name,
      avatar: avatar,
      job: job,
      description: description,
      id: Math.floor(Math.random() * 100 + 90).toFixed(0),
    };
    dispatch(updateList(newCharacter));
    navigate("/");
  };

  return (
    <>
      <HeadersGoBack />

      <div className="flex flex-col items-center justify-center w-full mt-16">
        <form className=" rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4 grid grid-cols-2">
            <label
              className="inline text-white text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name Surname
            </label>
            <input
              className="inline shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name Surname"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>

          <div className="mb-6 grid grid-cols-2">
            <label
              className=" text-white text-sm font-bold mb-2"
              htmlFor="job-title"
            >
              Job Title
            </label>
            <input
              className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Job Title"
              id="job"
              value={job}
              onChange={handleJobChange}
              required
            />
          </div>

          <div className="mb-6 grid grid-cols-2">
            <label
              className=" text-white text-sm font-bold mb-2"
              htmlFor="about"
            >
              About Her/Him
            </label>
            <textarea
              className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="About Her/Him"
              rows="4"
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              required
            ></textarea>
          </div>

          <div className="mb-6 grid grid-cols-2">
            <label
              className=" text-white text-sm font-bold mb-2"
              htmlFor="image-url"
            >
              Image Url
            </label>
            <input
              className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Image Url"
              id="avatar"
              value={avatar}
              onChange={handleAvatarChange}
              required
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              className="border-2 border-blue-800 text-white font-bold py-2 px-20 rounded-lg hover:border-blue-600 transition-colors"
              type="button"
              onClick={handleAddCharacter}
              required
            >
              Add Character
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddCharacterPage;
