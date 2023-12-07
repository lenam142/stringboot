package com.webs.service;

import com.webs.repository.BaiVietRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BaiVietService {

    @Autowired
    private BaiVietRepository baiVietRepository;

    public Boolean save(){

        return true;
    }
}
