package lk.easy.rental.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lk.easy.rental.entity.Booking;
import lk.easy.rental.enums.PaymentType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class PaymentDTO {

    private String paymentID;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate paymentDate;
    private PaymentType paymentType;
    private double amount;
    private BookingDTO booking;
}
