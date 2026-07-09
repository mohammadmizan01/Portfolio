const Container = ({ children }) => {
  return (
    <div
      className="mx-auto w-full px-6"
      style={{ maxWidth: "1280px" }}
    >
      {children}
    </div>
  );
};

export default Container;