import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark";
  
  const variants = {
    primary: "bg-brand-gold hover:bg-yellow-400 text-brand-dark shadow-[0_0_20px_rgba(245,183,0,0.3)] hover:shadow-[0_0_30px_rgba(245,183,0,0.5)]",
    secondary: "bg-brand-purple hover:bg-fuchsia-800 text-white shadow-[0_0_20px_rgba(131,9,113,0.3)] hover:shadow-[0_0_30px_rgba(131,9,113,0.5)]",
    outline: "border-2 border-brand-gold/50 text-brand-gold hover:bg-brand-gold hover:text-brand-dark bg-transparent",
    ghost: "bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;