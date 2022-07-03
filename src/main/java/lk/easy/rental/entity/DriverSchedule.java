package lk.easy.rental.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class DriverSchedule {

    @Id
    @GeneratedValue
    private int driverSchedule_Id;


}
