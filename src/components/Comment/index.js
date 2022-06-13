import React from 'react';


function Comment({author, content}) {
  let authorInitials = '';

  // get author initials
  author.split(' ').forEach(function (item) {
      authorInitials += item[0];
  });

  return (
    <article className="comment">
      <span className="comment-icon">{authorInitials}</span>
      <h4 className="comment-author">{author}</h4>
      <p className="comment-content">{content}</p>
    </article>
  );
}

export default Comment;