var daysOfWeek_en = ['SUN', 'MON', 'TUE', 'WED', 'THR', 'FRI', 'SAT'];
var daysOfWeek_tw = ['日', '一', '二', '三', '四', '五', '六'];
var MonthNames = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
var classtime =['00:00', '00:30', '01:00','01:30','02:00', '02:30', '03:00','03:30',
                '04:00', '04:30', '05:00','05:30','06:00', '06:30', '07:00','07:30', 
                '08:00', '08:30', '09:00','09:30','10:00', '10:30', '11:00','11:30',  
                '12:00', '12:30', '13:00','13:30','14:00', '14:30', '15:00','15:30',
                '16:00', '16:30', '17:00','17:30','18:00', '18:30', '19:00','19:30',
                '20:00', '20:30', '21:00','21:30','22:00', '22:30', '23:00','23:30'];

                export default class Content extends Component {

                    createDateDox = () =>{
                        let table = [];
                        for(let i = 0; i < classtime.length; i++){
                            let children = [];
                            for(let j = 0; j< daysOfWeek_tw.length; j++){
                                children.push( classtime[i])
                                
                            }
                            table.push(<Col>{children}</Col>)
                        }
                        return table;
                    }
                
                    render() {
                        return (
                            <div className="container">
                                {this.createDateDox()}
                            </div>
                        )
                    }
                }
