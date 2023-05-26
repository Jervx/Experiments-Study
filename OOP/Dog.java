public class Dog extends Animal implements Pettable{

    public Dog () {
        super("Dog", "Woof!");
    }

    public void pet(){
        System.out.println("Woof! 💗");
    }

    public void obey(String cmd){
        System.out.println("Woof! I did "+cmd);
    }

}