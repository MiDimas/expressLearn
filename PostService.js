import Post from "./Post.js";

class PostService {
    async create (post) {
        const createdPost = await Post.create(post);
        return createdPost;
    }
    async getAll () {
        const posts = await Post.find();
        return posts;



    }
    async getOne(id) {
        if (!id){
            throw new Error('Id не найден')
        }
        const post = await Post.findById(id);
        return post;
    }

    async update(post) {
        if (!post._id){
            throw new Error('Не найдено поле _id')
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true});
        return updatedPost;


    }
    async delete (id) {

            if (!id){
                throw new Error("Id не указан")
            }
            const delPost = await Post.findByIdAndDelete(id);
            return delPost;
    }
}

export default new PostService();