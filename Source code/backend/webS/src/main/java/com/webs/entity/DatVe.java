package com.webs.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "dat_ve")
@Getter
@Setter
@ToString
public class DatVe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    private Date ngayTao;

    private Date ngayDi;

    private Double giaVe;

    private Integer loaiThanhToan;

    private Integer daThanhToan;

    private Integer loaiVe;

    private Date ngayVe;

    @ManyToOne
    @JoinColumn(name = "ghengoi_id")
    private GheNgoi gheNgoi;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
