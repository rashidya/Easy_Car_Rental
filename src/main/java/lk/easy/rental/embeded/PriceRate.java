package lk.easy.rental.embeded;


import javax.persistence.Embeddable;

@Embeddable
public class PriceRate {
    private double dailyRate;
    private double monthlyRate;
}
