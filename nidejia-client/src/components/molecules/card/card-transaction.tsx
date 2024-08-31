import { Badge } from "@/components/atomics/badge";
import { Button } from "@/components/atomics/button";
import { CityTransactionProps } from "@/interfaces/city-transaction";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineClock, HiOutlineCurrencyDollar } from "react-icons/hi";

function CardTransaction({
  id,
  image,
  title,
  location,
  days,
  price,
  status,
}: CityTransactionProps) {
  return (
    <figure className="flex items-center justify-between bg-white rounded-3xl p-4 border border-border shadow-indicator">
      <div className="flex items-center space-x-4">
        <Image
          src={`${process.env.NEXT_PUBLIC_STORAGE_BASE_URL}/${image}`}
          alt={title}
          height={0}
          width={0}
          className="w-[120px] h-[90px] rounded-2xl"
          unoptimized
        />

        <div>
          <div className="flex gap-4">
            <h1 className="font-bold leading-8 text-secondary lg:text-base text-sm">
              {title}
            </h1>
            {status === "waiting" && (
              <Badge variant={"waiting"}>{status}</Badge>
            )}
            {status === "approved" && (
              <Badge variant={"approved"}>{status}</Badge>
            )}
            {status === "canceled" && (
              <Badge variant={"canceled"}>{status}</Badge>
            )}
          </div>
          <div className="flex gap-4 mt-4">
            <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2.5">
              <div className="flex items-center text-sm font-semibold leading-[21px]">
                <Image
                  src="/icons/location-dark.svg"
                  alt="location-dark"
                  height={0}
                  width={0}
                  className="w-5 h-5 mr-1"
                />
                {location}
              </div>
              <div className="flex items-center text-sm font-semibold leading-[21px]">
                <HiOutlineClock className="w-5 h-5 mr-1" />
                {days} days
              </div>
              <div className="flex items-center text-sm font-semibold leading-[21px]">
                <HiOutlineCurrencyDollar className="w-5 h-5 mr-1" />
                {price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
            </div>
            <div className="flex items-center space-x-3.5">
              <Button variant="third" size="header">
                Manage
              </Button>
              <Link href={`/booking-success/${id}/success`}>
                <Button variant="third" size="header">
                  Preview
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}

export default CardTransaction;
