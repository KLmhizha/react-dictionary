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
				<span className="link">Built by Lucia Mhizha and it is <a href="https://github.com/KLmhizha/react-dictionary.git" className="git-hub-link" target="_blank" rel="noreferrer">open-sourced.</a></span>
			</footer>
		</div>
	);
}
