const Amar={
    name:"Amar",
    age:24,
    profession:"singer",
    lives:"Goa",
    print:function(){
        console.log(this.name+" "+"is"+" "+this.age+" "+"years old and he is"+" "+this.profession+"lives in"+" "+this.lives);
    }
}

const Akbhar={
    name:"Akbhar",
    age:25,
    profession:"chef",
    lives:"Mumbai",
    print:function(){
        console.log(this.name+" "+"is"+" "+this.age+" "+"years old and he is"+" "+this.profession+"lives in"+" "+this.lives);
    }
}

const Anthony={
    name:"Anthony",
    age:26,
    profession:"Magician",
    lives:"Kashmir",
    print:function(){
        console.log(this.name+" "+"is"+" "+this.age+" "+"years old and he is"+" "+this.profession+"lives in"+" "+this.lives);
    }
}

Amar.print.call(Akbhar);
Amar.print.call(Anthony);

Akbhar.print.call(Anthony);
Akbhar.print.call(Amar);

Anthony.print.call(Amar);
Anthony.print.call(Akbhar);
