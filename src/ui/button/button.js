const Button = ({ children, onAddRecord }) => {
  return <button className={` w-[100px] h-[40px] rounded-[6px]
                              bg-slate-950 text-white border-0`}
    onClick={onAddRecord}>{children}</button>
}

export default Button
