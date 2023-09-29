import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext"
import BlogPost from "App/Models/BlogPost"

export default class BlogPostsController {

    public async createBlogPost({ request, response, auth} : HttpContextContract) {
        try {
            const user = auth.use("api").user
            const { title, content, tag } = request.all()

            const newBlog = new BlogPost()
            newBlog.fill({
                title,
                content,
                tag,
                user_id: user?.id
            })

            await newBlog.save()

            response.status(200).json({
                status: 200,
                msg: "Blog Post created successfully",
                order: newBlog
            })
        } catch (error) {
            response.status(401).json({
                status: 401,
                msg: error.message
            })
        }
    }

    public async updateBloPosts({ request, response, params }: HttpContextContract) {
        try {
            const blog = await BlogPost.find(params.id)

            if (!blog) {
                return response.status(401).json({msg: "Blog not found" })
            }

            const field = request.only(["title", "content", "tag"])

            blog.merge(field)

            await blog.save()
            
            response.json({
                status: 200,
                msg: "Blog Post successfully updated",
                updatedBlog: blog
            })
        } catch (error) {
            response.status(401).json({
                status: 401,
                msg : error.message
            })
        }
    }

    public async deleteBlogPost({ params, response }: HttpContextContract) {
        try {
            const blog = await BlogPost.findByOrFail("id", params.id)
            await blog.delete()
        
            response.status(200).json({
                status: 200,
                msg: "Blog Post deleted successfully"
            })
        }catch (error) {
            response.status(401).json({
                status: 401,
                msg: error.message
            })
        }
    }
}
