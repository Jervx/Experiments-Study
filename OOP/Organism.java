abstract class Organism{ // abstract interface of organism
    
    public boolean LIFE_STATE;
    public String name;

    public Organism (String name) {
        LIFE_STATE = true;
        this.name = name;
        System.out.println((name.length() == 0 ? "Organism" : name) +" Alive!");
    }

    public abstract void die();

    public String lifeState(){
        return LIFE_STATE? "Alive!" : "Dead!";
    }

}