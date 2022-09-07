import "./App.css";
import MainComponent from "./components/main-component";

function App() {
	const title = "Hello React App";
	const title2 = "Monkey";

	return (
		<div className="App">
			<h1>{title}</h1>
			<h2>this is my first react app</h2>
			<MainComponent title={title2} />
		</div>
	);
}

export default App;
