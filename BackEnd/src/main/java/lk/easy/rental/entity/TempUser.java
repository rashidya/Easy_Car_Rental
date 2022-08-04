package lk.easy.rental.entity;

import lk.easy.rental.enums.Role;
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
public class TempUser {

    @Id
    @GeneratedValue
    private int userId;
    private String userName;
    private String password;
    @Enumerated(EnumType.STRING)
    private Role role;

    public TempUser(String userName, String password) {
        this.userName = userName;
        this.password = password;
    }

    public TempUser(String userName, String password, Role role) {
        this.userName = userName;
        this.password = password;
        this.role = role;
    }


}
