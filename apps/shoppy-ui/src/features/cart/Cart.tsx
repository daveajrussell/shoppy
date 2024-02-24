import { useAppSelector } from '../../app/hooks';
import { useGetCartQuery } from './cartApiSlice';
import { selectCartId } from './cartSlice';

const Cart = () => {
  const cartId = useAppSelector(selectCartId);
  const { data, isError, isLoading, isSuccess } = useGetCartQuery(cartId);
  if (isError) {
    return (
      <div>
        <h1>There was an error!!!</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isSuccess) {
    return <div>cart id: {data.id}</div>;
  }
};

export default Cart;
