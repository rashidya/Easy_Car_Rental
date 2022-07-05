package lk.easy.rental.service.impl;

import lk.easy.rental.dto.CustomerDTO;
import lk.easy.rental.dto.DriverDTO;
import lk.easy.rental.entity.Customer;
import lk.easy.rental.entity.Driver;
import lk.easy.rental.exception.DuplicateEntryException;
import lk.easy.rental.exception.NotFoundException;
import lk.easy.rental.repo.CustomerRepo;
import lk.easy.rental.repo.DriverRepo;
import lk.easy.rental.service.DriverService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class DriverServiceImpl implements DriverService {
    @Autowired
    private ModelMapper mapper;

    @Autowired
    private DriverRepo driverRepo;

    @Override
    public void saveDriver(DriverDTO dto) {
        if (!driverRepo.existsById(dto.getDriverId())) {
            driverRepo.save(mapper.map(dto, Driver.class));
        }else {
            throw new DuplicateEntryException("Driver already exists with this Id");
        }
    }

    @Override
    public DriverDTO searchDriver(String id) {
        if (driverRepo.existsById(id)) {

            return mapper.map(driverRepo.findById(id), DriverDTO.class);
        }else {
            throw new NotFoundException(id+" - Driver Not Found");
        }
    }

    @Override
    public List<DriverDTO> getAllDrivers() {
        if (!driverRepo.findAll().isEmpty()) {
            return mapper.map(driverRepo.findAll(), new TypeToken<List<DriverDTO>>() {
            }.getType());
        }else{
            throw new NotFoundException("There is no Drivers");
        }
    }

    @Override
    public void updateDriver(DriverDTO dto) {
        if (driverRepo.existsById(dto.getDriverId())) {
            driverRepo.save(mapper.map(dto,Driver.class));
        }else {
            throw new NotFoundException("There is no Driver  with ID- " +dto.getDriverId());
        }
    }

    @Override
    public void deleteDriver(String id) {
        if (driverRepo.existsById(id)) {
            driverRepo.deleteById(id);
        }else {
            throw new NotFoundException(id+" - Driver Not Found");
        }
    }
}
