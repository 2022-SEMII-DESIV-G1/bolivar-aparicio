package com.hello;
import java.util.ArrayList;

public class Piramides
{
    ArrayList<Piramide> piramides = new ArrayList<Piramide>();


    public ArrayList<Piramide> getPiramides(){
        return piramides;
    }

    public void addPiramide(Piramide piramide)
    {
        piramides.add(piramide);
    }

    public static void setPiramides(Piramide piramide) {
    }    
}