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
                .select("id", "name", "email", "gender", "address", "no_telp")

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

    public async updateProfileUser({ request, response, params }: HttpContextContract) {
        try {
            const user = await User.find(params.id)

            if (!user) {
                return response.status(401).json({msg: "User not found" })
            }

            const field = request.only(["email", "name", "gender", "address", "no_telp"])

            user.merge(field)

            await user.save()
            
            response.json({
                status: 200,
                msg: "User successfully updated",
                user: field
            })
        } catch (error) {
            response.status(401).json({
                status: 401,
                msg: error.message
            })
        }
    }
}
