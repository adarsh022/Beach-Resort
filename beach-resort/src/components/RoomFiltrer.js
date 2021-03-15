import React from "react";
import { useContext } from "react";
import { RoomConsumer, RoomContex } from "../Context";
import Title from "../components/Title";

export default function RoomFiltrer() {
  const context = useContext(RoomConsumer);
  const {
    handleChange,
    tyle,
    capacity,
    price,
    minPrice,
    MaxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;

  return <section className="filter-container"></section>;
}
