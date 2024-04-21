import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Header from "./components/Header";
import SignOut from "./Pages/SignOut";

export default function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/sing-out" element={<SignOut />} />
				<Route path="/about" element={<About />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
		</BrowserRouter>
	);
}
