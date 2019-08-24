import ShowBlogs from './components/ShowBlogs'
import AddBlog from './components/AddBlog'
import SingleBlog from './components/SingleBlog'
import EditBlog from './components/EditBlog'

export default [
    { path: "/", component: ShowBlogs },
    { path: "/add", component: AddBlog },
    { path: "/blog/:id", component: SingleBlog },
    { path: "/editblog/:id", component: EditBlog }
]
