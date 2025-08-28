interface ContainerProps {
    className?: string;
    children?: React.ReactNode;
}

export const Container = ({children, className}:ContainerProps) => {
    return (
        <div className={`max-w-[1076px] mx-auto ${ className }`}>
            {children}
        </div>
    )
}