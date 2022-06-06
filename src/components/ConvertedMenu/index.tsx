import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { FC } from "react";
import { arrOptions } from "../../consts/variables";
import { IParsedData } from "../../types/parser.types";
import { getCalculateValue } from "../../utils/switchParser";
import MenuHeader from "../MenuHeader";
import MenuItem from "../MenuItem";

export const useStyles = makeStyles(() => ({
  wrapper: {
    width: "100%",
    padding: "8px 16px",
    marginTop: "16px",
  },
}));

interface IConvertedMenuProps {
  parsedData: IParsedData;
}

const ConvertedMenu: FC<IConvertedMenuProps> = ({ parsedData }) => {
  const classes = useStyles();
  const calculationParams = arrOptions.map((item) => item.split(" ")[0]);

  return (
    <Box className={classes.wrapper}>
      <MenuHeader itemsMenu={["Register", "Values"]} />
      {arrOptions.map((option, idx) => (
        <MenuItem
          key={idx}
          asset={[
            option,
            getCalculateValue(
              calculationParams[idx],
              parsedData.data
            ).toString(),
          ]}
        />
      ))}
    </Box>
  );
};

export default ConvertedMenu;
