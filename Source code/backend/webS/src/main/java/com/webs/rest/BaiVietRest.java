package com.webs.rest;

import com.webs.entity.BaiViet;
import com.webs.entity.User;
import com.webs.repository.BaiVietRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.relational.core.sql.In;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;

@RestController
@RequestMapping("/api")
public class BaiVietRest {

    @Autowired
    private BaiVietRepository baiVietRepository;

    @PostMapping("/admin/themBaiViet")
    public void themBaiViet(@RequestBody BaiViet baiViet){
        baiViet.setNgayDang(new Date(System.currentTimeMillis()));
        baiVietRepository.save(baiViet);
    }

    @DeleteMapping("/admin/xoaBaiViet")
    public void xoaBaiViet(@RequestParam("id") Long id){
        baiVietRepository.deleteById(id);
    }

    @GetMapping("/public/baiViet")
    public List<BaiViet> hienThiBaiViet(){
        return baiVietRepository.findAll();
    }

    @GetMapping("/public/baiVietId")
    public BaiViet layTheoId(@RequestParam("id") Long id){
        return baiVietRepository.findById(id).get();
    }

    @GetMapping("/public/findAllPage")
    public Page<BaiViet> findAllPage(Pageable pageable){
        Page<BaiViet> page = baiVietRepository.findAllPage(pageable);
        return page;
    }
}
