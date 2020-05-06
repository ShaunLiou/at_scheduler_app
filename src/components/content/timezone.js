
import React, { Component } from 'react';




class Timezone_locale extends Component {
    render() {
        let today = new Date();
        let timezone3 = today.toString().slice(-7, -5);
        return ( 
            <div>{timezone3}</div>
         );
    }
}
 
export default Timezone_locale;