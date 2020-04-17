import React from 'react'

class Choosing extends React.Component{

  render(){
    return(
      <div className={['left']}>
        <form className="className" action="index.html" method="post" onSubmit={this.props.weatherMetod}>
          <input type="text" name="city" className={['city']} placeholder="city" defaultValue='Moscow'/>
          <button type="submit" name="button" placeholder="Получить погоду" className={['sub']}>Получить погоду</button>
        </form>
      </div>
    )
  }


}

export default Choosing
