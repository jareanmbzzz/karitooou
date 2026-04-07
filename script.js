let currentReasons = 0;
const totalReasons = 150;
const reasonsPerLoad = 15;
let allReasons = [];

const generateReasons = () => {
    const reasons = [
        "Tu sonrisa ilumina como el sol",
        "Tu risa me es muy tierna, la amo",
        "Tu forma de amar es tan hermosa",
        "Ves belleza en las cosas minimas",
        "Tu esfuerzo me inspira cada día",
        "Haces mágicos los momentos ordinarios",
        "Tu empatía",
        "Conviertes mis días malos en días mejores",
        "Tu paciencia en el proceso",
        "Me haces querer ser una mejor persona",
        "Tus ojos son mi lugar favorito para perderme",
        "Tu voz es uno de mis sonidos favoritos",
        "Tus abrazos me hacen sentir en casa",
        "La forma en que me miras por momentitos, me derrite",
        "Tu presencia me da paz",
        "Me entiendes incluso cuando no digo nada",
        "Me haces sentir seguro",
        "Recuerdas los pequeños detalles",
        "Celebras mis logros como si fueran tuyos",
        "Me sostienes cuando me siento débil",
        "Crees en mí cuando yo dudo de mí mismo",
        "Me haces sentir vivo y valorado",
        "Me estas amando incluso en mis peores momentos",
        "Haces que mi corazón se acelere rapido con tus te amo",
        "Nuestros chistes que solo nosotros entendemos, me hacen feliz",
        "Podemos estar en silencio sin sentir incomodidad",
        "Nuestras aventuras siempre son especiales",
        "Nuestras conversaciones y de tanto que podemos hablar sin aburrirnos",
        "La forma en que conviertes lo normal en algo especial",
        "Nuestra conexión se siente única",
        "Imaginar mi futuro contigo me hace sonreír",
        "Quiero envejecer a tu lado",
        "Sueño con construir una vida contigo",
        "Pienso en nuestro futuro y me lleno de ilusión",
        "Despertar a tu lado me hace feliz",
        "Eres parte de todos mis planes bonitos",
        "Me encanta la forma en que dices con cariño apodos",
        "Tus mensajes de buenos días mejoran mis mañanas",
        "La forma en que me cuidas en los detalles",
        "Tus caricias me calman",
        "Te ríes de mis bromas incluso cuando son malas",
        "Tus pequeños gestos significan mucho para mí",
        "Tu ternura me derrite el corazon",
        "Tu dulzura hace mi vida más bonita",
        "Siempre sabes cómo hacerme sentir mejor",
        "Eres mi refugio en los días difíciles",
        "Me levantaste cuando sentia que no podia mas",
        "Luchas por nosotros",
        "Proteges mi corazón con amor",
        "Siempre estás a mi lado",
        "Me haces sentir más fuerte",
        "Nunca te rindes con nosotros",
        "Eres mi hogar",
        "Tu forma de pensar me maravilla",
        "Tu inteligencia la admiro",
        "La manera en que resuelves problemas me encanta",
        "Tu curiosidad",
        "Me enseñas cosas nuevas",
        "Tu manera de ver el mundo es especial",
        "Me pones bien pendejo JKAJAJA",
        "Me haces olvidar todo lo malo",
        "Amo lo auténtica que eres",
        "Tu amor ha cambiado mi vida",
        "Me eliges cada día",
        "Tu amor se siente sincero y profundo",
        "Haces que amar se sienta natural",
        "Tu amor es uno de mis regalos favoritos",
        "Me haces creer en el amor para siempre",
        "Tu amor me da estabilidad",
        "A tu lado todo tiene más sentido",
        "Somos mejores juntos",
        "Crecemos juntos cada día",
        "Me ayudas a enfrentar mis miedos",
        "Aprendemos el uno del otro",
        "Me haces más valiente",
        "Estamos escribiendo nuestra historia",
        "Me ayudas a sanar",
        "Avanzamos juntos",
        "A tu lado me siento completo",
        "Nuestra historia me parece tierna y graciosa JAJAJ",
        "Nunca me canso de ti",
        "Recuerdo con cariño nuestros primeros mensajes de amor",
        "El momento en que supe que te empeze a amar con todo, sigue vivo en mí",
        "Tu cara cuando sonríes o te ries es inolvidable",
        "Nuestros recuerdos juntos son mi tesoro",
        "Nuestro primer beso ocupa un lugar especial en mi corazón",
        "La primera vez que me abrazaste cambió algo en mí",
        "Cada recuerdo contigo tiene un brillo especial",
        "Las pequeñas locuras que compartimos me encantan",
        "Hasta nuestras conversaciones más simples me hacen feliz",
        "Tus ocurrencias siempre me sacan una sonrisa",
        "Tu cabello desordenado al despertar me encanta",
        "La forma en que piensas las cosas me cautiva",
        "Tus gestos me parecen adorables",
        "Cómo disfruto pasar tiempo contigo jugando o viendo series o pelis",
        "La manera en que haces especial cualquier día común",
        "Tu energía contagia felicidad",
        "Tu forma de amar es hermosa",
        "La paz que siento cuando estoy contigo",
        "Tu compañía me basta para sentirme bien",
        "Me gusta hablar contigo de cualquier cosa",
        "Eres mi mejor amiga y mi gran amor",
        "Eres mi persona favorita",
        "Quiero compartirlo todo contigo",
        "A tu lado me siento libre de ser yo mismo",
        "Conoces partes de mí que nadie más conoce",
        "Eres mi lugar seguro",
        "Eres mi saludo favorito y mi despedida más difícil",
        "Tu sinceridad fortalece lo nuestro",
        "La forma en que me escuchas de verdad",
        "Tus respuestas siempre tienen intención y cariño",
        "Tu manera de expresar amor me llega al alma",
        "Podemos hablar con honestidad",
        "La forma en que pides perdón cuando hace falta",
        "Tus palabras esenciales que hacen reir",
        "Compartes tus sentimientos conmigo",
        "Tus palabras suaves me reconfortan",
        "Sabes cómo consolarme",
        "Tus mensajes cariñosos alegran mis días",
        "Tus abrazos apretados me hacen sentir amado",
        "Tus besos largos detienen mi mundo por un instante",
        "La calidez de tu cuerpo cuando me abrazas",
        "Tienes muchas cosas lindas y especiales en ti",
        "La forma en que encajas conmigo",
        "Tus caricias me llenan de calma",
        "La forma en que sostienes mi rostro con ternura o me acaricias el pelo",
        "Tus ojitos como brillan",
        "Confías en mí y eso significa mucho",
        "Tus sueños son mis sueños",
        "Tus coqueteos jeje",
        "Compartes tus anhelos conmigo",
        "Tu apertura hace más profunda nuestra conexión",
        "Me permites entrar en tu mundo",
        "Tu conexión emocional contigo es hermosa",
        "Sanas heridas en mí sin siquiera darte cuenta",
        "Nuestra intimidad emocional se siente real",
        "Tus sueños me importan como si fueran míos",
        "Solo tu puedes mostrarme todo esto",
        "La forma en que persigues tus metas",
        "Tu determinación me inspira",
        "Me haces soñar más grande",
        "Tu visión del futuro me emociona",
        "La forma en que planeas cosas bonitas para nosotros",
        "Tus formas de querer verme me alegran muchisimo",
        "Tu esencia es única",
        "Tus rarezas son parte de lo que más amo",
        "Iluminas cualquier lugar al que llegas",
        "Tu naturaleza genuina es hermosa",
        "Eres perfecta para mi",
        "Simplemente eres tú, y eso me encanta",
        "Porque contigo el amor se siente verdadero",
        "Porque contigo todo se siente más bonito",
        "Porque eres una de las mejores cosas que me han pasado",
        "Porque mi corazón siempre te elige"
    ];

    return reasons.map((text, index) => ({
        number: index + 1,
        text
    }));
};

