// 混入js
export default {
    computed: {
        filterdBlogs() {
            return this.blogs.filter(blog => {
                return blog.title.match(this.search);
            });
        }
    },
}