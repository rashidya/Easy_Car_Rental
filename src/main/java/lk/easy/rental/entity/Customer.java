package lk.easy.rental.entity;

import lk.easy.rental.embeded.Name;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class Customer {
    @Id
    private String cusId;
    private String userId;
    private String customerNic;
    @Embedded
    private Name name;
    private String drivingLicenseNo;
    private String address;
    private String contactNo;
    private String email;


    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "userId",referencedColumnName = "userId",insertable = false,updatable = false)
    private User user;
}
