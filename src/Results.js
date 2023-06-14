import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";


export default function Results(props) {
if (props.data) {
	return (
		<div className="Results">
			<section>
				<h2>{props.data.word}</h2>
				<br />
				{props.data.phonetics.map(function (phonetic, index) {
					return (
						<div key={index}>
							<Phonetic data={phonetic} />
						</div>
					);
				})}
			</section>
			{props.data.meanings.map(function (meaning, index) {
				return (
					<div key={index}>
						<Meaning data={meaning}/>
					</div>
				);
			})}
		</div>
	);
} else {
	return null;
}
}