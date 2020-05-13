// import { Row, Col } from 'reactstrap';
import React, { Component } from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './content.css';
import CourseTime from '../data/classtime.json';
import moment from 'moment';
// import MyComponent from '../footer/footer';
require('moment-timezone');

let newStart, newEnd, newWeekStart, newWeekEnd;
let newSunDate, newSun, newMonDate, newMon, newTueDate, newTue, newWedDate, newWed, newThuDate, newThu, newFriDate, newFri, newSatDate, newSat;
var Today = moment().format('YYYY/MM/DD');

    


export default class Content extends Component {

    constructor(props) {
        super(props);
        this.state ={
            currentWeekStart: moment().startOf('week').format('YYYY/MM/DD'),
            currentWeekEnd: moment().endOf('week').format('YYYY/MM/DD'),
            sunDate: moment().startOf('week').format('YYYY/MM/DD'),
            monDate: moment().startOf('week').add(1, 'day').format("YYYY/MM/DD"), 
            tueDate: moment().startOf('week').add(2, 'days').format("YYYY/MM/DD"), 
            wedDate: moment().startOf('week').add(3, 'days').format("YYYY/MM/DD"), 
            thuDate: moment().startOf('week').add(4, 'days').format("YYYY/MM/DD"), 
            friDate: moment().startOf('week').add(5, 'days').format("YYYY/MM/DD"), 
            satDate: moment().endOf('week').format("YYYY/MM/DD"),  
        };
    }
   

    prevWeek = () => {
      const { currentWeekStart, currentWeekEnd, sunDate, monDate, tueDate, wedDate, thuDate, friDate, satDate } = this.state;

       newStart = currentWeekStart.slice();
       newEnd = currentWeekEnd.slice();
       newSun = sunDate.slice();
       newMon = monDate.slice();
       newTue = tueDate.slice();
       newWed = wedDate.slice();
       newThu = thuDate.slice();
       newFri = friDate.slice();
       newSat = satDate.slice();

       newWeekStart = moment(newStart).subtract(7, 'days').format("YYYY/MM/DD");
       newWeekEnd = moment(newEnd).subtract(7, 'days').format("YYYY/MM/DD");

       newSunDate = moment(newSun).subtract(7, 'days').format("YYYY/MM/DD");
       newMonDate = moment(newMon).subtract(7, 'days').format("YYYY/MM/DD");
       newTueDate = moment(newTue).subtract(7, 'days').format("YYYY/MM/DD");
       newWedDate = moment(newWed).subtract(7, 'days').format("YYYY/MM/DD");
       newThuDate = moment(newThu).subtract(7, 'days').format("YYYY/MM/DD");
       newFriDate = moment(newFri).subtract(7, 'days').format("YYYY/MM/DD");
       newSatDate = moment(newSat).subtract(7, 'days').format("YYYY/MM/DD");
       

      this.setState({
        currentWeekStart: newWeekStart,
        currentWeekEnd: newWeekEnd,
        sunDate: newSunDate,
        monDate: newMonDate,
        tueDate: newTueDate,
        wedDate: newWedDate,
        thuDate: newThuDate,
        friDate: newFriDate,
        satDate: newSatDate,
        
      });
    }

    nextWeek = () => {
      const { currentWeekStart, currentWeekEnd, sunDate, monDate, tueDate, wedDate, thuDate, friDate, satDate } = this.state;
      newStart = currentWeekStart.slice();
      newEnd = currentWeekEnd.slice();
      newSun = sunDate.slice();
      newMon = monDate.slice();
      newTue = tueDate.slice();
      newWed = wedDate.slice();
      newThu = thuDate.slice();
      newFri = friDate.slice();
      newSat = satDate.slice();
        

      newWeekStart = moment(newStart).add(7, 'days').format("YYYY/MM/DD");;
      newWeekEnd = moment(newEnd).add(7, 'days').format("YYYY/MM/DD");
      newSunDate = moment(newSun).add(7, 'days').format("YYYY/MM/DD");
      newMonDate = moment(newMon).add(7, 'days').format("YYYY/MM/DD");
      newTueDate = moment(newTue).add(7, 'days').format("YYYY/MM/DD");
      newWedDate = moment(newWed).add(7, 'days').format("YYYY/MM/DD");
      newThuDate = moment(newThu).add(7, 'days').format("YYYY/MM/DD");
      newFriDate = moment(newFri).add(7, 'days').format("YYYY/MM/DD");
      newSatDate = moment(newSat).add(7, 'days').format("YYYY/MM/DD");
       

      this.setState({
        currentWeekStart: newWeekStart,
        currentWeekEnd: newWeekEnd,
        sunDate: newSunDate,
        monDate: newMonDate,
        tueDate: newTueDate,
        wedDate: newWedDate,
        thuDate: newThuDate,
        friDate: newFriDate,
        satDate: newSatDate,
      });
    }


