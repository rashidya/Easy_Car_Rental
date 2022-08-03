package lk.easy.rental.dto;

import lk.easy.rental.embeded.Name;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Embedded;


@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class CustomerDTO {
    private String id;
    private String userNIC;
    @Embedded
    private Name name;
    private String drivingLicenseNo;
    private String address;
    private String contactNo;
    private UserDTO user;

    public CustomerDTO(String id, String userNIC, Name name, String drivingLicenseNo, String address, String contactNo) {
        this.id = id;
        this.userNIC = userNIC;
        this.name = name;
        this.drivingLicenseNo = drivingLicenseNo;
        this.address = address;
        this.contactNo = contactNo;
    }
}
