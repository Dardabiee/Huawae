function startLoader(){
    let counterElement = document.querySelector('.count');
    let curentValue = 0;
     
    function updateCounter( ){
        if(curentValue === 100){
            return;
        }
        curentValue += Math.floor(Math.random() * 10) + 1;

        if(curentValue > 100){
            curentValue = 100;
        }
        counterElement.textContent = curentValue;

        let delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updateCounter, delay);
    }
    updateCounter();
}
startLoader();

gsap.to('.count',0.25,{
    delay:3.5,
    opacity:0,
});
gsap.to('.bar',1.5,{
     delay:3.5,
     height:0,
     stagger:{
          amount:0.5
     },
     ease:'power4.inOut',
});
gsap.to('.count', 0.25, {
    delay: 3.5,
    opacity: 0,
    className: 'animate-bar-out'
});

gsap.to('.bar', 1.5, {
    delay: 3.5,
    height: 0,
    stagger: {
        amount: 0.5
    },
    ease: 'power4.inOut',
    // className: 'animate-bar-out'
});
const typed = new Typed('.serve',{
    strings:['Huawae | Awesome','My Service'],
    typeSpeed:90,
    backSpeed:100,
    backDelay:10,
    loop:true
});
