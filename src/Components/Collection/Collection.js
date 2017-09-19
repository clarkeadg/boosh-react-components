
/* React */
import React from 'react';
import { connect } from 'react-redux'

/* Actions */
import Actions from '../Actions/Creators'

/* Selectors */
import { getUsersCollection } from '../Selectors/UserSelector'

/* Sagas */
//import GetCommentsSaga from '../../Sagas/Preloaders/GetCommentsSaga'

/* Components */
import { Row, Column, Button } from 'react-foundation';
import { Pagination, Portlet, Loading } from 'boosh-react-components'
import User from '../Components/User/User'
import { Link } from 'react-router'

class Collection extends React.Component {

  getData(pageNumber) {
    let Meta = {
      query: {
        page: pageNumber,
        per_page: this.props.per_page || 10
      },
      path: this.props.path || "/users/"
    }
    this.props.dispatch(Actions.getUsersAttempt(Meta));
  }

  componentDidMount() {
    this.getData(this.props.pageNumber)
  }

  componentWillReceiveProps (newProps) {
    if (newProps.pageNumber !== this.props.pageNumber) {
      this.getData(newProps.pageNumber)
    }
  }

  /*loadMore() {
    pageId++;
    console.log('load More', pageId)
    this.getData(pageId)
  }*/

  renderUsers(loading, users) {
    if (loading) {
      return (
        <Loading/>
      )
    }

    let userOptions = this.props.userOptions || {}
    //console.log('USER OPTIONS', userOptions)

    if(this.props.viewType && this.props.viewType == 'list') {
      return (
        <Row upOnSmall={1}>
          {users.map((item, id) => {
            return (
              <Column key={id}>
                <User user={item} meta={true} userOptions={userOptions}/>
              </Column>
            )
          })}
        </Row>
      )
    }

    let size = this.props.size || 4;

    return (
      <Row upOnSmall={2} upOnMedium={4} upOnLarge={size}>
        {users.map((item, id) => {
          return (
            <Column key={id}>
              <User user={item} userOptions={userOptions}/>
            </Column>
          )
        })}
      </Row>
    )
  }

  render() {

    let { users, pageNumber, loading, viewType } = this.props;

    let path = this.props.path || "/users/";
    let per_page = this.props.per_page || 10;
    let pager = this.props.pager || "numbers";

    return (
      <div className={"users users-"+viewType}>
        { this.renderUsers(loading, users.items) }
        <Pagination path={path} pager={pager} per_page={per_page} pageNumber={pageNumber} count={users.count}/>
      </div>
    )
  }

}

Collection.propTypes = {
  loading: React.PropTypes.bool,
  users: React.PropTypes.object,
  pageNumber: React.PropTypes.number,
  count: React.PropTypes.number
}

Collection.defaultProps = {
  viewType: 'grid',
  loading: true,
  users: {},
  pageNumber: 1,
  count: 0
}

const mapStateToProps = (state, props) => {
  return {
    loading: state.users.attempting,
    users: getUsersCollection(state, props)
  }
}

/*function preload(params, req) {
  return [
    [GetCommentsSaga, {}]
  ];
}
Comments.preload = preload;*/

export default connect(mapStateToProps)(Collection)


