import styled from "styled-components";
import {
  border,
  space,
  color,
  background,
  shadow,
  typography,
  flexbox,
} from "styled-system";
import { Grid, Cell } from "styled-css-grid";

const CssGrid = styled(Grid)`
  ${border};
  ${space};
  ${color};
  ${background};
  ${shadow};
`;
const CssCell = styled(Cell)`
  ${border};
  ${space};
  ${color};
  ${background};
  ${shadow};
  ${typography};
  ${flexbox};
`;
CssGrid.displayName = "CssGrid";
CssCell.displayName = "CssCell";

//export { Grid as CssGrid, Cell as CssCell } from "styled-css-grid";

export { CssGrid, CssCell };
