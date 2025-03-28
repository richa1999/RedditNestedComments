import React from 'react'

const CommentBox = ({data}) => {
  return (
    data.map((comment, index) => (
        <div key={index} className='border-l-2 border-gray-200 pl-10'>
            <div className='flex'>
            <div>
                <img 
                    className='rounded-full w-16 p-2'
                    src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_6.png" 
                    alt="user" 
                />
            </div>
            <div>
                <h3 className='font-bold px-2 py-4'>{comment.username}</h3>
                <p className='px-2'>{comment.comment}</p>
            </div>
        </div>
        <div>{comment?.replies && <CommentBox data={comment.replies} />}</div>
        </div>
    ))
  )
}

export default CommentBox