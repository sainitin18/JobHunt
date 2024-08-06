import { BiTimeFive } from "react-icons/bi";
import logo1 from "../../Assets/images/about.png";
import { useGetJobListingsQuery } from "../../redux/services/joblistings";

const Jobs = () => {
  const { data: jobs = [], error, isLoading } = useGetJobListingsQuery();

  if (isLoading) {
    return <p>Loading jobs...</p>;
  }

  if (error) {
    return <p>Error loading jobs: {error.message}</p>;
  }

  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {jobs.map(
          ({ job_id, title, description, location, salary, companyName }) => {
            return (
              <div
                key={job_id}
                className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px]
        hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
              >
                <span className="flex justify-between items-center gap-4">
                  <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                    {title}
                  </h1>
                  <span className="flex items-center text-[#ccc] gap-1">
                    <BiTimeFive />
                    {salary}
                  </span>
                </span>
                <h6 className="text-[#ccc]">{location}</h6>

                <p className="text-[13px] text-[#95959] pt-[20px] border-t-[3px] mt-[20px] group-hover:text-white">
                  {description}
                </p>

                <div className="company flex items-center gap-2">
                  <img src={logo1} alt="Company logo" className="w-[10%]" />
                  <span className="text-[14px] py-[1rem] block group-hover:text-white">
                    {companyName}
                  </span>
                </div>

                <button
                  className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold
          text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-textColor"
                >
                  Apply Now
                </button>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Jobs;

// import { BiTimeFive } from "react-icons/bi";
// import logo1 from "../../Assets/images/about.png";

// const Data = [
//   {
//     id: 1,
//     image: logo1,
//     title: "Web Developer",
//     time: "Now",
//     location: "Benglore",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporisrerum voluptatem dolores cupiditate autem.",
//     company: "Novac Linus Co",
//   },
//   {
//     id: 2,
//     image: logo1,
//     title: "ML Engineer",
//     time: "14Hrs",
//     location: "Hyderabad",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporisrerum voluptatem dolores cupiditate autem.",
//     company: "Google",
//   },
//   {
//     id: 3,
//     image: logo1,
//     title: "Full Stack",
//     time: "16Hrs",
//     location: "New Delhi",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporisrerum voluptatem dolores cupiditate autem.",
//     company: "Microsoft",
//   },
//   {
//     id: 4,
//     image: logo1,
//     title: "Full Stack",
//     time: "16Hrs",
//     location: "New Delhi",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporisrerum voluptatem dolores cupiditate autem.",
//     company: "Microsoft",
//   },
//   {
//     id: 5,
//     image: logo1,
//     title: "Full Stack",
//     time: "16Hrs",
//     location: "New Delhi",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporisrerum voluptatem dolores cupiditate autem.",
//     company: "Microsoft",
//   },
//   {
//     id: 6,
//     image: logo1,
//     title: "ML Engineer",
//     time: "14Hrs",
//     location: "Hyderabad",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporisrerum voluptatem dolores cupiditate autem.",
//     company: "Google",
//   },
//   {
//     id: 7,
//     image: logo1,
//     title: "ML Engineer",
//     time: "14Hrs",
//     location: "Hyderabad",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporisrerum voluptatem dolores cupiditate autem.",
//     company: "Google",
//   },
//   {
//     id: 8,
//     image: logo1,
//     title: "ML Engineer",
//     time: "14Hrs",
//     location: "Hyderabad",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporisrerum voluptatem dolores cupiditate autem.",
//     company: "Google",
//   },
// ];
// const Jobs = () => {
//   return (
//     <div>
//       <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
//         {Data.map(({ id, image, title, time, location, desc, company }) => {
//           return (
//             <div
//               key={id}
//               className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px]
//         hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
//             >
//               <span className="flex justify-between items-center gap-4">
//                 <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
//                   {title}
//                 </h1>
//                 <span className="flex items-center text-[#ccc] gap-1">
//                   <BiTimeFive />
//                   {time}
//                 </span>
//               </span>
//               <h6 className="text-[#ccc]">{location}</h6>

//               <p className="text-[13px] text-[#95959] pt-[20px] border-t-[3px] mt-[20px] group-hover:text-white">
//                 {desc}
//               </p>

//               <div className="company flex items-center gap-2">
//                 <img src={image} alt="Company logo" className="w-[10%]" />
//                 <span className="text-[14px] py-[1rem] block group-hover:text-white">
//                   {company}
//                 </span>
//               </div>

//               <button
//                 className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold
//           text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-textColor"
//               >
//                 ApplyNow
//               </button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Jobs;
