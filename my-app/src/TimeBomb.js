import React, { useState , useEffect } from 'react';


function BombCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
      setTimeout(() => setCount(count + 1), 1000);
  }, [count])

  return (
    <>
        <div>
            <p>You have this long until {count} kaboom</p>
            <div onLoad={() => setCount(count + 1)}>

            </div>
        </div>
    </>
  );
}

export default BombCount;