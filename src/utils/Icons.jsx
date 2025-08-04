import {
  Dashboard,
  PersonRounded,
  Business,
  PersonPinOutlined,
  MoreHorizSharp,
  Search,
  NotificationsNone,
  AccountCircle,
  AddCircleRounded,
  BusinessCenterRounded,
  EmailOutlined,
  InsertInvitationOutlined,
  MonetizationOnOutlined,
  PieChartOutlineOutlined,
  CreditCardRounded,
  SettingsOutlined,
  CardGiftcardRounded,
} from "@mui/icons-material";

export const sidebarIcons = [
  { icon: <Dashboard />, label: "Dashboard", active: false },
  { icon: <PersonRounded />, label: "Person", active: true },
  { icon: <Business />, label: "Companies", active: false },
  { icon: <PersonPinOutlined />, label: "Analytics", active: false },
  { icon: <BusinessCenterRounded />, label: "Business", active: false },
  { icon: <EmailOutlined />, label: "Mail", active: false },
  { icon: <InsertInvitationOutlined />, label: "Calendar", active: false },
];

export const sidebarSecondaryIcons = [
  { icon: <MonetizationOnOutlined />, label: "Money", active: false },
  { icon: <PieChartOutlineOutlined />, label: "Charts", active: false },
  { icon: <CreditCardRounded />, label: "Card", active: false },
  { icon: <SettingsOutlined />, label: "Settings", active: false },
  { icon: <MoreHorizSharp />, label: "More options", active: false },
];

export const topBarIcons = [
  { icon: <Search />, label: "Search", type: "search" },
  { icon: <CardGiftcardRounded />, label: "Gift", type: "action" },
  { icon: <NotificationsNone />, label: "Notifications", type: "action" },
  { icon: <EmailOutlined />, label: "Mail", type: "action" },
  { icon: <AccountCircle />, label: "Profile", type: "action" },
];
