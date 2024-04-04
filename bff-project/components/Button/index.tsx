interface IButtonProps {
    text?: string,
    onClick: ()=> void,
    children?: React.ReactNode,
}

const Button = ({text, onClick, children}:IButtonProps) => {
    return (
        <button onClick={onClick}>
            {text}
            {children}
        </button>
    );
};
  
  export default Button;
