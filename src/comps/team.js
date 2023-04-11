import PropTypes from 'prop-types';
import React from 'react';

const TeamCard = ({ image, name, title, email, phone }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img className="h-56 w-full object-cover" src={image} alt={name} />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <p className="text-red-500 text-base mb-2">{title}</p>
        <p className="text-red-500 text-base mb-2">{email}</p>
        <p className="text-red-500 text-base">{phone}</p>
        <a href="https://github.com/your-username">Link to my GitHub</a>
      </div>
    </div>
  );
};
TeamCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};




export default TeamCard;





