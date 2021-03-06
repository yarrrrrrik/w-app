import React from 'react'
// import ReactDOM from 'react-dom'
// this.props.showStory(item)
class Story extends React.Component{

  render(){

      return(
        <div className="story">
        {this.props.wArray.map((item, i) => {
            return (
              <button key={i} city={item} className='storyButton' onClick={() => this.props.showStory(item)} >{item}</button>
            )
        })}
        </div>
      )
    }

  }


export default Story
