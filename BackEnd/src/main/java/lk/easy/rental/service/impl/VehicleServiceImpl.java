package lk.easy.rental.service.impl;

import lk.easy.rental.dto.CustomerDTO;
import lk.easy.rental.dto.VehicleDTO;
import lk.easy.rental.entity.Customer;
import lk.easy.rental.entity.Vehicle;
import lk.easy.rental.exception.DuplicateEntryException;
import lk.easy.rental.exception.NotFoundException;
import lk.easy.rental.repo.VehicleRepo;
import lk.easy.rental.service.VehicleService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class VehicleServiceImpl implements VehicleService {
    @Autowired
    private VehicleRepo vehicleRepo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void saveVehicle(VehicleDTO dto) {
        if (!vehicleRepo.existsById(dto.getVehicleId())) {
            vehicleRepo.save(mapper.map(dto, Vehicle.class));
        }else {
            throw new DuplicateEntryException("Vehicle already exists with this Id");
        }
    }

    @Override
    public VehicleDTO searchVehicle(String id) {
        if (vehicleRepo.existsById(id)) {

            return mapper.map(vehicleRepo.findById(id), VehicleDTO.class);
        }else {
            throw new NotFoundException(id+" - Vehicle Not Found");
        }
    }

    @Override
    public void updateVehicle(VehicleDTO dto) {
        if (vehicleRepo.existsById(dto.getVehicleId())) {
            vehicleRepo.save(mapper.map(dto,Vehicle.class));
        }else {
            throw new NotFoundException("There is no Vehicle  with ID- " +dto.getVehicleId());
        }
    }

    @Override
    public void deleteVehicle(String id) {
        if (vehicleRepo.existsById(id)) {
            vehicleRepo.deleteById(id);
        }else {
            throw new NotFoundException(id+" - Vehilce Not Found");
        }

    }

    @Override
    public List<VehicleDTO> getAllVehicles() {

        if (!vehicleRepo.findAll().isEmpty()) {
            return mapper.map(vehicleRepo.findAll(), new TypeToken<List<VehicleDTO>>() {
            }.getType());
        }else{
            throw new NotFoundException("There is no Vehicles");
        }
    }


}
