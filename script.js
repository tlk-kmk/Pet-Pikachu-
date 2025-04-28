function waitForRive() {
    const interval = setInterval(() => {
        if (window.Rive) {
            clearInterval(interval);
            initRive();
        }
    }, 95);
}

function initRive() {
    console.log('Rive runtime loaded:', window.Rive);
    const canvas = document.getElementById('riveCanvas');
    if (!canvas) {
        console.error('Canvas element not found');
        return;
    }
    if (window.Rive) {
        try {
            const rive = new window.Rive({
                canvas: canvas,
                src: 'petpikachu.riv',
                autoplay: true,
                onLoad: () => {
                    console.log('Rive animation loaded successfully');
                    rive.resizeDrawingSurfaceToCanvas();
                },
                onError: (error) => {
                    console.error('Error loading Rive animation:', error);
                }
            });
            console.log('Rive object created:', rive); // Add this line
        } catch (error) {
            console.error('Error initializing Rive:', error);
        }
    } else {
        console.error('Rive object is still not available.');
    }
}

waitForRive(); // Call it directly now
