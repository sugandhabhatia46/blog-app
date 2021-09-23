import React, { Component } from 'react';
import './latestfromblog.css'

class LatestFromBlog extends Component {
  render() {
    return (
      <div className="container2">
        <div className="blog_heading">
          <p>process of our services</p>
          <h1>Latest from our Blog</h1>
        </div>
        <div className="blog_cards">
          <div className="blog_card_1">
            <div className="blog_card_img" />
            <div className="blog_card_content">
              <h2><a href="#">Maxican Food Fev</a></h2>
              <p>Lorem ipsum dolor sit amadipisicing elit, seddo eiusmoddolore magna aliqua. Ut enim ad miveniam, quis noion ullamco laboris nisi umt aliquip ex ea cequat.</p>
              <button className="read_more_btn">Read More</button>
            </div>
          </div>
          <div className="blog_card_2">
            <div className="blog_card_img" />
            <div className="blog_card_content">
              <h2><a href="#">Italian Pizza Fev</a></h2>
              <p>Lorem ipsum dolor sit amadipisicing elit, seddo eiusmoddolore magna aliqua. Ut enim ad miveniam, quis noion ullamco laboris nisi umt aliquip ex ea cequat.</p>
              <button className="read_more_btn">Read More</button>
            </div>
          </div>
          <div className="blog_card_3">
            <div className="blog_card_img" />
            <div className="blog_card_content">
              <h2><a href="#">Asian Food Fev</a></h2>
              <p>Lorem ipsum dolor sit amadipisicing elit, seddo eiusmoddolore magna aliqua. Ut enim ad miveniam, quis noion ullamco laboris nisi umt aliquip ex ea cequat.</p>
              <button className="read_more_btn">Read More</button>
            </div>
          </div>
        </div>
        <div>
          <ul>
            <li>
              one
            </li>
            <li>
              two
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default LatestFromBlog;