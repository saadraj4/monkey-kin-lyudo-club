
/** 
  All of the routes for the Soft UI Dashboard React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Soft UI Dashboard React layouts
import Dashboard from "layouts/dashboard";
import PlatformSetting from './layouts/platformSetting'
import AssetsManagement from "./layouts/assetsManagement";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import AnalyticsIcon from "examples/Icons/Analytics"; 
import Shop from "examples/Icons/Shop";
import Settings from "examples/Icons/Settings";
import User from "examples/Icons/User";
import Home from "examples/Icons/Home";
import MulUser from "examples/Icons/MulUser";
import NotificationIcon from "examples/Icons/Notification";
import GameRuleIcon from "examples/Icons/GameRules";
import Cube from "examples/Icons/Cube";
import UserManagement from "./layouts/userManagement"
import GameRules from "./layouts/gameRules"
import ShopComponent from "./layouts/shop"
import Notifications from "./layouts/notifications"
import SignoutIcon from "examples/Icons/Signout";
import Analytics from "./layouts/analytics";

const routes = [
  {
    type: "collapse",
    name: "Home",
    key: "dashboard",
    route: "/dashboard",
    icon: <Home size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "User Management",
    key: "User-Management",
    route: "/User-Management",
    icon: <MulUser size="12px" />,
    component: <UserManagement />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Assets",
    key: "Assets-Management",
    route: "/Assets-Management",
    icon: <Cube size="16px" />,
    component: <AssetsManagement />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Game Rules",
    key: "Game-Rules",
    route: "/Game-Rules",
    icon: <GameRuleIcon size="12px" />,
    component: <GameRules />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Shop",
    key: "shops",
    route: "/shops",
    icon: <Shop size="12px" />,
    component: <ShopComponent />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    route: "/notifications",
    icon: <NotificationIcon size="12px" />,
    component: <Notifications />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Analytics",
    key: "Analytics",
    route: "/Analytics",
    icon: <AnalyticsIcon size="12px" />,
    component: <Analytics />,
    noCollapse: true,
  },
  { 
    type: "collapse",
    name: "Settings",
    key: "Settings",
    route: "/Settings",
    icon: <Settings size="12px" />,
    component: <PlatformSetting />,
    noCollapse: true,
  },

  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <User size="12px" />,
    component: <Profile />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign Out",
    key: "sign-Out",
    route: "/authentication/sign-in",
    icon: <SignoutIcon size="12px" />,
    component: <SignIn />,
    noCollapse: true,
  },
  // {
  //   type: "collapse",
  //   name: "Sign Up",
  //   key: "sign-up",
  //   route: "/authentication/sign-up",
  //   icon: <SpaceShip size="12px" />,
  //   component: <SignUp />,
  //   noCollapse: true,
  // },
];

export default routes;
