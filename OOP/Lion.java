public class Lion extends Animal implements Pettable{

    public Lion (){
        super("Lion", "Roar!");
    }

    public void pet(){
        System.out.println("You die!");
    }

    public void obey(String command){
        System.out.println(this.name+" did nothing..");
    }

}