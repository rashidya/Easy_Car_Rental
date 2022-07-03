package lk.easy.rental.entity;

import lk.easy.rental.enums.RequestType;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity
public class BookingDetails {
    @Id
    private String booking_Id;
    private LocalDate pickupDate;
    private LocalTime pickupTime;
    private LocalDate returnDate;
    private LocalTime returnTime;
    private RequestType needDriver;
    private double damageFee;
    private double rentFee;

}
