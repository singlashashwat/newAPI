import React from 'react';
import moment from 'moment';
import sstyle from './style.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from 'react-player'

const Card1 = ({ author }) => (
    <div className={sstyle.container1}>
        <a href={author.url}>
        {/* <div className="col-12 d-flex"> */}
        <div className="col d-flex py-3">
            <div className={sstyle.titleLogo}>
                <span>{author.source.name.substring(0, 1)}
                </span>
            </div>
            <div>
                <div className={sstyle.titleAuthor}>
                    <span>{author.source.name}</span>
                </div>
                <div className={sstyle.date}><span>{moment(author.publishedAt).format('YYYY-MM-DD h:mm')}</span></div>
            </div>
        </div>
        <div className="col p-0 m-0" >
            {author && author.urlToImage!=null ? 
            <img src={author.urlToImage}  className={sstyle.imgCont}/>
            : 
            <ReactPlayer width='100%' className={sstyle.imgCont} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />}
        </div>
        <div className="col">
            <div className="col h5 my-3">
                <span className={sstyle.title1}>{author.title}</span></div>
            <div className="col overflow-hidden">
                <span className={sstyle.des}>{author.description}</span></div>
        </div>
        </a>
     </div>
  )
  
  export default Card1