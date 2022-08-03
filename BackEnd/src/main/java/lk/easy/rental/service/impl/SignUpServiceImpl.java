package lk.easy.rental.service.impl;

import lk.easy.rental.dto.CustomerDTO;
import lk.easy.rental.dto.DriverDTO;
import lk.easy.rental.entity.Customer;
import lk.easy.rental.entity.Driver;
import lk.easy.rental.entity.UserRequest;
import lk.easy.rental.exception.DuplicateEntryException;
import lk.easy.rental.repo.CustomerRepo;
import lk.easy.rental.repo.DriverRepo;
import lk.easy.rental.repo.UserRepo;
import lk.easy.rental.repo.UserRequestRepo;
import lk.easy.rental.service.SignupService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class SignUpServiceImpl implements SignupService {
    @Autowired
    private ModelMapper mapper;


    @Autowired
    private DriverRepo driverRepo;

    @Autowired
    private CustomerRepo customerRepo;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private UserRequestRepo userRequestRepo;






    @Override
    public void saveDriver(DriverDTO dto) {
        if (!driverRepo.existsById(dto.getId())) {
            if(!userRepo.existsByUserName(dto.getUser().getUserName())){
                driverRepo.save(mapper.map(dto, Driver.class));
            }else{
                throw new DuplicateEntryException("User already exists with this Username");
            }
        }else {
            throw new DuplicateEntryException("Driver already exists with this Id");
        }
    }

    @Override
    public void saveCustomer(CustomerDTO dto) {

        if (!customerRepo.existsById(dto.getId())) {
            if(!userRepo.existsByUserName(dto.getUser().getUserName())){
                userRequestRepo.save(mapper.map(dto, UserRequest.class));
            }else{
                throw new DuplicateEntryException("User already exists with this Username");
            }

        }else {
            throw new DuplicateEntryException("Customer already exists with this Id");
        }
    }
}
