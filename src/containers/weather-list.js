import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import _ from 'lodash';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temperature = cityData.list.map(data => {
      return kelvinToCelsium(data.main.temp);
    });

    const pressure = _.map(cityData.list, 'main.pressure');
    const humidity = _.map(cityData.list, 'main.humidity');

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={temperature} color='blue' units="C"/>
        </td>
        <td>
          <Chart data={pressure} color='red' units="hPa"/>
        </td>
        <td>
          <Chart data={humidity} color='green' units="%"/>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

function kelvinToCelsium(kelvin) {
  return kelvin - 273.15;
}

export default connect(mapStateToProps)(WeatherList);
