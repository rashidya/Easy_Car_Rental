package lk.easy.rental.embeded;

import javax.persistence.Embeddable;

@Embeddable
public class FreeMileage {
    private int dailyMileage;
    private int monthlyMileage;
}
