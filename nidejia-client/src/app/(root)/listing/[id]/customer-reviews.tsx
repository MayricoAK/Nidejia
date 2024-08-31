import CardReview from "@/components/molecules/card/card-review";
import React from "react";

function CustomerReviews() {
  return (
    <div>
      <h1 className="font-bold text-lg leading-[27px] text-secondary">
        From Happy Customers
      </h1>
      <div className="mt-2.5 grid grid-cols-2 gap-5">
        <CardReview
          rating={4}
          review="I was not so sure if there was a beautiful bedroom, but it was really great experience."
          avatar="/images/avatar-review.svg"
          username="Evelin Bie"
          jobdesk="Full-Time Traveler"
        />
        <CardReview
          rating={4}
          review="I was not so sure if there was a beautiful bedroom, but it was really great experience."
          avatar="/images/avatar-review.svg"
          username="Evelin Bie"
          jobdesk="Full-Time Traveler"
        />
        <CardReview
          rating={4}
          review="I was not so sure if there was a beautiful bedroom, but it was really great experience."
          avatar="/images/avatar-review.svg"
          username="Evelin Bie"
          jobdesk="Full-Time Traveler"
        />
        <CardReview
          rating={4}
          review="I was not so sure if there was a beautiful bedroom, but it was really great experience."
          avatar="/images/avatar-review.svg"
          username="Evelin Bie"
          jobdesk="Full-Time Traveler"
        />
      </div>
    </div>
  );
}

export default CustomerReviews;
