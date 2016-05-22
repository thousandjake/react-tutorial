var data = [
  {id: 1, author: "Garbe Garbeson", text: "This is one comment"},
  {id: 2, author: "Garbe J Garber", text: "This is another comment"}
];
var Comment = React.createClass({displayName: 'Comment',
  render: function () {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
          {this.props.children}
      </div>
    );
  }
});
var CommentList = React.createClass({displayName: 'CommentList',
  render: function () {
      var commentNodes = this.props.data.map(function (comment) {
        return (
          <Comment author={comment.author} key={comment.id}>
            {comment.text}
          </Comment>
        );
      });
      return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});
var CommentForm = React.createClass({displayName: 'CommentForm',
  render: function () {
    return (
      <div className="commentForm">
      Hello Garbe! I am a CommentForm
      </div>
    );
  }
});
var CommentBox = React.createClass({displayName: 'CommentBox',
  render: function () {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
});
ReactDOM.render(
  <CommentBox data={data} />,
  document.getElementById('content')
);
