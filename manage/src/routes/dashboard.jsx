import Dashboard from "views/Dashboard/Dashboard";
import LaborProfile from "views/LaborProfile/LaborProfile";
import ChildProfile from "views/ChildProfile/ChildProfile";
import TableList from "views/TableList/TableList";


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "ภาพรวม",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  {
    path: "/laborlist",
    name: "รายชื่อแรงงาน",
    icon: "pe-7s-user",
    component: TableList
  },
  {
    path: "/childlist",
    name: "รายชื่อเด็ก",
    icon: "pe-7s-note2",
    component: TableList
  },
  {
    path: "/child",
    name: "ข้อมูลเด็ก",
    icon: "pe-7s-study",
    component: ChildProfile
  },
  {
    path: "/labor",
    name: "ข้อมูลแรงงาน",
    icon: "pe-7s-tools",
    component: LaborProfile
  },



  { redirect: true, path: "/", to: "/dashboard", name: "Dashboard" }
];

export default dashboardRoutes;
