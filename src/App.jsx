import UserRoutes from "UserRoute";
import Header from "modules/Header";

const App = () => {
  return (
    <div className="container">
      <Header />
      <UserRoutes />
    </div>
  );
};

export default App;