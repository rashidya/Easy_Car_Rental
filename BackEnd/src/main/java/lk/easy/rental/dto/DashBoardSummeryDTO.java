package lk.easy.rental.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class DashBoardSummeryDTO {

    int totalRegisteredUsers;
    int totalBookingsForTheDay;
    int totalAvailableCars;
    int totalReservedCars;
}
