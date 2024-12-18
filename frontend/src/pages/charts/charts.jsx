import React, { useEffect } from 'react'

export default function Charts() {

    const ChartsData = async() =>{
        const url = 'https://shazam.p.rapidapi.com/charts/list';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3b2c8185a3msh44fdd6f55848e3ep10eef1jsnacc300209e24',
		'x-rapidapi-host': 'shazam.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}
    }

    useEffect(() =>{
        ChartsData()
    },[])

  return (
    <div className='flex flex-col items-center p-6 md:p-10 lg:py-20'>charts</div>
  )
}
