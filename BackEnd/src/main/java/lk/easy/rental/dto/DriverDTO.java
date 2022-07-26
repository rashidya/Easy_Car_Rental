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
    private String id;
    private String userNIC;
    private Name name;
    private String drivingLicenseNo;
    private String address;
    private String contactNo;
    private Availability driverAvailability;
    private UserDTO user;

    public DriverDTO(String id, String nic, Name name, String drivingLicenseNo, String address, String contactNo, UserDTO user) {
        this.id = id;
        this.userNIC = nic;
        this.name = name;
        this.drivingLicenseNo = drivingLicenseNo;
        this.address = address;
        this.contactNo = contactNo;
        this.user = user;
    }
}
