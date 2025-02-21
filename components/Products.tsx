import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import Button from "./button";
import Link from "next/link";

type mainProp = {
  fragment: {
    id: any;
    productName: string;
    productImages: string;
    productPrice: string;
    cancelledProductPrice: string;
    latest: boolean;
  }[];
};

export default function Products({ fragment }: mainProp) {
  return (
    <div className="mt-24 flex flex-col gap-14">
      <div className="flex w-full justify-between items-center">
        <Heading message="Products" secondaryMessage="ALL PRODUCTS" />
      </div>
      <div className="flex flex-col gap-12 mx-auto w-fit">
        <div className="cards flex flex-wrap gap-x-10 gap-y-10">
          {fragment.map((product, index) => (
            <Card
              key={index}
              id={product.id}
              productName={product.productName}
              productPrice={Number(product.productPrice)}
              cancelledPrice={Number(product.cancelledProductPrice)}
              src={product.productImages[0]}
              status={product.latest ? "new" : "old"}
            />
          ))}
        </div>
        <Link href="/Products" className="w-fit mx-auto">
          <Button text="View All Products" width={220} />
        </Link>
      </div>
    </div>
  );
}
