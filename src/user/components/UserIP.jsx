import React from 'react';
import axios from 'axios';

class UserIP extends React.Component {
  state = {
    ip: '',
    location: null
  }

  componentDidMount() {
    // First, get the user's IP address
    axios.get('https://ipapi.co/2405:201:a009:1153:6ca6:40a8:2e8b:3966/json/')
      .then(response => {
        const ip = response.data.ip;
        this.setState({ ip });

        // Then, use the IP address to get location details from ipapi
        return axios.get(`https://ipapi.co/${ip}/json/`);
      })
      .then(response => {
        const locationData = {
          ip: this.state.ip, // Include the IP address in the location data
          city: response.data.city,
          region: response.data.region,
          country: response.data.country_name
        };
        this.setState({ location: locationData });
  
        // Pass location data to parent component
        this.props.setLocation(locationData);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { ip, location } = this.state;
    return (
      <div className='flex gap-5 justify-center items-center flex-row-reverse'>
        {/* <div className='w-[10rem]'>IP Addr: {ip}</div> */}
        {location && (
          <div>
            <div> {location.city}</div>
            {/* <div>Region: {location.region}</div>
            <div>Country: {location.country}</div> */}
          </div>
        )}
      </div>
    );
  }
}

export default UserIP;
