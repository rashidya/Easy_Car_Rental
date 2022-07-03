package lk.easy.rental.entity;

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

import javax.persistence.Entity;
import javax.persistence.Id;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class Vehicle {
    @Id
    private String vehicleId;
    private String registrationNo;
    private String color;
    private String brand;
    private int noOfPassengers;
    private FuelType fuelType;
    private VehicleType vehicleType;
    private TransmissionType transmissionType;
    private PriceRate pricePerExtraKM;
    private FreeMileage freeMileage;
    private Availability vehicleAvailability;
    private double refundableDamageFee;

}