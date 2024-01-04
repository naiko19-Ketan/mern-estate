import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/sing-up" element={<SignUp />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</BrowserRouter>
	);
}
