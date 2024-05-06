interface IButtonProps {
    text?: string,
    onClick: ()=> void,
    children?: React.ReactNode,
    CustomClass: string
}

const Button = ({text, onClick, children, CustomClass}:IButtonProps, ) => {
    return (
        <button className={CustomClass} onClick={onClick}>
            {text}
            {children}
        </button>
    )
};
  
  export default Button;
