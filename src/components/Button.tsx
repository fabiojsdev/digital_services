import { motion } from 'framer-motion'
import type { ReactNode } from 'react' // Importação type-only

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  onClick?: () => void
}

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick 
}: ButtonProps) {
  const baseClasses = 'font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105'
  
  const variantClasses = {
    primary: 'bg-yellow-400 hover:bg-yellow-300 text-gray-900',
    secondary: 'bg-indigo-600 hover:bg-indigo-500 text-white',
    outline: 'border-2 border-white hover:bg-white hover:text-gray-900 text-white'
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}
