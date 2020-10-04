import React from 'react'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import sstyle from './style.module.scss';
import Card1 from './Card1';



class First extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      pager: {},
      initialPage:1,
      pageSize: 10,
      pageOfItems: [],
      pageCount: 10,
      data: []
    };
     this.handlePageClick = this.handlePageClick.bind(this);
  }
  
handlePageClick(data) {
  let selected = data.selected;
  let offset = Math.ceil(selected * 10);

  this.props.onPageChange(selected+1)
}
    render() {
      var pager = this.props.articles;
      if (!pager.res || pager.res.length <= 1) {
          // don't display pager if there is only 1 page
          return null;
      }
      
      return (
        <div>
            <div className={sstyle.outcard}> 
            { this.props.articles && this.props.articles.res.map(item => (
                <Card1
                    key = {item.title}
                    author= {item}
                    />
              ))}
              
          </div>
          <div className={sstyle.pagCont}>
                <ReactPaginate
                itemClass="page-item"
                linkClass="page-link"
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        /></div>
        </div>
      )
    }
  }
  
  export default First

