import React from 'react';
import Stepper from '../components/stepper/stepper';
import SmallHeader from '../components/small-header/small-header';
import CurrentUserStatistics from '../components/currentUserStatistics/currentUserStatistics';
import { getUserInfoAction, getStartFilterDateAction, getEndFilterDateAction  } from '../reducers/users-data/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SmallFooter from '../components/small-footer/small-footer';
import Loader from 'react-loader-spinner';


const date = new Date();

const routeToUserChart = (path, userFullName) => ([
  {path: '/', name: 'Home page'},
  {path: '/stats', name: 'Users satistics'},
  {path: `${path}`, name: `${userFullName}`}
])

const ChartPage = ({ match, currentUserInfo, getUserInfo, getStartFilterDate, getEndFilterDate}) => {
    const checkData = () => {
    if (!currentUserInfo || +match.params.id !== currentUserInfo.userInfo.id) {
      getUserInfo(match.params.id);
      getStartFilterDate(new Date(date.setDate(date.getDate() - 7)).toLocaleDateString());
      getEndFilterDate(new Date().toLocaleDateString());
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
      const { userInfo, userViews } = currentUserInfo;
      const userFullName = `${userInfo.first_name} ${userInfo.last_name}`;
      return (
        <>
          <Stepper route={routeToUserChart( match.url, userFullName )}/>
          <CurrentUserStatistics userFullName={userFullName} userViews={userViews} />
        </>
      )
    }
  }
  
  return (
    <>
      <SmallHeader />
      {checkData()}
      <SmallFooter />
    </>
  )
}

const mapStateToProps = (state) => ({
  currentUserInfo: state.usersData.currentUserInfo,
})

const mapDispatchToProps = (dispatch) => ({
  getUserInfo: bindActionCreators(getUserInfoAction, dispatch),
  getStartFilterDate: bindActionCreators(getStartFilterDateAction, dispatch),
  getEndFilterDate: bindActionCreators(getEndFilterDateAction, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChartPage);