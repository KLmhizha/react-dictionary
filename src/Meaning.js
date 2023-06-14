import React from "react";
import "./Meaning.css";




export default function Meaning(props) {
	return (
		<div className="Meaning">
			<h3>{props.data.partOfSpeech}.</h3>
			{props.data.definitions.map(function (definition, index) {
				return (
					<div key={index}>
						<p className="definition">{definition.definition}</p>
						<p className="example">{definition.example}</p>
					</div>
				);
			})}
				</div>
			);
}