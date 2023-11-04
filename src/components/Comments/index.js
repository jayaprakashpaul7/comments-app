import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    name: '',
    comment: '',

    comments: [],
  }

  onAddComment = event => {
    const {name, comment} = this.state
    event.preventDefault()

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      backgroundColors: initialContainerBackgroundClassNames,

      isLiked: false,
    }

    this.setState(prevState => ({
      comments: [...prevState.comments, newComment],
    }))
  }

  onDelete = id => {
    const {comments} = this.state
    const filtred = comments.filter(eachComment => eachComment.id !== id)
    this.setState({comments: filtred})
  }

  changeName = event => {
    this.setState({name: event.target.value})
  }

  changeComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {name, comment, comments} = this.state

    return (
      <div className="bg">
        <div className="comment-img-card">
          <div className="card">
            <h1>Comments</h1>
            <p>Say something about 4.0 Technologies</p>
            <form className="form-c">
              <input
                type="text"
                placeholder="Your Name"
                onChange={this.changeName}
                value={name}
              />

              <textarea
                rows="7"
                cols="34"
                onChange={this.changeComment}
                value={comment}
                placeholder="Your Comment"
              />
              <button type="submit" onClick={this.onAddComment}>
                Add Comment
              </button>
            </form>
          </div>
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <hr />

        <p>
          <span className="count">{comments.length}</span>
          Comments
        </p>

        <ul className="comment-item">
          {comments.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              commentDetails={eachComment}
              onDelete={this.onDelete}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
