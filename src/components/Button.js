import React from 'react'
import PropTypes from 'prop-types'

//We make a button component so that we can have different buttons of different colors and words
const Button = ({color, text, onClick}) => {
    return (
        <button 
            onClick={onClick} 
            style={{backgroundColor: color}} 
            className='btn'
        > 
            {text}
        </button>
  )
}

Button.defaultProps = {
    color:'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button