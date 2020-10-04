import React from 'react'
import styles from './TopStatusBar.module.scss'
import oodiesLogo from '../../images/oodiesLogo/oodiesLogo.ico';
import '@fortawesome/fontawesome-free/css/all.min.css';

class TopStatusBar extends React.Component {
  render() {
    const {
      onClickSearch,
    } = this.props
    return (
  <div className={styles.topBar}>
    <div className={styles.topBartitle}>
      <span className={styles.usNews}>US News</span>
    </div>
    {/* <div className={styles.searchbar}> */}
    <div className={styles.searchDiv}><div className="col">
    <div className="input-group md-form form-sm form-1 pl-0">
      <div className="input-group-prepend">
        <span className={styles.inputgrouptext} id="basic-text1"><i className="fas fa-search text-white"
            aria-hidden="true"></i></span>
      </div>
      <input className={styles.input1} type="text" placeholder="Search" aria-label="Search" onChange={onClickSearch}/>
    </div></div>
    {/* </div> */}

        
    </div>
  </div>
)
  }
}
  
  export default TopStatusBar