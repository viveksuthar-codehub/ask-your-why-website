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


// Cards Scroll Animation
const { ScrollObserver, valueAtPercentage } = aat;

const cardsContainer = document.querySelector('.service-cards-container');
const cards = document.querySelectorAll('.services-card');

cardsContainer.style.setProperty('--cards-count', cards.length);
cardsContainer.style.setProperty('--card-height',`${cards[0].clientHeight}px`);

Array.from(cards).forEach((card, index) => {
    const offsetTop = 20 + index * 20;
    card.style.paddingTop = `${offsetTop}px`;
    if (index === cards.length - 1) {
        return;
    }

    const toScale = 1 - (cards.length + 1 - index) * 0.1;
    const nextCard = cards[index + 1];
    const cardInner = card.querySelector('.card_inner');

    ScrollObserver.Element(nextCard, {
        offsetTop,
        offsetBottom: window.innerHeight - card.clientHeight
    }).onScroll(({ percentageY }) => {
        cardInner.style.transform = `scale(${valueAtPercentage({
            from: 1,
            to: toScale,
            percentage: percentageY
        })})`;

        cardInner.style.filter = `brightness(${valueAtPercentage({
            from: 1,
            to: 0.6,
            percentage: percentageY
        })})`;
    });
});