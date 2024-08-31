import Title from "@/components/atomics/title";
import CardReview from "@/components/molecules/card/card-review";
import React from "react";

function Review() {
  return (
    <section id="review-section" className="container mx-auto my-[100px]">
      <div className="flex justify-center text-center">
        <Title
          title="Happy Customers"
          subtitle="We’d love to come back again soon"
        />
      </div>
      <div className="mt-[30px] grid grid-cols-3 gap-[30px]">
        <div className="space-y-[30px]">
          <CardReview
            rating={4}
            review="I was not so sure if there was a beautiful bedroom, but it was really great experience."
            avatar="/images/avatar-review.svg"
            username="Evelin Bie"
            jobdesk="Full-Time Traveler"
          />
          <CardReview
            rating={4}
            review="It’s just amazing, will be back."
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
        <div className="space-y-[30px]">
          <CardReview
            rating={5}
            review="Price was too low yet luxury."
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
            rating={5}
            review="During covid I was stayed here and I got a lot of full of supports that I need to keep my body healthy."
            avatar="/images/avatar-review.svg"
            username="Evelin Bie"
            jobdesk="Full-Time Traveler"
          />
        </div>
        <div className="space-y-[30px]">
          <CardReview
            rating={4}
            review="I was not so sure if there was a beautiful bedroom, but it was really great experience."
            avatar="/images/avatar-review.svg"
            username="Evelin Bie"
            jobdesk="Full-Time Traveler"
          />
          <CardReview
            rating={4}
            review="It’s just amazing, will be back."
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
    </section>
  );
}

export default Review;
