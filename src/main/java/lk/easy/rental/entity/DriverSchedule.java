package lk.easy.rental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
@IdClass(DriverSchedule_PK.class)
public class DriverSchedule {

    @Id
    private String driverId;
    @Id
    private String booking_Id;


    @ManyToOne
    @JoinColumn(name = "driverId",referencedColumnName = "driverId",insertable = false,updatable = false)
    private Driver driver;


    @ManyToOne
    @JoinColumn(name = "booking_Id",referencedColumnName = "booking_Id",insertable = false,updatable = false)
    private BookingDetails bookingDetails;



}
