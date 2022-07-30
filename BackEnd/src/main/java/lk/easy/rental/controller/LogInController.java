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

    @GetMapping(params = {"userName","password"})
    public ResponseUtil logIn(@RequestParam String userName,@RequestParam String password){

        UserDTO userDTO = logInService.logIn(userName,password);

        return new ResponseUtil(200, "OK", userDTO);

    }

}
