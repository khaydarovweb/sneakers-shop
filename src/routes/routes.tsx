import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import { Home, Cart, Order, Favorites, Products } from '../pages';

function Router() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
				{/* <Route path="/search" element={<Search />} /> */}
				<Route path="/favorites" element={<Favorites />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/order" element={<Order />} />
				{/* Uncomment and adjust these routes as needed */}
				{/* <Route path="/auth" element={<Protected allowed={isAllowed} to="/" />}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route> */}
				{/* <Route path="*" element={<Navigate to="/auth/login" />} /> */}
			</Routes>
			<Footer />
		</>
	);
}

export default Router;
