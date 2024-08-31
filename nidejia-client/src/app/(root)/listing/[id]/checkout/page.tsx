"use client";
import Image from "next/image";
import Breadcrumbs from "@/components/molecules/breadcrumbs";
import CardBooking from "@/components/molecules/card/card-booking";
import { Button } from "@/components/atomics/button";
import { Separator } from "@/components/atomics/separator";
import { Checkbox } from "@/components/atomics/checkbox";
import { DatePickerDemo } from "@/components/molecules/date-picker";
import Link from "next/link";
import Listing from "./listing";
import Review from "./review";
import { useGetDetailListingQuery } from "@/services/listing.service";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import moment from "moment";
import { moneyFormat } from "@/lib/utils";
import { useTransactionMutation } from "@/services/transaction.service";
import { useToast } from "@/components/atomics/use-toast";

function Checkout({ params }: { params: { id: string } }) {
  const { data: listing } = useGetDetailListingQuery(params.id);
  const [transaction, { isLoading }] = useTransactionMutation();

  const {toast} = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [startDate, setStartDate] = useState<Date | undefined>(
    moment(searchParams.get("start_date")).toDate()
  );
  const [endDate, setEndDate] = useState<Date | undefined>(
    moment(searchParams.get("end_date")).toDate()
  );
  const booking = useMemo(() => {
    let totalDays = 0,
      subTotal = 0,
      tax = 0,
      grandTotal = 0;

    if (startDate && endDate) {
      totalDays = moment(endDate).diff(startDate, "days");
      subTotal = totalDays * listing?.data.price_per_day;
      tax = subTotal * 0.1;
      grandTotal = subTotal + tax;
    }

    return { totalDays, subTotal, tax, grandTotal };
  }, [startDate, endDate, listing]);

  const handlePayment = async () => {
    // `/booking-success/12321aa12/success`
    try {
      const data = {
        listing_id: listing.data.id,
        start_date: moment(startDate).format("YYYY-MM-DD"),
        end_date: moment(endDate).format("YYYY-MM-DD"),
      }

      const res = await transaction(data).unwrap();
      console.log("🚀 ~ handlePayment ~ res:", res)
      if (res.success) {
        router.push(
          `/booking-success/${res.data.id}/success`
        );
      }

    } catch (error: any) {
      toast({
        title: 'Something went wrong',
        description: error.data.message,
        variant: "destructive"
      })
    }
  };

  return (
    <main>
      <section
        id="breadcrumb-section"
        className="bg-gray-light pt-[170px] pb-[178px]"
      >
        <div className="container mx-auto">
          <Breadcrumbs />
        </div>
      </section>

      <section
        id="booking-information-section"
        className="container mx-auto flex space-x-[50px] -mt-[148px]"
      >
        {listing && <Listing listing={listing.data} />}

        <div className="w-full max-w-[460px] pt-[50px]">
          <div>
            <h1 className="font-bold text-[22px] leading-[33px] text-secondary">
              Booking Informations
            </h1>
            <div className="rounded-[30px] mt-2.5 p-[30px] bg-white border border-border shadow-indicator space-y-5">
              <div className="space-y-5">
                <DatePickerDemo
                  placeholder="Start Data"
                  date={startDate}
                  setDate={setStartDate}
                />
                <DatePickerDemo
                  placeholder="End Data"
                  date={endDate}
                  setDate={setEndDate}
                />
              </div>
              <div className="space-y-5">
                <CardBooking
                  title="Total days"
                  value={`${booking.totalDays}`}
                />
                <CardBooking
                  title="Sub total"
                  value={moneyFormat.format(booking.subTotal)}
                />
                <CardBooking
                  title="Tax (10%)"
                  value={moneyFormat.format(booking.tax)}
                />
                <CardBooking
                  title="Grand total price"
                  value={moneyFormat.format(booking.grandTotal)}
                />
              </div>
            </div>
          </div>

          <div className="mt-[30px]">
            <h1 className="font-bold text-[22px] leading-[33px] text-secondary">
              Payment
            </h1>
            <div className="rounded-[30px] mt-2.5 p-[30px] bg-white border border-border shadow-indicator space-y-5">
              <div className="flex items-center space-x-3">
                <Button
                  variant="third"
                  size="button"
                  className="w-1/2 border-2 border-gray-light hover:border-primary"
                >
                  <Image
                    src="/icons/card.svg"
                    alt="card"
                    height={24}
                    width={24}
                    className="mr-2.5"
                  />
                  Transfer
                </Button>
                <Button
                  variant="third"
                  size="button"
                  className="w-1/2 border-2 border-gray-light hover:border-primary"
                >
                  <Image
                    src="/icons/visa.svg"
                    alt="visa"
                    height={0}
                    width={0}
                    className="h-full w-auto"
                  />
                </Button>
              </div>
              <CardBooking title="Bank Name" value="BuildWithAngga Fi" />
              <CardBooking title="Bank Account" value="Nidejia Listings" />
              <CardBooking title="Number" value="20193050" />
              <Separator className="bg-border" />
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-semibold leading-[21px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree with terms & conditions
                </label>
              </div>
              <Button 
                variant="default" 
                size="default" 
                className="mt-4"
                onClick={handlePayment}
                disabled={isLoading}
              >
                Make a Payment
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Review />
    </main>
  );
}

export default Checkout;
