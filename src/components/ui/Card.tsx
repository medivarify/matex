import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  interactive = false,
  padding = 'sm',
  shadow = 'sm',
  hover = true,
  onClick
}) => {
  const baseClasses = 'bg-white rounded-xl sm:rounded-2xl border border-gray-100 transition-all duration-300';
  
  const paddingClasses = {
    none: '',
    sm: 'p-3 sm:p-4',
    md: 'p-4 sm:p-6',
    lg: 'p-6 sm:p-8'
  };
  
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  };
  
  const interactiveClasses = interactive 
    ? 'cursor-pointer hover:border-blue-200 transform active:scale-95 sm:hover:scale-[1.02]' 
    : '';
    
  const hoverClasses = hover && !interactive 
    ? 'hover:shadow-lg transform active:scale-[0.99] sm:hover:scale-[1.01]' 
    : '';
  
  const classes = `${baseClasses} ${paddingClasses[padding]} ${shadowClasses[shadow]} ${interactiveClasses} ${hoverClasses} ${className}`;
  
  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;