import './App.css';
import Card from './component/Card';
import { useEffect, useState } from 'react';
import useScroll from './component/hook/useScroll';
import useFetch from './component/hook/useFetch';

function App() {
	const scrollPosition = useScroll();
	const [page, setpage] = useState(0);

	useEffect(() => {
		if (scrollPosition >= document.body.offsetHeight - window.innerHeight) {
			setpage(page + 1);
		}
	}, [scrollPosition]);
	const [Col, setCol] = useState([]);

	useFetch(page, setCol, Col);

	let user;
	const getData = async () => {
		fetch('colleges.json')
			.then((res) => res.json())
			.then(
				(result) => {
					// console.log(result.colleges[0]);
					setCol([...result.colleges]);
					console.log(Col);
				},
				(error) => {
					console.log(error);
				}
			);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className='App'>
			<h3>Colleges in North India</h3>

			{Col.map((item, i) => (
				<Card item={item} key={i} />
			))}
			{console.log(scrollPosition)}
		</div>
	);
}

export default App;
