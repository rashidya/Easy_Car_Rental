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

import javax.persistence.*;

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
    @Enumerated(EnumType.STRING)
    private FuelType fuelType;
    @Enumerated(EnumType.STRING)
    private VehicleType vehicleType;
    @Enumerated(EnumType.STRING)
    private TransmissionType transmissionType;
    private double pricePerExtraKM;
    @Embedded
    private PriceRate priceRate;
    @Embedded
    private FreeMileage freeMileage;
    @Enumerated(EnumType.STRING)
    private Availability vehicleAvailability;
    private double refundableDamageFee;
    private int mileage;
    private int lastServiceMileage;
}
