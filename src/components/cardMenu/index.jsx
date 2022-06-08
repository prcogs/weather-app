import { useWeather } from 'utils/hooks/context/use-weather'

import SearchBar from 'components/searchBar'
import WeatherToday from 'components/weatherToday'

import './cardMenu.scss'


const CardMenu = () => {
	const { loading } = useWeather()

	return (
		<div className="cardMenu">
			<SearchBar />

			{!loading ? <WeatherToday /> : <div className="loader" />}
		</div>
	)
}

export default CardMenu
