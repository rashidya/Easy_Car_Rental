package lk.easy.rental.entity;

import lk.easy.rental.embeded.Name;
import lk.easy.rental.enums.Availability;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;


@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class Driver {
    @Id
    private String id;
    private String userNIC;
    @Embedded
    private Name name;
    private String drivingLicenseNo;
    private String address;
    private String contactNo;
    @Enumerated(EnumType.STRING)
    private Availability driverAvailability;



    @OneToOne(cascade = CascadeType.ALL)
    private User user;

    public Driver(String id, String nic, Name name, String drivingLicenseNo, String address, String contactNo, User user) {
        this.id = id;
        this.userNIC = nic;
        this.name = name;
        this.drivingLicenseNo = drivingLicenseNo;
        this.address = address;
        this.contactNo = contactNo;
        this.user = user;
    }
}
