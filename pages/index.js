import { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import nodepythagorean from "nodepythagorean";
import Footer from "../components/Footer";
import Results from "../components/Results";

export default function Index() {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [length, setLength] = useState("");
  const [seamAllowance, setSeamAllowance] = useState("");

  // const width = useRef("");
  // const height = useRef("");
  // const length = useRef("");
  // const seamAllowance = useRef("");

  const [fabricWidth, setFabricWidth] = useState(null);
  const [fabricHeight, setFabricHeight] = useState(null);
  const [measureUp, setMeasureUp] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log("Show results", showResults);
  }, [showResults]);

  const calculate = (e) => {
    e.preventDefault();
    const errors = [];
    if (!width || !length || !seamAllowance) {
      if (!width) {
        errors.push("width");
      }
      if (!length) {
        errors.push("length");
      }
      if (!seamAllowance) {
        errors.push("seam allowance");
      }
      setError(
        <Typography
          variant="body1"
          sx={{ fontWeight: 700, color: "#444", fontSize: "1.2rem" }}
        >
          Please enter a value for: <br />{" "}
          {errors.map((error, i) => (
            <Typography sx={{ color: "#666" }} key={i} variant="body1">
              {error}
            </Typography>
          ))}
        </Typography>
      );
      setOpen(true);
      return;
    }

    setFabricHeight(
      parseFloat(width) * 2 +
        parseFloat(width) * 2 +
        parseFloat(seamAllowance) * 2
      // .toFixed(1)
    );
    const x = parseFloat(width) / 2;
    const measureUpVal = nodepythagorean.findHypotenuse(x, x);
    setMeasureUp(measureUpVal);

    setFabricWidth(parseFloat(measureUpVal) * 2 + parseFloat(length));
    setShowResults(true);
  };

  const clearAndHide = (clearRefs) => {
    setShowResults(false);
    setWidth("");
    // height = "";
    setLength("");
    setSeamAllowance("");
    setFabricWidth(null);
    setFabricHeight(null);
    setMeasureUp(null);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Box sx={{ my: 4, flex: 1 }}>
            <Typography variant="h1" component="h1" gutterBottom>
              Dopp Kit Builder
            </Typography>
            <Typography variant="body1" gutterBottom>
              This app calculates the fabric needed to sew a square-ended dopp
              kit, and how much to measure up on the folded-up corners (diagram
              and full instructions coming soon).
            </Typography>
            <Typography variant="body1" gutterBottom>
              To complete this project, you'll need one piece of fabric (I like
              waxed canvas), and one zipper with one or two pulls.
            </Typography>
            <form noValidate autoComplete="off" onSubmit={calculate}>
              <Box sx={{ my: 3, display: "flex", gap: 2 }}>
                <TextField
                  data-lpignore="true"
                  type={"number"}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": { border: "1px solid #aaa" },
                    },
                    "& .MuiOutlinedInput-root:hover": {
                      "& > fieldset": { border: "1px solid #ccc" },
                    },
                    input: {
                      color: "white",
                      // background: "green",
                    },
                  }}
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  label="Width"
                />
                <TextField
                  data-lpignore="true"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": { border: "1px solid #aaa" },
                    },
                    "& .MuiOutlinedInput-root:hover": {
                      "& > fieldset": { border: "1px solid #ccc" },
                    },
                    input: {
                      color: "white",
                      // background: "green",
                    },
                  }}
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  label="Length"
                />
                <TextField
                  data-lpignore="true"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": { border: "1px solid #aaa" },
                    },
                    "& .MuiOutlinedInput-root:hover": {
                      "& > fieldset": { border: "1px solid #ccc" },
                    },
                    input: {
                      color: "white",
                      // background: "green",
                    },
                  }}
                  value={seamAllowance}
                  onChange={(e) => setSeamAllowance(e.target.value)}
                  label="Seam allowance"
                />
              </Box>
              <Button
                type="submit"
                variant="contained"
                sx={{ width: "100%", mb: 2 }}
              >
                Calculate
              </Button>
              <Button
                variant="outlined"
                onClick={() => clearAndHide(true)}
                sx={{ width: "100%" }}
              >
                Reset
              </Button>
            </form>
          </Box>
          {showResults === true && (
            <Results
              fabricHeight={fabricHeight}
              fabricWidth={fabricWidth}
              measureUp={measureUp}
            />
          )}

          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Hey..."}</DialogTitle>
            <DialogContent sx={{ minWidth: "400px" }}>
              <DialogContentText id="alert-dialog-description">
                {/* {errorMessage.map((message, index) => { */}
                {error && error}
                {/* })} */}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" onClick={handleClose} autoFocus>
                Fine
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
        <Footer />
      </Container>
    </>
  );
}
