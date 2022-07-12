package lk.easy.rental.embeded;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Embeddable;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Embeddable
public class FreeMileage {
    private int dailyFreeMileage;
    private int monthlyFreeMileage;
}
