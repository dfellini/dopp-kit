import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Results({ fabricWidth, fabricHeight, measureUp }) {
  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 3,
        border: "1px solid",
        borderColor: "primary.main",
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontSize: "1.8rem" }}
        component="h2"
        gutterBottom
      >
        How to cut and measure your fabric
      </Typography>
      {/* <Typography variant="body1" gutterBottom>
        Fabric width: {fabricWidth?.toFixed(1)}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Fabric length: {fabricHeight?.toFixed(1)}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Measure up: {measureUp?.toFixed(1)}
      </Typography> */}

      <TableContainer sx={{ my: 3 }}>
        <Table sx={{ minWidth: 200 }} size="small" aria-label="results">
          {/* <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead> */}
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ color: "#bbb" }}>
                Fabric width
              </TableCell>
              <TableCell align="right" sx={{ color: "#bbb" }}>
                {fabricWidth.toFixed(1)}
              </TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell sx={{ color: "#bbb" }} component="th" scope="row">
                Fabric height
              </TableCell>
              <TableCell align="right" sx={{ color: "#bbb" }}>
                {fabricHeight.toFixed(1)}
              </TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell sx={{ color: "#bbb" }} component="th" scope="row">
                Measure up:
              </TableCell>
              <TableCell align="right" sx={{ color: "#bbb" }}>
                {measureUp.toFixed(1)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
