package lk.easy.rental.service;

import lk.easy.rental.dto.PaymentDTO;

import java.util.List;

public interface PaymentService {
    void addPayment(PaymentDTO dto);

    PaymentDTO searchPayment(String id);

    List<PaymentDTO> getAllPayments();

    void updatePayment(PaymentDTO dto);

    void deletePayment(String id);


}
