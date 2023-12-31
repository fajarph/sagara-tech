/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { msg: "API Hit Succes" }
})

Route.group(() => {
  Route.post("register", "AuthController.register")
  Route.post("login", "AuthController.login")
  Route.group(() => {
    Route.get("users", "UsersController.getUsers")
    Route.patch("users/:id", "UsersController.updateProfileUser")
    Route.post("blog-posts", "BlogPostsController.createBlogPost")
    Route.patch("blog-posts/:id", "BlogPostsController.updateBloPosts")
    Route.delete("blog-posts/:id", "BlogPostsController.deleteBlogPost")
  }).middleware(["auth"])
}).prefix("api")
