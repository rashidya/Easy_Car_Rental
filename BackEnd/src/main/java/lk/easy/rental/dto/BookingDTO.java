package lk.easy.rental.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
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
    private String bookingId;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate bookingDate;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate pickupDate;
    @JsonFormat(pattern = "HH:mm:ss")
    private LocalTime pickupTime;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate returnDate;
    @JsonFormat(pattern = "HH:mm:ss")
    private LocalTime returnTime;
    private RequestType needDriver;
    private CustomerDTO customer;
    private List<DriverScheduleDTO> driverScheduleList;
    private List<VehicleBookingDetailDTO> bookedVehicleList;

    public BookingDTO(String booking_Id, LocalDate pickupDate, LocalTime pickupTime, LocalDate returnDate, LocalTime returnTime, RequestType needDriver, CustomerDTO customer, List<DriverScheduleDTO> driverScheduleList) {
        this.bookingId = booking_Id;
        this.pickupDate = pickupDate;
        this.pickupTime = pickupTime;
        this.returnDate = returnDate;
        this.returnTime = returnTime;
        this.needDriver = needDriver;
        this.customer = customer;
        this.driverScheduleList = driverScheduleList;
    }
}
