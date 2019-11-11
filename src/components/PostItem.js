import React from 'react';
import Comment from './Comment';

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
          <Comment key={comment.id} data={comment} />
        ))}         
      </div>
    </div>
  );
}

export default PostItem;