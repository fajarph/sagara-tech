import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {

    public async getUsers({ response, auth }: HttpContextContract) {
        try {
            await auth.use("api").authenticate()

            const user = await User.query()
                .preload("blog_posts", (query) => {
                    query.select("id", "title", "content", "tag")
                })
                .select("id", "name", "email", "gender")

            response.status(200).json({
                status: 200,
                user: user
            })
        } catch (error) {
            response.status(401).json({
                status: 401,
                msg : error.message
            })
        }
    }
}
