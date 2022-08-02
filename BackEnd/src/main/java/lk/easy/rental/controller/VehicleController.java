package lk.easy.rental.controller;

import lk.easy.rental.dto.CustomerDTO;
import lk.easy.rental.dto.ImageDTO;
import lk.easy.rental.dto.VehicleDTO;
import lk.easy.rental.service.CustomerService;
import lk.easy.rental.service.VehicleService;
import lk.easy.rental.util.FileDownloadUtil;
import lk.easy.rental.util.FileUploadUtil;
import lk.easy.rental.util.ResponseUtil;
import lk.easy.rental.util.SearchFileUtil;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@RestController
@RequestMapping("vehicle")
@CrossOrigin
public class VehicleController {

    @Autowired
    private VehicleService vehicleService;

    @Autowired
    private FileDownloadUtil fileDownloadUtil;

    @Autowired
    private SearchFileUtil searchFile;

    @Autowired
    private FileUploadUtil fileUploadUtil;

    @PostMapping()
    public ResponseUtil saveVehicle(@RequestBody VehicleDTO dto){
        System.out.println(dto.toString());
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

    @SneakyThrows
    @PostMapping(path = "addCarImage", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil addCarImage(@RequestParam(value = "param") MultipartFile[] multipartFile, @RequestParam("vehicleId") String vehicleId) {

        String pathDirectory = "D:\\GDSE58\\SEM_02\\Advanced API Development\\Course Work\\EasyCarRental\\BackEnd\\src\\main\\resources\\static\\img\\carImage\\";

        String[] carImageView = {"Front", "Back", "Side", "Interior"};

        for (int i = 0; i < multipartFile.length; i++) {
            String[] split = multipartFile[i].getContentType().split("/");
            if (split[1].equals("jpeg") || split[1].equals("png")) {
                String imageName = vehicleId + carImageView[i] + ".jpeg";
                //Files.copy(multipartFile[i].getInputStream(), Paths.get(pathDirectory + File.separator + imageName), StandardCopyOption.REPLACE_EXISTING);/
                fileUploadUtil.saveFile(pathDirectory+imageName , multipartFile[i]);

            } else {
                return new ResponseUtil(404, "please..  must be Car images type  jpeg or png", null);

            }

        }

        return new ResponseUtil(200, "Car images added complete", null);
    }

    @GetMapping(path = "getCarImage", produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<?> getCarImage(@RequestParam String vehicleId, String view) {

        ImageDTO imageDto = new ImageDTO(vehicleId, "car", view);
        Resource fileAsResource1 = fileDownloadUtil.getFileAsResource(imageDto);

        if (fileAsResource1==null){
            return ResponseEntity.badRequest().contentType(MediaType.APPLICATION_JSON).body("Car Image not found");
        }
        return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(fileAsResource1);

    }



    //put

    @SneakyThrows
    @PostMapping(path = "updateCarImage", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateCarImage(@RequestParam(value = "carImage") MultipartFile multipartFile, @RequestParam("vehicleId") String vehicleId, @RequestParam("view") String view) {

        String pathDirectory = "D:\\GDSE58\\SEM_02\\Advanced API Development\\Course Work\\EasyCarRental\\BackEnd\\src\\main\\resources\\static\\img\\carImage\\";

        if (searchFile.searchFile(pathDirectory, vehicleId + view + ".jpeg")) {
            Files.copy(multipartFile.getInputStream(), Paths.get(pathDirectory + File.separator + vehicleId + view + ".jpeg"), StandardCopyOption.REPLACE_EXISTING);
            return new ResponseUtil(200, "car Image Updated", null);
        }
        return new ResponseUtil(200, "car Image Update Fail", null);
    }

    @SneakyThrows
    @DeleteMapping(path = "deleteCarImage", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteCarAllImages(@RequestParam String vehicleId) {
        String pathDirectory = "D:\\GDSE58\\SEM_02\\Advanced API Development\\Course Work\\EasyCarRental\\BackEnd\\src\\main\\resources\\static\\img\\carImage\\";
        String[] carImageView = {"Front", "Back", "Side", "Interior"};

        for (int i = 0; i < carImageView.length; i++) {
            Files.deleteIfExists(Paths.get(pathDirectory + File.separator + vehicleId + carImageView[i] + ".jpeg"));
        }

        return new ResponseUtil(200, "car Delete success", null);
    }
}
