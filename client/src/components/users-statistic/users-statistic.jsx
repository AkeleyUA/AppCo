import React, { useEffect } from 'react';
import './users-statistic.scss';
import { getDataAction, getUserInfoAction} from '../../reducers/users-data/actions';
import { selectCurrentPageAction } from '../../reducers/UI/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';


const screenWidth = window.screen.width;

const UsersStatistic = ({
  data:{
    users,
    totalClicks,
    totalPageViews,
    totalUsers
  },
  getData,
  selectCurrentPage,
  isLoading,
  usersAmount,
  currentPage,
  getStartFilterDate,
  getEndFilterDate
}) => {

  useEffect(() => {
    getData();
  }, [getData]);

  const uploadCurrentData = (page, amount) => {
    selectCurrentPage(page, amount);
    getData();
  }

  const totalPages = Math.ceil(totalUsers / usersAmount);

  const buttonsCreator = () => {
    let mask = [];

    for ( let i = 1; i < totalPages+1; i++) {
      mask = [...mask, i]
    }
    return mask;
  }

  const viewButtonControler = () => {
    const start = currentPage < totalPages - 1
    ? (currentPage < 3
      ? 1
      : currentPage - 2)
    : totalPages - 4 ;

    const end = currentPage > totalPages - 3
    ? totalPages
    : (currentPage > 3
      ? currentPage + 2
      : 5);

    return buttonsCreator().slice(start -1, end).map((btn, index) => (
      <button
        key={btn}
        className={`page-btn ${btn === currentPage ? "active": ""}`}
        onClick={() => uploadCurrentData(btn, usersAmount)}
      >
        {btn}
      </button>
    ))
  }

  const getTotalClicks = (user) => {
    return totalClicks.map(userClickStat => (userClickStat.user_id === user.id ? userClickStat.clicks : false));
  }
  const getTotalPageVIews = (user) => {
    return totalPageViews.map(userPageViewskStat => (userPageViewskStat.user_id === user.id ? userPageViewskStat.views : false));
  }

  const tableCreator = () => {
    if (screenWidth > 875 ) {
      return (
        <div className="table">
          <div className="table-row">
            <div>id</div>
            <div>First name</div>
            <div>Last name</div>
            <div>Email</div>
            <div>Gender</div>
            <div>IP address</div>
            <div>Total clicks</div>
            <div>Total page views</div>
          </div>
          {users.map(user => (
            <Link to={`user/${user.id}`} key={user.id}>
              <div className="table-row">
                <div>{user.id}</div>
                <div>{user.first_name}</div>
                <div>{user.last_name}</div>
                <div>{user.email}</div>
                <div>{user.gender}</div>
                <div>{user.ip_address}</div>
                <div>{totalPageViews ? getTotalClicks(user) : false}</div>
                <div>{totalPageViews ? getTotalPageVIews(user) : false}</div>
              </div>
            </Link>
          ))}
        </div>
      )
    } else {
      return (
        <div className="table">
          <div className="table-row">
            <div>id</div>
            <div>IP address</div>
            <div>Total clicks</div>
            <div>Total page views</div>
          </div>
          {users.map(user => (
            <Link to={`user/${user.id}`} key={user.id}>
              <div className="table-row">
                <div>{user.id}</div>
                <div>{user.ip_address}</div>
                <div>{totalPageViews ? getTotalClicks(user) : false}</div>
                <div>{totalPageViews ? getTotalPageVIews(user) : false}</div>
              </div>
            </Link>
          ))}
        </div>
      )  
    }
  }

  const viewData = () => {
    if(isLoading) {
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 350,
            width: '100%'
          }}
        >
          <Loader
            type="Puff"
            color="#3A80BA"
            height={100}
            width={100}
            timeout={3000}
          />
        </div>)
    } else {
      return tableCreator() 
    }
  }

  return (
    <div className="users-statistic">
      <h3 className="users-statistic-title">Users statistics</h3>
      {viewData()}
        <div className="btn-wrapper">
          <button className="prev nav-page-btn" disabled={currentPage === 1 ? true : false} onClick={() => uploadCurrentData(currentPage-1, usersAmount)}></button>
          {viewButtonControler()}
          <button className="next nav-page-btn" disabled={currentPage === totalPages ? true : false} onClick={() => uploadCurrentData(currentPage+1, usersAmount)}></button>
        </div>
    </div>
  )
}

const mapDispathToProps = (dispatch) => ({
  getData: bindActionCreators(getDataAction, dispatch),
  selectCurrentPage: bindActionCreators(selectCurrentPageAction, dispatch),
  getUserInfo: bindActionCreators(getUserInfoAction, dispatch)
})

const mapStateToProps = (state) => ({
  data: state.usersData.data,
  isLoading: state.UI.isLoading,
  usersAmount: state.UI.usersAmount,
  currentPage: state.UI.currentPage,
})

export default connect(mapStateToProps, mapDispathToProps)(UsersStatistic);