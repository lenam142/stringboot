package com.webs.rest;
import com.webs.entity.BaiViet;
import com.webs.entity.Tram;
import com.webs.repository.TramRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/")
public class TramReat {

    @Autowired
    private TramRepository tramRepository;
    @PostMapping("admin/themTram")
    public void SuaTram(@RequestBody Tram tram){
        tramRepository.save(tram);
    }

    @GetMapping("/public/tram")
    public List<Tram> hienThiTram(){
        return tramRepository.findAll();
    }
    @GetMapping("/public/tramById")
    public Tram layttTram(@RequestParam("id") Long id){
        return tramRepository.findById(id).get();
    }

    @DeleteMapping("/admin/xoaTram")
    public void xoaTram(@RequestParam("id") Long id){
        tramRepository.deleteById(id);
    }

}