    render(){ 
        const { currentWeekStart, currentWeekEnd, sunDate, monDate, tueDate, wedDate, thuDate, friDate, satDate } = this.state;
        let timezone2 = new Date();
        let timezone3 = timezone2.toString().slice(-7, -5);
        let timezone4 = timezone2.toString().slice(24, 34);


        return (

                <div>
                    <div className="profile-section teacher-schedule with-divider">
                        <h3 className="section-title">
                            <span>授課時間</span>
                            {/* <MyComponent /> */}
                        </h3>
                        <div className="section-body">
                            <div className="schedule">
                                <div>
                                    <div className="schedule-control-box">
                                        <div className="button-group at-text-center">
                                            <button type="button" onClick={this.prevWeek} disabled={this.state.currentWeekStart<=Today}>
                                                <ArrowBackIosIcon/>
                                            </button>
                                            <button type="button" onClick={this.nextWeek}>
                                                <ArrowForwardIosIcon/>
                                            </button>
                                        </div>
                                            <div className="label-box">
                                                {currentWeekStart} - {moment(currentWeekEnd).format("DD")}
                                            </div>
                                            <div className="time-zone-description">時間以*{timezone3} ({timezone4}) 顯示</div>
                                    </div>
                                    <div data-v-9a6a964e className="at-column-box">
                                        <div data-v-9a6a964e className='root'>
                                            <div data-v-9a6a964e className={'title-box at-text-center '+ (this.state.sunDate < Today ? 'disabled' : '')}>
                                                <div className="at-text-center">日</div>
                                                <div className="at-text-center">{moment(sunDate).format("DD")}</div>
                                            </div>
                                            <div className="timebox">
                                                {CourseTime.map((timedetail, index)=>{
                                                    if(moment(timedetail.start, "YYYY/MM/DD").isSame(sunDate, "YYYY/MM/DD") && moment(timedetail.end, "YYYY/MM/DD").isSame(sunDate, "YYYY/MM/DD") )
                                                        
                                                    return <div>
                                                        <div className={'time at-text-center is-size-7 '+ timedetail.status}> {moment(timedetail.start).format("HH:mm ")}</div>
                                                        <div className={'time at-text-center is-size-7 '+ timedetail.status}> {moment(timedetail.end).format("HH:mm")}</div>
                                                    </div> })}

                                            </div>

                                        </div>
                                        <div data-v-9a6a964e className={'root'+ (this.isToday? 'disable': '')}>
                                            <div data-v-9a6a964e className={'title-box at-text-center '+ (this.state.monDate < Today ? 'disabled' : '')}>
                                                <div className="at-text-center">一</div>
                                                <div className="at-text-center">{moment(monDate).format("DD")}</div>
                                            </div>
                                            <div className="timebox">
                                                {CourseTime.map((timedetail, index)=>{
                                                    if(moment(timedetail.start, "YYYY/MM/DD").isSame(monDate, "YYYY/MM/DD") && moment(timedetail.end, "YYYY/MM/DD").isSame(monDate, "YYYY/MM/DD") )
                                                    return <div className="timelist">
                                                        <div className={'time at-text-center is-size-7 '+ timedetail.status}> {moment(timedetail.start).format("HH:mm ")}</div>
                                                        <div className={'time at-text-center is-size-7 '+ timedetail.status}> {moment(timedetail.end).format("HH:mm")}</div>
                                                    </div>
                                                    
                                                    })}

                                            </div>

                                        </div>
                                        <div data-v-9a6a964e className="root">
                                            <div data-v-9a6a964e className={'title-box at-text-center '+ (this.state.tueDate < Today ? 'disabled' : '')}>
                                                <div className="at-text-center">二</div>
                                                <div className="at-text-center">{moment(tueDate).format("DD")}</div>
                                            </div>
                                            <div className="timebox">
                                                {CourseTime.map((timedetail, index)=>{
                                                    if(moment(timedetail.start, "YYYY/MM/DD").isSame(tueDate, "YYYY/MM/DD") && moment(timedetail.end, "YYYY/MM/DD").isSame(tueDate, "YYYY/MM/DD") )
                                                    return <div>
                                                        <div className={'time at-text-center is-size-7 '+ timedetail.status}> {moment(timedetail.start).format("HH:mm ")}</div>
                                                        <div className={'time at-text-center is-size-7 '+ timedetail.status}> {moment(timedetail.end).format("HH:mm")}</div>
                                                    </div>
                                                    
                                                    })}
                                            </div> 
                                        </div>
                                        <div data-v-9a6a964e className="root">
                                            <div data-v-9a6a964e className={'title-box at-text-center '+ (this.state.wedDate < Today ? 'disabled' : '')}>
                                                <div className="at-text-center">三</div>
                                                <div className="at-text-center">{moment(wedDate).format("DD")}</div>
                                            </div>
                                            <div className="timebox"> 
                                                {CourseTime.map((timedetail, index)=>{
                                                    if(moment(timedetail.start, "YYYY/MM/DD").isSame(wedDate, "YYYY/MM/DD") && moment(timedetail.end, "YYYY/MM/DD").isSame(wedDate, "YYYY/MM/DD") )
                                                    return <div>
                                                        <div className={'time at-text-center is-size-7 '+ timedetail.status}> {moment(timedetail.start).format("HH:mm ")}</div>
                                                        <div className={'time at-text-center is-size-7 '+ timedetail.status}> {moment(timedetail.end).format("HH:mm")}</div>
                                                    </div>
                                                    
                                                    })}
                                            </div>
                                        </div>
                                        <div data-v-9a6a964e className="root">
                                            <div data-v-9a6a964e className={'title-box at-text-center '+ (this.state.thuDate < Today ? 'disabled' : '')}>
                                                <div className="at-text-center">四</div>
                                                <div className="at-text-center">{moment(thuDate).format("DD")}</div>
                                            </div>
                                            <div className="timebox">
                                                {CourseTime.map((timedetail, index)=>{
                                                    if(moment(timedetail.start, "YYYY/MM/DD").isSame(thuDate, "YYYY/MM/DD") && moment(timedetail.end, "YYYY/MM/DD").isSame(thuDate, "YYYY/MM/DD") )
                                                    return <div>
                                                        <div className={'time at-text-center is-size-7 '+ timedetail.status}> {moment(timedetail.start).format("HH:mm ")}</div>
                                                        <div className={'time at-text-center is-size-7 '+ timedetail.status}> {moment(timedetail.end).format("HH:mm")}</div>
                                                    </div>
                                                    
                                                    })}
                                            </div>

                                        </div>
                                        <div data-v-9a6a964e className="root">
                                            <div data-v-9a6a964e className={'title-box at-text-center '+ (this.state.friDate < Today ? 'disabled' : '')}>
                                                <div className="at-text-center">五</div>
                                                <div className="at-text-center">{moment(friDate).format("DD")}</div>
                                            </div>
                                            <div className="timebox">
                                                {CourseTime.map((timedetail, index)=>{
                                                    if(moment(timedetail.start, "YYYY/MM/DD").isSame(friDate, "YYYY/MM/DD") && moment(timedetail.end, "YYYY/MM/DD").isSame(friDate, "YYYY/MM/DD") )
                                                    return <div>
                                                        <div className={'time at-text-center is-size-7 '+ timedetail.status}> {moment(timedetail.start).format("HH:mm ")}</div>
                                                        <div className={'time at-text-center is-size-7 '+ timedetail.status}> {moment(timedetail.end).format("HH:mm")}</div>
                                                    </div>
                                                    
                                                    })}
                                            </div>
                                        </div>
                                        <div data-v-9a6a964e className="root">
                                            <div data-v-9a6a964e className={'title-box at-text-center '+ (this.state.satDate < Today ? 'disabled' : '')}>
                                                <div className="at-text-center">六</div>
                                                <div className="at-text-center">{moment(satDate).format("DD")}</div>
                                            </div>
                                            <div className="timebox">
                                                {CourseTime.map((timedetail, index) =>{
                                                    if(moment(timedetail.start, "YYYY/MM/DD").isSame(satDate, "YYYY/MM/DD") && moment(timedetail.end, "YYYY/MM/DD").isSame(satDate, "YYYY/MM/DD") )
                                                    return <div>
                                                        <div className={'time at-text-center is-size-7 '+ timedetail.status}> {moment(timedetail.start).format("HH:mm ")}</div>
                                                        <div className={'time at-text-center is-size-7 '+ timedetail.status}> {moment(timedetail.end).format("HH:mm")}</div>
                                                    </div>
                                                    
                                                    })}
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

        );
    }
}
 
 
