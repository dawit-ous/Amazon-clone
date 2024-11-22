import React from 'react'
import { AiOutlineMenu } from "react-icons/ai"
import classes from './Header.module.css'
function LowerHeader() {
  return (
    <div className={classes.lower__container}>
      <ul>
        <li>
          <AiOutlineMenu />

          <p>All</p>
        </li>
        <li>today's Deals</li>
        <li> costumer services</li>
        <li> Registers</li>
        <li>gift cards</li>
        <li>sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader
