import Router from "express";
import PostController from "./PostController.js";

const router = new Router();


router.get('/', (req, res) => {
    res.status(200).json({status: 'Сервер работает'});
});

router.post("/post", PostController.create);

router.get('/posts', PostController.getAll);
router.get('/posts/:id', PostController.getOne);
router.put('/posts', PostController.update)
router.delete('/posts/:id', PostController.delete)

export default router;