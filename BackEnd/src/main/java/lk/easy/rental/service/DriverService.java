package lk.easy.rental.service;

import lk.easy.rental.dto.CustomerDTO;
import lk.easy.rental.dto.DriverDTO;
import lk.easy.rental.dto.DriverScheduleDTO;

import java.time.LocalDate;
import java.util.List;

public interface DriverService {
    void saveDriver(DriverDTO dto);

    DriverDTO searchDriver(String id);

    List<DriverDTO> getAllDrivers();

    void updateDriver(DriverDTO dto);

    void deleteDriver(String id);

/*    DriverDTO getAvailableDriver();*/


    DriverDTO searchDriverByUserName(String userName);

    DriverDTO loadAvailableDriver(LocalDate pickupDate, LocalDate dropOffDate);

    List<DriverScheduleDTO> getDriverScheduleForDriver(String id);
}
