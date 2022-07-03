package lk.easy.rental.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class VehicleBookingDetails {

    @Id
    @GeneratedValue
    private int vehicleBookingDetail_Id;
}
