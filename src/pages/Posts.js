import React from 'react'
import axios from 'axios'

import MyCard from '../components/MyCard'

import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress';

class Posts extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            postData: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        // if success, we go into .then()
        .then((response) => {
            console.log('data recevied from axios', response)
            const data = response.data
            this.setState({ postData: data})
        })

        // if we fail, we go to .catch()
        .catch((error) => {
            console.log('axios error', error)
        })
    }

    render() {
        return (
            <div>
                {this.state.postData.length === 0
                ? <CircularProgress />
                :   
                <Grid container>
                    {this.state.postData.map(post => (
                        <Grid item key={post.id} lg={3} sm={6}>
                            <MyCard
                                title={post.title}
                                body={post.body}
                                userId={post.userId}
                                id={post.id}
                            />
                        </Grid>
                    ))}
                </Grid>
                }
                
            </div>
        )
    }
}

export default Posts