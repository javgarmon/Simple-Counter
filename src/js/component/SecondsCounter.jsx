import React from "react";
import PropTypes from "prop-types";


//create your first component
const SecondsCounter = ({seconds1, seconds2, seconds3, seconds4, seconds5, seconds6}) => {
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
						<p id="p">{seconds6}</p>
					</div>
				</div>

				<div className="card" style={{width: "5rem"}}>
					<div className="card-body">
						<p id="p">{seconds5}</p>
					</div>
				</div>

				<div className="card" style={{width: "5rem"}}>
					<div className="card-body">
						<p id="p">{seconds4}</p>
					</div>
				</div>	

				<div className="card" style={{width: "5rem"}}>
					<div className="card-body">
						<p id="p">{seconds3}</p>
					</div>
				</div>						
			
				<div className="card" style={{width: "5rem"}}>
					<div className="card-body">
						<p id="p">{seconds2}</p>
					</div>
				</div>						
			
				<div className="card" style={{width: "5rem"}}>
					<div className="card-body">
						<p id="p">{seconds1}</p>
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
	seconds4: PropTypes.number,
	seconds5: PropTypes.number,
	seconds6: PropTypes.number
}

export default SecondsCounter;
