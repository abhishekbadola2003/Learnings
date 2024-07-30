class match{
    static pi = 3.14159;

    static diameter(radius){
        return radius*2;
    }
    
    static circumference(radius){
        return radius*2*this.pi;
    }
    
    static area(radius){
        return radius*match .pi*radius;
    }


} 
console.log(match.diameter(2))
console.log(match.circumference(4))
console.log(match.area(5))
