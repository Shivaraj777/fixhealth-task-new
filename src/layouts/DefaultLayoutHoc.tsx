import React, { ComponentType } from 'react';

function DefaultLayoutHoc<T extends React.ComponentType<any>>(Components: ComponentType<T>) {
  return (props: React.ComponentProps<T> & React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div style={{
          position: 'relative',
          width: '100%',
          overflowX: 'hidden'
        }}>
            <Components  {...props}/>
        </div>
    )
  }
}

export default DefaultLayoutHoc;

