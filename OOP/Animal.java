
public class Animal extends Organism{

    private String Sound;

    public Animal (String animalName, String sound) {
        super(animalName);
        this.Sound = sound;
    }

    public void die(){
        LIFE_STATE = false;
        System.out.println("Organism Dies..");
    }

    public void sound(){
        System.out.println(Sound);
    }
}