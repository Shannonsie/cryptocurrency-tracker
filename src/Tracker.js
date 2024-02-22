import { useEffect, useState } from "react";

function Tracker() {
    const [crypto, setCrypto] = useState([])
    const displayCrypto = async() => {
        const url = `https://api.coincap.io/v2/assets`   
        const response = await fetch (url);
        const responseJson = await response.json();
        setCrypto(responseJson.data)
    }

    useEffect(()=> {
        displayCrypto();
    },[]);

    const DisplayCryptoValue = (props) => {
        return (
        <div className="flex flex-wrap gap-4">
            {props.cryptos.map((crypto) => (
                <div className="flex-1">
                    <div className="bg-navy w-full m-4 text-base text-left p-4 rounded-md">
                        <p className= "font-semibold text-2xl capitalize"> {crypto.id}</p>
                        <p className="text-yellow-500 text-lg font-medium"> ${JSON.parse(crypto.priceUsd).toFixed(8)} </p>
                        <div className="flex gap-4 mt-4">
                            <div className="">
                                <p className="font-semibold text-sm text-neutral-400"> Volume </p>
                                <p>{JSON.parse(crypto.volumeUsd24Hr).toFixed(8)}</p>
                            </div>
                            <div className="">
                                <p className="font-semibold text-sm text-neutral-400"> Change </p>
                                <p className={`${crypto.changePercent24Hr < 0 ? 'text-red-500' : 'text-green-500'}`}> {JSON.parse(crypto.changePercent24Hr).toFixed(8)}</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            ))}
        </div>
        );
    };

  return (
    <div className="m-8 font-poppins font-normal text-lg flex">
      <DisplayCryptoValue cryptos={crypto} />
    </div>
  );
}

export default Tracker;
