"use client";
import { Button } from "@/components/atomics/button";
import Title from "@/components/atomics/title";
import DataTransaction from "@/json/city-transaction.json";
import { CityCenterProps } from "@/interfaces/city-center";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/atomics/pagination";
import CardTransaction from "@/components/molecules/card/card-transaction";
import { CityTransactionProps } from "@/interfaces/city-transaction";
import CardEmpty from "@/components/molecules/card/card-empty";
import { useGetTransactionQuery } from "@/services/transaction.service";
import { Transaction } from "@/interfaces/transaction";

function MyTransactions() {
  const { data: transactions } = useGetTransactionQuery({});

  return (
    <main>
      <div className="flex items-center justify-between">
        <Title
          section="admin"
          title="My Transactions"
          subtitle="Manage your house and get money"
        />
      </div>

      <div className="mt-[30px] space-y-5">
        {transactions?.data?.total ? (
          transactions.data.data.map((transaction: Transaction) => (
            <CardTransaction
              key={transaction.id}
              id={transaction.id}
              image={transaction.listing.attachments?.[0] || ""}
              title={transaction.listing.title}
              location={transaction.listing.address}
              days={transaction.total_days}
              price={transaction.total_price}
              status={transaction.status}
            />
          ))
        ) : (
          <CardEmpty />
        )}
      </div>
      <Pagination className="mt-[30px]">
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">10</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </main>
  );
}

export default MyTransactions;
