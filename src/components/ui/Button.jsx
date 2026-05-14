function Button({ children, type = 'button', variant = 'primary', className = '', ...props }) {
  const styles = {
    primary: 'bg-cyan-600 text-white hover:bg-cyan-700',
    secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200',
    danger: 'bg-rose-500 text-white hover:bg-rose-600'
  };

  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
