package lk.easy.rental.dto;

import lk.easy.rental.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class UserDTO {

    private int userId;
    private String userName;
    private String password;
    private Role role;

    public UserDTO(String userName, String password) {
        this.userName = userName;
        this.password = password;

    }

    public UserDTO(String userName, String password, Role role) {
        this.userName = userName;
        this.password = password;
        this.role = role;
    }



}
