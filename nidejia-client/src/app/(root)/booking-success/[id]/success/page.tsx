"use client"
import { Badge } from "@/components/atomics/badge";
import { Button } from "@/components/atomics/button";
import { Separator } from "@/components/atomics/separator";
import Title from "@/components/atomics/title";
import { Transaction } from "@/interfaces/transaction";
import { useGetDetailTransactionQuery } from "@/services/transaction.service";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

function BookingSuccess({ params }: { params : { id: string } }) {
  const { data } = useGetDetailTransactionQuery(params?.id);

  const booking: Transaction = useMemo(() => data?.data, [data])

  return (
    <main>
      <section
        id="title-section"
        className="bg-gray-light pt-[190px] pb-[148px]"
      >
        <div className="container mx-auto flex items-center justify-center">
          <h1 className="max-w-[360px] font-bold text-[32px] text-center leading-[48px] text-secondary">
            Booking Successfully Congratulations 🎉
          </h1>
        </div>
      </section>

      <section
        id="card-section"
        className="container mx-auto -mt-[98px] max-w-[650px] mb-[150px] space-y-5 rounded-[30px] bg-white border border-border shadow-indicator p-[30px]"
      >
        <div className="flex items-center space-x-6">
          {booking?.listing?.attachments && (
            <Image
            src={`${process.env.NEXT_PUBLIC_STORAGE_BASE_URL}/${booking?.listing?.attachments[0]}`}
            alt="image-1"
            height={0}
            width={0}
            className="w-[180px] h-[130px] rounded-[28px] object-cover"
            unoptimized
          />
          )}
          <div className="space-y-2.5">
            <h1 className="font-bold text-[22px] leading-[33px] text-secondary">
              {booking?.listing?.title}
            </h1>
            <Badge variant="secondary">{booking?.status}</Badge>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center font-semibold leading-6 max-w-[250px]">
            <Image
              src="/icons/location-dark.svg"
              alt="location-dark"
              height={0}
              width={0}
              className="w-5 h-5 mr-1"
            />
            {booking?.listing?.address}
          </div>
          <div className="flex items-center font-semibold leading-6">
            <Image
              src="/icons/format-square-dark.svg"
              alt="format-square-dark"
              height={0}
              width={0}
              className="w-5 h-5 mr-1"
            />
            {booking?.listing?.sqft} sqft
          </div>
          <div className="flex items-center font-semibold leading-6">
            <Image
              src="/icons/profile-2user-dark.svg"
              alt="profile-2user-dark"
              height={0}
              width={0}
              className="w-5 h-5 mr-1"
            />
            {booking?.listing?.max_person} people
          </div>
          <div className="flex items-center font-semibold leading-6">
            <Image
              src="/icons/wifi-dark.svg"
              alt="wifi-dark"
              height={0}
              width={0}
              className="w-5 h-5 mr-1"
            />
            {booking?.listing?.wifi_speed} gbps
          </div>
        </div>

        <Separator className="bg-border" />

        <Title
          section="booking"
          title="What’s next?"
          subtitle="The owner will accept your booking once they received your booking payment today, please be patience."
        />

        <div className="mt-5 flex items-center space-x-2.5">
          <Button
            variant="default"
            size="header"
            className="flex items-center w-full max-w-[209px]"
          >
            <Image
              src="/icons/message-notif.svg"
              alt="message-notif"
              height={0}
              width={0}
              className="h-5 w-5 mr-2.5"
            />
            Message Owner
          </Button>
          <Link href={"/"}>
            <Button
              variant="third"
              size="header"
              className="w-full max-w-[180.5px]"
            >
              Explore Again
            </Button>
          </Link>
          <Link href={"/dashboard/overview"}>
            <Button
              variant="third"
              size="header"
              className="w-full max-w-[180.5px]"
            >
              My Dashboard
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default BookingSuccess;
