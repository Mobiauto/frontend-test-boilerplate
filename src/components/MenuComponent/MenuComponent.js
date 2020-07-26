import React, {useState} from "react";
import Menu, {MenuList, MenuListItem, MenuListItemText} from '@material/react-menu';
import '@material/react-menu/dist/menu.css';

const MenuComponent = ({ onClick }) => {
  // const [open, setOpen] = useState(false);

  const menuOptions = [
    'Modelos',
    'Anos',
    'Valor',
  ];

  return (
    <Menu open={true}>
      <MenuList>
        {menuOptions.map((option, index) => (
              <MenuListItem id={option} key={index} onClick={(e) => onClick(e.target)}>
                <MenuListItemText primaryText={option} />
              </MenuListItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default MenuComponent;
