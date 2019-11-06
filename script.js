

const widget = document.querySelector('.widget')
const widgetCont = document.querySelector('.widget-container')


const url = `http://api.weatherstack.com/current?access_key=ffb5456738760ecd2ec82f0ca2ed1654&query=New%20York&units=f`
// const params = {
// 	access_key: 'ffb5456738760ecd2ec82f0ca2ed1654',
// 	query: 'New York'
// }



const main = async () => {
	const response = await axios.get(`${url}`)
	const aboveTitleDiv = document.createElement('div')
	const aboveTitle = document.createElement('h6')
	
	aboveTitle.innerHTML = response.data.location.localtime
	aboveTitleDiv.appendChild(aboveTitle);
	aboveTitleDiv.classList.add('time')
	widgetCont.appendChild(aboveTitleDiv);


	const titleDiv = document.createElement('div')
	const title = document.createElement('h5')
	title.innerHTML = 'Weather'
	titleDiv.appendChild(title)
	titleDiv.classList.add('weather-title')
	// widget.appendChild(titleDiv)
	
	
	const locationDiv = document.createElement('div')
	const location = document.createElement('h5')
	location.innerHTML = response.data.request.query
	locationDiv.appendChild(location)
	locationDiv.appendChild(titleDiv)
	locationDiv.classList.add('location')
	widget.appendChild(locationDiv)



	const weatherImgsDiv = document.createElement('div');
	weatherImgsDiv.classList.add('weatherInfo')
	widgetCont.appendChild(weatherImgsDiv)
	const sunDiv = document.createElement('div')
	sunDiv.classList.add('sun')
	const image = document.createElement('img')
	const img = response.data.current.weather_icons
	image.src=img

	sunDiv.appendChild(image)
	image.classList.add('moon')
	weatherImgsDiv.appendChild(image);

	
	

	// const tempDiv = document.createElement('div')
	// tempDiv.classList.add('temperature')
	const temp = document.createElement('h2')
	const tmp1 = response.data.current.temperature + '° ' + response.data.request.unit + " " + 'Clear'
	temp.innerHTML = tmp1
	// tempDiv.appendChild(temp)
	// sunDiv.appendChild(tempDiv)
	weatherImgsDiv.appendChild(temp)




	// const extraDiv = document.createElement('div')
	// extraDiv.classList.add('winds')
	// const wind = tmp2 + tmp3 + tmp4
	// winds = document.createElement('h2')
	// winds.innerHTML = wind
	// extraDiv.appendChild(winds)
	// weatherImgsDiv.appendChild(extraDiv)
	

	


	

	




}
 
window.onload = main()
