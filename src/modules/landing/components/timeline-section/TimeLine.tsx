import React from "react";

// TimeLine.tsx
interface TimeLineProps {
    years: string[];
    activeYear: string | null;
    setActiveYear: (year: string | null) => void;
}


export const TimeLine = ({ years, setActiveYear, activeYear }: TimeLineProps) => {
    return (
        <div className="flex flex-col items-center gap-5 mx-5">
            {years.map((year, index) => (
                <React.Fragment key={year}>
                    <div
                        key={index}
                        className={`w-18 h-18 transition border-2 rounded-full ${activeYear == year ? "bg-primary/20 border-primary" : " bg-card/20  border-card"} flex justify-center items-center cursor-pointer`}
                        onClick={() => setActiveYear(year)}
                    >
                        {year}
                    </div>
                    {year < years[years.length - 1] && <div className="w-1 h-10 bg-card/70 rounded" />}
                </React.Fragment>
            ))}
        </div>
    );
};
