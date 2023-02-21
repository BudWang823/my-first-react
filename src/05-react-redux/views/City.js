import React, { Component } from 'react'
import { connect } from 'react-redux'
import { upDateCityName } from '../redux/actionCreator/CityActions'
import store from '../redux/store'
import './css/City.css'
class City extends Component {

  state = {
    cityList: ['北京', '上海', '广州', '深圳', '武汉', '南宁', '运城', '太原', '石家庄', '郑州', '菏泽', '长春', '长沙', '常州', '杭州', '宁波', '厦门'],
    curCity: ''
  }
  componentDidMount() {

    this.setState({ curCity: store.getState().CityReducer.cityName })
    // store.subscribe(() => {
    // this.setState({curCity:store.getState().CityReducer.cityName})
    // })
  }
  render() {
    const { curCity, cityList } = this.state
    return (
      <div className='City'>
        <div>当前城市: <span className='curCity'>{curCity}</span></div>
        <ul className='cityLsitul'>
          {cityList.map(item => {
            return <li key={item} className='cityLsitLi' onClick={() => {
              this.props.upDateCityName(item)
              this.props.history.push('/cinemas')
            }}>{item}</li>
          })}
        </ul>

      </div>
    )
  }
}
const mapDispatchToProps = {
  upDateCityName
}
export default connect(null,mapDispatchToProps)(City)
