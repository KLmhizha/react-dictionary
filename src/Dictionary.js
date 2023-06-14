import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import { ThreeDots } from "react-loader-spinner";
import "bootstrap/dist/css/bootstrap.min.css";




export default function Dictionary(props) {
let [keyword, setKeyword] = useState("polite");
let [results, setResults] = useState(null);
let [loaded, setLoaded] = useState(false);

function displayMeaning(response) {
setResults(response.data[0]);
setLoaded(true);
}

function search() {
	let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
	axios.get(apiUrl).then(displayMeaning);
}


function handleSubmit(event) {
	event.preventDefault();
	search();
}

function updateMeaning(event) {
	setKeyword(event.target.value);
}

if (loaded) {
	return (
		<div className="Dictionary">
			<h1>Dictionary</h1>
			<p className="paragraph">Search for a word to get the meaning.</p>
			<section>
				<form onSubmit={handleSubmit}>
					<div className="row text-center">
						<div className="col-md-6">
						<input type="search" onChange={updateMeaning} className="form" placeholder="Type a word & press enter...."/>
					</div>
					</div>
				</form>
			</section>
			<Results data={results}/>
		</div>
	);
} else {
	 search();
		return (
			<ThreeDots
			color="#5e63b6"
			height={100}
			width={100}
			ariaLabel="loading"
			/>
		);		
}

}