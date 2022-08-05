package lk.easy.rental.controller;

import lk.easy.rental.dto.CustomerDTO;
import lk.easy.rental.dto.DriverDTO;
import lk.easy.rental.service.DriverService;
import lk.easy.rental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@RestController
@RequestMapping("driver")
@CrossOrigin
public class DriverController {

    @Autowired
    private DriverService driverService;

    @PostMapping()
    public ResponseUtil saveDriver(@RequestBody DriverDTO dto){
        System.out.println(dto.toString());
        driverService.saveDriver(dto);
        return new ResponseUtil(200,"Driver added Successfully",null);
    }

    @GetMapping(path = "/{id}")
    public ResponseUtil searchDriver(@PathVariable String id){
        return new ResponseUtil(200,"OK", driverService.searchDriver(id));
    }


    @GetMapping( params = {"pickUpDate","returnDate"})
    public ResponseUtil getAvailableDriver(@RequestParam String pickUpDate,@RequestParam String returnDate){
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate pickUp = LocalDate.parse(pickUpDate,formatter);
        LocalDate dropOff = LocalDate.parse(returnDate, formatter);
        return new ResponseUtil(200,"OK", driverService.loadAvailableDriver(pickUp,dropOff));
    }


    @GetMapping()
    public ResponseUtil getAllDrivers(){
        return new ResponseUtil(200,"OK", driverService.getAllDrivers());
    }

    @PutMapping
    public ResponseUtil updateDriver(@RequestBody DriverDTO dto){

        driverService.updateDriver(dto);
        return new ResponseUtil(200,"Driver Updated Successfully",null );
    }


    @DeleteMapping(params = {"id"})
    public ResponseUtil deleteDriver(@RequestParam String id){
        driverService.deleteDriver(id);
        return new ResponseUtil(200,"Driver Deleted Successfully",null );
    }

    @GetMapping(params = {"userName"})
    public ResponseUtil searchDriverByUserName(@RequestParam String userName){

        return new ResponseUtil(200,"OK", driverService.searchDriverByUserName(userName));
    }


    @GetMapping(params = {"id"})
    public ResponseUtil getDriverScheduleForDriver(@RequestParam String id){

        return new ResponseUtil(200,"OK", driverService.getDriverScheduleForDriver(id));
    }



}
