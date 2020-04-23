import React, {useState} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DatePicker, { registerLocale } from 'react-datepicker';
import { enGB } from 'date-fns/esm/locale'
import './date-filter.scss';
import 'react-datepicker/dist/react-datepicker.css';

import { getStartFilterDateAction, getEndFilterDateAction, getUserInfoAction } from '../../reducers/users-data/actions';
registerLocale('enGB', enGB)

export const returnDate = (date) => {
  const arrD = date.split('.');
  arrD[1] -= 1;
  return new Date(arrD[2], arrD[1], arrD[0]);
}

const DateFilter = ({getStartFilterDate, getEndFilterDate, getUserInfo, currentUser}) => {

  const date = new Date();

  const [start, setStartDate] = useState(new Date(date.setDate(date.getDate() - 7)));
  const [end, setEndDate] = useState(new Date());

  return (
    <div className="filter-container">
      <DatePicker
        className="startDate"
        selected={start}
        onChange={date => setStartDate(date)}
        selectsStart
        startDate={start}
        endDate={end}
        locale="enGB"
        dateFormat="dd/MM/yyyy"
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
      />
      <DatePicker
        className="endDate"
        selected={end}
        onChange={date => setEndDate(date)}
        selectsEnd
        startDate={start}
        endDate={end}
        locale="enGB"
        minDate={start}
        dateFormat="dd/MM/yyyy"
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
      />
      <button 
        className="filter-btn"
        onClick={() => {
          getStartFilterDate(start.toLocaleDateString())
          getEndFilterDate(end.toLocaleDateString())
          getUserInfo(currentUser);
        }}
      >
        Filter
      </button>
    </div>
  )
}

const mapStateToProps = state => ({
  endFilterDate: state.usersData.endFilterDate,
  startFilterDate: state.usersData.startFilterDate,
  currentUser: state.usersData.currentUser
})

const mapDispatchToProps = dispatch => ({
  getStartFilterDate: bindActionCreators(getStartFilterDateAction, dispatch),
  getEndFilterDate: bindActionCreators(getEndFilterDateAction, dispatch),
  getUserInfo: bindActionCreators(getUserInfoAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(DateFilter);