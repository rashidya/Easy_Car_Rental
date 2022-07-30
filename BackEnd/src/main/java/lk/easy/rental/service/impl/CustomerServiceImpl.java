package lk.easy.rental.service.impl;

import lk.easy.rental.dto.CustomerDTO;
import lk.easy.rental.entity.Customer;
import lk.easy.rental.entity.User;
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

        if (!customerRepo.existsById(dto.getId())) {
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
    public CustomerDTO searchCustomerByUserName(String userName) {
        if (userRepo.existsByUserName(userName)) {
            User byId = userRepo.findByUserName(userName);
            return mapper.map(customerRepo.findByUser(byId), CustomerDTO.class);
        }else {
            throw new NotFoundException("Customer Not Found");
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
        if (customerRepo.existsById(dto.getId())) {
            customerRepo.save(mapper.map(dto,Customer.class));
        }else {
            throw new NotFoundException("There is no customer  with ID- " +dto.getId());
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
