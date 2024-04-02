import { useState } from 'react'
import { Link } from "react-router-dom"
import './css/shard.css'

// Polygon Generator: https://bennettfeely.com/clippy/
export function Shard({ label = "", linkTo = "", points = "", margin = 0}) {
    if(label == "")
        label = linkTo;

    return (
        <>
        <Link to={linkTo} style={{ clipPath: "polygon(" + points + ")", marginBottom: margin + "em" }} className="shard">
            <div className='shard-shadow' style={{ clipPath: "polygon(" + points + ")"}} ></div>
            <p>{label}</p>
        </Link>
    </>
  )
}

export function ShardSpacer({ height = 0 }) {
    return (
    <>
        <div className='shard-spacer' style={{ height: height + "em" }} ></div>
    </>
  )
}
