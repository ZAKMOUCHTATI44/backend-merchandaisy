import BannerBlog from '@/Components/blog/BannerBlog'
import Entrainements from '@/Components/blog/Entrainements'
import Lifestyle from '@/Components/blog/Lifestyle'
import Nutrition from '@/Components/blog/Nutrition'
import App from '@/Layouts/App'
import { Head } from '@inertiajs/inertia-react'
import React from 'react'

const Blog = ({tags,blogs_nutritions,blogs_entrainements,blogs_lifestyle}) => {
  return (
    <App>
        <Head>
         <title> Blog </title>
         <meta head-key="pagename" name="pagename" content="blog" />
        </Head>
        <BannerBlog tags={tags} />
        <Entrainements blog={blogs_entrainements} />
        <Nutrition blogs={blogs_nutritions} />
        <Lifestyle blogs={blogs_lifestyle} />
    </App>
  )
}

export default Blog
