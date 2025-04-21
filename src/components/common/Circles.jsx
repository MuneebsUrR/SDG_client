const Circles = ({ options }) => {
  return (
    <div className="relative w-full max-w-lg">
      {options[0] === 1 && (
        <div className="absolute -top-10 left-0 w-[500px] h-[500px] bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-50" />
      )}
      {options[1] === 1 && (
        <div className="absolute -top-20 -left-40 w-[400px] h-[400px] bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-50" />
      )}
      {options[2] === 1 && (
        <div className="absolute -bottom-40 left-20 w-[300px] h-[300px] bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-50" />
      )}
    </div>
  );
};

export default Circles;
