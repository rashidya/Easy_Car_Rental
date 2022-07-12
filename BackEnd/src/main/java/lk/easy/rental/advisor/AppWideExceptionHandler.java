package lk.easy.rental.advisor;

import lk.easy.rental.exception.DuplicateEntryException;
import lk.easy.rental.exception.NotFoundException;
import lk.easy.rental.util.ResponseUtil;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestControllerAdvice
@CrossOrigin
public class AppWideExceptionHandler {

    @ExceptionHandler({Exception.class})
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<ResponseUtil> handleException(Exception e){
        return new ResponseEntity<>(new ResponseUtil(500,e.getMessage(),null),HttpStatus.BAD_REQUEST);
    }


    @ExceptionHandler({DuplicateEntryException.class})
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<ResponseUtil> handleDuplicateEntryException(Exception e){
        return new ResponseEntity<>(new ResponseUtil(400,e.getMessage(),null),HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler({NotFoundException.class})
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<ResponseUtil> handleNotFoundException(Exception e){
        return new ResponseEntity<>(new ResponseUtil(400,e.getMessage(),null),HttpStatus.BAD_REQUEST);
    }


}
