import React from 'react';

function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 md:p-8 sm:p-4 p-2 max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-md mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img src="https://via.placeholder.com/150" alt="User" className="rounded-full w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out" />
      <h1 className="text-lg sm:text-xl md:text-xl lg:text-2xl text-blue-800 hover:text-blue-500 my-4 transition-colors duration-300 ease-in-out">John Doe</h1>
      <p className="text-sm sm:text-base md:text-base lg:text-lg text-gray-600">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;