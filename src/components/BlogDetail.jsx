// import React from "react";
// import { useParams, Link } from "react-router-dom";

// const blogData = [
//   {
//     id: 1,
//     title: "Customer Safety: The Heart of Every Ride",
//     date: "July. 24, 2019",
//     description: "Olio Cabs is a professional private cab service founded in 2023 by Mr. Dhirendra Pratap. We focus on safe, clean, punctual, and reliable rides for local, intercity, and tourist travel needs.",
  
    
// },
//   {
//     id: 2,
//     title: "Why Riding a Cab is the Smart Choice",
//     date: "July. 24, 2019",
//     description: "Discover why cabs are the best option for local, intercity, and tourist travel. Comfort, safety, and convenience in every ride.",
//   },
//   {
//     id: 3,
//     title: "Why Personalized Cabs Are Better Than Ola and Uber",
//     date: "July. 24, 2019",
//     description: "Learn how personalized cab services offer more reliability, safety, and comfort compared to big aggregators.",
//   },
// ];

// const BlogDetail = () => {
//   const { id } = useParams();
//   const blog = blogData.find((b) => b.id === Number(id));

//   if (!blog) {
//     return <div>Blog not found. <Link to="/">Go Home</Link></div>;
//   }

//   return (
//     <div className="container mt-5">
//       <h2>{blog.title}</h2>
//       <p><strong>Date:</strong> {blog.date}</p>
//       <p>{blog.description}</p>
//       <Link to="/" className="btn btn-primary">Back to Home</Link>
//     </div>
//   );
// };

// export default BlogDetail;
import React from "react";
import { useParams, Link } from "react-router-dom";

const blogData = [
  {
    id: 1,
    title: "Customer Safety: The Heart of Every Ride",
    date: "July. 24, 2019",
    content: (
      <>
        <h2>Customer Safety: The Heart of Every Ride – How Cab Companies Can Lead the Way</h2>
        <p>
          In today’s fast-paced world, where people rely on cabs to commute safely and conveniently,
          customer safety has become a top priority...
        </p>

        <h3>Why Safety Matters More Than Ever</h3>
        <p>
          Safety is not just a feature; it is the foundation of customer confidence...
        </p>

        <h3>Key Areas of Customer Safety</h3>
        <ul>
          <li><strong>Driver Training & Behavior:</strong> Professional driving, respectful communication, and traffic rules.</li>
          <li><strong>Vehicle Maintenance & Cleanliness:</strong> Clean, well-maintained vehicles prevent breakdowns.</li>
          <li><strong>Technology & Tracking:</strong> GPS, SOS, ride-sharing with family.</li>
          <li><strong>Emergency Preparedness:</strong> Drivers trained for emergencies.</li>
        </ul>

        <h3>How Cab Companies Can Overcome Safety Challenges</h3>
        <ul>
          <li>Strict hiring and verification of drivers.</li>
          <li>Regular training on road safety and emergencies.</li>
          <li>Using tech like live tracking, feedback loops.</li>
          <li>Promptly acting on complaints.</li>
        </ul>

        <h3>Olio Cabs’ Commitment to Safety</h3>
        <p>
          At Olio Cabs, every driver undergoes training by our founder, Mr. Dhirendra Pratap...
        </p>
      </>
    )
  },

  {
    id: 2,
    title: "Why Riding a Cab is the Smart Choice",
    date: "July. 24, 2019",
    content: (
      <>
        <h2>Why Riding a Cab is the Smart Choice for Local, Intercity, and Tourist Travel</h2>
        <p>
          Whether you’re heading to a nearby café, traveling to a city, or exploring tourist spots...
        </p>
        <ol>
          <li><strong>Stress-Free Travel:</strong> No traffic stress, no parking struggle.</li>
          <li><strong>Intercity & Airport Travel:</strong> Reliable and punctual.</li>
          <li><strong>Safe & Reliable:</strong> Trained drivers and GPS tracking.</li>
          <li><strong>Cost-Effective for Groups:</strong> Saves money compared to multiple vehicles.</li>
          <li><strong>Local Expertise:</strong> Drivers guide you to hidden gems.</li>
        </ol>
        <h3>Olio Cabs Makes Every Ride Special</h3>
        <p>
          Clean cabs, courteous drivers, punctual service — a smooth ride every time.
        </p>
      </>
    )
  },

  {
    id: 3,
    title: "Why Personalized Cabs Are Better Than Ola and Uber",
    date: "July. 24, 2019",
    content: (
      <>
        <h2>Why Personalized Cabs Are Better Than Ola and Uber</h2>
        <p>
          The cab industry has changed dramatically, thanks to aggregators like Ola and Uber.
          But many customers today prefer personalized cabs...
        </p>
        <ol>
          <li><strong>Consistency:</strong> Reliable service, clean cars, punctual drivers.</li>
          <li><strong>Personally Trained Drivers:</strong> Courteous and safe.</li>
          <li><strong>No Surge Pricing:</strong> Transparent fares without surprises.</li>
          <li><strong>Direct Communication:</strong> Human support, quick resolutions.</li>
          <li><strong>Safety:</strong> Strict checks, GPS tracking.</li>
          <li><strong>Relationship Service:</strong> Same trusted drivers for frequent users.</li>
        </ol>
        <h3>Olio Cabs: A Better Way to Ride</h3>
        <p>
          No surge pricing, no cancellations — just reliable, safe, comfortable journeys.
        </p>
      </>
    )
  }
];

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === Number(id));

  if (!blog) {
    return <div>Blog not found. <Link to="/">Go Home</Link></div>;
  }

  return (
    <div className="container mt-5">
      <h2>{blog.title}</h2>
      <p><strong>Date:</strong> {blog.date}</p>
      <div>{blog.content}</div>
      <Link to="/" className="btn btn-primary mt-3">Back to Home</Link>
    </div>
  );
};

export default BlogDetail;
