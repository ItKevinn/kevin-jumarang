import React from 'react'

import PropTypes from 'prop-types'

import OutlineButton from './outline-button'
import './place-card.css'

const PlaceCard = (props) => {
  return (
    <div className={`place-card-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image}
        className="place-card-image"
      />
      <div className="place-card-container1">
        <span className="place-card-text">{props.city}</span>
        <span className="place-card-text1">{props.description}</span>
        <OutlineButton button1="Discover place"></OutlineButton>
      </div>
    </div>
  )
}

PlaceCard.defaultProps = {
  rootClassName: '',
  image: '/playground_assets/img-4372-300w.jpg',
  image_alt: 'image',
  city: 'City Name',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
}

PlaceCard.propTypes = {
  rootClassName: PropTypes.string,
  image: PropTypes.string,
  image_alt: PropTypes.string,
  city: PropTypes.string,
  description: PropTypes.string,
}

export default PlaceCard
