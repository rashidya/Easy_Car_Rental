package lk.easy.rental.dto;

import lk.easy.rental.entity.Booking;
import lk.easy.rental.entity.Driver;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Id;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class DriverScheduleDTO {

    private String driverId;
    private String booking_Id;
    private DriverDTO driver;
    private BookingDTO booking;
}
