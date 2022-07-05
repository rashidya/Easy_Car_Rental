package lk.easy.rental.dto;

import lk.easy.rental.embeded.FreeMileage;
import lk.easy.rental.embeded.PriceRate;
import lk.easy.rental.enums.Availability;
import lk.easy.rental.enums.FuelType;
import lk.easy.rental.enums.TransmissionType;
import lk.easy.rental.enums.VehicleType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class VehicleDTO {
    private String vehicleId;
    private String registrationNo;
    private String color;
    private String brand;
    private int noOfPassengers;
    private FuelType fuelType;
    private VehicleType vehicleType;
    private TransmissionType transmissionType;
    private double pricePerExtraKM;
    private PriceRate priceRate;
    private FreeMileage freeMileage;
    private Availability vehicleAvailability;
    private double refundableDamageFee;
    private int millage;
    private int lastServiceMileage;
}
