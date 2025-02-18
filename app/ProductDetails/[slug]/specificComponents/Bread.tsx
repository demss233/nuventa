"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

const domain = process.env.DOMAIN;

export default function Bread() {
  const url_param: any = useParams();
  const [productName, setProductName] = useState<string>("Loading...");
  const [productType, setProductType] = useState<string>("Loading...");

  useEffect(() => {
    (async () => {
      const response = await axios.post(`/api/propagation/`, {
        id: url_param.slug,
        every: false,
      });
      console.log(response.data);
      setProductName(response.data.productName);
      setProductType(response.data.type);
    })();
  });

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <BreadcrumbPage>{productType}</BreadcrumbPage>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{productName}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
}
