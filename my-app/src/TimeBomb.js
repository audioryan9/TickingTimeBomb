import React, { useState , useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import timeBomb from './timeBomb.css'

function BombCount() {
  const [count, setCount] = useState(500);

  setTimeout(() => setCount(count - 1), 500);

  useEffect(() => {
  }, [count])

            let myTimer= [" " , " ", " ", " "];
            for (let i=0;i<myTimer.length;i++){

}


let one = count % 10;
let two = Math.floor((count % 100) / 10);
let three = Math.floor((count % 1000) / 100)

return (
    <>
        <span class="fa-stack fa-lg">
            <i class="fa fa-bomb fa-5x">{count}</i>
            <i class="fa fa-frown icon-white"></i>
        </span>
        <span class="fa-stack fa-lg">
            <i class="fa fa-bomb fa-5x">{three}</i>
            <i class="fa fa-frown icon-white"></i>
        </span>
        <span class="fa-stack fa-lg">
            <i class="fa fa-bomb fa-5x">{two}</i>
            <i class="fa fa-frown icon-white"></i>
        </span>
        <span class="fa-stack fa-lg">
            <i class="fa fa-bomb fa-5x">{one}</i>
            <i class="fa fa-frown icon-white"></i>
        </span>
            <div onLoad={() => setCount(count + 1)}>
            {/*<p>You have this long until  {count}  {three} {two} {one} kaboom</p>*/}
    </div>
    </>
  );
}

export default BombCount;