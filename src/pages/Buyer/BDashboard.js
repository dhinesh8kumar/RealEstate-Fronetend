import React from "react";
import BSidebar from "../../components/Bsidebar";
import "../../styles/admin.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
export default function BDashboard() {
  const navigate = useNavigate();
  if (!localStorage.getItem("Name")) {
    navigate("/");
  }
  if (localStorage.getItem("authToken") !== "buyer") {
    navigate("/SDashboard/List");
  }
  const [txn, setTxn] = useState([]);
  const [data, setData] = useState([]);
  const loadBuyer = async () => {
    let id = localStorage.getItem("data");
    
    const response = await axios.get('https://realestate-backend-b20k.onrender.com/api/bpayment/', {
      params: {
        user: id,
        verify: -1
      }
      
    })
    .then(response => {
      console.log(response.data);
      setData(response.data);
    })
    .catch(error => {
      console.log(error);
      
    });
    
  };
  
  useEffect(()=> {
    loadBuyer();

    const response = await axios
      .get("http://localhost:9091/api/bpayment/", {
        params: {
          user: id,
          verify: -1,
        },
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  useEffect(() => {
    loadBuyer();
  }, []);
  const loadTxn = async () => {
    let id = localStorage.getItem("data");
    
    const res = await axios.get('https://realestate-backend-b20k.onrender.com/api/bpayment/', {
      params: {
        user: id,
        verify: 0
      }
      
    })
    .then(res => {
      
      setTxn(res.data);
    })
    .catch(error => {
      console.log(error);
      
    });
    
  };
  
  useEffect(()=> {
    loadTxn();

    const res = await axios
      .get("http://localhost:9091/api/bpayment/", {
        params: {
          user: id,
          verify: 0,
        },
      })
      .then((res) => {
        setTxn(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  useEffect(() => {
    loadTxn();
  }, []);
  const [txn1, setTxn1] = useState([]);
  const loadTxn1 = async () => {
    let id = localStorage.getItem("data");
    
    const response = await axios.get('https://realestate-backend-b20k.onrender.com/api/bpayment/', {
      params: {
        user: id,
        verify: 1
      }
      
    })
    .then(res => {
      
      setTxn1(res.data);
    })
    .catch(error => {
      console.log(error);
      
    });
    
  };

  useEffect(() => {
    loadTxn1();
  }, []);
  const txn2 = [...new Set(txn.concat(txn1))];
  return (
    <>
      <BSidebar />
      <div className="main">
        <h4>Pending Transactions</h4>
        <table className="table">
  <thead className="k">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Payment ID</th>
      <th scope="col">Buyer</th>
      <th scope="col">Property ID</th>
      <th scope="col">Amount</th>
      <th scope="col">Seller</th>
      <th scope="col">Attorney</th>
      <th scope="col">Status</th>

    </tr>
  </thead>
  <tbody>
    {data.map((item,index)=>{
      const Accept = () => {
        axios.put(`https://realestate-backend-b20k.onrender.com/paccept`, {
          verify:1,
          id: item.id
        })
        .then(response => {
          console.log(response.data);
          alert('User information updated successfully');
        })
        .catch(error => {
          console.error(error);
          alert('Error updating user information');
        });
        window.location.reload()
      };
      const Reject = () => {
        axios.put(`https://realestate-backend-b20k.onrender.com/paccept`, {
          verify:0,
          id: item. id
        })
        .then(response => {
          console.log(response.data);
          alert('User information updated successfully');
        })
        .catch(error => {
          console.error(error);
          alert('Error updating user information');
        });
        window.location.reload()
      };
      return (
        
        <tr key={item.id}>
        <th scope='row'>{index+1}</th>
        <td>{item.id}</td>
        <td>{item.Buyer_id}</td>
        <td>{item.Property_id}</td>
        <td>$ {item.Amount}</td>
        <td>{item.Seller_id}</td>
        <td>{item.Attorney_id}</td>
        <td><Stack direction="row" spacing={1}>
      
      <Button  size="small" onClick={Accept} variant="contained" color="success" startIcon={<DoneIcon />} disableElevation>
        Accept
      </Button>
      <Button size="small" onClick={Reject} variant="outlined" color="error" startIcon={<CloseIcon/>}>
        Deny
      </Button>
    </Stack></td>
        </tr>
        
      )
    })}
  </tbody>
</table>
<h4>Completed Transactions</h4>
        <table className="table">
          <thead className="k">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Payment ID</th>
              <th scope="col">Buyer</th>
              <th scope="col">Property ID</th>
              <th scope="col">Amount</th>
              <th scope="col">Seller</th>
              <th scope="col">Attorney</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {txn2.map((txn, index) => {
              return (
                <tr key={txn.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{txn.id}</td>
                  <td>{txn.Buyer_id}</td>
                  <td>{txn.Property_id}</td>
                  <td>$ {txn.Amount}</td>
                  <td>{txn.Seller_id}</td>
                  <td>{txn.Attorney_id}</td>
                  <td>{txn.Verify === 1 ? "Approved" : "Denied"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
