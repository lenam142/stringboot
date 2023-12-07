package com.webs.dto;

import lombok.Getter;
import lombok.Setter;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class OrderDto {

    private String orderId;

    private String requestId;

    private String note;

    private List<DatVeDti> datVeDtis = new ArrayList<>();
}
