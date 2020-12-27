import React from 'react'

import axios from 'axios'

import MyCard from '../components/MyCard'

const IndividualPost = (props) => {

    const [ postData, setPostData ] = React.useState({})

    // same as "componentDidMount()"
    React.useEffect(() => {
        const postId = props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(r => {
            setPostData(r.data)
        })
    }, [])

    return (
        <MyCard 
            title={postData.title}
            body={postData.body}
            userId={postData.userId}
            disableDetail={true}
        />
    )
}

export default IndividualPost