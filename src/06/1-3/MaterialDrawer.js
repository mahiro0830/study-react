import { Home, Business, ContactMail, Settings } from "@mui/icons-material";
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";

// 表示用のメニュー情報を準備
const menu = [
  { title: 'ホーム', href: 'home.html', icon: Home },
  { title: '会社概要', href: 'company.html', icon: Business },
  { title: '問い合わせ', href: 'contact.html', icon: ContactMail },
  { title: 'サービス', href: 'service.html', icon: Settings }
];

const MaterialDrawer = () => {
  // ドロワー開閉のためのフラグ
  const [show, setShow] = useState(false);
  // ボタンクリック時に呼び出させるハンドラー（showを反転）
  const handleDrawer = () => setShow(!show);

  return (
    <>
      <Button onClick={ handleDrawer }>ドロワー</Button>
      <Drawer anchor="left" open={ show }>
        <Box sx={{ height: '100vh' }} onClick={ handleDrawer }>
          <List>
            {/* 予め用意した配列をメニューとして展開 */}
            { menu.map((obj) => {
              const Icon = obj.icon;
              return (
                <ListItem key={ obj.title }>
                  <ListItemButton href={ obj.href }>
                    <ListItemIcon><Icon /></ListItemIcon>
                    <ListItemText primary={ obj.title } />
                  </ListItemButton>
                </ListItem>
              );
            }) }
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default MaterialDrawer;
