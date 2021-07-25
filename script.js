
class Vec2{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    
    sum(delta){
        this.x+=delta.x;
        this.y+=delta.y;
    }

    toTranslate(){
        return `translate(${this.x}px,${this.y}px)`;
    }

    rangoX(inf, sup) {
        if (this.x <= inf) {
            this.x = inf;
            return false;
        }
        if (this.x >= sup) {
            this.x = sup;
            return false;
        }
        return true;
    }
    rangoY(inf, sup) {
        if (this.y <= inf){
            this.y=inf;
            return false;
        } 
        if (this.y >= sup){
            this.y=sup;
            return false;
        }
        return true;
    }

}



class Dvd{
    constructor() {
        this.div = document.querySelector(".dvd");
        this.cont=this.div.parentElement;
        this.pos=new Vec2(0,0);
        this.speed = new Vec2(10 , 13);

    }

    move(){
        this.pos.sum(this.speed);

        //Las funciones RangoX() se encargan tambien de tratar un bug cuando se reescala la pantalla
        if (!this.pos.rangoX(0, this.cont.clientWidth - this.div.clientWidth))
            this.speed.x*=-1;
        

        if (!this.pos.rangoY(0, this.cont.clientHeight-this.div.clientHeight)) 
            this.speed.y *= -1;
    

        this.div.style.transform = this.pos.toTranslate();
        
    }



}


//MAIN----------------------------------






let d= new Dvd;
setInterval(()=>d.move(),60);
