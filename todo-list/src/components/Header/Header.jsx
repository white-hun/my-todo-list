// import React from "react";

// export default function Header({ filters, filter, onFilterChange }) {
//   return (
//     <ul>
//       {filters.map((value, index) => (
//         <li key={index}>
//           <button onClick={() => onFilterChange(value)}>{value}</button>
//         </li>
//       ))}
//     </ul>
//   );
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//-------------------------------------------------------------------
import React from "react";

export default function Header({ filters, filter, onChangeFilter }) {
  return (
    <header>
      <ul>
        {filters.map((value, index) => (
          <li key={index}>
            <button onClick={() => onChangeFilter(value)}>{value}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}
