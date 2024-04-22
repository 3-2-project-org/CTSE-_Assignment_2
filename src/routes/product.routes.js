import Express from 'express';
import { createProduct, deleteProduct, getAllProducts, updateProduct, getProduct } from '../controllers/product';


const productsRouter = Express.Router();

productsRouter.get('/', getAllProducts);
productsRouter.get('/:id', getProduct);
productsRouter.post('/', createProduct);
productsRouter.patch('/:id',  updateProduct);
productsRouter.delete('/:id',  deleteProduct);

export default productsRouter;
