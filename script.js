import Vec2 from "./Vec2.js";


class Dvd{
    constructor() {
        this.div = document.querySelector(".dvd");
        this.cont=this.div.parentElement;
        this.pos=new Vec2(0,0);
        this.speed = new Vec2(10 , 13);

    }

    move(){
        this.pos.sum(this.speed);
        this.checkBounce();
        this.div.style.transform = this.pos.toTranslate(); 
    }

    checkBounce(){
        //Las funciones excedes() se encargan tambien de tratar un bug cuando se reescala la pantalla
        if (this.pos.excedes("y", 0, this.cont.clientHeight - this.div.clientHeight))
            this.speed.y *= -1;

        if (this.pos.excedes("x", 0, this.cont.clientWidth - this.div.clientWidth))
            this.speed.x *= -1;
    }

}

//MAIN----------------------------------

let d= new Dvd;

setInterval(()=>d.move(),60);
