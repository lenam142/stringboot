package com.webs.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "bai_viet")
@Getter
@Setter
public class BaiViet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    private String tieuDe;

    private String moTa;

    private String noiDung;

    private Date ngayDang;

    private String anhNen;

}
