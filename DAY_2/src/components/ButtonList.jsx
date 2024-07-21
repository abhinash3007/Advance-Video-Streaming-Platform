import React from 'react';
import Button from './Button';

const ButtonList = () => {
  return (
    <div className='m-2 flex overflow-x-auto no-scrollbar'>
      <Button name="All" />
      <Button name="Sports" />
      <Button name="News" />
      <Button name="Movies" />
      <Button name="Entertainment" />
      <Button name="Gaming" />
      <Button name="Technology" />
      <Button name="Live" />
      <Button name="Javed Ali" />
      <Button name="Badshah" />
    </div>
  );
};

export default ButtonList;
