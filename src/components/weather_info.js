import React from 'react'

class WInfo extends React.Component {
  render() {
    return (

      <div className={['right']}>
        {this.props.weatherState.city &&
          <div className={'right right_in'}>
          <div className={['city_info']}>
            <h1>{this.props.weatherState.city}</h1>
          </div>
          <div className={['w_icon']}><img src={'https://www.weatherbit.io/static/img/icons/'+this.props.weatherState.weather.icon + '.png'} alt="картинка"/></div>
          <div>
            <p>Температура: {this.props.weatherState.temp}
              °C</p>
          </div>
          <div>
            <p>Ветер: {this.props.weatherState.wind}
              М/С</p>
          </div>
          <div>
            <p>Ультрафиолет: {this.props.weatherState.uv}</p>
          </div>
          <div>
            <p>Закат: {this.props.weatherState.sunset}</p>
          </div>
          </div>
        }
        {this.props.weatherState.error &&
          <p>Неправильно</p>
        }
        
        </div>

    );
  }
}

export default WInfo
