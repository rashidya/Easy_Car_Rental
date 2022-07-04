package lk.easy.rental.service;

import lk.easy.rental.dto.CustomerDTO;

import java.util.List;

public interface CustomerService {
    void saveCustomer(CustomerDTO dto);

    CustomerDTO searchCustomer(String id);

    List<CustomerDTO> getAllCustomers();

    void updateCustomer(CustomerDTO dto);

    void deleteCustomer(String id);
}
