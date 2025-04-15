        // Простая анимация для фото
        const photo = document.getElementById('animated-photo');
        let rotation = 0;
        
        setInterval(() => {
            rotation = (rotation + 0.5) % 360;
            photo.style.transform = `rotate(${rotation}deg)`;
        }, 50);