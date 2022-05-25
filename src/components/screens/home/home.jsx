import React from 'react'

const data = [
    {
        title: 'Finish the essay collaboration',
        isCompleted: false,
    },
    {
        title: 'Read next chapter of the book',
        isCompleted: false,
    },
    {
        title: 'Send the finished assigment',
        isCompleted: false,
    },

]


const Home = () => {
    return (
        <div className='bg-gray-900 h-screen text-white'>

            {data.map(item => <div>{item.title}</div>)}



        </div>
    )
}

export default Home