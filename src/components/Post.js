import React from 'react';
import PropTypes from 'prop-types';

function PostItem({data}) {
  return(
    <div className="post-item">
      <header>
        <div className="post-avatar">
          <img src={ data.author.avatar } />
        </div>
        <div>
          <h1 className="author">{ data.author.name }</h1>
          <span className="date">{ data.date }</span>
        </div>
      </header>
      <div className="post-content">{data.content}</div>
      <div className="post-comments">

      {data.comments.map(comment => (
        <div key={comment.id} className="comment">
          <img className="comment-avatar" src={comment.author.avatar} />
          <div>
            <b>{comment.author.name}</b>
            <span>{comment.content}</span>
          </div>
        </div>
      ))}   
        
      </div>
    </div>
  );
}

export default PostItem;