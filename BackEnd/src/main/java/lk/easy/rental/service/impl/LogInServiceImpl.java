package lk.easy.rental.service.impl;

import lk.easy.rental.dto.UserDTO;
import lk.easy.rental.entity.User;
import lk.easy.rental.exception.NotFoundException;
import lk.easy.rental.repo.UserRepo;
import lk.easy.rental.service.LogInService;
import lombok.ToString;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class LogInServiceImpl implements LogInService {

    @Autowired
    private ModelMapper mapper;

    @Autowired
    private UserRepo userRepo;

    @Override
    public UserDTO  logIn(String userName,String password) {
        User user = userRepo.findByUserName(userName);

        if (user!=null){
            if (user.getPassword().equals(password)){
                return mapper.map(user,UserDTO.class);
            }else {
                throw new RuntimeException("Incorrect Password");
            }
        }else {
            throw new NotFoundException("User Not Found");
        }


    }
}
