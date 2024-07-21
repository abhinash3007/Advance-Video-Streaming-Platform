import React from 'react'

const commentData = [
    {
        name: "Abhinash Mishra",
        text: "Full stack devloper from Rishra( W.B)",
        replies: [],
    },
    {
        name: "Abhinash Mishra",
        text: "Full stack devloper from Rishra( W.B)",
        replies: [
            {
                name: "Abhinash Mishra",
                text: "Full stack devloper from Rishra( W.B)",
                replies: [],
            },
            {
                name: "Abhinash Mishra",
                text: "Full stack devloper from Rishra( W.B)",
                replies: [
                    {
                        name: "Abhinash Mishra",
                        text: "Full stack devloper from Rishra( W.B)",
                        replies: [
                            {
                                name: "Abhinash Mishra",
                                text: "Full stack devloper from Rishra( W.B)",
                                replies: [
                                    {
                                        name: "Abhinash Mishra",
                                        text: "Full stack devloper from Rishra( W.B)",
                                        replies: [
                                            {
                                                name: "Abhinash Mishra",
                                                text: "Full stack devloper from Rishra( W.B)",
                                                replies: [],
                                            },
                                        ],
                                    },
                                    {
                                        name: "Abhinash Mishra",
                                        text: "Full stack devloper from Rishra( W.B)",
                                        replies: [],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: "Abhinash Mishra",
        text: "Full stack devloper from Rishra( W.B)",
        replies: [],
    },
    {
        name: "Abhinash Mishra",
        text: "Full stack devloper from Rishra( W.B)",
        replies: [],
    },
    {
        name: "Abhinash Mishra",
        text: "Full stack devloper from Rishra( W.B)",
        replies: [],
    },
    {
        name: "Abhinash Mishra",
        text: "Full stack devloper from Rishra( W.B)",
        replies: [],
    },
]
const Details = ({ data }) => {
    const { name, text, replies } = data;
    return (
        <div className='flex shadow-md p-2 my-2 bg-gray-100 border rounded-lg'>
            <div>
                <img className="m-2 w-8 h-8" alt="user-icon" src="https://tse3.mm.bing.net/th?id=OIP.HHVUf3TYqncgpJXyCMmxyAHaHa&pid=Api&P=0&h=180" />
            </div>
            <div>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}
const CommmentList = ({ comments }) => {
    return (
        <div className='pl-4'>
            {comments.map((comment, index) => (
                <div>
                    <Details key={index} data={comment} />
                    <div className='pl-5 ml-5 border border-l-black'>
                        <CommmentList comments={comment.replies} />
                    </div>
                </div>
            ))}
        </div>
    )
}
const CommentsComponents = () => {
    return (
        <div className='m-5 p-2'>
            <h1 className='font-bold text-3xl'>comments:</h1>
            <CommmentList comments={commentData} />
        </div>
    )
}

export default CommentsComponents
