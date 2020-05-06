import React from 'react';
import { PureComponent } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

var moment = require('moment');
var newStart, newEnd, newWeekStart, newWeekEnd;
var Today = moment().format('YYYY/MM/DD');


export default class WeekNav extends PureComponent {


    constructor(props) {
        super(props);
        this.state ={
            currentWeekStart: moment().startOf('week').format("YYYY/MM/DD"),
            currentWeekEnd: moment().endOf('week').format("YYYY/MM/DD"), 
        };
    }
    prevWeek = () => {
      const { currentWeekStart, currentWeekEnd } = this.state;

       newStart = currentWeekStart.slice();
       newEnd = currentWeekEnd.slice();
       newWeekStart = moment(newStart).subtract(7, 'days').format("YYYY/MM/DD");
       newWeekEnd = moment(newEnd).subtract(7, 'days').format("YYYY/MM/DD");
       

      this.setState({
        currentWeekStart: newWeekStart,
        currentWeekEnd: newWeekEnd,
      });
    }

    upcomingWeek = () => {
      const { currentWeekStart, currentWeekEnd } = this.state;
      newStart = currentWeekStart.slice();
      newEnd = currentWeekEnd.slice();
      newWeekStart = moment(newStart).add(7, 'days').format("YYYY/MM/DD");;
      newWeekEnd = moment(newEnd).add(7, 'days').format("YYYY/MM/DD");

      this.setState({
        currentWeekStart: newWeekStart,
        currentWeekEnd: newWeekEnd,
      });
    }

   render() {
    const { currentWeekStart, currentWeekEnd } = this.state;

    return (

        <React.Fragment>
        <Container>
            
            <div className="row">
                <div className="col s2">
                    <button className="waves-effect waves-light btn" id="prevWeek" onClick={this.prevWeek} disabled={this.state.currentWeekStart<=Today}><ArrowBackIosIcon/></button>
                </div>
                <div className="col s4">
                    <p>Today{Today}</p>
                    <p>{currentWeekStart} - {moment(currentWeekEnd).format("DD")}</p>
                </div>
                <div className="col s2">
                    <button className="waves-effect waves-light btn" id="upcomingWeek" onClick={this.upcomingWeek}><ArrowForwardIosIcon/></button>
            </div>
            </div>
        </Container>
      </React.Fragment>
        

        
      );
    }
}