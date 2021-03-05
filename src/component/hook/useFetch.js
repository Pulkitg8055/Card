import React, { useEffect, useState } from 'react';

export default function useFetch(page, setCol, Col) {
	useEffect(() => {
		fetch('colleges.json')
			.then((res) => res.json())
			.then(
				(result) => {
					setCol([...Col, ...result.colleges]);
					console.log(Col);
				},
				(error) => {
					console.log(error);
				}
			);
	}, [page]);

	return [Col, setCol];
}
