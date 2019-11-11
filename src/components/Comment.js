import React from 'react';

function Comment({data}) {
  return(
    <div className="post-comments">
      <div key={data.id} className="comment">
        <img className="comment-avatar" src={data.author.avatar} />
        <div>
          <b>{data.author.name}</b>
          <span>{data.content}</span>
        </div>
      </div>
    </div>
  );
}

export default Comment;