const sayingArray = [
    {
        quote: "허물이 있다면, 버리기를 두려워 말라. ",
        author: "공자"
    },
    {
        quote: "나이가 성숙을 보장하지는 않는다.",
        author: "라와나 블랙웰"
    },
    {
        quote: "젊음은 반드시 칭송되는 것만큼 좋은 것은 아니다.",
        author: "라와나 블랙웰"
    },
    {
        quote: "인생에서 많은 패배에 직면하겠지만 결코 패배하지 말라.",
        author:"마야 안젤루"
    },
    {
        quote: "이또한 지나가리라.",
        author:"에트 혹 트란시비트"
    },
    {
        quote: "주사위는 던져졌다.",
        author:"줄리어스 시저"
    },
    {
        quote: "내 인생을 바꾸는 사람은 자신입니다. 아무도 대신해줄 수 없어요.",
        author:"캐롤 버넷"
    },
    {
        quote: "인생은 산이다. 당신의 목표는 정상에 도달하는 것이 아니라 당신의 길을 찾는 것이다.",
        author:"막심 라가세"
    },
    {
        quote: "만약 네가 리스크를 무릅쓰지 않으려면, 어쩔 수 없이 평범함에 안주할 것이다.",
        author:"짐 론"
    },
    {
        quote: "위대한 사람은 기회가 없다고 원망하지 않는다.",
        author:"익명"
    },
    {
        quote: "웃음 없는 하루는 낭비한 하루다.",
        author:"익명"
    },
];

const quote = document.querySelector('#saying-quote');
const author = document.querySelector('#saying-author');

const todaysSaying = sayingArray[Math.floor(Math.random() * sayingArray.length)];

quote.innerText = todaysSaying.quote;
author.innerText = todaysSaying.author;

function quoteMouseEnter(){
    author.classList.add('sayingon');
}

function quoteMouseLeave(){
    author.classList.remove('sayingon');
}

quote.addEventListener('mouseenter', quoteMouseEnter);

quote.addEventListener('mouseleave', quoteMouseLeave);