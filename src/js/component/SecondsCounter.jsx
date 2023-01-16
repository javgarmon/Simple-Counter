import React from "react";
import PropTypes from "prop-types";


//create your first component
const SecondsCounter = ({seconds1, seconds2, seconds3}) => {
	return (
		<>
			<div className="container card-group text-center">
				<div className="card" style={{width: "5rem"}}>
					<div id="boxClock" className="card-body">
						<i id="clock" className="far fa-clock"></i>
					</div>
				</div>	

				<div className="card" style={{width: "5rem"}}>
					<div className="card-body">
						<h1 id="h1">{seconds3}</h1>
					</div>
				</div>						
			
				<div className="card" style={{width: "5rem"}}>
					<div className="card-body">
						<h1 id="h1">{seconds2}</h1>
					</div>
				</div>						
			
				<div className="card" style={{width: "5rem"}}>
					<div className="card-body">
						<h1 id="h1">{seconds1}</h1>
					</div>
				</div>						
			</div>
		</>
	);
};

SecondsCounter.propTypes = {
	seconds1: PropTypes.number,
	seconds2: PropTypes.number,
	seconds3: PropTypes.number,
}

export default SecondsCounter;
