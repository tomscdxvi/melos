import { FC, useState } from "react";

interface ToolTipProps {
    content: any,
    message: any,
}

export const ToolTip: FC<ToolTipProps> = (props): JSX.Element => {

    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className="relative">
            <div
                className="flex cursor-default items-center"
                onClick={() => setShowTooltip(!showTooltip)}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
            >
                {props.message}
            </div>

            {showTooltip && 
                <div className="absolute left-full w-96 bg-gray-900 text-white rounded-md py-3 px-5 pointer-events-none transition-all duration-300 z-50">
                    <p>{props.content}</p>
                </div>}
        </div>
    );
}