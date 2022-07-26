package lk.easy.rental.service;

import lk.easy.rental.dto.VehicleDTO;
import lk.easy.rental.embeded.PriceRate;
import lk.easy.rental.enums.FuelType;
import lk.easy.rental.enums.TransmissionType;
import lk.easy.rental.enums.VehicleType;

import java.time.LocalDate;
import java.util.List;

public interface BrowseService {
    List<VehicleDTO> getVehicleByNoOfPassengers(int noOfPassengers);

    List<VehicleDTO> getVehicleByTransmissionType(TransmissionType transmissionType);

    List<VehicleDTO> getVehicleByBrand(String brand);

    List<VehicleDTO> getVehicleByType(VehicleType type);

    List<VehicleDTO> getVehicleByPrice(PriceRate price);

    List<VehicleDTO> getVehicleByFuelType(FuelType fuelType);

    List<VehicleDTO>  loadAvailableVehicles(LocalDate pickupDate, LocalDate returnDate);
}
