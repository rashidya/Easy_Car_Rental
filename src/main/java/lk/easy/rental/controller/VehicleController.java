package lk.easy.rental.controller;

import lk.easy.rental.dto.CustomerDTO;
import lk.easy.rental.dto.VehicleDTO;
import lk.easy.rental.service.CustomerService;
import lk.easy.rental.service.VehicleService;
import lk.easy.rental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("vehicle")
@CrossOrigin
public class VehicleController {

    @Autowired
    private VehicleService vehicleService;

    @PostMapping()
    public ResponseUtil saveVehicle(@RequestBody VehicleDTO dto){

        vehicleService.saveVehicle(dto);
        return new ResponseUtil(200,"Vehicle added Successfully",null);
    }

    @GetMapping(path = "/{id}")
    public ResponseUtil searchVehicle(@PathVariable String id){
        return new ResponseUtil(200,"OK", vehicleService.searchVehicle(id));
    }


    @GetMapping()
    public ResponseUtil getAllVehicles(){
        return new ResponseUtil(200,"OK", vehicleService.getAllVehicles());
    }

    @PutMapping
    public ResponseUtil updateVehicle(@RequestBody VehicleDTO dto){

        vehicleService.updateVehicle(dto);
        return new ResponseUtil(200,"Vehicle Updated Successfully",null );
    }


    @DeleteMapping(params = {"id"})
    public ResponseUtil deleteVehicle(@RequestParam String id){
        vehicleService.deleteVehicle(id);
        return new ResponseUtil(200,"Vehicle Deleted Successfully",null );
    }
}
