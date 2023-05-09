import { useDispatch } from 'react-redux';
import { deleteProduct } from '../Redux/Slice/productSlice';

function DeleteProduct() {
  const dispatch = useDispatch();

  const handleDeleteProduct =async ({products}) => {
    await dispatch(deleteProduct(products))
      .then(() => {
        console.log('Product deleted successfully!');
      })
      .catch((error) => {
        console.log('Error deleting product:', error);
      });
  };
  return (
    <button onClick={handleDeleteProduct}>Delete cart</button>
  );
}

export default DeleteProduct;
