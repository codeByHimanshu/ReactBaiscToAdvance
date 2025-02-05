import { useMemo } from "react";
import { useEffect, useState } from "react";

export default function Bankdata() {
  const [banksbi, setBanksbi] = useState({});
  const [bankpnb, setBankpnb] = useState({});
  const [banktotal, setBanktotal] = useState({});

  useEffect(() => {
    setBanksbi({
      returns: 1000,
    });
  }, []);


  useEffect(() => {
    setBankpnb({
      returns: 1000,
    });
  }, []);


  useEffect(() => {

    setTimeout(() => {
      setBanktotal({
        income: 2000,
      });
    }, 2000);
  }, []);

  const income = useMemo(() => {
    console.log("beforeee");

    return banksbi.returns + bankpnb.returns;
    console.log("afterrr");

  }, [banksbi, bankpnb]);




  const mytax = (income + banktotal.income) * 0.3;

  return (
    <div>
      <h1>income is : {mytax}</h1>
    </div>
  );
}
