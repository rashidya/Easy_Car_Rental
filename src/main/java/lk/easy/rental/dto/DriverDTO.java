package lk.easy.rental.dto;

import lk.easy.rental.embeded.Name;
import lk.easy.rental.enums.Availability;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Embedded;
import javax.persistence.Id;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class DriverDTO {
    private String driverId;
    private String driverNic;
    private Name name;
    private String drivingLicenseNo;
    private String address;
    private String contactNo;
    private Availability driverAvailability;

}
