import { useState } from 'react';

export default function NameAge() {
	const [age, setAge] = useState(0);
	function increment() {
		setAge(age + 1);
	}
	function decrement() {
		setAge(age - 1);
	}

	const [name, setName] = useState('');

	return (
		<div>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<br />
			<button onClick={decrement}>-</button>
			<p>{age}</p>
			<button onClick={increment}>+</button>
			<h2>
				My name is {name} and i am {age} years old
			</h2>
		</div>
	);
}
