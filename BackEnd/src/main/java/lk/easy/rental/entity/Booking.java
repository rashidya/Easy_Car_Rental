package lk.easy.rental.entity;

import lk.easy.rental.enums.RequestType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class Booking {
    @Id
    private String bookingId;
    private LocalDate pickupDate;
    private LocalTime pickupTime;
    private LocalDate returnDate;
    private LocalTime returnTime;
    @Enumerated(EnumType.STRING)
    private RequestType needDriver;



    @ManyToOne(cascade = {CascadeType.REFRESH,CascadeType.DETACH})
    @JoinColumn(name = "customerID",referencedColumnName = "cusId",nullable = false)
    private Customer customer;


    @OneToMany(mappedBy = "booking",cascade = CascadeType.ALL)
    private List<DriverSchedule> driverScheduleList;


    @OneToMany(mappedBy = "booking",cascade = CascadeType.ALL)
    private List<VehicleBookingDetails> bookedVehicleList;
}
