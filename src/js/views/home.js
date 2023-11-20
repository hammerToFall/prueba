import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CharacterList from "../component/characterList";

export const Home = () => (
	<div className="container text-center mt-5">
		<div className="row justify-content-center">
			<div className="col-10 ">
				<div className="text-center mt-3">
					<CharacterList />
				</div>
			</div>
		</div>
	</div>
);
