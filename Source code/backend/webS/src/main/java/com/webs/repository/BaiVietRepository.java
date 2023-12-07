package com.webs.repository;

import com.webs.entity.BaiViet;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface BaiVietRepository extends JpaRepository<BaiViet, Long> {

    @Query("select b from BaiViet b order by b.id desc")
    Page<BaiViet> findAllPage(Pageable pageable);
}
