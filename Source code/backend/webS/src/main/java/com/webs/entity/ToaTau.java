package com.webs.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "toa_tau")
@Getter
@Setter
public class ToaTau {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    private String tenToa;

    private Integer soChoNgoi;

    private Double giaTien;

    private String moTa;

    private Integer loaiToa;

    @ManyToOne
    @JoinColumn(name = "tau_id")
    private Tau tau;
}
