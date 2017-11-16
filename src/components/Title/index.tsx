import React from 'react';

interface IProps {
  children: React.Component | string;
}

export default (props: IProps) => {
  return (
    <h1 style={{ color: '#f0f0f0', fontFamily: 'Arial', textAlign: 'center' }}>
      {props.children}
    </h1>
  );
};
