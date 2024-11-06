"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { removeFromCart, clearCart, getProductsFromOrderCollectionToCart } from "@store/cartSlice";
import { InfoButton } from "@components/Buttons";

import { ActionButton, SubmitButton } from "@components/Buttons";
import styles from "./cart.module.scss";
import ImageComponent from "@/app/components/Image";
import Currency from "@/app/lib/currency";

const CartPage = () => {
	const pathname = usePathname();
	const router = useRouter();
	const dispatch = useAppDispatch();
	const { items: cartItems, productCount, loading, basketSync } = useAppSelector((state) => state.cart);
	const error = useAppSelector((state) => state.cart.error);
	const isProducts = productCount > 0;
	const isLodingProdutsInCart = isProducts && loading === "succeeded";
	const isLodingAndEmptyCart = !isProducts && loading === "succeeded";

	useEffect(() => {
		if (loading === "idle") {
			dispatch(getProductsFromOrderCollectionToCart(basketSync));
		}
	}, [loading, dispatch]);

	const handleRemoveItem = (IdProduct: string) => {
		dispatch(removeFromCart({ IdProduct }));
	};

	const handleClearCart = () => {
		dispatch(clearCart());
	};

	const handleSubmitCart = () => {
		// dispatch(submitCart(cartItems));
		router.push("/checkout");
	};

	return (
		<div className={styles.CartPage}>
			{/* <div className={styles.CartPage_breadcrumbs}>
				<span>Koszyk</span> | <span>Dostawa i płatność </span> | <span>Podsumowanie</span>
			</div> */}

			<div className={styles.CartPage__container}>
				{loading === "idle" && <p>Submitting...</p>}
				{loading === "failed" && <p>Error: {error?.toString()}</p>}

				{isLodingAndEmptyCart && (
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

				{isLodingProdutsInCart && (
					<>
						<div className={styles.CartPage__container_header}>
							<h1 className={styles.CartPage__container_header__title}>Koszyk(1)</h1>
						</div>

						<div className={styles.CartPage__grid}>
							<div className={styles.CartPage__grid__wrapper}>
								<ul className={styles.CartPage__grid__productList}>
									{cartItems.map((item) => {
										console.log(item);
										return (
											<li
												className={styles.CartPage__grid__productList_product}
												key={item.IdProduct}
											>
												<ImageComponent
													data={item.Image}
													className={styles.CartPage__grid__productList_product_image}
												/>
												<div className={styles.CartPage__grid__productList_product_wrapper}>
													<div className={styles.CartPage__grid__productList_product_wrapper__row}>
														<div>
															<p className={styles.CartPage__grid__productList_product_wrapper__row_name}>
																{item.Name}
															</p>
															<p className={styles.CartPage__grid__productList_product_wrapper__row_color}>Kolor: -</p>
														</div>
														<p className={styles.CartPage__grid__productList_product_wrapper__row_price}>
															Cena <Currency price={String(item.Price)} />
														</p>
													</div>

													<div className={styles.CartPage__grid__productList_product_wrapper__row}>
														<p>Ilość: {item.Quantity}</p>
														<div className={styles.CartPage__grid__productList_product_wrapper__row_buttons}>
															<button
																className={styles.CartPage__grid__productList_product_wrapper__row_button}
																onClick={() => {
																	console.log(item.IdProduct);
																}}
															>
																Zmień
															</button>
															<button
																className={styles.CartPage__grid__productList_product_wrapper__row_button}
																onClick={() => {
																	handleRemoveItem(item.IdProduct);
																	console.log(item.IdProduct);
																}}
															>
																Usuń
															</button>
														</div>
													</div>
												</div>
											</li>
										);
									})}
								</ul>

								<ActionButton action={handleClearCart}>Wyczyść koszyk</ActionButton>
							</div>

							<div className={styles.CartPage__grid__cart_summary}>
								<div className={styles.CartPage__grid__cart_summary_border}>
									<div className={styles.CartPage__grid__cart_summary__before_total}>
										<h2 className={styles.CartPage__grid__cart_summary__before_total_title}>Podsumowanie zamówienia</h2>

										<div className={styles.CartPage__grid__cart_summary__before_total__wrapper}>
											<div className={styles.CartPage__grid__cart_summary__before_total__row}>
												<p className={styles.CartPage__grid__cart_summary__before_total__row_name}>Suma częściowa</p>
												<span className={styles.CartPage__grid__cart_summary__before_total__row_price}>6299,00 zł</span>
											</div>
											<div className={styles.CartPage__grid__cart_summary__before_total__row}>
												<p className={styles.CartPage__grid__cart_summary__before_total__row_name}>
													Dostawa i płatnośc
												</p>
												<span className={styles.CartPage__grid__cart_summary__before_total__row_price}>0 zł</span>
											</div>
											<div className={styles.CartPage__grid__cart_summary__before_total__row}>
												<p className={styles.CartPage__grid__cart_summary__before_total__row_name}>Podatek VAT</p>
												<span className={styles.CartPage__grid__cart_summary__before_total__row_price}>
													Uwzględniono
												</span>
											</div>
										</div>
									</div>

									<div className={styles.CartPage__grid__cart_summary__total}>
										<hr />

										<div className={styles.CartPage__grid__cart_summary__total__row__wrapper}>
											<div className={styles.CartPage__grid__cart_summary__total__row}>
												<p className={styles.CartPage__grid__cart_summary__total__row_name}>Szacowana suma</p>
												<span className={styles.CartPage__grid__cart_summary__total__row_price}>6299,00 zł</span>
											</div>
										</div>

										<SubmitButton action={handleSubmitCart}>Przejdz do dostawy i płatności</SubmitButton>
									</div>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default CartPage;
