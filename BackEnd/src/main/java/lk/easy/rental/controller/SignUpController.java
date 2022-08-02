package lk.easy.rental.controller;

import lk.easy.rental.dto.CustomerDTO;
import lk.easy.rental.dto.DriverDTO;
import lk.easy.rental.enums.Role;
import lk.easy.rental.service.CustomerService;
import lk.easy.rental.service.DriverService;
import lk.easy.rental.service.SignupService;
import lk.easy.rental.util.FileDownloadUtil;
import lk.easy.rental.util.FileUploadUtil;
import lk.easy.rental.util.ResponseUtil;
import lk.easy.rental.util.SearchFileUtil;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("signup")
@CrossOrigin
public class SignUpController {

    @Autowired
    private SignupService signupService;

    @Autowired
    private FileDownloadUtil fileDownloadUtil;

    @Autowired
    private SearchFileUtil searchFile;

    @Autowired
    private FileUploadUtil fileUploadUtil;


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


    @SneakyThrows
    @PostMapping(path = "addRegisterUserImage", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil addRegisterUserImage(@RequestParam(value = "param") MultipartFile[] multipartFile, @RequestParam("id") String id) {

        String pathDirectory = "D:\\GDSE58\\SEM_02\\Advanced API Development\\Course Work\\EasyCarRental\\BackEnd\\src\\main\\resources\\static\\img\\RegisterImage\\";

        String[] registerImageView = {"Nic", "Licence"};

        for (int i = 0; i < multipartFile.length; i++) {
            String[] split = multipartFile[i].getContentType().split("/");
            if (split[1].equals("jpeg") || split[1].equals("png")) {
                String imageName = id + registerImageView[i] + ".jpeg";
                //Files.copy(multipartFile[i].getInputStream(), Paths.get(pathDirectory + File.separator + imageName), StandardCopyOption.REPLACE_EXISTING);/
                fileUploadUtil.saveFile(pathDirectory+imageName , multipartFile[i]);
            } else {
                return new ResponseUtil(404, "please..  must be images type  jpeg or png", null);
            }
        }
        return new ResponseUtil(200, "Car images added complete", null);
    }
}
