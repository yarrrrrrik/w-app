import React from 'react'
import ReactDOM from 'react-dom'
import WInfo from './components/weather_info'
import Choosing from './components/city_choose'
import Story from './components/Story'

const API_KEY = '6a19b8c5ec2a490bac891908a07667d0'

class App extends React.Component {

  state = {
    city: undefined,
    weather: undefined,
    temp: undefined,
    wind: undefined,
    uv: undefined,
    sunset: undefined,
    error:undefined,
  }

  weatherArr = []

  get_weather = async (e) => {
    try {
      e.preventDefault()
    } catch (e) {}
    const city = e.target.city.value

    const api_url = await fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=${API_KEY}`)
    let data = await api_url.json()
    try {
      data = data.data[0]
      data.sunset = data.sunset.split(':')
      data.sunset[0] = + data.sunset[0] + 3
      data.sunset = data.sunset.join(':')

      // https://www.weatherbit.io/static/img/icons/t01d.png

      this.setState({
        city: data.city_name,
        weather: {
          icon: data.weather.icon,
          code: data.weather.code,
          description: data.weather.description
        },
        temp: data.temp,
        wind: data.wind_spd,
        uv: data.uv,
        sunset: data.sunset
      })


    } catch (e) {
      this.setState({
        error:true,
      })
    }
    if(e.currentTarget){
      await this.makingStory()
    }
  }

  statesArr = []

  makingStory = () => {
       this.statesArr.push(this.state.city);
      }

  showingStory = (city) => {
    const huita = {
      target:{city:{value:''}} // очень жесткие костыли
    }
    huita.target.city.value = city
    this.get_weather(huita)
  }

  render() {
    return (<div className={['block']} >
      <Choosing weatherMetod={this.get_weather} makeStory={this.makingStory}/>
      <WInfo weatherState={this.state}/>
      <Story wArray={this.statesArr} showStory={this.showingStory} />
    </div>)
  }
};

export default App;
