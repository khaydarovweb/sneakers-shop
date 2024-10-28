import { useNavigate } from 'react-router-dom';

interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
	const navigate = useNavigate();
	return (
		<header>
			<h1 className="logoText cursor-pointer" onClick={() => navigate('/')}>
				Yakshanba Shop
			</h1>
			<div className="">
				<div className="">
					{/* cart icon */}
					<a href="/cart">Cart</a>
				</div>
				<div className="">
					{/* cart icon */}
					<a href="/cart">Favorites</a>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
