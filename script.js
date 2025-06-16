document.addEventListener('DOMContentLoaded', () => {
    // Ensure FramerMotion is loaded
    if (window.FramerMotion) {
        const { motion } = window.FramerMotion;

        const items = document.querySelectorAll('.bento-item');

        items.forEach((item, index) => {
            if (item && motion) { // Check if item and motion function exist
                let initialProps = { opacity: 0 };
                // Alternate slide directions for variety
                if (index % 3 === 0) {
                    initialProps.x = -50; // Slide from left
                } else if (index % 3 === 1) {
                    initialProps.y = 50;  // Slide from bottom
                } else {
                    initialProps.scale = 0.8; // Scale up
                }

                motion(item, {
                    initial: initialProps,
                    whileInView: { opacity: 1, y: 0, x: 0, scale: 1 },
                    viewport: { once: true, amount: 0.2 }, // Trigger when 20% of the element is in view
                    transition: { duration: 0.8, ease: "easeOut", delay: index * 0.15 } // Adjusted duration and delay
                });
            } else {
                if (!item) console.error('Framer Motion: Item not found at index', index);
                if (!motion) console.error('Framer Motion: motion function not found. Ensure Framer Motion library is loaded.');
            }
        });
    } else {
        console.error('Framer Motion library not loaded. Animations will not apply.');
    }
});
