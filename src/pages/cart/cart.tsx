import { useNavigate } from 'react-router-dom';

interface CartProps {}

const Cart = (props: CartProps) => {
	const navigate = useNavigate();

	return (
		<section className="px-16 py-8 flex flex-col gap-8">
			<h3 className=" text-[38px] font-medium text-[#333]">Savat</h3>
		</section>
	);
};

export default Cart;
