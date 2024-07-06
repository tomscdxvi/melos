import React, {Component, Suspense} from "react";
import Lottie from "lottie-react";

export default class DisplayLottie extends Component<any, any> {
    render() {
        const animationData = this.props.animationData;
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData
        };

        return (
            <>
                <Lottie
                    animationData={defaultOptions.animationData}
                    loop={defaultOptions.loop}
                />
            </>
        );
    }
}
