import React, { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ selectedColor, setselectedColor ] = useState("red");
	const [divCount, setDivCount] = useState(0);

	const addNewDiv = () => {
	  setDivCount(divCount + 1);
	};
	const handleButtonClick = () => {
		
		const colors = ["red", "yellow", "green","extra"];
		const currentIndex = colors.indexOf(selectedColor);
		const nextIndex = (currentIndex + 1) % colors.length;
		setselectedColor(colors[nextIndex]);

	};	
	return (
		<div className="">
			<div className="traffic-light">
				<div 
					onClick={() => setselectedColor("red")}
					className={	
						"light red" + (selectedColor ==="red" ? " glow-red" : "")}>

				</div>
				<div
					onClick={() => setselectedColor("yellow")} 
					className={
						"light yellow" + (selectedColor ==="yellow" ? " glow-yellow" : "")
					}>		
				</div>
			
				<div
					onClick={() => setselectedColor("green")}
					className={
						"light green" + (selectedColor ==="green" ? " glow-green" : "")}>		
				</div>
				<div>
					{Array.from({ length: divCount }, (_, index) => (
					<div  onClick={() => setselectedColor("extra")}
					className={
						"light extra" + (selectedColor ==="extra" ? " extra-glow" : "")}>	
					</div>
				))}
			</div>

			</div>
			
			
			<div className="">
				<button 
				onClick={handleButtonClick}
				className={
					"btn btn-danger"  }>
						click me</button>
				<button 
						onClick={() => addNewDiv(setselectedColor("extra"))}
						className={"btn btn-success"}>
							extra light</button>
	
			</div>
			
		</div>
		
	);
};

export default Home;
