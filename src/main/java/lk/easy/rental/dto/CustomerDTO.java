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
    private String cusId;
    private String customerNic;
    @Embedded
    private Name name;
    private String drivingLicenseNo;
    private String address;
    private String contactNo;
    private String email;
}
