package lk.easy.rental.service;

import lk.easy.rental.dto.UserDTO;
import lk.easy.rental.entity.User;

public interface LogInService {
    UserDTO logIn(UserDTO user);
}
