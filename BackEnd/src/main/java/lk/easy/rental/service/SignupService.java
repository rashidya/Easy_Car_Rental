package lk.easy.rental.service;

import lk.easy.rental.dto.CustomerDTO;
import lk.easy.rental.dto.DriverDTO;

public interface SignupService {
    void saveDriver(DriverDTO dto);
    void saveCustomer(CustomerDTO dto);

}
