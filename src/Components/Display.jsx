
const Display = ({displayValue}) => {
  return ( 
    <input type="text" className="w-full p-4 mb-4 text-3xl text-center text-white bg-gray-800 border-2 border-blue-500 rounded-lg focus:outline-none" 
    placeholder="Enter num"
     value={displayValue} readOnly
     />

)
};

export default Display;