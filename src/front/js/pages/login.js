import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [username, setUsername] = useState(""); // 
	const [password, setPassword] = useState(""); 
	const navigate = useNavigate ()

	const handleClick = () => {
		const opts = {
			method: "POST", 
			headers: {
				"Content-Type": "application/json", 
			},
			body: JSON.stringify({
				username: username,
				password: password,

	
			}),
		};

		fetch("https://solid-adventure-jx4vw656qj5fq76q-3001.app.github.dev/api/token", opts)

			.then(resp => {
				if (resp.status === 200) return resp.json();
				else alert("There is an error");
			})
			.then(data => {
				
				console.log(data); localStorage.setItem("jwt-token", data.token);
				navigate ("/private")
			})
			.catch(error => {
				console.error("Error!", error);
			});
	};

	return (
		<div className="text-center mt-5">
			<h1>Login</h1>
			<div>
				<input type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)} /> 
				<input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} /> 
				<button onClick={handleClick}>Login</button>
			</div>
		</div>
	);
};