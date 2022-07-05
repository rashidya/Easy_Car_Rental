package lk.easy.rental.controller;

import lk.easy.rental.dto.CustomerDTO;
import lk.easy.rental.dto.DriverDTO;
import lk.easy.rental.service.DriverService;
import lk.easy.rental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
}
