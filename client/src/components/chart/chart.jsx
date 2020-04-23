import React from 'react';
import './chart.scss';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip } from 'recharts';
import { connect } from 'react-redux';
import { returnDate } from '../date-filter/date-filter';

const screenWindth = window.screen.width;


const Chart = ({ dataKey, userViews, endFilterDate, startFilterDate }) => {

  const start = returnDate(startFilterDate);
  const end = returnDate(endFilterDate);
  const dateDifference = (end - start) / 1000 / 60 / 60 / 24;
  const monthes = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  const dataFormation = (usersArray) => {
    let arrData = []
    for (let i = start; i <= end; i = new Date(Date.parse(i) + 1 * 24 * 60 * 60 * 1000)) {
      const findDate = usersArray.find(user => (new Date(user.date).toLocaleDateString() === i.toLocaleDateString()))
      if(findDate) {
        arrData.push({
          date: new Date(findDate.date).toLocaleDateString(),
          month: monthes[new Date(findDate.date).getMonth()],
          clicks: findDate.clicks,
          views: findDate.page_views
        })
      } else {
        arrData.push({
          date: i.toLocaleDateString(),
          month: monthes[new Date(i).getMonth()],
          clicks: 0,
          views: 0
        })
      }
    }
    return arrData;
  }

  const data = dataFormation(userViews);
  
  const getTiks = (max, tick) => {
    let arr = [];
    for(let i = 0; i < max+1; i+=tick) {
      arr = [...arr, i]
    }
    return arr;
  }

  const CustomTooltip  = ({active, payload}) => {
    if (active && payload[0] !== undefined) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`date: ${payload[0].payload.date}`}</p>
          <p>{`${dataKey} : ${payload[0].value}`}</p>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="wrapper">
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data} style={screenWindth > 875 ? {marginLeft: -20} : {marginLeft: 0}}>
          <CartesianGrid stroke="#F1F1F1" vertical={false} />
          <Tooltip offset={5} isAnimationActive content={<CustomTooltip />}/>
          <Line type="monotoneX" isAnimationActive dataKey={dataKey} stroke="#3A80BA" strokeWidth={3} dot={false}/>
          {screenWindth > 875 ? <XAxis stroke="#CCCCCC" tickLine={false} axisLine={false} dataKey={dateDifference < 30 ? "date" : "month"} type="category" padding={{left:30, right: 30}} interval={dateDifference < 30 ? "preserveStart" : 31}/> : null}
          {screenWindth > 875 ? <YAxis stroke="#CCCCCC" tickLine={false} axisLine={false} dataKey={dataKey} type="number" domain={[0, 1000]} ticks={getTiks(1000, 200)}/> : null}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

const mapStateToProps = (state) => ({
  endFilterDate: state.usersData.endFilterDate,
  startFilterDate: state.usersData.startFilterDate,
})

export default connect(mapStateToProps)(Chart);