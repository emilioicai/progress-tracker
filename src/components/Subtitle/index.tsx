import React from 'react';

interface IProps {
  children: React.Component | string;
}

export default (props: IProps) => {
  return (
    <h2
      style={{
        color: '#d0d0d0',
        fontFamily: 'Arial',
        textAlign: 'center'
      }}
    >
      {props.children}
    </h2>
  );
};
