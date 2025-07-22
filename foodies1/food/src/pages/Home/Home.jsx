import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <main className="container">
        <Header/>
        <ExploreMenu />
        <FoodDisplay />
    </main>
  )
}

export default Home;