import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import CustomCard from "./CustomCard";
// layout cards in a grid
export default function BasicGrid() {
  // Outermost Grid is a container
  return (
    <Grid container spacing={2} my={2}>
      {/* Inner Grids (columns) are items */}
      <Grid item xs={4}>
        {" "}
        {/* use 4/12 columns on xs screens up */}
        <CustomCard
          title="Iguana"
          buttonText="Share"
          imageALT="Green Lizard"
          imageURL="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        >
          Green Lizard Card
        </CustomCard>
      </Grid>
      <Grid item xs={2}>
        <CustomCard
          title="Trash Cats"
          buttonText="Share"
          imageALT="Cats"
          imageURL="https://media.tenor.com/KsLGHUnn6IIAAAAM/garbage-rubbish.gif"
        >
          Garbage Cats GIF
        </CustomCard>
      </Grid>
      <Grid item xs={2}>
        <CustomCard
          title="AI Gen Doggo"
          buttonText="Share"
          imageALT="AI Dog"
          imageURL="https://preview.redd.it/i-asked-chatgpt-to-make-a-cute-dog-and-then-make-him-even-v0-rh6xs23x6m2c1.jpg?width=640&crop=smart&auto=webp&s=515283a76695eb5c38d12ccb83a78fe5e2ad8c10"
        >
          Cute Dog
        </CustomCard>
      </Grid>
      <Grid item xs={4}>
        <CustomCard
          title="Kute Kat"
          buttonText="Don't Share"
          imageALT="Kitty Kat"
          imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWrtpWvNcBLLKggOOfC9krR3GjxZ1Nsieoyw&s"
        >
          Kitty Kat
        </CustomCard>
      </Grid>
    </Grid>
  ); // 4 + 2 + 2 + 4 = 12, so grid will be 4 columns on one row
}
