import React from "react";
import { useContext } from "react";
import { RoomConsumer, RoomContex } from "../Context";
import Title from "../components/Title";

// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export default function RoomFiltrer({ rooms }) {
  const context = useContext(RoomConsumer);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    MaxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;

  // get unique type
  let types = getUnique(rooms, "type");
  // add all
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  // get unique capacity
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/*Select type*/}
        <div className="form-group">
          <lable htmlFor="type">Room Type</lable>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/*End of select type*/}
        {/*Guest*/}
        <div className="form-group">
          <lable htmlFor="capacity">Guest</lable>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/*End of Guest*/}
        {/*room price */}
        <div className="form-group">
          <lable htmlFor="price">Room Price ${price}</lable>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={MaxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/*end of room price */}
      </form>
    </section>
  );
}
