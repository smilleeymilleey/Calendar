import React from 'react'
import './ToDo'

function ToDo() {
    return (
        <nav class="panel">
        <p class="panel-heading">
          To Do List
        </p>
        <div class="panel-block">
        </div>
        <a class="panel-block is-active">
            <input className="todoItem" placeholder="item"></input>  
        </a>
        <div class="panel-block">
          <button class="button is-link is-outlined is-fullwidth">
            + Add More 
          </button>
        </div>
      </nav>
    )
}

export default ToDo
