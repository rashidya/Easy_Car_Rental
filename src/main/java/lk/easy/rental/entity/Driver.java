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
    private String driverId;
    private String userId;
    private String driverNic;
    @Embedded
    private Name name;
    private String drivingLicenseNo;
    private String address;
    private String contactNo;
    @Enumerated(EnumType.STRING)
    private Availability driverAvailability;



    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "userId",referencedColumnName = "userId",insertable = false,updatable = false)
    private User user;
}
