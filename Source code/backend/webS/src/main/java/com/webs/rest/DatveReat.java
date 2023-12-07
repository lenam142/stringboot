package com.webs.rest;

import com.webs.dto.DatVeDti;
import com.webs.entity.DatVe;
import com.webs.entity.User;
import com.webs.repository.DatVeRepository;
import com.webs.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;

@RestController
@RequestMapping("api/")
public class DatveReat {

    @Autowired
    private DatVeRepository datVeRepository;

    @Autowired
    private UserService userService;

    @PostMapping("/user/datVeOffline")
    public void save(@RequestBody List<DatVeDti> datVeDtis){
        for(DatVeDti d : datVeDtis){
            DatVe datVe = new DatVe();
            datVe.setDaThanhToan(0);
            datVe.setUser(userService.getUserWithAuthority());
            datVe.setNgayTao(new Date(System.currentTimeMillis()));
            datVe.setGiaVe(d.getGiaVe());
            datVe.setLoaiVe(d.getLoaiVe());
            datVe.setGheNgoi(d.getGheNgoi());
            datVe.setNgayDi(d.getNgayDi());
            datVe.setNgayVe(d.getNgayVe());
            datVeRepository.save(datVe);
        }
    }


}
