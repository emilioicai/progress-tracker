import React from 'react';

export interface IProps {
  size?: number;
  progress?: number;
  children?: any;
}

const ProgressCircle = (props: IProps) => {
  const size = props.size || 400;
  const progress = props.progress || 0;
  const strokeWidth = size * 0.02;
  const R = size / 2 - strokeWidth / 2;
  const r = R * 0.8;
  const dashArray = 2 * Math.PI * r;

  const pipX = R + r * Math.cos(progress * 2 * Math.PI / 100) + strokeWidth / 2;
  const pipY = R + r * Math.sin(progress * 2 * Math.PI / 100) + strokeWidth / 2;

  return (
    <div
      style={{
        alignSelf: 'center',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        transform: 'rotate(-90deg)'
      }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill={'#002c6b'}
          stroke={'#92e0ff'}
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={'#fff'}
          strokeWidth={strokeWidth}
          strokeDasharray={dashArray + ''}
          strokeDashoffset={dashArray * (1 - progress / 100) + ''}
          strokeLinecap="round"
        />
        <circle
          cx={pipX}
          cy={pipY}
          r={r / 20}
          fill={'#fff'}
          stroke={'rgba(255, 255, 255, 0.4)'}
          strokeWidth={r / 10}
        />
      </svg>
      <div
        style={{
          alignItems: 'center',
          alignSelf: 'center',
          flex: 1,
          justifyContent: 'center',
          position: 'absolute',
          transform: 'rotate(90deg)'
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default ProgressCircle;
