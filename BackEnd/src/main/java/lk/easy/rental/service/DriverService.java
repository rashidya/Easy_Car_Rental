package lk.easy.rental.service;

import lk.easy.rental.dto.CustomerDTO;
import lk.easy.rental.dto.DriverDTO;

import java.util.List;

public interface DriverService {
    void saveDriver(DriverDTO dto);

    DriverDTO searchDriver(String id);

    List<DriverDTO> getAllDrivers();

    void updateDriver(DriverDTO dto);

    void deleteDriver(String id);
}
