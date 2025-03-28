import {  ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
    className?: string;
}
const container=({children, className=""}: ContainerProps) => {
    return (
        <div className={`max-w-3xs mx-auto px-4 sm:px-6 lg:px-10 top-1 ${className}`}>
            {children}
            </div>
    );
};

export default container;