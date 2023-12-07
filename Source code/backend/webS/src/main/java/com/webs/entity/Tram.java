package com.webs.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "tram")
@Getter
@Setter
public class Tram {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    private String tenTram;

    private String diaChi;

    private String moTa;
}
