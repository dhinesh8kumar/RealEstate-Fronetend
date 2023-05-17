import { useEffect, useState } from "react";
import "../../styles/Body.css";
import RestaurantCard from "../../components/Card";
import NewNavbar from "../../components/Newnavbar";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Body = () => {
  const navigate = useNavigate();
  if (!localStorage.getItem("Name")) {
    navigate("/");
  } else if (localStorage.getItem("authToken") != "buyer") {
    navigate("/SDashboard/List");
  }
  const [data, setData] = useState([]);
  const [propertyList, setPropertyList] = useState(data);
  const [searchText, setSearchText] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [typeFilters, setTypeFilters] = useState([]);

  const loadProperty = async () => {
    const response = await axios.get(
      "https://realestate-backend-b20k.onrender.com/api/property"
    );

    setData(response.data);
    console.log(propertyList);
  };

  useEffect(() => {
    loadProperty();
  }, []);

  const handlePriceFilterChange = (e) => {
    setPriceFilter(e.target.value);
  };

  const handleTypeFilterChange = (e) => {
    const value = e.target.value;
    if (typeFilters.includes(value)) {
      setTypeFilters((prev) => prev.filter((v) => v !== value));
    } else {
      setTypeFilters((prev) => [...prev, value]);
    }
  };

  useEffect(() => {
    console.log("updating list");
    let filtered = [...data];
    if (searchText) {
      console.log("updating searchtext");
      filtered = filtered.filter(
        (p) =>
          p.Address.includes(searchText) || p.Property_Name.includes(searchText)
      );
    }
    if (priceFilter) {
      console.log("updating price");
      switch (priceFilter) {
        case "5-10":
          filtered = filtered.filter(
            (p) => p.Price >= 5000 && p.Price <= 10000
          );
          break;
        case "10-20":
          filtered = filtered.filter(
            (p) => p.Price > 10000 && p.Price <= 20000
          );
          break;
        case "20-30":
          filtered = filtered.filter(
            (p) => p.Price > 20000 && p.Price <= 30000
          );
          break;
        case "30-50":
          filtered = filtered.filter(
            (p) => p.Price > 30000 && p.Price <= 50000
          );
          break;
        case "50-100":
          filtered = filtered.filter(
            (p) => p.Price > 50000 && p.Price <= 100000
          );
          break;
        case ">100":
          filtered = filtered.filter((p) => p.Price > 100000);
          break;
        default:
          break;
      }
    }
    if (typeFilters.length) {
      console.log("updating type");
      filtered = filtered.filter((p) =>
        typeFilters.includes(p.purpose.toLowerCase())
      );
    }
    setPropertyList(filtered);
  }, [data, searchText, priceFilter, typeFilters]);

  return (
    <>
      <NewNavbar />
      <div className="body">
        <div className="filter-container">
          <div className="price-filter">
            <span>Price Range:</span>
            <select value={priceFilter} onChange={handlePriceFilterChange}>
              <option value="">All</option>
              <option value="5-10">₱5000 - ₱10000</option>
              <option value="10-20">₱10000 - ₱20000</option>
              <option value="20-30">₱20000 - ₱30000</option>
              <option value="30-50">₱30000-₱50000</option>
              <option value="50-100">₱50000-₱100000</option>
              <option value=">100"> Greater than ₱100000</option>
            </select>
          </div>
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search"
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="search-btn"
              style={{ border: "1px solid black" }}
            >
              Search
            </button>
          </div>
          <div className="type-filter">
            <span>Type:</span>
            <label>
              <input
                type="checkbox"
                value="sell"
                checked={typeFilters.includes("sell")}
                onChange={handleTypeFilterChange}
              />
              Sell
            </label>
            <label>
              <input
                type="checkbox"
                value="lease"
                checked={typeFilters.includes("lease")}
                onChange={handleTypeFilterChange}
              />
              Lease
            </label>
            <label>
              <input
                type="checkbox"
                value="cd"
                checked={typeFilters.includes("cd")}
                onChange={handleTypeFilterChange}
              />
              CD
            </label>
          </div>
        </div>

        <div className="res-center">
          <div className="res-container">
            {propertyList.map((p) => (
              <RestaurantCard
                src={p.Property_Image}
                title={p.Property_Name}
                area={p.Area_Size}
                location={p.Address}
                price={p.Price}
                type={p.purpose}
                seller_id={p.Seller_id}
                description={p.Descrp}
                property_id={p.id}
                Contact_Number={p.Contact_Number}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Body;
