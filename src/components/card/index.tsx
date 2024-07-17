import { FC } from "react";

// Interface for Prop Data
interface TestimonialCardProps {
    name: String,
    description: String,
    tags: String[]
}

// Function Component of TestimonialCard taking in the prop data
export const TestimonialCard: FC<TestimonialCardProps> = (props): JSX.Element => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg mr-12 dark:bg-white">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 dark:text-white">{props.name}</div>
                <p className="text-gray-700 text-base dark:text-white">
                    {props.description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2 shadow-lg">
                {props.tags.map((tag, index) => 
                    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:text-white">{tag}</span>
                )}
            </div>
        </div>
    );
}