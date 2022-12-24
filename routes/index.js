import express from 'express'
const router = express.Router();
import {registerController, loginController, userController, refreshController, productController} from '../controllers';
import auth from '../middlewares/auth';
import admin from '../middlewares/admin'
/*
router.post('/register', (req,res,next) => {
    //Register logic write here
})
*/
router.post('/register', registerController.register)
router.post('/login', loginController.login)
router.get('/me', auth, userController.me)
router.post('/refresh', refreshController.refresh)
router.post('/logout', auth, loginController.logout)
// For products
router.post('/products', [auth, admin], productController.store)
// For update the product
router.put('/products/:id', [auth, admin], productController.update)
// For delete the product
router.delete('/products/:id', [auth,admin], productController.destroy)
// For getting all the products
router.get('/products', productController.index)
//For get single product
router.get('/products/:id', productController.show)
export default router;
