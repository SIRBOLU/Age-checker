import { useState } from "react";

const App = () => {
  const [age, setAge] = useState(null);
  const [birthYear, setBirthYear] = useState(null);
  // const [currentYear, setCurrentYear] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const currentYear = new Date().getFullYear();
  const handleClick = () => {
    if (!birthYear || !currentYear) {
      alert("Please enter both years");
      return;
    }

    if (birthYear > currentYear) {
      alert("Current year must be greater than birth year");
      return;
    }

    setAge(`You are ${currentYear - birthYear} years old`);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // ✅ RESET FUNCTION
  const handleReset = () => {
    setBirthYear(null);
    // setCurrentYear(null);
    setAge(null);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 transition-all duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-amber-100 text-black"
      }`}
    >
      {/* 🌙 Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed top-5 right-5 px-4 py-2 rounded-full font-semibold shadow-lg transition-all duration-300 bg-white text-gray-800 hover:bg-gray-200"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* CARD */}
      <div
        className={`w-full max-w-md rounded-3xl p-8 shadow-2xl transition-all duration-500 ${
          darkMode
            ? "bg-gray-800 border border-gray-700"
            : "bg-white/80 border border-white/40"
        }`}
      >
        <h1 className="text-4xl font-extrabold text-center mb-6">
          Age Checker
        </h1>

        {/* Birth Year */}
        {/* <div className="mb-5">
          <label className="block text-sm mb-2">Birth Year</label>
          <input
            onChange={(e) => setBirthYear(parseInt(e.target.value))}
            value={birthYear || ""}
            type="number"
            placeholder="e.g. 2000"
            className={`w-full p-3 rounded-xl border outline-none transition ${
              darkMode
                ? "bg-gray-700 border-gray-600 text-white"
                : "bg-white border-orange-200"
            }`}
          />
        </div> */}

        <div className="mb-5">
          <label className="block text-sm mb-2">Birth Year</label>

          <select
            onChange={(e) => setBirthYear(parseInt(e.target.value))}
            value={birthYear || ""}
            className={`w-full p-3 rounded-xl border outline-none transition ${
              darkMode
                ? "bg-gray-700 border-gray-600 text-white"
                : "bg-white border-orange-200"
            }`}
          >
            <option value="">Select birth year</option>

            {Array.from(
              { length: new Date().getFullYear() - 1899 },
              (_, i) => 1900 + i,
            ).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Current Year */}
        {/* <div className="mb-5">
          <label className="block text-sm mb-2">Current Year</label>
          <input
            onChange={(e) => setCurrentYear(parseInt(e.target.value))}
            value={currentYear || ""}
            type="number"
            placeholder="e.g. 2025"
            className={`w-full p-3 rounded-xl border outline-none transition ${
              darkMode
                ? "bg-gray-700 border-gray-600 text-white"
                : "bg-white border-orange-200"
            }`}
          />
        </div> */}

        <div className="mb-5">
          <label className="block text-sm mb-2">Current Year</label>

          <div
            className={`w-full p-3 rounded-xl border outline-none transition ${
              darkMode
                ? "bg-gray-700 border-gray-600 text-white"
                : "bg-gray-100 border-orange-200 text-gray-700"
            }`}
          >
            {new Date().getFullYear()}
          </div>
        </div>

        {/* CALCULATE BUTTON */}
        <button
          onClick={handleClick}
          className="w-full py-3 rounded-xl font-bold bg-gradient-to-r from-orange-500 to-amber-400 hover:scale-[1.02] transition transform shadow-lg"
        >
          Calculate Age
        </button>

        {/* RESET BUTTON */}
        <button
          onClick={handleReset}
          className="w-full mt-3 py-3 rounded-xl font-semibold border transition hover:scale-[1.02] bg-transparent
          border-red-400 text-red-500 hover:bg-red-500 hover:text-white"
        >
          Reset
        </button>

        {/* RESULT */}
        <div className="mt-6 text-center">
          {age && (
            <p
              className={`text-xl font-semibold py-4 rounded-xl transition-all duration-300 ${
                darkMode
                  ? "bg-gray-700 border border-gray-600"
                  : "bg-orange-50 border border-orange-100"
              }`}
            >
              {age}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;

// import { useState } from "react";

// const App = () => {
//   const [age, setAge] = useState(null);
//   const [birthYear, setBirthYear] = useState(null);
//   const [currentYear, setCurrentYear] = useState(null);
//   const handleClick = () => {
//     if (!birthYear || !currentYear) {
//       alert("Please enter both years");
//       return;
//     }

//     if (birthYear > currentYear) {
//       alert("Current year must be greater than birth year");
//       return;
//     }

//     setAge(`You are ${currentYear - birthYear} years old`);
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-amber-100">
//       <div className="w-[500px] h-[300px] bg-amber-300 rounded-2xl px-8 py-6">
//         <h1 className="text-orange-600 text-center text-3xl font-extrabold p-2">
//           Age Checker
//         </h1>
//         <div>
//           <label htmlFor="">Kindly input your birth year</label>
//           <input
//             onChange={(e) => {
//               setBirthYear(parseInt(e.target.value));
//             }}
//             value={birthYear}
//             type="number"
//             placeholder="Birth year"
//             className="p-2 mx-4 border border-amber-700 rounded-2xl"
//           />
//         </div>
//         <div className="my-4">
//           <label htmlFor="">Kindly input the current year</label>
//           <input
//             onChange={(e) => {
//               setCurrentYear(e.target.value);
//             }}
//             value={currentYear}
//             type="number"
//             placeholder="Current year"
//             className="p-2 mx-4 border border-amber-700 rounded-2xl"
//           />
//         </div>
//         <div className="flex justify-center">
//           <button
//             onClick={handleClick}
//             className="bg-amber-700 text-amber-100 font-bold rounded-2xl p-2"
//           >
//             Calculate my age
//           </button>
//         </div>
//         <div className="pt-2">
//           <p className="text-center">{age}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
