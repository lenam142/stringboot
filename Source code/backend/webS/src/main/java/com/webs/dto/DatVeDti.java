package com.webs.dto;

import com.webs.entity.GheNgoi;
import lombok.Getter;
import lombok.Setter;

import java.sql.Date;

@Getter
@Setter
public class DatVeDti {

    private GheNgoi gheNgoi;

    private Double giaVe;

    private Integer loaiVe;

    private Date ngayDi;

    private Date ngayVe;
}
