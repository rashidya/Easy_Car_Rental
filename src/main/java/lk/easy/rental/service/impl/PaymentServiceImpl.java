package lk.easy.rental.service.impl;

import lk.easy.rental.dto.CustomerDTO;
import lk.easy.rental.dto.PaymentDTO;
import lk.easy.rental.entity.Customer;
import lk.easy.rental.entity.Payment;
import lk.easy.rental.exception.DuplicateEntryException;
import lk.easy.rental.exception.NotFoundException;
import lk.easy.rental.repo.CustomerRepo;
import lk.easy.rental.repo.PaymentRepo;
import lk.easy.rental.service.PaymentService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class PaymentServiceImpl implements PaymentService {
    @Autowired
    private ModelMapper mapper;

    @Autowired
    private PaymentRepo paymentRepo;

    @Override
    public void addPayment(PaymentDTO dto) {
        if (!paymentRepo.existsById(dto.getPaymentID())) {
            paymentRepo.save(mapper.map(dto, Payment.class));
        }else {
            throw new DuplicateEntryException("Payment already exists with this Id");
        }
    }

    @Override
    public PaymentDTO searchPayment(String id) {
        if (paymentRepo.existsById(id)) {

            return mapper.map(paymentRepo.findById(id), PaymentDTO.class);
        }else {
            throw new NotFoundException(id+" - Payment Not Found");
        }
    }

    @Override
    public List<PaymentDTO> getAllPayments() {
        if (!paymentRepo.findAll().isEmpty()) {
            return mapper.map(paymentRepo.findAll(), new TypeToken<List<PaymentDTO>>() {
            }.getType());
        }else{
            throw new NotFoundException("There is no Payments");
        }
    }

    @Override
    public void updatePayment(PaymentDTO dto) {
        if (paymentRepo.existsById(dto.getPaymentID())) {
            paymentRepo.save(mapper.map(dto,Payment.class));
        }else {
            throw new NotFoundException("There is no payment  with ID- " +dto.getPaymentID());
        }
    }

    @Override
    public void deletePayment(String id) {
        if (paymentRepo.existsById(id)) {
            paymentRepo.deleteById(id);
        }else {
            throw new NotFoundException(id+" - Payment Not Found");
        }
    }
}
