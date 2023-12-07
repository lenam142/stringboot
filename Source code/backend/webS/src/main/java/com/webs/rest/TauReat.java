package com.webs.rest;

import com.webs.entity.BaiViet;
import com.webs.entity.Tau;
import com.webs.repository.TauRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;

@RestController
@RequestMapping("/api")
public class TauReat {

    @Autowired
    private TauRepository tauRepository;

    @PostMapping("/admin/themTau")
    public void themTau(@RequestBody Tau tau){
        tauRepository.save(tau);
    }

    @DeleteMapping("/admin/xoaTau")
    public void xoaTau(@RequestParam("id") Long id){
        tauRepository.deleteById(id);
    }

    @GetMapping("/public/tau")
    public List<Tau> hienThiTau(){
        return tauRepository.findByTuyenDuongNotDel();
    }

    @GetMapping("/public/tauByTuyenDuongId")
    public List<Tau> tauByTuyenDuongId(@RequestParam("id") Long tuyenDuongId){
        return tauRepository.findByTuyenDuong(tuyenDuongId);
    }

    @GetMapping("/public/tauId")
    public Tau layTheoId(@RequestParam("id") Long id){
        return tauRepository.findById(id).get();
    }

}
