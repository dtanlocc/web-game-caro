import React from 'react';
import PropTypes from 'prop-types';
import './RoomTable.scss';

function RoomTable({ rooms, onRoomClick }) {
  const handleMouseEnter = (event) => {
    event.target.parentNode.classList.add('highlighted');
  };

  const handleMouseLeave = (event) => {
    event.target.parentNode.classList.remove('highlighted');
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Status</th>
          <th>Player 1</th>
          <th>Player 2</th>
        </tr>
      </thead>
      <tbody>
        {rooms.map((room) => (
          <tr
            key={room.id}
            onClick={() => onRoomClick(room)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <td>{room.id}</td>
            <td>{room.status}</td>
            <td>{room.player1}</td>
            <td>{room.player2}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

RoomTable.propTypes = {
  rooms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
      player1: PropTypes.string.isRequired,
      player2: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRoomClick: PropTypes.func.isRequired,
};

export default RoomTable;

