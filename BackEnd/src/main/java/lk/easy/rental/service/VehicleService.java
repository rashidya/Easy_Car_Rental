package lk.easy.rental.service;

import lk.easy.rental.dto.VehicleDTO;

import java.util.List;

public interface VehicleService {
    void saveVehicle(VehicleDTO dto);

    VehicleDTO searchVehicle(String id);

    void updateVehicle(VehicleDTO dto);

    void deleteVehicle(String id);

    List<VehicleDTO> getAllVehicles();
}