function startJourney() {
    document.querySelector('.hero').style.display = 'none';
    document.querySelector('.container').style.display = 'block';

    allReasons = generateReasons();
    loadMoreReasons();

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function loadMoreReasons() {
    const button = document.getElementById('loadMoreBtn');
    const grid = document.getElementById('reasonsGrid');

    button.classList.add('loading');

    setTimeout(() => {
        const startIndex = currentReasons;
        const endIndex = Math.min(startIndex + reasonsPerLoad, totalReasons);

        for (let i = startIndex; i < endIndex; i++) {
            const reason = allReasons[i];
            const card = createReasonCard(reason);
            grid.appendChild(card);

            setTimeout(() => {
                card.classList.add('animate');
            }, 50);
        }

        currentReasons = endIndex;
        updateProgress();
        button.classList.remove('loading');

if (currentReasons >= totalReasons) {
    button.style.display = 'none';

    const letterBtn = document.getElementById('letterBtn');
    if (letterBtn) {
        letterBtn.style.display = 'flex';
    }
}

        observeCards();
    }, 500);
}

function createReasonCard(reason) {
    const card = document.createElement('div');
    card.className = 'reason-card';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Mostrar razón ${reason.number}`);

    card.innerHTML = `
        <div class="reason-card-inner">
            <div class="reason-face reason-front">
                <div class="reason-number">#${reason.number}</div>
                <div class="reason-front-text">Haz clic para ver la razón 💌</div>
            </div>

            <div class="reason-face reason-back">
                <div class="reason-number">#${reason.number}</div>
                <div class="reason-text">${reason.text}</div>
            </div>
        </div>
    `;

    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });

    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            card.classList.toggle('flipped');
        }
    });

    return card;
}

function updateProgress() {
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');

    const percentage = (currentReasons / totalReasons) * 100;
    progressFill.style.width = `${percentage}%`;
    progressText.textContent = `${currentReasons} / ${totalReasons}`;
}

function observeCards() {
    const cards = document.querySelectorAll('.reason-card:not(.observed)');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('observed');
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));
}

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hearts = document.querySelectorAll('.heart');

    hearts.forEach((heart, index) => {
        const speed = 0.15 + (index * 0.05);
        heart.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'l' || e.key === 'L') {
            const loadMoreBtn = document.getElementById('loadMoreBtn');
            if (
                loadMoreBtn &&
                loadMoreBtn.style.display !== 'none' &&
                document.querySelector('.container').style.display === 'block'
            ) {
                loadMoreReasons();
            }
        }
    });
});

function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });

    function goToLetter() {
    window.location.href = "carta.html";
}
}
