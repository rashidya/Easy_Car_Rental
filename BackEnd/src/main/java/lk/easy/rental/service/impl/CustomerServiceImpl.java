package lk.easy.rental.service.impl;

import lk.easy.rental.advisor.AppWideExceptionHandler;
import lk.easy.rental.dto.CustomerDTO;
import lk.easy.rental.entity.Customer;
import lk.easy.rental.entity.Driver;
import lk.easy.rental.exception.DuplicateEntryException;
import lk.easy.rental.exception.NotFoundException;
import lk.easy.rental.repo.CustomerRepo;
import lk.easy.rental.repo.UserRepo;
import lk.easy.rental.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    private ModelMapper mapper;

    @Autowired
    private CustomerRepo customerRepo;

    @Autowired
    private UserRepo userRepo;

    @Override
    public void saveCustomer(CustomerDTO dto) {

        if (!customerRepo.existsById(dto.getCusId())) {
            if(!userRepo.existsByUserName(dto.getUser().getUserName())){
                customerRepo.save(mapper.map(dto, Customer.class));
            }else{
                throw new DuplicateEntryException("User already exists with this Username");
            }

        }else {
            throw new DuplicateEntryException("Customer already exists with this Id");
        }
    }

    @Override
    public CustomerDTO searchCustomer(String id) {
        if (customerRepo.existsById(id)) {

           return mapper.map(customerRepo.findById(id), CustomerDTO.class);
        }else {
            throw new NotFoundException(id+" - Customer Not Found");
        }
    }

    @Override
    public List<CustomerDTO> getAllCustomers() {
        if (!customerRepo.findAll().isEmpty()) {
            return mapper.map(customerRepo.findAll(), new TypeToken<List<CustomerDTO>>() {
            }.getType());
        }else{
            throw new NotFoundException("There is no Customers");
        }
    }

    @Override
    public void updateCustomer(CustomerDTO dto) {
        if (customerRepo.existsById(dto.getCusId())) {
            customerRepo.save(mapper.map(dto,Customer.class));
        }else {
            throw new NotFoundException("There is no customer  with ID- " +dto.getCusId());
        }

    }

    @Override
    public void deleteCustomer(String id) {
        if (customerRepo.existsById(id)) {
            customerRepo.deleteById(id);
        }else {
            throw new NotFoundException(id+" - Customer Not Found");
        }
    }


}
