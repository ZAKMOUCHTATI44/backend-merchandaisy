import BannerDesc from '@/Components/blog/BannerDesc'
import App from '@/Layouts/App'
import React from 'react'

const Show = ({blog}) => {
  return (
    <App>
        <BannerDesc blog={blog} />
        <div className="container mx-auto">
            <div dangerouslySetInnerHTML={{__html: blog.content}}></div>
        </div>
    </App>
  )
}

export default Show
