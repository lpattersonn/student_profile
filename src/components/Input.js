import React from "react";
import "../Style/Input.css"

export default function Input() {
  return (
    <div id="imput_div">
      <form>
        <input className="imput" type="text"  placeholder="Search by name" />
      </form>
    </div>
  )
}