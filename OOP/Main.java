class Main{
    public static void main(String [] jrvx){
        Dog Odie = new Dog();
        System.out.println(Odie.lifeState());
        Odie.obey("Sit!");
        Odie.pet();
        Odie.sound();
        Odie.die();

        System.out.println("");

        Lion King = new Lion();
        System.out.println(King.lifeState());
        King.obey("Sit!");
        King.pet();
        King.sound();
        King.die();
        System.out.println(King.lifeState());
    }
}