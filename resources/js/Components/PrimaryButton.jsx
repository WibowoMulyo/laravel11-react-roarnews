export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-4 py-2 bg-[#4E59D8] border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-[#3E49C7] focus:bg-[#3E49C7] active:bg-[#2E38B6] focus:outline-none focus:ring-2 focus:ring-[#99A3F8] focus:ring-offset-2 transition ease-in-out duration-150 ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
