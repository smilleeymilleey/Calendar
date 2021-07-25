import React from 'react'
import "./card.css"


function Card() {
    return (
        <div>
            <div class="card">
            <div class="card-image">
            </div>
            <div class="card-content">
                <div class="media">
                <div class="media-left">
                </div>
                <div class="media-content">
                    <p class="title is-4">John Smith</p>
                    <p class="subtitle is-6">@johnsmith</p>
                </div>
                </div>
                <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br></br>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Card
