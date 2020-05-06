import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import 'moment-timezone';
import { Container, Row, Col } from 'reactstrap'



export default class MyComponent extends React.Component {


    render() {
           let timedata = '2020-05-10T16:00:00Z';
           let Today = moment().format();
           var new_time = moment.tz().format("YYYY/MM/DD HH:mm:ss");
           var timezone1 = moment(timedata).format();
           let timezone2 = new Date();
           let timezone3 = timezone2.toString().slice(-7,6);
           let timezone4 = timezone2.toString().slice(24,34)
           

        //    let now_date = Today.toLocaleString('zh-TW', {timeZone: 'Asia/Taipei'});
        //    let now_date_format = Today.toISOString();
        

        return (
            <Container>
                
                <Row>{timedata}</Row>
                <Row>{new_time}</Row>
                <Row>{timezone1}</Row>
                <Row>{timezone3}</Row>
                <Row>{timezone4}</Row>
                {/* <Row>{now_date_format}</Row> */}
                <Row>{Today}</Row>
                
            </Container>
            
        );
    }
}

