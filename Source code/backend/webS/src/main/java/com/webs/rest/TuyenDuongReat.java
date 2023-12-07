package com.webs.rest;

import com.webs.entity.BaiViet;
import com.webs.entity.TuyenDuong;
import com.webs.repository.TuyenDuongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;

@RestController
@RequestMapping("/api")
public class TuyenDuongReat {

    @Autowired
    private TuyenDuongRepository tuyenDuongRepository;

    @PostMapping("/admin/themTuyenDuong")
    public void themTuyenDuong(@RequestBody TuyenDuong tuyenDuong){
        tuyenDuong.setDeleted(0);
        tuyenDuongRepository.save(tuyenDuong);
    }

    @DeleteMapping("/admin/xoaTuyenDuong")
    public void xoaTuyenDuong(@RequestParam("id") Long id){
        try {
            tuyenDuongRepository.deleteById(id);
        }
        catch (Exception e){
            TuyenDuong tuyenDuong = tuyenDuongRepository.findById(id).get();
            tuyenDuong.setDeleted(1);
            tuyenDuongRepository.save(tuyenDuong);
        }
    }

    @GetMapping("/public/tuyenDuong")
    public List<TuyenDuong> hienThiTuyenDuong(){
        return tuyenDuongRepository.findAllNotDel();
    }

    @GetMapping("/public/tuyenDuongId")
    public TuyenDuong layTheoId(@RequestParam("id") Long id){
        return tuyenDuongRepository.findById(id).get();
    }

    @GetMapping("/public/findByDiemDi")
    public List<TuyenDuong> findByDiemDi(@RequestParam("diemdi") String diemdi){
        return tuyenDuongRepository.findByDiemDi("%"+diemdi +"%");
    }

    @GetMapping("/public/findByDiemDen")
    public List<TuyenDuong> findByDiemDen(@RequestParam("diemden") String diemden){
        return tuyenDuongRepository.findByDiemDen("%"+diemden +"%");
    }
}
