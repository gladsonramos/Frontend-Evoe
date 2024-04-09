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

        // Limpa a animação quando o componente for desmontado
        return () => anim.destroy();
    }, []);


    return (
        <div
            style={{ position: 'absolute',  zIndex: -1 }} // Define a largura e altura para ocupar toda a tela e posiciona atrás do conteúdo
        >
            <div
                ref={animationContainer}
                style={{ width: '100%', height: '100%' }} // Define a largura e altura para ocupar toda a tela
            />
        </div>
    );
}

export default LottieAnimation;
