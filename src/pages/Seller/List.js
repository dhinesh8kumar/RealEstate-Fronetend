import { React, useState, useEffect } from "react";
import Sidebar from "../../components/Ssidebar";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";

import DeleteIcon from "@mui/icons-material/Delete";

import axios from "axios";
export default function List() {
  const navigate = useNavigate();
  if (!localStorage.getItem("Name")) {
    navigate("/");
  }
  if (localStorage.getItem("authToken") !== "seller") {
    navigate("/Properties");
  }
  const [data, setData] = useState([]);
  const loadPayment = async () => {
    let id = localStorage.getItem("data");

    const response = await axios
      .get("https://realestate-backend-b20k.onrender.com/api/sproperty/", {
        params: {
          user: id,
        },
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadPayment();
  }, []);
  return (
    <>
      <Sidebar />
      <div className="main">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Proeprty ID</th>
              <th scope="col">Reg No.</th>
              <th scope="col">Purpose</th>

              <th scope="col">Address</th>

              <th scope="col">property_image</th>

              <th scope="col">Price</th>

              <th scope="col">Area</th>
              <th scope="col">Owner Name</th>

              <th scope="col">Property_doc</th>

              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              const verify = item.Verify;
              let statusText;
              if (verify === -1) {
                statusText = "O In process";
              } else if (verify === 1) {
                statusText = "✔ Approved";
              } else {
                statusText = "X Denied";
              }
              const inactive = () => {
                axios
                  .put(`http://localhost:9091/inactive`, {
                    id: item.id,
                  })

                  .then((response) => {
                    console.log(response.data);

                    alert("User information updated successfully");
                  })

                  .catch((error) => {
                    console.error(error);

                    alert("Error updating user information");
                  });

                window.location.reload();
              };
              return (
                <tr key={item.property_id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.Reg_no}</td>

                  <td>{item.purpose}</td>

                  <td>{item.Address}</td>

                  <td>{item.property_image}</td>

                  <td>{item.Price}</td>

                  <td>{item.Area_Size}sqkm</td>

                  <td>{item.Owner_Name}</td>

                  <td>{item.property_doc}</td>

                  <td>
                    {statusText} 
                    <Button
                      color="secondary"
                      onClick={inactive}
                      size="small"
                      variant="outlined"
                      startIcon={<DeleteIcon />}
                    >
                      DELETE
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
