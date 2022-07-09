import { useSelector } from "react-redux";
import { shopsSelectors } from "../redux/shops";

import Shop from "../components/Shop";

const ShopView = () => {
  const shopsList = useSelector(shopsSelectors.getShopsList);
  return <>{shopsList && <Shop shops={shopsList} />}</>;
};

export default ShopView;
