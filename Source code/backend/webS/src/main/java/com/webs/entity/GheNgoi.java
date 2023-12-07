package com.webs.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "ghe_ngoi")
@Getter
@Setter
public class GheNgoi {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    private String soGhe;

    private Integer loai;

    @Transient
    private Integer daDat;

    @ManyToOne
    @JoinColumn(name = "toatau_id")
    private ToaTau toaTau;
}
