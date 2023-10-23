import React, { useState } from "react";

import { useParams } from "react-router-dom";
import {
  Grid,
  Typography,
  Button,
  Rating,
  Slider,
  Avatar,
  Stack,
  Box,
  LinearProgress,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import StarIcon from "@mui/icons-material/Star";
import carddata from "./Carddata";

const Productinfo = () => {
  const { productId } = useParams();
  const thisProduct = carddata.find((pr) => pr.id === productId);
  const [meterValue, setMeterValue] = useState(1);
  // Debugging statements
  console.log("productId", productId);
  console.log("thisProduct:", thisProduct);

  function valuetext(value) {
    return `${value} Meter`;
  }
  const calculatePrice = () => {
    // You can use your own price calculation logic here
    // For example, if price per meter is stored in thisProduct.pricePerMeter
    const tot = thisProduct.price * meterValue;
    console.log("total", tot);
    return tot;
  };
  const handleMeterChange = (event, newValue) => {
    setMeterValue(newValue);
  };

  return (
    <div>
      <section className="grid  grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-2">
        <div className="flex flex-col item-center">
          <div className="overflow-hidden rounded-lg max-w-[35rem] max-h-[35rem]">
            <img
              className="h-full w-full object-cover object-top"
              src={thisProduct.imgUrl}
            />
          </div>
        </div>
        <div className="col-span-1 gap-2 maxt-auto max-w-2xl px-4 pb-16 ">
          <h1 className="font-bold text-2xl"> {thisProduct.name} </h1>
          <h2 className=" font-semibold opacity-30">this is a linen shirt</h2>
          <div className=" mt-4 row-span-3 ">
            <div className="flex gap-5">
              <p className="font-semi bold text-lg "> {thisProduct.price}₹/m</p>
              <p className="font-light  text-lg line-through">
                {thisProduct.oprice}
              </p>
              <p className="font-semibold text-green-700"> </p>
            </div>
            <div className="h-auto mt-5">
              <p>Select Size (per/Meter)</p>
              <p>
                {meterValue} Meter - Price: {calculatePrice()}₹
              </p>
              <Slider
                onChange={handleMeterChange}
                aria-label="Temperature"
                defaultValue={1}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={8}
              />
            </div>
            <div className="mt-4">
              <Typography component="legend">Rate our Product</Typography>
              <Rating name="simple-controlled" />
            </div>
            <div className="mt-4">
              <Button sx={{ height: 50 }} variant="contained">
                ADD To Cart
              </Button>
            </div>
            <p>1Meter - Shirt cloth fits for age(1-12)</p>
            <p>2Meter - Shirt cloth fits for size (XS,S,M)</p>
            <p>3Meter - Shirt cloth fits for any size</p>
            <p>6Meter - Cloth for Phatani</p>
            <div className="mt-6">
              <p className="font-semibold text-red-700"> Rating Given</p>
              <br />
              <Typography component="legend">Reviews & Rating</Typography>

              <Rating name="read-only" value={5} readOnly />
              <Stack>
                <Avatar sx={{ bgcolor: deepOrange[500] }}>S</Avatar>
              </Stack>
              <h1>Sanjay Das </h1>
              <br />
              <p></p>
              <div className="mt-8 grid  grid-cols-2 gap-2 ">
                <div className="">
                  <h1 className="font-semibold text-3xl">4 stars</h1>
                  <h2> 20 reviews </h2>
                </div>
                <div className="">
                  <div>
                    <p>one star</p>
                    <LinearProgress disableShrink value={3} varient="denger" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default Productinfo;
