import React, { useState , useEffect } from 'react';
import BombCount from "./TimeBomb.js"
        // let kaBoomStack= "LayoutBomb"

function LayoutBomb() {
    return(
<>
<div class="media">
  <img src="..." class="mr-3" alt="..."img/>
  <div id="kaBoom1" class="media-body">
    <h5 class="mt-0">{BombCount}</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

    <div class="media mt-3">
      <a class="mr-3" href="#">
        <img src="..." class="mr-3" alt="..." img/>
      </a>
      <div id="kaBoom1" class="media-body">
        <h5 class="mt-0">{BombCount}</h5>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </div>
    </div>
  </div>
</div>
<div class="media">
  <img src="..." class="mr-6" alt="..."img/>
  <div id="kaBoom2" class="media-body">
    <h5 class="mt-3">Media heading</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

    <div class="media mt-3">
      <a class="mr-3" href="#">
        <img src="..." class="mr-6" alt="..." img/>
      </a>
      <div id="kaBoom2" class="media-body">
        <h5 class="mt-3">Media heading</h5>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </div>
    </div>
  </div>
</div>
</>


     )};

export default LayoutBomb;