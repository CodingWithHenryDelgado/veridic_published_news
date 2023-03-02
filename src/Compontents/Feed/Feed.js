import React from 'react'
import axios from 'axios'
import Loader from '../Loader/Loader'
import Post from '../Post/Post'
import './Feed.css'

export default class Feed extends React.Component {
    state = {
        pictureInfo: [],
        loading: true
    }

    componentDidMount() {
        axios(`https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed`)
            .then(res => {
                const pictureInfo = res.data
                const newState = { ...this.state }
                newState.pictureInfo = pictureInfo
                newState.loading = false
                this.setState(newState)
            })
    }

    render() {
        return (
            <>
                <div id='company'>
                    <h1>Veridic News</h1>
                    <p>Brought to you by News Article API Tech Crunch</p>
                </div>
                <div className='feed'>
                    {
                        this.state.loading ?

                            <Loader /> :

                            this.state.pictureInfo.map(info => (
                                <Post
                                    key={info.id}
                                    copyright={info['parselyMeta']['parsely-author']}
                                    date={info.date}
                                    explanation={info.excerpt.rendered.replace(/(<\/?p>)|(<.*?>)|(&#?\w+;)|(\[[^\]]*\])/gi, "")}
                                    hdurl={info.jetpack_featured_media_url}
                                    canonical_url={info.canonical_url}
                                    id={info.id}
                                    title={info.title.rendered.replace(/(<\/?p>)|(<.*?>)|(&#?\w+;)|(\[[^\]]*\])/gi, "")}
                                />
                            ))
                    }
                </div>
            </>
        )
    }
}
