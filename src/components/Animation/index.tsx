import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from './Animated.json'; 


function LottieAnimation() {
    const animationContainer = useRef(null);

    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: animationContainer.current!,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData 
        });

        return () => anim.destroy();
    }, []);


    return (
        <div
            style={{ position: 'absolute',  zIndex: -1 }} 
        >
            <div
                ref={animationContainer}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
}

export default LottieAnimation;
