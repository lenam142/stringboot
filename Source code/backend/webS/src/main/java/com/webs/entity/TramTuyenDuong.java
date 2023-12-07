package com.webs.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "tram_tuyen_duong")
@Getter
@Setter
public class TramTuyenDuong {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "tuyenDuong_id")
    private TuyenDuong tuyenDuong;

    @ManyToOne
    @JoinColumn(name = "tram_id")
    private Tram tram;
}
