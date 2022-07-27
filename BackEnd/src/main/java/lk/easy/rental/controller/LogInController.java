package lk.easy.rental.controller;

import lk.easy.rental.dto.AdminDTO;
import lk.easy.rental.dto.UserDTO;
import lk.easy.rental.exception.NotFoundException;
import lk.easy.rental.service.AdminService;
import lk.easy.rental.service.LogInService;
import lk.easy.rental.util.ResponseUtil;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("logIn")
@CrossOrigin
public class LogInController {

    @Autowired
    private LogInService logInService;

    @GetMapping()
    public ResponseUtil logIn(@RequestBody UserDTO user){

        UserDTO userDTO = logInService.logIn(user);

        return new ResponseUtil(200, "OK", userDTO);



    }

}
