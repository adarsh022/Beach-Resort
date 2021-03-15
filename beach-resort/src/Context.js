import React, { Component } from "react";
import items from "./data";

const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  // getting the data

  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    const maxPrice = Math.max(...items.map((item) => item.price));
    const maxSize = Math.max(...items.map((item) => item.size));

    this.setState({
      rooms, //or we can alse write      rooms : rooms      ES7 notation
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxSize,
      maxPrice,
    });
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  handleChange = (event) => {
    const type = event.target.type;
    const name = event.target.type;
    const value = event.target.type;
    console.log(type, name, value);
  };

  filterRooms = () => {
    console.log("hello");
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

// the below code is for accessing the context in functional components

export function withRoomConsumer(Component) {
  return function consumerRapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}

// till hear

export { RoomConsumer, RoomContext, RoomProvider };
