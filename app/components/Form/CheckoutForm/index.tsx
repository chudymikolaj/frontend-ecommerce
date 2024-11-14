"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import styles from "./checkoutPage.module.scss";

const CheckoutPage: React.FC = () => {
	const router = useRouter();

	const [customerInfo, setCustomerInfo] = useState({
		name: "",
		email: "",
		addressLine: "",
		zipCode: "",
		city: "",
		phone: "",
	});

	const [paymentInfo, setPaymentInfo] = useState({
		cardNumber: "",
		expirationDate: "",
		cvv: "",
	});

	const handleCustomerInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setCustomerInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
	};

	const handlePaymentInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setPaymentInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Order placed:", { customerInfo, paymentInfo });
		alert("Thank you for your purchase!");
		router.push("/");
	};

	const orderItems = [
		{ id: "1", name: "Product A", quantity: 1, price: 29.99 },
		{ id: "2", name: "Product B", quantity: 2, price: 14.99 },
	];

	const getTotalPrice = () => {
		return orderItems.reduce((total, item) => total + item.price * item.quantity, 0);
	};

	return (
		<div className={styles.checkout}>
			<div className={styles.checkout__heading}>
				<h1 className={styles.checkout__headingTitle}>Dostawa i płatność</h1>
				<p className={styles.checkout__headingSubTitle}>Prezentujemy tylko opcje dostępne dla tego zamówienia.</p>
			</div>

			<div className={styles.checkout__columns}>
				<form
					onSubmit={handleSubmit}
					className={styles.checkout__form}
				>
					<div className={styles.checkout__inlineGroup}>
						<div className={styles.checkout__formGroup}>
							<label htmlFor="name">Imię i nazwisko lub nazwa firmy</label>
							<input
								type="text"
								id="name"
								name="name"
								required
								value={customerInfo.name}
								onChange={handleCustomerInfoChange}
							/>
						</div>

						<div className={styles.checkout__formGroup}>
							<label htmlFor="addressLine1">Ulica i numer domu / mieszkania</label>
							<input
								type="text"
								id="addressLine1"
								name="addressLine1"
								required
								value={customerInfo.addressLine}
								onChange={handleCustomerInfoChange}
							/>
						</div>

						<div className={styles.checkout__formGroup}>
							<label htmlFor="city">Miasto</label>
							<input
								type="text"
								id="city"
								name="city"
								required
								value={customerInfo.city}
								onChange={handleCustomerInfoChange}
							/>
						</div>

						<div className={styles.checkout__formGroup}>
							<label htmlFor="zipCode">Kod pocztowy</label>
							<input
								type="text"
								id="zipCode"
								name="zipCode"
								required
								value={customerInfo.zipCode}
								onChange={handleCustomerInfoChange}
							/>
						</div>

						<div className={styles.checkout__formGroup}>
							<label htmlFor="phone">Telefon</label>
							<input
								type="text"
								id="phone"
								name="phone"
								required
								value={customerInfo.phone}
								onChange={handleCustomerInfoChange}
							/>
						</div>

						<div className={styles.checkout__formGroup}>
							<label htmlFor="email">Email</label>
							<input
								type="email"
								id="email"
								name="email"
								required
								value={customerInfo.email}
								onChange={handleCustomerInfoChange}
							/>
						</div>
					</div>
				</form>

				<div className={styles.checkout__rightColumn}>
					<div className={styles.checkout__orderSummary}>
						<h2 className={styles.checkout__subHeading}>Order Summary</h2>
						<table className={styles.checkout__table}>
							<thead>
								<tr>
									<th>Product</th>
									<th>Quantity</th>
									<th>Price</th>
									<th>Total</th>
								</tr>
							</thead>
							<tbody>
								{orderItems.map((item) => (
									<tr key={item.id}>
										<td>{item.name}</td>
										<td>{item.quantity}</td>
										<td>${item.price.toFixed(2)}</td>
										<td>${(item.price * item.quantity).toFixed(2)}</td>
									</tr>
								))}
							</tbody>
						</table>
						<div className={styles.checkout__totalPrice}>Total Price: ${getTotalPrice().toFixed(2)}</div>
					</div>

					<div className={styles.checkout__paymentInfo}>
						<h2 className={styles.checkout__subHeading}>Payment Information</h2>

						<div className={styles.checkout__formGroup}>
							<label htmlFor="cardNumber">Card Number</label>
							<input
								type="text"
								id="cardNumber"
								name="cardNumber"
								required
								value={paymentInfo.cardNumber}
								onChange={handlePaymentInfoChange}
							/>
						</div>

						<div className={styles.checkout__inlineGroup}>
							<div className={styles.checkout__formGroup}>
								<label htmlFor="expirationDate">Expiration Date</label>
								<input
									type="text"
									id="expirationDate"
									name="expirationDate"
									required
									value={paymentInfo.expirationDate}
									onChange={handlePaymentInfoChange}
								/>
							</div>

							<div className={styles.checkout__formGroup}>
								<label htmlFor="cvv">CVV</label>
								<input
									type="text"
									id="cvv"
									name="cvv"
									required
									value={paymentInfo.cvv}
									onChange={handlePaymentInfoChange}
								/>
							</div>
						</div>
					</div>

					<button
						type="submit"
						onClick={handleSubmit}
						className={styles.checkout__button}
					>
						Place Order
					</button>
				</div>
			</div>
		</div>
	);
};

export default CheckoutPage;
