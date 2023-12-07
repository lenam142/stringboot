package com.webs.rest;

import com.webs.entity.DatVe;
import com.webs.entity.GheNgoi;
import com.webs.repository.DatVeRepository;
import com.webs.repository.GheNgoiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Date;
import java.util.List;

@RestController
@RequestMapping("api/")
public class GheNgoiReat {

    @Autowired
    private GheNgoiRepository gheNgoiRepository;

    @Autowired
    private DatVeRepository datVeRepository;

    @GetMapping("/public/getGheNgoi")
    public List<GheNgoi> loadByToaId(@RequestParam("id") Long toaId, @RequestParam("ngaydi") Date ngayDi,
                                     @RequestParam(value = "ngayve", required = false) Date ngayve ){
        List<GheNgoi> list = gheNgoiRepository.getGheNgoiByToaTau(toaId);
        List<DatVe> datVes = null;
        if(ngayve == null){
            datVes = datVeRepository.findByNgayDi(toaId, ngayDi);
            System.out.printf("====================");
            System.out.println(datVes);
        }
        else{
            datVes = datVeRepository.findByDate(toaId, ngayDi, ngayve);
        }
        for(GheNgoi g : list){
            for(DatVe d : datVes){
                if(g.getId() == d.getGheNgoi().getId()){
                    g.setDaDat(1);
                }
            }
        }
        return list;
    }
}
