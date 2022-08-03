package lk.easy.rental.service;

import lk.easy.rental.dto.AdminDTO;
import lk.easy.rental.dto.CustomerDTO;

import java.util.List;

public interface AdminService {
    void saveAdmin(AdminDTO dto);

    AdminDTO searchAdmin(String id);

    List<AdminDTO> getAllAdmins();

    void updateAdmin(AdminDTO dto);

    void deleteAdmin(String id);

    Object loadDashBoardSummery();

    void acceptCustomer(CustomerDTO dto);

    void denyCustomer(String denyCustomer);

    List<CustomerDTO> loadUserRequests();
}
