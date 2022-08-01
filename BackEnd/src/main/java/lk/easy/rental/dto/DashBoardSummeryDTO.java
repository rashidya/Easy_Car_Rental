package lk.easy.rental.dto;

import lk.easy.rental.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class DashBoardSummeryDTO {

    int noOfRegisteredUsers;
    int noOfBookingsForToday;
    int noOfAvailableCars;
    int noOfReservedCars;
    int noOfActiveBookings;
    int noOfAvailableDrivers;
    int noOfOccupiedDrivers;
    int noOfCarsNeedMaintenance;
    int noOfCarsNeedToBeRepaired;
}
