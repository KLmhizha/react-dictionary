import React from "react";
import './App.css';
import Dictionary from "./Dictionary";




export default function App() {
	return (
		<div className="App">
			<main>
			<Dictionary />
			</main>
			<footer>
				<i className="fa-brands fa-react icon"></i> {""}
				<span className="link">Built by Lucia Mhizha and it is open-sourced.</span>
			</footer>
		</div>
	);
}
