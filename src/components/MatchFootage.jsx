
import React from 'react';

const MatchFootage = () => {
  const players = [
    'Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 
    'Player 6', 'Player 7', 'Player 8', 'Player 9', 'Player 10', 
    'Player 11', 'Player 12', 'Player 13', 'Player 14', 'Player 15'
  ];

  return (
    <div className="flex bg-white shadow-md rounded-lg p-6 m-4">
      {/* Players List */}
      <div className="w-17/4 border-r border-gray-200 pr-4">
        <h2 className="text-xl font-semibold mb-4">Match Footage</h2>
        <h3 className="text-lg mb-2">Players</h3>
        <ul className="space-y-2 max-h-96 overflow-y-scroll">
          {players.map((player, index) => (
            <li key={index} className="flex justify-between items-center p-2 bg-gray-100 rounded-lg">
              <span className="font-medium">{index + 1}</span>
              <span>{player}</span>
              <span className="text-green-500">→</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Match Footage History */}
      <div className="flex-1 pl-4">
        
        
      </div>
     
    </div>
  );
};

export default MatchFootage;
