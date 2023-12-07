package com.webs.rest;

import com.webs.entity.BaiViet;
import com.webs.entity.GheNgoi;
import com.webs.entity.ToaTau;
import com.webs.repository.GheNgoiRepository;
import com.webs.repository.ToaTauRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ToaTauReat {

    @Autowired
    private ToaTauRepository toaTauRepository;
    @Autowired
    private GheNgoiRepository gheNgoiRepository;

    @PostMapping("/admin/themToaTau")
    public void themToaTau(@RequestBody ToaTau toaTau){
        if(toaTau.getId() != null){
            gheNgoiRepository.deleteBytoatauId(toaTau.getId());
        }
        ToaTau result = toaTauRepository.save(toaTau);
        for(int i=1; i<= result.getSoChoNgoi(); i++){
            GheNgoi gheNgoi = new GheNgoi();
            gheNgoi.setToaTau(result);
            gheNgoi.setSoGhe(String.valueOf(i));
            gheNgoi.setLoai(result.getLoaiToa());
            gheNgoiRepository.save(gheNgoi);
        }
    }

    @DeleteMapping("/admin/xoaToaTau")
    public void xoaToaTau(@RequestParam("id") Long id){
        gheNgoiRepository.deleteBytoatauId(id);
        toaTauRepository.deleteById(id);
    }

    @GetMapping("/public/toaTau")
    public List<ToaTau> hienThiToaTau(){
        return toaTauRepository.findAll();
    }

    @GetMapping("/public/toaTauByTauId")
    public List<ToaTau> getByTauId(@RequestParam("id") Long idTau){
        return toaTauRepository.getByTauId(idTau);
    }

    @GetMapping("/public/toaTauId")
    public ToaTau layTheoId(@RequestParam("id") Long id){
        return toaTauRepository.findById(id).get();
    }
}
