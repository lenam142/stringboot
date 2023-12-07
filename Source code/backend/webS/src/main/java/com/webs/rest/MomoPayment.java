package com.webs.rest;
import com.vnua.edu.hieu.config.Environment;
import com.vnua.edu.hieu.enums.RequestType;
import com.vnua.edu.hieu.models.PaymentResponse;
import com.vnua.edu.hieu.models.QueryStatusTransactionResponse;
import com.vnua.edu.hieu.processor.CreateOrderMoMo;
import com.vnua.edu.hieu.processor.QueryTransactionStatus;
import com.webs.dto.DatVeDti;
import com.webs.dto.OrderDto;
import com.webs.dto.PaymentDto;
import com.webs.dto.ResponsePayment;
import com.webs.entity.DatVe;
import com.webs.entity.HistoryPay;
import com.webs.repository.DatVeRepository;
import com.webs.repository.HistoryPayRepository;
import com.webs.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class MomoPayment {

    @Autowired
    private HistoryPayRepository historyPayRepository;

    @Autowired
    private DatVeRepository datVeRepository;

    @Autowired
    private UserService userService;

    @PostMapping("/urlpayment")
    public ResponsePayment getUrlPayment(@RequestBody PaymentDto paymentDto){
        String orderId = String.valueOf(System.currentTimeMillis());
        String requestId = String.valueOf(System.currentTimeMillis());
        Environment environment = Environment.selectEnv("dev");
        PaymentResponse captureATMMoMoResponse = null;
        try {
            captureATMMoMoResponse = CreateOrderMoMo.process(environment, orderId, requestId, Long.toString(paymentDto.getAmount()), paymentDto.getContent(), paymentDto.getReturnUrl(), paymentDto.getNotifyUrl(), "", RequestType.PAY_WITH_ATM, null);
        } catch (Exception e) {
            e.printStackTrace();
        }
        System.out.println("url ====: "+captureATMMoMoResponse.getPayUrl());
        ResponsePayment responsePayment = new ResponsePayment(captureATMMoMoResponse.getPayUrl(),orderId,requestId);
        return responsePayment;
    }


    @PostMapping("/user/checkPayment")
    public Integer checkPayment(@RequestBody OrderDto orderDto) throws Exception {
        Environment environment = Environment.selectEnv("dev");
        QueryStatusTransactionResponse queryStatusTransactionResponse = QueryTransactionStatus.process(environment, orderDto.getOrderId(), orderDto.getRequestId());
        System.out.println("qqqq-----------------------------------------------------------"+queryStatusTransactionResponse.getMessage());
        if(queryStatusTransactionResponse.getResultCode() == 0){
            if(historyPayRepository.findByOrderIdAndRequestId(orderDto.getOrderId(), orderDto.getRequestId()).isPresent() == false){
                Double tong = 0D;
                for(DatVeDti d : orderDto.getDatVeDtis()){
                    DatVe datVe = new DatVe();
                    datVe.setDaThanhToan(1);
                    datVe.setUser(userService.getUserWithAuthority());
                    datVe.setNgayTao(new Date(System.currentTimeMillis()));
                    datVe.setGiaVe(d.getGiaVe());
                    datVe.setLoaiVe(d.getLoaiVe());
                    datVe.setGheNgoi(d.getGheNgoi());
                    datVe.setLoaiThanhToan(1);
                    datVe.setNgayDi(d.getNgayDi());
                    datVe.setNgayVe(d.getNgayVe());
                    datVeRepository.save(datVe);
                    tong += d.getGiaVe();
                }
                HistoryPay historyPay = new HistoryPay();
                historyPay.setUser(userService.getUserWithAuthority());
                historyPay.setOrderId(orderDto.getOrderId());
                historyPay.setRequestId(orderDto.getRequestId());
                historyPay.setCreatedDate(new Date(System.currentTimeMillis()));
                historyPay.setTotalAmount(tong);
                historyPayRepository.save(historyPay);
                return 1;
            }
        }
        else{
            return 0;
        }
        return 1;
    }
}
