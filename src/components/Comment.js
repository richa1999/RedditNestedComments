import React from 'react'
import CommentBox from './CommentBox'

const data = [
    {
        username: 'Alice',
        comment: 'I love your blog!',
        replies: [
            {
                username: 'Bob',
                comment: 'Thanks Alice!'
            },
            {
                username: 'Charlie',
                comment: 'I agree, great post!'
            }
        ]
    },
    {
        username: 'Rohan',
        comment: 'could use more pictures',
        replies: [
            {
                username: 'David',
                comment: 'I agree, great post!',
                replies: [
                    {
                        username: 'Eve',
                        comment: 'I agree, great post!',
                        replies: [
                            {
                                username: 'Frank',
                                comment: 'I agree, great post!',
                                replies: [
                                    {
                                        username: 'Grace',
                                        comment: 'I agree, great post!',
                                        replies: [
                                            {
                                                username: 'Heidi',
                                                comment: 'I agree, great post!',
                                                replies: [
                                                    {
                                                        username: 'Isaac',
                                                        comment: 'I agree, great post!',
                                                    },
                                                    {
                                                        username: 'Jack',
                                                        comment: 'I agree, great post!',
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                username: 'George',
                                comment: 'I agree, great post!'
                            },
                            {
                                username: 'Hannah',
                                comment: 'I agree, great post!'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        username: 'Akshay',
        comment: 'More code snippets please'
    }
]
const Comment = () => {
  return (
    <div><CommentBox data={data}/></div>
  )
}

export default Comment