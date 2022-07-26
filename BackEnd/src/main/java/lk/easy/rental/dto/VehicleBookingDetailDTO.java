package lk.easy.rental.dto;

import lk.easy.rental.entity.Booking;
import lk.easy.rental.entity.Vehicle;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Id;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class VehicleBookingDetailDTO {

    private String vehicleId;
    private String bookingId;
    private VehicleDTO driver;
    private BookingDTO booking;
}
