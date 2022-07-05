package lk.easy.rental.dto;

import lk.easy.rental.entity.Customer;
import lk.easy.rental.entity.DriverSchedule;
import lk.easy.rental.entity.VehicleBookingDetails;
import lk.easy.rental.enums.RequestType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class BookingDTO {
    private String booking_Id;
    private LocalDate pickupDate;
    private LocalTime pickupTime;
    private LocalDate returnDate;
    private LocalTime returnTime;
    private RequestType needDriver;
    private CustomerDTO customer;
    private List<DriverScheduleDTO> driverScheduleList;
    private List<VehicleBookingDetailDTO> bookedVehicleList;
}
