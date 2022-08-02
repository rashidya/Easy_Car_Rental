package lk.easy.rental.util;


import lk.easy.rental.dto.ImageDTO;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Component
public class FileDownloadUtil {


    private Path foundFile = null;

    private void searchFile(Path path, String fileName) {
        foundFile = null;
        try {
            Files.list(path).forEach(file -> {
                if (file.getFileName().toString().startsWith(fileName)) {
                    System.out.println("file  found");
                    foundFile = file;
                    return;
                }
            });
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public Resource getFileAsResource(ImageDTO imageDTO) {

        String pathDirectory = null;
        Path path = null;

        switch (imageDTO.getImageType()) {

            case "car":
                pathDirectory = "D:\\GDSE58\\SEM_02\\Advanced API Development\\Course Work\\EasyCarRental\\BackEnd\\src\\main\\resources\\static\\img\\carImage\\";
                path = Paths.get(pathDirectory);
                String imageName = imageDTO.getImageId() + imageDTO.getImageView() + ".jpeg";
                searchFile(path, imageName);
                break;

            case "user":
                pathDirectory = "D:\\GDSE58\\SEM_02\\Advanced API Development\\Course Work\\EasyCarRental\\BackEnd\\src\\main\\resources\\static\\img\\RegisterImage\\";
                path = Paths.get(pathDirectory + "/" + imageDTO.getImageId() + imageDTO.getImageType() + ".jpeg");
                break;

//            case "idCard":
//                pathDirectory = "F:\\Project\\Web-Second Sem\\Spring Projects\\Easy Car Rental System\\Car_Rental_Backend\\src\\main\\resources\\static\\image\\registerImage\\";
//                path = Paths.get(pathDirectory + "/" + imageDTO.getImageId() + imageDTO.getImageType() + ".jpeg");
//                break;

        }


        try {
            if (foundFile != null) {
                return new UrlResource(foundFile.toUri());
            }
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }

        return null;

    }
}
