import React from "react";
//import { List, ListItem, ListDivider } from "../src/";
import { List, ListDivider, ListItem } from "../src/List";
import { action } from "@storybook/addon-actions";
import plusCircle from "@iconify/icons-mdi/plus-circle";

export default { title: "List" };
export const list = () => (
  <div>
    <List spacing={3}>
      <ListItem onClick={action("Clicked IconButton")}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </ListItem>
      <ListDivider />
      <ListItem>
        Assumenda, quia temporibus eveniet a libero incidunt suscipit
      </ListItem>
      <ListDivider>
        <span>Test here</span>
      </ListDivider>
      <ListItem>
        Assumenda, quia temporibus eveniet a libero incidunt suscipit
      </ListItem>
      <ListDivider />
      <ListItem variation={"link"} href="#">
        Assumenda, quia temporibus eveniet a libero incidunt suscipit
      </ListItem>
      <ListDivider />
      <ListItem variation={"icon"} iconName="smileAltIcon">
        Assumenda, quia temporibus eveniet a libero incidunt suscipit
      </ListItem>
      <ListDivider />
      <ListItem variation={"icon"} iconify={plusCircle} iconColor="red">
        Assumenda, quia temporibus eveniet a libero incidunt suscipit
      </ListItem>
      <ListDivider />
      <ListItem
        variation={"icon-link"}
        iconify={plusCircle}
        iconColor="red"
        href="#"
      >
        Assumenda, quia temporibus eveniet a libero incidunt suscipit
      </ListItem>
      <ListDivider />
      <ListItem variation={"icon-link"} iconName="smileAltIcon" href="#">
        Assumenda, quia temporibus eveniet a libero incidunt suscipit
      </ListItem>
    </List>
  </div>
);

/*
export const list = () => (
  <div>
    <List spacing={3}>
      <ListItem onClick={action("Clicked IconButton")}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </ListItem>
      <ListItem>
        Assumenda, quia temporibus eveniet a libero incidunt suscipit
      </ListItem>
      <ListDivider />
    </List>
  </div>
);
*/
list.story = {
  name: "List",
};

/*
<ListItem active >
    
<BlendIcon iconify={homeIcon} />
Quidem, ipsam illum quis sed voluptatum quae eum fugit earum

</ListItem>
*/
