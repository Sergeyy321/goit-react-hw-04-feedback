import React from 'react';
import PropTypes from 'prop-types';
import { BtnStyled } from './Feedback.styled';

export const Feedback = ({ options, onFeedback }) => {
  return options.map(el => (
    <BtnStyled key={el} onClick={onFeedback}>
      {el} 
    </BtnStyled>
  ));
};

Feedback.propTypes = {
  options: PropTypes.array.isRequired,
  onFeedback: PropTypes.func.isRequired,
};
