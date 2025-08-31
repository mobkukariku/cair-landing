
interface WhoWeAreCardItemProps {
    className?: string;
    color?: string;
    icon?: React.ReactNode;
    name?: string;
}

export const WhoWeAreCardItem = ({ className, color, name, icon }: WhoWeAreCardItemProps) => {
    return (
        <div
            className={`${className} rounded-2xl w-[200px] h-[200px] p-5 flex flex-col items-center justify-center gap-3 hover:scale-105 hover:shadow-amber-300  transition-all duration-200`}
            style={{
                border: color ? `2px solid ${color}` : "none",
                backgroundColor: color ? `${color}66` : "transparent",
            }}
        >
            {icon ? icon : null}
            <p
                style={{
                    color: color || "white",
                    filter: "brightness(0.2)"
                }}
                className="font-bold"
            >
                {name}
            </p>
        </div>
    )
}
