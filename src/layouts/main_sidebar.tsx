import {PrintTwoTone, SettingsTwoTone} from '@mui/icons-material'
import {Drawer, ListItem, ListItemButton, ListItemIcon, SxProps, useTheme} from '@mui/material'
import {useTitlebarHeight} from '@/hooks/use_size'
import {FC} from 'react'
import useNavStore from '@/store/nav_store'
import {cn} from '@/utils/tailwind'

export const MainSidebar: FC = () => {
  // props
  const theme = useTheme()
  const titleBarHeight = useTitlebarHeight()

  const {getActiveKey, setActiveKey} = useNavStore()
  const activeKey = getActiveKey()

  // sidebar items
  const createSideBarStyle = (index: number) => ({
    color: activeKey === index ? theme.palette.primary.light : '',
  })

  const items = [
    {
      text: '옵션',
      icon: <SettingsTwoTone style={createSideBarStyle(0)} />,
    },
    {
      text: '인쇄',
      icon: <PrintTwoTone style={createSideBarStyle(1)} />,
    },
  ]

  // sidebar styles
  const drawerStyle: SxProps = {
    width: theme.drawerWidth,
    flexShrink: 0,
    margin: 0,
  }

  const itemStyle: SxProps = {
    width: theme.drawerWidth,
  }

  // sidebar handlers
  const createChangeActiveKey = (key: number) => () => setActiveKey(key)

  return (
    <aside>
      <Drawer variant="persistent" anchor="left" open sx={drawerStyle}>
        <div style={{height: titleBarHeight}} />
        {items.map((item, index) => (
          <ListItem className={cn(activeKey === index && 'bg-gray-200')} key={index} disablePadding sx={itemStyle}>
            <ListItemButton onClick={createChangeActiveKey(index)}>
              <ListItemIcon className="min-w-0">{item.icon}</ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </Drawer>
    </aside>
  )
}
