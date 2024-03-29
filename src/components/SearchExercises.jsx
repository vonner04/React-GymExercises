import "../styles/SearchExercises.css";
import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { fetchData, exerciseOptions } from "../utils/fetchData";

export default function SearchExercises() {
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    console.log("searching for exercises");

    if (search) {
      console.log("searching:", search);
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      console.log(exercisesData);
    }
  };

  return (
    <Stack
      alignItems="center"
      marginTop="150px"
      justifyContent="center"
      padding="20px"
    >
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        textAlign="center"
        marginBottom="40px"
      >
        Awesome Exercises You
        <br /> Should Know
      </Typography>
      <Stack direction="row" height="100px">
        <Box position="relative" marginBottom="72px"></Box>
        <TextField
          sx={{
            height: "100%",
            input: { fontWeight: "700", border: "none" },
            backgroundColor: "white",
            width: { lg: "1000px", xs: "300px" },
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search for exercises"
          type="text"
        ></TextField>
        <Button
          className="btn--searchExercises"
          sx={{ bgcolor: "#FF2625", color: "white", height: "56px" }}
          width="25%"
          onClick={handleSearch}
        >
          Search
        </Button>
      </Stack>
    </Stack>
  );
}
