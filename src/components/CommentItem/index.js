// Write your code here
import './index.css'
import {useState} from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const CommentItem = props => {
  const {commentDetails, onDelete} = props
  const {name, comment, id, backgroundColors} = commentDetails

  const [isLiked, setIsLiked] = useState(false)

  const onToggleLiked = () => {
    setIsLiked(!isLiked)
  }

  const liked = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onHandledelete = () => {
    onDelete(id)
  }

  const randomBgColor =
    backgroundColors[Math.floor(Math.random() * backgroundColors.length)]

  const date = new Date()

  return (
    <li>
      <div className="c">
        <div className="name-logo-c">
          <p className={`profile-img ${randomBgColor}`}>{name.slice(0, 1)}</p>
        </div>
        <div className="text-c">
          <div className="name-date-c">
            <p className="name">{name}</p>
            <span>{formatDistanceToNow(date)}</span>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="btn-c">
        <button type="button" onClick={onToggleLiked} className="like-btn">
          <img src={liked} alt="like" />
          Like
        </button>
        <button
          type="button"
          className="del-btn"
          data-testid="delete"
          onClick={onHandledelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>

      <hr />
    </li>
  )
}

export default CommentItem
