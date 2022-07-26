package lk.easy.rental.repo;

import lk.easy.rental.embeded.PriceRate;
import lk.easy.rental.entity.Vehicle;
import lk.easy.rental.enums.FuelType;
import lk.easy.rental.enums.TransmissionType;
import lk.easy.rental.enums.VehicleType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VehicleRepo extends JpaRepository<Vehicle,String> {

    List<Vehicle> findAllByNoOfPassengers(int noOfPassengers);
    List<Vehicle> findAllByBrand(String brand);
    List<Vehicle> findAllByTransmissionType(TransmissionType transmissionType);
    List<Vehicle> findAllByFuelType(FuelType fuelType);
    List<Vehicle> findAllByPriceRate(PriceRate priceRate);
    List<Vehicle> findAllByVehicleType(VehicleType type);



}
