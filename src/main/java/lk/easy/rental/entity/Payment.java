package lk.easy.rental.entity;

import lk.easy.rental.enums.PaymentType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString

public class Payment{

    private String paymentID;
    private String booking_Id;
    private LocalDate paymentDate;
    private PaymentType paymentType;
    private double amount;

    @ManyToOne
    @JoinColumn(name = "booking_Id",referencedColumnName = "booking_Id",insertable = false,updatable = false)
    private BookingDetails bookingDetails;


}
