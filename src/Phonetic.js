import React from "react";
import "./Phonetic.css";




export default function Phonetic(props) {
	let audio = new Audio(props.data.audio);

	function sound() {
		audio.play();
	}

	return (
		<div className="Phonetic">
			<i className="fas fa-volume-up" onClick={sound}></i>
			<span className="text">{props.data.text}</span>
		</div>
	);
}