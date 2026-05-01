// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Mail } from "lucide-react";

// const SubmissionList = ({ websiteDomain }) => {
//   const [contacts, setContacts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!websiteDomain) return;

//     const fetchContacts = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         const res = await fetch(
//           `${import.meta.env.VITE_API_URL}/contacts/${websiteDomain}`
//         );

//         if (!res.ok) {
//           throw new Error("Failed to fetch contacts");
//         }

//         const data = await res.json();
//         setContacts(Array.isArray(data) ? data : []);
//       } catch (err) {
//         console.error("Failed to fetch contacts:", err);
//         setError("Failed to load contact submissions.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchContacts();
//   }, [websiteDomain]);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="bg-gray-800 rounded-xl border border-gray-700 p-6"
//     >
//       <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
//         <Mail />
//         <span>Contact Submissions</span>
//       </h2>

//       {loading && (
//         <p className="text-gray-400 text-sm">Loading submissions...</p>
//       )}

//       {error && (
//         <p className="text-red-400 text-sm">{error}</p>
//       )}

//       {!loading && !error && contacts.length === 0 && (
//         <p className="text-gray-400 text-sm">
//           No contact submissions found for this website.
//         </p>
//       )}

//       {!loading && !error && contacts.length > 0 && (
//         <div className="overflow-x-auto">
//           <table className="min-w-full text-left border border-gray-700">
//             <thead>
//               <tr className="bg-gray-700">
//                 <th className="px-4 py-2">Name</th>
//                 <th className="px-4 py-2">Email</th>
//                 <th className="px-4 py-2">Phone</th>
//                 <th className="px-4 py-2">Company</th>
//                 <th className="px-4 py-2">Message</th>
//               </tr>
//             </thead>
//             <tbody>
//               {contacts.map((c) => (
//                 <tr
//                   key={c._id}
//                   className="border-t border-gray-700 hover:bg-gray-700/50 transition-colors"
//                 >
//                   <td className="px-4 py-2">
//                     {c.firstName} {c.lastName}
//                   </td>
//                   <td className="px-4 py-2">{c.email}</td>
//                   <td className="px-4 py-2">{c.phone || "-"}</td>
//                   <td className="px-4 py-2">{c.company || "-"}</td>
//                   <td className="px-4 py-2 max-w-md truncate">
//                     {c.message}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </motion.div>
//   );
// };

// export default SubmissionList;
