package com.webs.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "tuyen_duong")
@Getter
@Setter
public class TuyenDuong {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    private String diemDi;

    private String diemDen;

    private String moTa;

    private Integer deleted;
}
