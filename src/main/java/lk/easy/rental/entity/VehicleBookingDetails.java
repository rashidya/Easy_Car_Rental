package lk.easy.rental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
@IdClass(VehicleBookingDetails_PK.class)
public class VehicleBookingDetails {

    @Id
    private String vehicleId;
    @Id
    private String booking_Id;


    @ManyToOne
    @JoinColumn(name = "vehicleId",referencedColumnName = "vehicleId",insertable = false,updatable = false)
    private Vehicle vehicle;


    @ManyToOne
    @JoinColumn(name = "booking_Id",referencedColumnName = "booking_Id",insertable = false,updatable = false)
    private Booking booking;
}
