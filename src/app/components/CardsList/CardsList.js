import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import { Box, Divider } from "@mui/material";
import styles from "./CardsList.module.scss";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export const CardsList = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", gap: "20px" , mt: "36px"}}>
      {[1, 2, 3].map((card) => (
        <Card key={card} sx={{ minWidth: 275, padding: "8px" }}>
          <CardContent>
            <Chip label="Status label" color={card % 2 !== 0 ? "secondary" : "primary"}/>
            <h2 className={styles.title}> H2 Title</h2>

            <h3 className={styles.subtitle}> H3 Title</h3>
            <p>
              Paragraphy text. A short 2 line description goes here. A short 2
              line description goes here.{" "}
            </p>
            <Box
              sx={{
                margin: "8px 0px 16px",
                display: "flex",
                gap: "20px",
              }}
              onClick={(e) => e.preventDefault()}
            >
              <Link href="#">Text Link</Link>
              <Link href="#">Text Link</Link>
            </Box>
            <h3> H3 Title</h3>
            <List dense>
              <ListItem>
                <ListItemText primary="Single-line item" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Single-line item" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Single-line item" />
              </ListItem>
            </List>
          </CardContent>
          <Divider />
          <CardActions>
            <Button onClick={() => {}} variant="contained" color="secondary" fullWidth>
              Secondary CTA
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};
