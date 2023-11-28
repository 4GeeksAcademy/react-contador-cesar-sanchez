import React from "react";
import SecondCounter from "./secondcounter.js";



//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({digito1,digito2,digito3,digito4,digito5,digito6}) => {
	return (  

		<div className="container-fluid fs-1 text-white d-flex justify-content-center  mt-3 w-25 gap-2">
			<div className="bg-black fs-1 p-3">
				<i className="fa fa-clock"></i>
			</div>	
				<SecondCounter seconds={digito6}/>
				<SecondCounter seconds={digito5}/>
				<SecondCounter seconds={digito4}/>
				<SecondCounter seconds={digito3}/>
				<SecondCounter seconds={digito2}/>
				<SecondCounter seconds={digito1}/>
				
		</div>
	);
};

export default Home;
