import React from "react";
import RoomFiltrer from "./RoomFiltrer";
import RoomList from "./RoomList";
import { withRoomConsumer } from "../Context";
import Loading from "./Loading";

function RoomConteiner({ context }) {
  const { rooms, loading, sortedRooms } = context;

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <RoomFiltrer rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomConteiner);

// use the below code if the highrer order function is not created in the Context.js {withRoomConsumer}

// import React from "react";
// import RoomFiltrer from "./RoomFiltrer";
// import RoomList from "./RoomList";
// import { RoomConsumer } from "../Context";
// import Loading from "./Loading";

// export default function RoomContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         const { rooms, loading, sortedRooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <>
//             hello from room Container
//             <RoomFiltrer rooms={rooms} />
//             <RoomList rooms={sortedRooms} />
//           </>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
