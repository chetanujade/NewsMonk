import React from 'react'
import newsmonkImg from "../Images/newsmonk-high-resolution-logo (1).png"

const NewsItem =(props)=> {

    let {title, discription, imageUrl,newsUrl,author, date, source} = props;
    return (  
      <div className='my-3'>
        <div  className="card">
        <span className="position-absolute top-0translate-middle badge rounded-pill bg-danger" style={{right:'0%', zIndex:'1'}}>
                    {source}
                   <span className="visually-hidden">unread messages</span>
                    </span>
            <img src={!imageUrl?newsmonkImg:imageUrl}  className="card-img-top" alt="..."/>
                <div  className="card-body">
                   <h5  className="card-title"> {title}</h5>
                        <p  className="card-text">{discription}</p>
                        <p className='card-text'><small className='text-muted'>By {!author? "Unknown":author} on {new Date(date).toGMTString()}</small></p>
                            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark
                            ">Read More</a>
                    </div>
                </div>
        </div>
    )
  }

export default NewsItem



