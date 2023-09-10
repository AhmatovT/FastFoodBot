import './button.css';

const Button = props => {
	const { type, title, onClick, disabled } = props;
	return (
		<div
			className={`btn ${(type === 'add' && 'add') || (type === 'remove' && 'remove') || (type === 'checkout' && 'checkout')}`}
			onClick={onClick}
			disable={disabled}
		>
			{title}
		</div>
	);
};

export default Button;
