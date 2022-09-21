import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";
import { formatCurrancy } from "../utils/formatCurrancy";
import CartItem from "./CartItem";
import storeItems from "../data/items.json";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  const totalPrice = cartItems.reduce((total, cartItem) => {
    const item = storeItems.find((staticItem) => staticItem.id === cartItem.id);
    return total + (item?.price || 0) * cartItem?.quantity;
  }, 0);
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          {totalPrice ? (
            <div className="ms-auto fw-bold fs-5">
              Total {formatCurrancy(totalPrice)}
            </div>
          ) : null}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
