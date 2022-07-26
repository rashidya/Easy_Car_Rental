package lk.easy.rental.controller;

import lk.easy.rental.embeded.PriceRate;
import lk.easy.rental.enums.FuelType;
import lk.easy.rental.enums.TransmissionType;
import lk.easy.rental.enums.VehicleType;
import lk.easy.rental.service.BrowseService;
import lk.easy.rental.service.impl.BrowseServiceImpl;
import lk.easy.rental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@RestController
@RequestMapping("browse")
@CrossOrigin
public class BrowseController {

    @Autowired
    BrowseService browseService;

    @GetMapping(params = {"noOfPassengers"})
    public ResponseUtil sortVehicleByNoOfPassengers(@RequestParam int noOfPassengers){
        return new ResponseUtil(200,"OK", browseService.getVehicleByNoOfPassengers(noOfPassengers));
    }

    @GetMapping(params = "transmissionType")
    public ResponseUtil sortVehicleByTransmissionType(@RequestParam TransmissionType transmissionType){
        return new ResponseUtil(200,"OK", browseService.getVehicleByTransmissionType(transmissionType));
    }

    @GetMapping(params = "brand")
    public ResponseUtil sortVehicleByBrand(@RequestParam String brand){
        return new ResponseUtil(200,"OK", browseService.getVehicleByBrand(brand));
    }

    @GetMapping(params = "type")
    public ResponseUtil sortVehicleByType(@RequestParam VehicleType type){
        return new ResponseUtil(200,"OK", browseService.getVehicleByType(type));
    }

    @GetMapping(params = "price")
    public ResponseUtil sortVehicleByPrice(@RequestParam PriceRate price){
        return new ResponseUtil(200,"OK", browseService.getVehicleByPrice(price));
    }

    @GetMapping(params = "fuelType")
    public ResponseUtil sortVehicleByFuelType(@RequestParam FuelType fuelType){
        return new ResponseUtil(200,"OK", browseService.getVehicleByFuelType(fuelType));
    }

    @GetMapping(params = {"pickupDate","returnDate"})
    public ResponseUtil sortVehicleByFuelType(@RequestParam String pickupDate,@RequestParam String returnDate){
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate pickUp = LocalDate.parse(pickupDate);
        LocalDate dropOff = LocalDate.parse(returnDate, formatter);
        return new ResponseUtil(200,"OK", browseService.loadAvailableVehicles(pickUp,dropOff));
    }



}
