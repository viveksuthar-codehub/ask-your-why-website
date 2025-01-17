const anchors = document.querySelectorAll('.anchor');
        const textBoxes = document.querySelectorAll('.text-box');
        const defaultText = document.getElementById('text-default');

        anchors.forEach((anchor, index) => {
            anchor.addEventListener('mouseenter', () => {
                textBoxes.forEach(box => box.classList.remove('active'));
                textBoxes[index + 1].classList.add('active');
                
                anchors.forEach((a, i) => {
                    if (i !== index) {
                        a.classList.add('dimmed');
                    } else {
                        a.classList.remove('dimmed');
                    }
                });
            });

            anchor.addEventListener('mouseleave', () => {
                textBoxes.forEach(box => box.classList.remove('active'));
                defaultText.classList.add('active');
                
                anchors.forEach(a => {
                    a.classList.remove('dimmed');
                });
            });
        });