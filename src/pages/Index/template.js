import request from '@/helpers/request.js'
import auth from '@/api/auth.js'
import blog from '@/api/blog.js'

window.request = request
window.auth = auth
window.blog = blog

export default {
    name: 'Index',
    data () {
      return {
        blogs:[],
        total:0,
        page:1
      }
    },
    created () {
      this.page = parseInt(this.$route.query.page) || 1
      blog.getIndexBlogs({page:this.page}).then(res => {
        console.log(res)
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
      })
    },
    methods:{
      // onclick1 () {
      //   this.$message.error('错了哦，这是一条错误消息');
      // },
      // onclick2 () {
      //   this.$alert('这是一段内容', '标题名称', {
      //     confirmButtonText: '确定',
      //     callback: action => {
      //       this.$message({
      //         type: 'info',
      //         message: `action: ${ action }`
      //       });
      //     }
      //   });
      // }
      handleCurrentChange(newPage) {
        console.log(newPage)
        blog.getIndexBlogs({page:newPage}).then(res => {
          console.log(res)
          this.blogs = res.data
          this.total = res.total
          this.page = res.page
          //this.$router.push({path:'/'})
          this.$router.push({ path: '/', query: { page: newPage}})
        })
      }
    }
  }