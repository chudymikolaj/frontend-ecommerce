"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { removeFromCart, clearCart, getProductsFromOrderCollectionToCart } from "@store/cartSlice";
import { InfoButton } from "@components/Buttons";
// import { submitCart } from "../features/cart/cartThunks";

import styles from "./cart.module.scss";

const CartPage = () => {
	const pathname = usePathname();
	const dispatch = useAppDispatch();
	const { items: cartItems, productCount, loading, basketSync } = useAppSelector((state) => state.cart);
	// const status = useSelector((state) => state.cart.status);
	// const error = useSelector((state) => state.cart.error);
	const isProducts = productCount > 0;

	useEffect(() => {
		if (loading === "idle") {
			dispatch(getProductsFromOrderCollectionToCart(basketSync));
		}
	}, [loading, dispatch]);

	const handleRemoveItem = (IdProduct) => {
		dispatch(removeFromCart({ IdProduct }));
	};

	const handleClearCart = () => {
		dispatch(clearCart());
	};

	// const handleSubmitCart = () => {
	// 	dispatch(submitCart(cartItems));
	// };

	return (
		<div>
			{!isProducts && (
				<div className={styles.EmptyCart__container}>
					<p className={styles.EmptyCart__container_text}>Twój koszyk jest pusty</p>
					{pathname !== "/" && (
						<InfoButton
							linkTo="/"
							name="Przejdź do strony głównej"
						/>
					)}
				</div>
			)}

			{isProducts && (
				<>
					<h2>Cart</h2>
					{/* {status === "loading" && <p>Submitting...</p>}
					{status === "failed" && <p>Error: {error}</p>} */}
					<ul>
						{cartItems.map((item) => (
							<li key={item.IdProduct}>
								{item.Name} - {item.Quantity}
								<button
									onClick={() => {
										handleRemoveItem(item.IdProduct);
										console.log(item.IdProduct);
									}}
								>
									Remove
								</button>
							</li>
						))}
					</ul>
					<button onClick={handleClearCart}>Clear Cart</button>
					{/* <button onClick={handleSubmitCart}>Submit Cart</button> */}
				</>
			)}
		</div>
	);
};

export default CartPage;
