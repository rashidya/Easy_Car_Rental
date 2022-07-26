package lk.easy.rental.controller;

import lk.easy.rental.dto.CustomerDTO;
import lk.easy.rental.dto.DriverDTO;
import lk.easy.rental.enums.Role;
import lk.easy.rental.service.CustomerService;
import lk.easy.rental.service.DriverService;
import lk.easy.rental.service.SignupService;
import lk.easy.rental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("signup")
@CrossOrigin
public class SignUpController {

    @Autowired
    private SignupService signupService;


    @PostMapping(path = "/REGISTERED_USER")
    public ResponseUtil saveCustomer(@RequestBody CustomerDTO dto){

        signupService.saveCustomer(dto);
        return new ResponseUtil(200,"Customer added Successfully",null);


    }

    @PostMapping(path = "/DRIVER")
    public ResponseUtil saveCustomer(@RequestBody DriverDTO dto){


            signupService.saveDriver(dto);
            return new ResponseUtil(200,"Driver added Successfully",null);



    }



}
