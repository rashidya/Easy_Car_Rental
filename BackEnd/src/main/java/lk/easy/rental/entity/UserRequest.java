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
public class UserRequest{
    @Id
    private String id;
    private String userNIC;
    @Embedded
    private Name name;
    private String drivingLicenseNo;
    private String address;
    private String contactNo;


    @OneToOne(cascade = CascadeType.ALL,fetch =FetchType.EAGER)
    private TempUser user;


}
